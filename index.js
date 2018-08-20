var http = require('http');

//create a server object:

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

http.createServer(function(req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(port); //the server object listens on port 8080