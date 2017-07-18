/**
 * Created by feng on 2017/7/18.
 */
var fs = require('fs');
fs.readFile('./index.html', function (err, data) {

    if (err) {
        console.log('err');
    } else {
        console.log(data.toString())
    }
});

//同步
// var data = fs.readFileSync('./index.html', 'utf-8');
// console.log(data);

//指定位置读写文件
fs.open('./test','r', function (err, fd) {
   console.log(fd);
   var buf = new Buffer(255);
   fs.read(fd, buf, 0, 9, 3, function (err, byteRead, buffer) {
       console.log(buffer.slice(0, byteRead).toString());
   })
});