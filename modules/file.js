const fs = require('fs');

// Ensure the path to data.txt is correct
fs.readFile('./modules/data.txt', 'utf-8' ,(err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data.toString());
});
