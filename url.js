/*
Name : URL module
Description: The url module in Node.js provides utilities for URL parsing and formatting. It provides methods for parsing URL strings into their component parts (such as protocol, host, pathname, query string, etc.), as well as formatting these components back into a URL string.

*/

const url = require('url');

const urlString = 'https://www.example.com/path/?query=string#hash';
const urlObject = url.parse(urlString);

console.log(urlObject);
