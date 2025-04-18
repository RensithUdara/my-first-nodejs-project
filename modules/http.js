const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./modules/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading file\n');
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
