
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/greet') {
    const name = parsedUrl.query.name || 'Guest';
    res.end(`Hello ${name}! Welcome to my server.`);
  } else {
    res.end('Welcome to Home Page');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
