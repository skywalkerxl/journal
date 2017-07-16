/**
 * Created by Administrator on 2017/7/13.
 */
//学习了原型之后，可以通过如下方法来实现

console.log('************************ 原型使用方法1 *************************');
/* 在使用原型之前，我们先将代码进行修改，统一归到Calculator中 */
var Calculator = function (decimalDigits, tax) {
    this.decimalDigits = decimalDigits;
    this.tax = tax;
};
Calculator.prototype = {
    add : function (x, y) {
        return x + y;
    },
    substract : function (x, y) {
        return x - y;
    }

};
console.log( (new Calculator()).add(10, 20) );
