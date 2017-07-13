/**
 * Created by feng on 2017/7/13.
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<head><meta charset="utf-8"></head>');
    res.end('hello world');
}).listen(1337, '127.0.0.1');
console.log('running');

/**
 * 权威指南第一章的总结有以下几点
 *
 * Node 是什么？
 *
 * 答：Node.js是一个用于开发各种web服务器的开发工具，他的服务器中运行的高性能V8 JS脚本语言
 *
 *      该语言是一种被V8 JS引擎所解释并执行的脚本语言。
 *
 * Node 能做什么？
 *
 * 答：提供一种简单的，用于创建高性能服务器端语言以及可在该服务器中运行的各种应用程序的开发工具
 *
 * Node 适合哪些情况下的开发？
 *
 * 答： 当应用程序需要处理大量高并发的输入输出，应用程序内部不需要非常复杂的处理的时候
 *
 *Node 两个独特的机制原理？
 *
 * 答：非阻塞型I/O，事件环
 */

