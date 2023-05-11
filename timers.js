/*
Name : Timers module
Description: The timers module in Node.js provides a way to schedule the execution of a function after a certain amount of time has passed. It contains two main functions: setTimeout() and setInterval().

*/

const intervalId = setInterval(() => {
	console.log('Interval expired');
}, 500);
