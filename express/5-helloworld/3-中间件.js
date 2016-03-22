var express=require('express');
var http=require('http');

var app=express();

app.use(function(rq,rs,next){
	console.log('In comes a '+rq.method+' to '+ rq.url);
	next();
});

app.use(function(rq,rs,next){
	console.log('2In comes a '+rq.method+' to '+ rq.url);
	next();
});

app.use(function(rq,rs,next){
	console.log('2In comes a '+rq.method+' to '+ rq.url);
	next();
});

app.use(function(rq,rs){
	rs.writeHead(200,{'Content-type':'text/plain'});
	rs.end('Hello world\n');
});

http.createServer(app).listen(1337);