

const http = require('http');

const server = http.createServer((req,res) => {
  console.log(`Request Recived.Method:${req.method}, Url:${req.url}`);

  res.writeHead(200, {'Content-Type':'text/plain'});

  res.end('Hello Kittu! This is your HTTP server.');

});

server.listen(3000, () => {
  console.log("Server is starting at http://localhost:3000");
});


const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (req) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on("data", (chunk) => {
    console.log("Response Body:", chunk.toString());
  });
});


req.on("error", (err) => {
  console.error("Error:", err.message);
});

req.end();

