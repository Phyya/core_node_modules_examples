const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const buffer = Buffer.from([0xc3]);

console.log(decoder.write(buffer)); // outputs: ""
