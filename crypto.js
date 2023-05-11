/*
Name : Crypto module
Description: The crypto module in Node.js provides cryptographic functionality that includes a set of cryptographic primitives, such as hash functions, encryption and decryption algorithms, digital signatures, and pseudo-random number generators.

*/

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto
	.createHmac('sha256', secret)
	.update('hello world')
	.digest('hex');

console.log(hash);
