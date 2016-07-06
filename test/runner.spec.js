import {describe, it} from 'mocha';
import {assert} from 'chai';
import runner from '../src/index';

const customTask = () => Promise.resolve();
const errorTask = () => Promise.reject('error task');

class Logger {
	info() {}
	error() {}
}

const logger = new Logger();

describe('Runner', () => {
	it('Can run with empty task list', () => (
		runner([], logger).then(code => assert.equal(code, 0))
	));

	it('Can run with custom task', () => (
		runner([customTask], logger).then(code => assert.equal(code, 0))
	));

	it('Can run with custom task', () => (
		runner([errorTask], logger)
			.then(assert.fail)
			.catch(assert.isOk)
	));
});
