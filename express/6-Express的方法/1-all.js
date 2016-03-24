var express=require('express');
var http=require('http');
var app=express();

app.all('*',function(rq,rs,next){
	rs.writeHead(200,{"content-Type":"text/plain"});
	next();
});

//get是只有get请求通过的中间件，有一个被调用，就不会调用后面的
app.get('',function(rq,rs){
	rs.end('<h1>Home page!</h1>');
});
app.get('/hello/:fool?',function(rq,rs){
	if(rq.params.fool){
		rs.end('Hello,'+rq.params.fool+'!');
	}else{
		rs.end('Hello,fool!');
	}
});
app.get('*',function(rq,rs){
	rs.end('404');
});
//set方法用于指定变量的值
app.set('views',__dirname+'/views');
app.set('view engine','jade');


http.createServer(app).listen('1337');
