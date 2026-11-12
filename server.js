const http = require('http');
const fs = require('fs');
const path = require('path');

process.on('uncaughtException', (err) => {
  console.error('[UNCAUGHT EXCEPTION]', err.message);
});
process.on('unhandledRejection', (reason) => {
  console.error('[UNHANDLED REJECTION]', reason);
});

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
  '.txt': 'text/plain; charset=utf-8',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

function createServer(port) {
  const server = http.createServer((req, res) => {
    // Basic CORS & caching headers for local development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    const reqUrl = new URL(req.url, `http://localhost:${port}`);

    // Dynamic API to query or update Division 05 background video
    if (req.method === 'GET' && reqUrl.pathname === '/api/get-division-05') {
      try {
        const indexPath = path.join(ROOT_DIR, 'index.html');
        const html = fs.readFileSync(indexPath, 'utf-8');
        const match = html.match(/id="division-05"[\s\S]*?<source src="([^"]+)"/);
        const currentVideo = match ? match[1] : 'assets/videos/api-sample-04-master-reel.mp4';
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, activeVideo: currentVideo }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
      return;
    }

    if (req.method === 'POST' && reqUrl.pathname === '/api/set-division-05') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const targetVideo = payload.video;
          if (!targetVideo || !targetVideo.startsWith('assets/videos/')) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Invalid video path' }));
            return;
          }
          const indexPath = path.join(ROOT_DIR, 'index.html');
          let html = fs.readFileSync(indexPath, 'utf-8');
          const regex = /(<section class="qh-slide" id="division-05">[\s\S]*?<source src=")[^"]+("[\s\S]*?<\/section>)/;
          if (regex.test(html)) {
            html = html.replace(regex, `$1${targetVideo}$2`);
            fs.writeFileSync(indexPath, html, 'utf-8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, activeVideo: targetVideo }));
          } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Division 05 section not found' }));
          }
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
      return;
    }

    let decodedPath = decodeURIComponent(reqUrl.pathname);

    // Redirect legacy services directory requests to home & services showcase
    if (decodedPath === '/services' || decodedPath === '/services.html') {
      res.writeHead(301, { Location: '/' });
      res.end();
      return;
    }

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
        // Try appending .html for clean URLs (e.g. /services -> /services.html)
        const htmlFilePath = filePath + '.html';
        if (fs.existsSync(htmlFilePath) && fs.statSync(htmlFilePath).isFile()) {
          serveFile(htmlFilePath, res, req);
          return;
        }

        // If directory requested without trailing slash, try index.html inside it
        if (stats && stats.isDirectory()) {
          const indexFilePath = path.join(filePath, 'index.html');
          if (fs.existsSync(indexFilePath)) {
            serveFile(indexFilePath, res, req);
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

      serveFile(filePath, res, req);
    });
  });

  function serveFile(targetPath, res, req) {
    const ext = path.extname(targetPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const stat = fs.statSync(targetPath);
    const fileSize = stat.size;
    const range = req && req.headers && req.headers.range;

    if (range && (ext === '.mp4' || ext === '.webm')) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      let end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      // RFC 7233 Section 4.4: If start is out of range, return 416 Range Not Satisfiable
      if (isNaN(start) || start >= fileSize || start < 0 || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${fileSize}`,
          'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end('416 Range Not Satisfiable');
        return;
      }

      if (end >= fileSize) {
        end = fileSize - 1;
      }

      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(targetPath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType
      });
      file.on('error', (streamErr) => {
        console.error('[STREAM ERROR]', streamErr.message);
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('500 Internal Server Error');
        }
      });
      file.pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes'
    });
    const stream = fs.createReadStream(targetPath);
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
    console.log('  🚀 QUBITHRS TECHNOLOGY SOLUTIONS Development Server');
    console.log('==================================================');
    console.log(`  Local URL:   http://localhost:${port}`);
    console.log('  Serving:     ' + ROOT_DIR);
    console.log('  Press Ctrl+C to stop the server');
    console.log('==================================================\n');
  });
}

createServer(DEFAULT_PORT);
