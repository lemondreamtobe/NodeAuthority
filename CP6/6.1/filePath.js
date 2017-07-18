/**
 * Created by feng on 2017/7/18.
 */
var fs = require('fs');
fs.realpath('./test', function (err, resolvedPath) {

    if (err) {
        console.log('err');
    } else {
        console.log(resolvedPath);
    }
});