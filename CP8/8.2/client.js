/**
 * Created by feng on 2017/7/18.
 */
var http = require('http');
var options = {
    hostname: 'localhost',
    port : 1337,
    path: '/',
    method: 'POST'
};
var req = http.request(options);
req.write('你好');
req.end('再见');