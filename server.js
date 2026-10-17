/**
 * ============================================================================
 * Application: FreshWash Laundry - Native Node.js Server
 * Description: Clean, beginner-friendly HTTP web server created with
 *              built-in Node.js modules: 'http', 'fs', and 'path'.
 *              No external dependencies or frameworks required.
 * ============================================================================
 */

// 1. Import core Node.js modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// 2. Define Server Configuration
const PORT = 3000;
const HOST = 'localhost';

/**
 * Route Configuration Map
 * Maps URL paths to corresponding HTML filenames inside the 'public' directory.
 */
const routeMap = {
  '/': 'home.html',
  '/home': 'home.html',
  '/about': 'about.html',
  '/contact': 'contact.html'
};

/**
 * Helper function to locate HTML files.
 * Checks the 'public' subfolder first, with fallback to root folder.
 */
function resolveFilePath(fileName) {
  const publicPath = path.join(__dirname, 'public', fileName);
  if (fs.existsSync(publicPath)) {
    return publicPath;
  }
  return path.join(__dirname, fileName);
}

// 3. Create the HTTP Server
const server = http.createServer((req, res) => {
  // Normalize the incoming URL (ignore query parameters and trailing slashes)
  const normalizedUrl = req.url.split('?')[0].replace(/\/+$/, '') || '/';

  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} request received for: ${req.url} -> Normalized: ${normalizedUrl}`);

  // Determine target file and HTTP status code
  let targetFileName = routeMap[normalizedUrl];
  let statusCode = 200;

  // Fallback to 404 if the route is not defined
  if (!targetFileName) {
    targetFileName = '404.html';
    statusCode = 404;
  }

  // Construct absolute file path safely
  const filePath = resolveFilePath(targetFileName);

  // 4. Read the HTML file asynchronously
  fs.readFile(filePath, 'utf8', (err, fileContent) => {
    // Graceful error handling for missing files or filesystem failures (Status 500)
    if (err) {
      console.error(`[500 Server Error] Failed to read file '${filePath}':`, err.message);

      res.writeHead(500, {
        'Content-Type': 'text/html; charset=UTF-8'
      });

      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>500 - Internal Server Error</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; text-align: center; padding: 4rem; background: #0f172a; color: #f8fafc; }
            h1 { color: #f43f5e; font-size: 2.5rem; margin-bottom: 1rem; }
            p { font-size: 1.1rem; color: #94a3b8; }
            code { background: #1e293b; padding: 0.2rem 0.5rem; border-radius: 4px; color: #38bdf8; }
          </style>
        </head>
        <body>
          <h1>500 Internal Server Error</h1>
          <p>We encountered an error loading the requested resource: <code>${targetFileName}</code>.</p>
          <p>Please check the server console for error logs.</p>
        </body>
        </html>
      `);
      return;
    }

    // 5. Send successful or 404 response with headers
    res.writeHead(statusCode, {
      'Content-Type': 'text/html; charset=UTF-8',
      'X-Content-Type-Options': 'nosniff'
    });

    res.end(fileContent);
  });
});

// 6. Start listening on the specified port
server.listen(PORT, HOST, () => {
  console.log(`\n======================================================`);
  console.log(`🫧  FreshWash Laundry Server running successfully!`);
  console.log(`📍  URL: http://${HOST}:${PORT}`);
  console.log(`------------------------------------------------------`);
  console.log(`👉  Home page:    http://${HOST}:${PORT}/`);
  console.log(`👉  About page:   http://${HOST}:${PORT}/about`);
  console.log(`👉  Contact page: http://${HOST}:${PORT}/contact`);
  console.log(`👉  404 test:     http://${HOST}:${PORT}/random-route`);
  console.log(`======================================================\n`);
});
