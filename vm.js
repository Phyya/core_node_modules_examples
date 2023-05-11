const vm = require('vm');

const context = { x: 0 };
const code = 'x += 2; console.log(x);';

vm.createContext(context);
vm.runInContext(code, context);
