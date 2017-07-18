/**
 * Created by feng on 2017/7/14.
 */
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
//构造方式1
var buff1 = new Buffer(50);
buff1.fill(1, 10, 11);
console.log(buff1);
buff1.fill(2, 20);

//构造方式2
var buff2 = new Buffer([1, 2, 3]);
console.log(buff2);
console.log(buff2.length); //3字节

//构造方式3
var buff31 = new Buffer('一', 'utf8');

var buff3 = new Buffer('hello world'); //有第二个参数，指定文字编码格式
console.log(buff3);
console.log(buff31);

var str = '我喜欢编程';
var buff4 = new Buffer(str);
console.log(buff4);

var buff4_son = buff4.slice(1,4); //切割的buffer和原来的buffer共享同一个内存，也就是更改任意一个都会更改对方相应的位置
console.log(buff4_son);
console.log(buff4_son.toString('utf8', 0, 4));
buff4.write('热', 3, 3);
console.log(buff4);
decoder.write(buff4_son);





