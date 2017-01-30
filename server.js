//include http module, part of core
var http= require("http");
var server = http.createServer((req, res)=>{
	
	res.writeHead(200,{'content-type':'text/html'});
	res.end("<h1>hello fucker, this is your node server</h1>");
})

var port = 8000
console.log("server listening on port " +port+ " for connections...");
server.listen(port);