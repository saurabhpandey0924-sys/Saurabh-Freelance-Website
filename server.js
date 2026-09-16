const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.txt': 'text/plain; charset=utf-8'
};

function createServer(port) {
  const server = http.createServer((req, res) => {
    // Basic CORS & caching headers for local development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    const reqUrl = new URL(req.url, `http://localhost:${port}`);
    let decodedPath = decodeURIComponent(reqUrl.pathname);

    // Default to index.html
    if (decodedPath === '/' || decodedPath === '') {
      decodedPath = '/index.html';
    }

    const safePath = path.normalize(decodedPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(ROOT_DIR, safePath);

    // Prevent directory traversal outside root
    if (!filePath.startsWith(ROOT_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('403 Forbidden');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        // If directory requested without trailing slash, try index.html inside it
        if (stats && stats.isDirectory()) {
          const indexFilePath = path.join(filePath, 'index.html');
          if (fs.existsSync(indexFilePath)) {
            serveFile(indexFilePath, res);
            return;
          }
        }
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <!DOCTYPE html>
          <html>
            <head><title>404 Not Found</title></head>
            <body style="font-family: system-ui, sans-serif; text-align: center; padding: 50px; background: #0b0f17; color: #fff;">
              <h1>404 - Not Found</h1>
              <p>The requested URL <code>${reqUrl.pathname}</code> was not found.</p>
              <a href="/" style="color: #6366f1;">Return to Home</a>
            </body>
          </html>
        `);
        return;
      }

      serveFile(filePath, res);
    });
  });

  function serveFile(targetPath, res) {
    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const stream = fs.createReadStream(targetPath);
    res.writeHead(200, { 'Content-Type': contentType });
    stream.pipe(res);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Internal Server Error');
      }
    });
  }

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying port ${port + 1}...`);
      createServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(port, () => {
    console.log('\n==================================================');
    console.log('  🚀 Saurabh Freelance Website Development Server');
    console.log('==================================================');
    console.log(`  Local URL:   http://localhost:${port}`);
    console.log('  Serving:     ' + ROOT_DIR);
    console.log('  Press Ctrl+C to stop the server');
    console.log('==================================================\n');
  });
}

createServer(DEFAULT_PORT);
