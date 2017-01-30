var http = require('http');
var fs = require('fs');

function renderWikiPage(req, res){
	res.writeHead(200,{'content-type':'text/html'})
	var theWikiPageHTML = fs.readFileSync('wikiPage.html')
	res.end(theWikiPageHTML);
};
function renderErrorPage(req, res){
	res.writeHead(404,{'content-type':'text/html'})
	var theErrorPageHTML = fs.readFileSync('errorPage.html')
	res.end(theErrorPageHTML);
}
function renderNeinPage(req, res){
	res.writeHead(403,{'content-type':'text/html'})
	var theNeinPageHTML = fs.readFileSync('neinPage.html')
	res.end(theNeinPageHTML);
}
var server = http.createServer((req, res)=>{
	console.log("someone connected with the server");
	if(req.url === "/"){
		renderWikiPage(req, res);
	}else if(req.url ==="/nein"){
		renderNeinPage(req, res);
	}else{
		renderErrorPage(req, res);
	}

});

server.listen(8002);
console.log("server is listening for HTTP traffic at port 8002...")