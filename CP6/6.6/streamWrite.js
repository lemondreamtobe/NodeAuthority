/**
 * Created by feng on 2017/7/18.
 */
var fs = require('fs');
var file = fs.createReadStream('./test');
var out = fs.createWriteStream('./message');
file.on('data', function (data) {
    out.write(data);
});
out.on('open', function (fd) {
    console.log('is opening');
});
file.on('end', function () {
    out.end('goodBye', function () {
        console.log('is finishing')
    });
    console.log('total' + out.bytesWritten)
})