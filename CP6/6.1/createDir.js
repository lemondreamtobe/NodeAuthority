/**
 * Created by feng on 2017/7/18.
 */
var fs = require('fs');
fs.mkdir('./mkdir', function (err) {

    if (err) {
        console.log('err');
    } else {
        console.log('success');
    }
});

//读取目录
fs.readdir('./mkdir',function (err, files) {

    if (err) {
        console.log('err');
        return;

    } else {
        console.log(files);
    }
});

//检查文件或者目录是否存在
fs.exists('./test', function (exists) {

    if (exists) {
        console.log('exists');
    }
});
console.log(__dirname);