const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_FILE = path.join(ROOT, 'enrollments.json');
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };

function sendJson(response, status, payload) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = '';
    request.on('data', chunk => {
      body += chunk;
      if (body.length > 100000) reject(new Error('Request too large'));
    });
    request.on('end', () => resolve(body));
    request.on('error', reject);
  });
}

function saveEnrollment(enrollment) {
  let records = [];
  if (fs.existsSync(DATA_FILE)) {
    try { records = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); } catch { records = []; }
  }
  records.push({ id: Date.now().toString(), submittedAt: new Date().toISOString(), ...enrollment });
  fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2));
}

function serveFile(response, pathname) {
  const requestedPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.resolve(ROOT, `.${requestedPath}`);
  if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Page not found');
    return;
  }
  response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(response);
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method === 'GET' && requestUrl.pathname === '/api/health') {
    sendJson(response, 200, { ok: true, service: 'FutureLearn enrollment API' });
    return;
  }

  if (request.method === 'POST' && requestUrl.pathname === '/api/enroll') {
    try {
      const enrollment = JSON.parse(await readBody(request));
      const required = ['studentName', 'guardianName', 'email', 'phone', 'class', 'subjects', 'mode'];
      const missing = required.find(field => !enrollment[field] || (Array.isArray(enrollment[field]) && enrollment[field].length === 0));
      if (missing) {
        sendJson(response, 400, { ok: false, message: `Missing required field: ${missing}` });
        return;
      }
      saveEnrollment(enrollment);
      sendJson(response, 201, { ok: true, message: 'Enrollment request saved successfully.' });
    } catch {
      sendJson(response, 400, { ok: false, message: 'Please send valid enrollment details.' });
    }
    return;
  }

  if (request.method === 'GET') {
    serveFile(response, requestUrl.pathname);
    return;
  }

  response.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Method not allowed');
});

server.listen(PORT, () => console.log(`FutureLearn is running at http://localhost:${PORT}`));
