var express=require('express');
var app=express();

var path=require('path');
// var favicon=require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

// app.use(favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'));