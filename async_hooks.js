const async_hooks = require('async_hooks');

const hooks = {
	init(asyncId, type, triggerAsyncId, resource) {
		console.log(
			`init: asyncId=${asyncId} type=${type} triggerAsyncId=${triggerAsyncId}`
		);
	},
};

const asyncHook = async_hooks.createHook(hooks);
asyncHook.enable();
