/**
 * Created by feng on 2017/7/14.
 */
var name = 'zlf';
var age  = '15';

function sayAge() {
    console.log(age);
};
//给module.exports赋值会覆盖exorts
module.exports = function () {
    this.name= name;
}
exports.name    = name;
exports.age     = age;
exports.sayAge  = sayAge;
