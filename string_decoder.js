/*
Name : String Decoder module
Description: The string_decoder module in Node.js provides a way to decode a stream of binary data into strings. It's particularly useful when working with data that contains multi-byte character sets, such as UTF-8. The module provides a StringDecoder class that can be used to create an object that can decode a stream of binary data.

*/

const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const buffer = Buffer.from([0xc3]);

console.log(decoder.write(buffer)); // outputs: ""
