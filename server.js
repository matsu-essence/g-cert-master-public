const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const baseDir = __dirname;

const server = http.createServer((req, res) => {
  const safeSuffix = path.normalize(req.url).replace(/^\/+/, '');
  const fileLoc = path.join(baseDir, safeSuffix || 'index.html');

  fs.readFile(fileLoc, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }

    const ext = path.extname(fileLoc).toLowerCase();
    const contentType = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon'
    }[ext] || 'application/octet-stream';

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
