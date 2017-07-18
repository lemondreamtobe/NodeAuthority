/**
 * Created by feng on 2017/7/18.
 */
var net = require('net');
var server = net.createServer(function (socket) {
    console.log('is connected');
});
server.listen(8551, 'localhost', function () {
    address = server.address();
    console.log('被监听的地址信息是 ', address);
});
