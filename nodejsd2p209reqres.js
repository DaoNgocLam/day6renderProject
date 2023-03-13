// create a server --> such as: server.js
var http = require('http'),
    url = require('url'),
    server = http.createServer();       // create a server based on the given http

// set a request on the given server
server.on('request', function (req, res) {
    //...
    // //no using of url
    // console.log('-- incoming request --');      // feedback on the event if localhost at the below listen port is ping requested

    //using url
    console.log('-- incoming request --', req.url);      // feedback on the event if localhost at the below listen port is ping requested

    var incomingUrl = url.parse(req.url);       // using a variable to parse the url
    console.log(incomingUrl);       // console log with the given variable


    // //normal res.writeHead and res.end
    // res.writeHead(200,{'Content-Type': 'text/plain'});      // the feedback on the top of requested site
    // res.end('Hello World! I am Dao Ngoc Lam.');            // the feedback on the end of requested site


    //conditional response feedback by the the browsing path, such as: 'localhost:9000/hello', or 'localhost:9000/goodbye' or others
    if (url.path === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });           // just the string feedback not html-typed feedback
        res.end('Hello World for the 1st time!');
    } else if ((url.path === '/goodbye')) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });           // just the string feedback not html-typed feedback
        res.end('Goodbye World for a while!');

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });           // just the string feedback not html-typed feedback
        res.end('Resource is not found!');
    }

});

server.listen(9000);        //if the localhost:9000 is added to the browser bar --> the console log shows: --incoming request--

