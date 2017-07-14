//var http = require('http');
//http.createServer(function(req, res) {
//	console.log(req.url);
//	res.end('success');
//}).listen(1337, '127.0.0.1');

//另一种写法
var http   = require('http');
var events = require('events');
var server = http.createServer();

//为server服务器在接收到客户端请求时触发request事件绑定处理函数
server.on('request', function(req, res) {
	
	if (req.url == '/favicon.ico') {
		return;
	} else {
		console.log(req.url);
		res.end('success');
	}
}).listen(1337, '127.0.0.1');
console.log('is running!');

//绑定多个事件处理程序
server.on('request', function (req, res) {

    if (req.url == './favicon.ico') {
        console.log(req.url);
    } else {
        return;
    };
});
console.log(server.listeners('request').length); //server.listeners可以看绑定过的事件处理程序

//server.emit('request', x,x,x);这里可以手工触发request，也就是说不用打开浏览器服务器上就有相应了。

console.log(events.EventEmitter.listenerCount(server, 'request'));
//这里可以看绑定事件个数,用server.listeners('request').length可代替

//这是EventEmitter类自身拥有的事件，在server没有的，通过原型链访问，绑定事件和取消事件的时候调用
//相反的方法:removeListener
server.on('newListener', function (e, f) {
    console.log('绑定了事件就看这里');
    console.log(e);
    console.log(f);
});


