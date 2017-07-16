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

//之后我们可以
var Calculator = function () {
    this.tax = 5;
};

Calculator.prototype = new BaseCalculator();
//这里我们看到Calculator的原型指向BaseCalculator的实例上
//目的是让Calculator集成它的add()和subtract这两个函数
//此外，由于它的原型是BaseCalculator的一个实例，所以不管创建多少个Calculator对象实例，他们的原型指向的都是同一个实例
var calc = new Calculator();
alert(calc.add(1,1));
console.log(calc.decimalDigits);//我们可以访问到他的decimalDigits属性
//如果说我们不想让Calculator访问到BaseCalculator中构造函数里声明的属性值
//我们可以这样做
Calculator.prototype = BaseCalculator.prototype;
//再次访问时便会出错
var calc = new Calculator();
console.log(calc.decimalDigits);