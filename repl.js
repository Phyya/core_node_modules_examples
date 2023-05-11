/*
Name : REPL module
Description: The REPL (Read-Eval-Print Loop) module in Node.js provides a way to interactively run JavaScript code in a console. It provides a shell-like interface to run code snippets, evaluate expressions, and inspect variables in real-time. The REPL module can be used to test code and debug applications, as well as to quickly prototype new features and ideas. It comes with features like tab completion, command history, and supports multiline input. Additionally, the REPL module can be easily extended with custom commands and plugins to enhance its functionality.

*/

const repl = require('repl');

repl.start({
	prompt: '> ',
	eval: (cmd, context, filename, callback) => {
		let result;
		try {
			result = eval(cmd);
		} catch (err) {
			console.error(err);
		}
		callback(null, result);
	},
});
