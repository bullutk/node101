//include http(part of core)
var http = require("http");
// include fs module, fs=file system, part of core
var fs = require("fs");

function renderHomePage(req, res){
	res.writeHead(200,{'content-type':'text/html'})
	var theHomePageHTML = fs.readFileSync('homePage.html')
	res.end(theHomePageHTML);
		//someone came to the hgomepage, give them content!
	// res.write('<h1>this is the home page</h1>');
	// res.write('<p>im somewhat proud of my node routing</p>');
	// res.write('<p>i made a page in node</p>');
	// res.end

}
// set up a http server and store it in the var
// the callback will run anytime soneone hots the port the 
//server is listening to 
var server = http.createServer((req, res)=>{
	console.log("someone connected with the server");
	//the url requested is in the req object url property. 
	//this function is run every time someone makes an http request to this server
	console.log(req.url);
	if(req.url ==='/'){
		// cut and put ina function called renderHomePage
		renderHomePage(req, res);
	}else if(req.url === '/logo.png'){
		var img = fs.readFileSync('logo.png');
		res.writeHead(200, {'content-type': 'image/png'});
		res.end(img);
	}else{
		res.writeHead(404,{'content-type':'text/html'})
		res.end('Sorry, this page does not exist');
	}
	// res.end will close the browser and let the browser know what we are doing
})

server.listen(8001);
console.log("server is listening for HTTP traffic at port 8001...")