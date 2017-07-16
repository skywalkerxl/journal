/**
 * Created by Administrator on 2017/7/16.
 */

console.log('************************ 重写原型 *************************');
//有时我们在使用第三方类库的时候，往往有时候他们定义的方法是不能满足我们的需要，
//但是，我们又离不开这个类库，所以这时候我们就需要重写他们中的一个或都多个属性function
Calculator.prototype.add = function (x, y) {
    return x + y +this.tax;
};
var calc = new Calculator();
console.log(calc.add(1, 1));