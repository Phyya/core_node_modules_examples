/*
Name : Buffer module
Description: The Buffer module in Node.js provides a way to manipulate binary data, which is data that consists of sequences of bytes. Buffers are like arrays of integers, but each element of a buffer represents a single byte of binary data, rather than a number.

You can use the Buffer module to create new buffers, copy buffers, concatenate buffers, and perform various operations on buffers.

*/

const buffer = Buffer.from('hello world');

console.log(buffer.length);
