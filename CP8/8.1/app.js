/**
 * Created by feng on 2017/7/18.
 */
var http = require('http');
var server = http.createServer(function (req, res) {

    res.end('success');
}).listen(3333, '127.0.0.1', function () {
    console.log('is running');
});
server.on('error', function (e) {

    if (e.code == 'EADDRINUSE') {
        console.log('port had been used');
    }
});
