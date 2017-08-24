var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var compression = require('compression');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();
app.use(compression());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'favicon.ico')));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public'))); // 虚拟static路径

app.use('/', index);

// 未匹配到的路由
app.use(function(req, res, next) {
	res.send('你来到了错误的页面');
	// res.redirect("/");
});

module.exports = app;
