import {describe, it} from 'mocha';
import {assert} from 'chai';
import runner from '../src/index';

const customTask = () => Promise.resolve();
const otherTask = () => Promise.resolve();
const errorTask = () => Promise.reject('error task');

class Logger {
	info() {}
	error() {}
}

const logger = new Logger();

describe('Runner', () => {
	describe('No tasks', () => {
		it('Can\'t run with empty task list', () => (
			runner([], {logger})
				.then(assert.fail)
				.catch(assert.isOk)
		));
	});

	describe('Single task', () => {
		it('Can run with custom task', () => (
			runner([customTask], {logger}).then(code => assert.equal(code, 0))
		));

		it('Correct handle failed task', () => (
			runner([errorTask], {logger})
				.then(assert.fail)
				.catch(assert.isOk)
		));
	});

	describe('One task', () => {
		it('Run one task by name', () => (
			runner([errorTask, otherTask], {taskName: 'otherTask', logger})
				.then(code => assert.equal(code, 0))
		));

		it('Return error if taskName not exists', () => (
			runner([customTask, otherTask], {taskName: 'not existing name', logger})
				.then(assert.fail)
				.catch(assert.isOk)
		));
	});

	describe('Many tasks', () => {
		it('Can run with two tasks', () => (
			runner([customTask, otherTask], {logger}).then(code => assert.equal(code, 0))
		));

		it('Correct handle failed task', () => (
			runner([customTask, errorTask], {logger})
				.then(assert.fail)
				.catch(assert.isOk)
		));
	});
});
