/**
 * Created by feng on 2017/7/13.
 */
console.log('this is a test string');

//node console.js 1> info.log 标准输出流的重定向
console.log('%s', 'hello,', 'world'); //从第二个参数开始依次输出所有字符

console.log('%s', 'hello world', {foo : 'foo'}); //对象转换成字符后输出

console.log('%d', 10, 10.5); //把数值转换成字符串后输出

console.log('%d', 'home'); //字符串作为数值输出，输出NaN;

console.log('%d', {foo : 'foo'}); //对象转换成数值输出，NaN;

console.log('%%', 'home'); //输出百分号

console.error('this is a test string');

//node console.js 2> info.log 标准错误输出流的重定向
//用法与console.log一样

var a   = {};
a.sayHi = function () {
    return;
};
a.name  = '';
console.dir(a); //这个方法可以查看对象具体内容

//统计代码执行时间
console.time('time');
for (var i = 0; i < 5; i++) {
    ;
};
console.timeEnd('time'); //两个参数必须相同才能正确统计

//将当前位置的栈信息作为标准错误信息输出
// console.trace('trace');

//对表达式结果进行评估，为false则抛出异常
// console.assert(1 == 2, 'no equal');

var setTime = setTimeout(function (str) {
    console.log(str);
}, 5000, 'this is a test string');
clearTimeout(setTime);//取消
//setInterval,clearInterval用法一致

//setTime.unref()取消延时调用，setTime.ref()继续延时调用
console.log(require.cache);  //这里看缓存区内容
// console.log(require('./xxx')); //这里看某个模块的完整路径名；

console.log(__filename); //这里也可以看完整路径
console.log(__dirname); //这里看当前目录的完整路径，一般用于路由和静态资源分析


