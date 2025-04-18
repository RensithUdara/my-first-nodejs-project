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

const fs = require('fs').promises;

fs.readFile('./modules/data.txt', 'utf-8')
    .then((data) => {
        console.log('File contents:', data);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
});