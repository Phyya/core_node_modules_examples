const { spawn } = require('child_process');

const child = spawn('ls', ['-lh', '/usr']);

child.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
	console.error(`stderr: ${data}`);
});

child.on('error', (err) => {
	console.error(`error: ${err}`);
});

child.on('close', (code) => {
	console.log(`child process exited with code ${code}`);
});
