/*
Name : PunyCode module
Description: The punycode module in Node.js provides a way to encode and decode Unicode strings into the ASCII-compatible encoding called Punycode. Punycode is used for internationalized domain names (IDNs) in URLs and email addresses, to represent non-ASCII characters with ASCII characters.

*/

const punycode = require('punycode');

const str1 = 'mañana';
const str2 = 'mañana';

const punycodeStr1 = punycode.toASCII(str1);
const punycodeStr2 = punycode.toASCII(str2);

console.log(punycodeStr1 === punycodeStr2); // Output: true
