//const fs = require('fs');

// console.log('Start of script!');

// // Ensure the path to data.txt is correct
// fs.readFile('./modules/data.txt', 'utf-8' ,(err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File contents:', data.toString());
// });

// console.log('End of script!');

// const fs = require('fs').promises;

// fs.readFile('./modules/data.txt', 'utf-8')
//     .then((data) => {
//         console.log('File contents:', data);
//     })
//     .catch((err) => {
//         console.error('Error reading file:', err);
// });


const fs = require('fs');

// fs.writeFileSync('./modules/data.txt', ' Hello, Rensith!', {flag: "a"} , (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log('File written successfully!');
//     }
// });


// fs.appendFile('./modules/data.txt', ' Hello, Rensith!', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//     } else {
//         console.log('File appended successfully!');
//     }
// });

fs.rename('./modules/data.txt', './modules/data1.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
    } else {
        console.log('File renamed successfully!');
    }
});