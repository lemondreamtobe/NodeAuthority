var foo = require('./mexport');
var test = require('./testExports');
var myfoo = new foo('zhanglinfeng', 17);
// console.log('获取修改前的私有变量');
// console.log(myfoo.getAge());
// console.log(myfoo.getName());


console.log(test.name);
console.log(test.sayAge);

console.log(module.filename); //可以看文件名