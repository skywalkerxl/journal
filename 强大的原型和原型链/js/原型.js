/**
 * Created by Administrator on 2017/7/12.
 */
console.log('************************ 原型 *************************');
//新手的写法
var decimalDigits = 2,
    tax           = 5;

function  add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
//我们可以通过执行各种function 来得到结果
//学习了原型之后，可以通过如下方法来实现

console.log('************************ 原型使用方法1 *************************');