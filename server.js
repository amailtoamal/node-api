// var app = require('http');
// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// app.listen(server_port, server_ip_address, function () {

//     console.log( "Listening on " + server_ip_address + ", server_port " + server_port  );

// });
// // content of index.js
const http = require('http');
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
