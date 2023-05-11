/*
Name : Async Hook module
Description: 
The async_hooks module in Node.js provides a way to track the lifetime of asynchronous resources and monitor their execution contexts across asynchronous boundaries in a Node.js application. This module allows you to create hooks that get triggered when certain asynchronous events occur, such as when a new asynchronous resource is created or when an existing resource is destroyed.

*/

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
