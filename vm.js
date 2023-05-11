/*
Name : VM module
Description: The VM (Virtual Machine) module in Node.js provides a way to run JavaScript code in a secure and isolated environment. It allows you to create a sandboxed environment where you can execute untrusted code safely. 

*/

const vm = require('vm');

const context = { x: 0 };
const code = 'x += 2; console.log(x);';

vm.createContext(context);
vm.runInContext(code, context);
