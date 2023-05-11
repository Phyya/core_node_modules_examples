const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function eventHandler() {
	console.log('Event occurred');
}

myEmitter.on('event', eventHandler);

myEmitter.emit('event'); // Logs 'Event occurred'

myEmitter.removeListener('event', eventHandler);

myEmitter.emit('event'); // No output
