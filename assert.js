const assert = require('assert');

function throwError() {
	throw new Error('something went wrong');
}

assert.throws(throwError, Error, 'function did not throw expected error');
