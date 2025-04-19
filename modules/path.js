const path = require('path');

const testPath = 'C:/Users/Rensith/OneDrive/Documents';

// console.log(__filename) ;

// console.log(__dirname) ;

// console.log(path.basename(testPath)); // Get the base name of the current file

// console.log(path.extname(__filename)); // Get the extension name of the current file

// console.log(path.parse(__filename)); // Get the path object of the current file

// console.log(path.isAbsolute(testPath)); // Check if the path is absolute

console.log(path.join(__dirname, 'test.txt')); // Join the current directory with a file name