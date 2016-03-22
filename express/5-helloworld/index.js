var express = require('express');
var app = express();

// app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
	res.send('Hello world!');
});
app.get('/test',function(req,res){
	res.send('test page');
});
app.get('/admin',function(req,res){
	res.send('admin page');
});
app.get('/*',function(req,res){
	res.send('other page');
});

app.listen(8080);