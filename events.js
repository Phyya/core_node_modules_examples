/*
Name : Events module
Description: The events module provides an implementation of the observer pattern, allowing you to emit and handle custom events. The module defines an EventEmitter class that serves as the base class for objects that can emit events.

*/

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function eventHandler() {
	console.log('Event occurred');
}

myEmitter.on('event', eventHandler);

myEmitter.emit('event'); // Logs 'Event occurred'

myEmitter.removeListener('event', eventHandler);

myEmitter.emit('event'); // No output
