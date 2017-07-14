/**
 * Created by Administrator on 2017/7/14.
 */
var BaseCalculator = function () {
    //为每个实例都申明一个小数位数
    this.decimalDigits = 2;
};

//使用原型给BaseCalculator申明两个方法
BaseCalculator.prototype.add = function (x, y) {
    return x + y;
};
BaseCalculator.prototype.subtract = function (x, y) {
    return x - y;
};