const punycode = require('punycode');

const str1 = 'mañana';
const str2 = 'mañana';

const punycodeStr1 = punycode.toASCII(str1);
const punycodeStr2 = punycode.toASCII(str2);

console.log(punycodeStr1 === punycodeStr2); // Output: true
