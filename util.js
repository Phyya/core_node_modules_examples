/*
Name : UTIL module
Description: The util module in Node.js provides a set of utility functions that are useful for performing various tasks related to debugging, formatting, and error handling. 

*/

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

readFile('output.txt', 'utf8')
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.error(err);
	});
