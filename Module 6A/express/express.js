

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world from express");
});


app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Catch all other routes
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});
app.listen(port, () => {
    console.log(`Server is starting at port:${port}`);
});

