/**
 * Created by feng on 2017/7/18.
 */
var fs = require('fs');
var file = fs.createReadStream('./test', {start:3, end:12});
file.on('open', function (fd) {
    console.log('is opening' + fd);
});
file.on('data', function (data) {
    console.log('is reading' + data);
});
file.on('end', function () {
    console.log('is finishing');
});
file.on('close', function () {
    console.log('is closing');
});
file.on('error', function () {
    console.log('is error');
})