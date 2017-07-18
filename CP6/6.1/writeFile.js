/**
 * Created by feng on 2017/7/18.
 */
var fs = require('fs');
fs.writeFile('./message.txt', 'hello world', function (err) {

    if (err) {
        console.log('wrong');
    } else {
        console.log('success');
    }
});

//指定位置写文件
var buf = new Buffer('我喜爱编程');
fs.open('./test.text', 'w', function (err, fd) {
    fs.write(fd, buf, 3, 9, 0, function (err, written, buffer) {

        if (err) console.log('写入文件失败');
        console.log('success');
        fs.fsync(fd); //将内存缓冲区的剩余数据写入文件
        fs.close(fd); //关闭文件
    });
});
