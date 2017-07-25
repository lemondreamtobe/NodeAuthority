/**
 * Created by feng on 2017/7/18.
 */
var http = require('http');
var server = http.createServer(function (req, res) {

    if (req.url !== '/favicon.ico') {
        req.on('data', function (data) {
            console.log(data.toString());
            res.end();
        });
    }
}).listen(1337, '127.0.0.1');