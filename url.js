const url = require('url');

const urlString = 'https://www.example.com/path/?query=string#hash';
const urlObject = url.parse(urlString);

console.log(urlObject);
