/**
 * Created by Administrator on 2017/7/13.
 */
console.log('************************ 原型使用方法2 *************************');
//第二种方式则是，在赋值原型prototype的时候使用function立即执行的表达式来赋值,即如下格式
Calculator.prototype = function () {}();
//这种做法的好处，就是可以封装私有的function，通过return的形式暴露出简单的使用名称，从而达到public/private的效果
Calculator.prototype = function () {
    add = function (x, y) {
        return x + y;
    },
    substract = function(x, y){
        return x - y;
    }
    return{
        add :add,
        subtract: subtract
    } 
}();