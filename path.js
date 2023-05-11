/*
Name : Path module
Description: The path module provides a way to work with file paths. It is used to construct file paths and perform operations on them, such as resolving relative paths, joining multiple paths, and extracting the directory or file name from a path.

*/
const path = require('path');

const absolutePath = path.resolve('path.js');
console.log(absolutePath); // Output: /Users/username/project/index.js
