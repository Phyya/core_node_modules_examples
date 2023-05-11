/*
Name : QueryString module
Description: The querystring module in Node.js provides a way to parse and stringify query strings, which are typically used in URLs to pass data between the client and server.

*/

const querystring = require('querystring');

const queryString = 'name=John&age=30&city=New+York';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery.name); // Output: John
console.log(parsedQuery.age); // Output: 30
console.log(parsedQuery.city); // Output: New York
