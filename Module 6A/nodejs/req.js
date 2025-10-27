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
