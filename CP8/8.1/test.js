/**
 * Created by feng on 2017/7/18.
 */
var http = require('http');
var server = http.createServer(function (req, res) {

    if (req.url == '/favicon.ico') {
        req.on('data', function (data) {
            console.log(data);
        });
        // req.on('end', function () {
        //     console.log('finishing');
        // });
    };
    res.end();
}).listen(3322, '127.0.0.1', function () {
    console.log('is running');
});
server.on('error', function (e) {

    if (e.code == 'EADDRINUSE') {
        console.log('port had been used');
    }
});
