//require/import the http module
var http = require('http');
var url = require('url');
//listen for a port
var port = 8080;

//function which handles request and send response
function handleRequest(request, response) {
	//response.end(console.log('It works! Path Hit: ' + request.url));
	//get pieces of the url
	var url_parts = url.parse(request.url);
	//switch statement
	switch (url_parts.pathname) {

		case '/':
			display_root(url_parts.pathame, request, response);
			break;

		case '/portfolio':
			display_portfolio(url_parts.pathame, request, response);
			break;
		//for incorrect pathname
		default:
			display_404(url_parts.pathame, request, response);
	}
}

//root
function disply_root(url, request, response) {
	//creating page
	var myHTML = '<html>';
	myHTML += '<body><h1>Home Page, Welcome</h1>';
	//link to portfolio page
	myHTML += '<a href= "/portfolio">Portfolio</a>';
	myHTML +=  '</body></html>';

	response.writeHead(200, {'Content-Type': 'text/html'});

	response.end(myHTML);
}

function display_portfolio(url, request, response) {
	//creating page
	var myHTML = '<html>';
	myHTML += '<body><h1>Home Page, Welcome</h1>';
	//link to home page
	myHTML += '<a href= "/">Go home</a>';
	myHTML +=  '</body></html>';

	response.writeHead(200, {'Content-Type': 'text/html'});

	response.end(myHTML);
}


function disply_404(url, request, response) {
	response.writeHead(404, {
		'Content-Type': 'text/html'
	});
	response.write('<h1>404 Not Found</h1>');
	response.end('The page you are looking for: ' + url + ' can not be found.');
	
}



//to check server is working
//request server
var server = http.createServer(handleRequest);

//lets us start server
server.listen(port, function() {
	//callback is triggered when server is successfully listening
	console.log('Server listening on: http://localhost:' + port);
});