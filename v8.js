/*
Name : V8 module
Description: The V8 module in Node.js provides access to the V8 JavaScript engine's API. It enables Node.js to execute JavaScript code and interact with the underlying operating system. The V8 engine is developed by Google and is used in several projects, including Node.js, Chrome, and Electron. The V8 module in Node.js provides functionality to compile and execute JavaScript code, access runtime performance information, and manage memory usage. It also includes utilities for profiling, debugging, and optimizing JavaScript code. The V8 module is a core module in Node.js and is automatically included when you install Node.js. 

*/

const v8 = require('v8');

v8.setFlagsFromString('--max-old-space-size=8192');

console.log(v8.getHeapStatistics());
