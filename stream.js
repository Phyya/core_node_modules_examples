/*
Name : Stream module
Description: The Stream module in Node.js provides an implementation of streams, which are a powerful abstraction for handling data in a continuous manner. Streams are used to read or write data in chunks rather than as a whole, which allows for better memory efficiency and faster processing of data. The Stream module provides several built-in classes for handling different types of streams, including Readable, Writable, Duplex, and Transform streams.

*/

const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, world!');
