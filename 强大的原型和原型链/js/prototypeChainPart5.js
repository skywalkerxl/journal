/**
 * Created by Administrator on 2017/7/20.
 */
console.log('************************** 属性查找 ********************************');
function foo(){
    this.add = function(x, y){
        return x + y;
    }
}

foo.prototype.add = function(x, y){
    return x + y + 10;
};

Object.prototype.substract = function (x, y) {
    return x - y;
};
var f = new foo();
console.info(f.add(1, 2));
console.info(f,substract(10, 3));
//有一点需要主要注意的是，我们可以将任何类型的对象复制到原型上，但是不能赋值原子类型的值
//但是js也有一个不好的地方,如果hasOwnProperty被非法占用，这会使得其失效
var foo =  {
    hasOwnProperty : function () {
        return false;
    },
    goo : 'Here Be dragons'
};

console.log(foo.hasOwnProperty('goo'));//false
//会总是返回false

{}.hasOwnProperty.call(foo,goo);