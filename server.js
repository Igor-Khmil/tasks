const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDirectory = process.cwd();
  const serverFilename = path.basename(__filename);

  const html = `
    <html>
      <head>
        <title>System Information</title>
      </head>
      <body>
        <h1>System Information</h1>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>OS Type:</strong> ${osType}</p>
        <p><strong>Uptime (minutes):</strong> ${uptime}</p>
        <p><strong>Current Directory:</strong> ${currentDirectory}</p>
        <p><strong>Server Filename:</strong> ${serverFilename}</p>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(5000, 'localhost', () => {
  console.log('Server running at http://localhost:5000/');
});