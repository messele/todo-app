const datastore = require( "./datastore");
const HTTP = require("http");

const hostname = "127.0.0.1";
const port = "3001";

const server = HTTP.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.end(JSON.stringify(datastore.todos()));
  })

  server.listen(port, hostname, () => {
    console.log(datastore.todos())
    console.log(`Server running at http://${hostname}:${port}/`);
  });