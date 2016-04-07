var http=require('http');
var fs=require('fs');
var path=require('path');
var mime=require('mime');
var cache={};


var server=http.createServer(function(rq,rs){
	var filePath=false;

	if(rq.url==''){
		filePath='public/index.html';
	}else{
		filePath='public'+rq.url;
	}

	var absPath='./'+filePath;
	serveStatic(rs,cache,absPath);
});

var chatServer = require('./lib/chat_server');
chatServer.listen(server);


/*---------------------------------------------------------------------------*/

server.listen(3001,function(){
	console.log('Server listening on port 3001');
});


function send404(res){
	res.writeHead(404,{'Content-Type':'text/plain'});
	res.write('Error 404:not found');
	res.end();
}

function sendFile(rs,filePath,fileContents){
	rs.writeHead(200,{ 'Content-Type':mime.lookup(path.basename(filePath)) });
	rs.end(fileContents);
}

function serveStatic(rs,cache,absPath){
	if(cache[absPath]){
		sendFile(rs,absPath,cache[absPath]);
	}else{
		fs.exists(absPath,function(exists){
			if(exists){
				fs.readFile(absPath,function(err,data){
					if(err){
						send404(rs);
					}else{
						cache[absPath]=data;
						sendFile(rs,absPath,data);
					}
				});
			}else{
				send404(rs);
			}
		});
	}
}