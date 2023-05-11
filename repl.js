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
