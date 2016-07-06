import {describe, it} from 'mocha';
import {assert} from 'chai';
import runner from '../src/index';

describe('Runner', () => {
	it('Can run', () => (
		runner([]).then(code => assert.equal(code, 0))
	));
});
