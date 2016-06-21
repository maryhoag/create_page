var http = require('http');
var url = require('url');

var port = 8080;

function handleRequest(request, response) {
	var url_parts = url.parse(request.url);

	switch(url_parts.pathname) {

		case '/':
			display_root(url_parts.pathname, request, response);
			break;

		case '/favorite_foods':
			display_foods(url_parts.pathname, request, response);
			break;

		case '/favorite_movies':
			display_movies(url_parts.pathname, request, response);
			break;

		case '/favorite_css_frameworks':
			display_frameworks(url_parts.pathname, request, response);

		default:
			display_404(url_parts.pathname, request, response);
	}
}

var display_root = function(url, request, response) {
	var myHTML = '<html>';
	myHTML += '<body><h1>Home Page</h1>';
	myHTML += '<a href="/favorite_foods">Favorite Foods</a>';
	myHTML += '<a href="/favorite_movies">Favorite Movies</a>';
	myHTML += '<a href="/favorite_css_frameworks">Favorite CSS Frameworks</a>';
	myHTML += '</body></html>';

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(myHTML);
}

var display_foods = function(url, request, response) {
	var myHTML = '<html>';
	myHTML += '<body><h1>Favorite Foods</a>';
	myHTML += '<a href="/">Home</a>';
	myHTML += '<a href="/favorite_movies">Favorite Movies</a>';
	myHTML += '<a href="/Favorite CSS Frameworks">Favorite CSS Frameworks</a>';
	myHTML += '</body></html>';


	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(myHTML);
}

var display_movies = function(url, request, response) {
	var myHTML = '<html>';
	myHTML += '<body><h1>Favorite Foods</a>';
	myHTML += '<a href="/">Home</a>';
	myHTML += '<a href="/favorite_foods">Favorite Foods</a>';
	myHTML += '<a href="/Favorite CSS Frameworks">Favorite CSS Frameworks</a>';
	myHTML += '</body></html>';


	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(myHTML);
}

var display_frameworks = function(url, request, response) {
	var myHTML = '<html>';
	myHTML += '<body><h1>Favorite Foods</a>';
	myHTML += '<a href="/">Home</a>';
	myHTML += '<a href="/favorite_foods"></a>';
	myHTML += '<a href="/favorite_movies">Favorite Movies</a>';
	myHTML += '</body></html>';


	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(myHTML);
}


var display_404 = function(url, request, response) {
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



