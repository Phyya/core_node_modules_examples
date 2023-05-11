/*
Name : Child Process module
Description: The child_process module in Node.js provides a way to spawn child processes and interact with them. Child processes are separate instances of the Node.js process that can run in parallel with the parent process, allowing you to perform tasks asynchronously or in parallel.

*/

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
