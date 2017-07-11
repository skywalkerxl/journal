/**
 * Created by Administrator on 2017/7/11.
 */
console.log("---------------------------  基于原型链的继承  ----------------------------");
function Animal(name){
    this.name = name;
}
Animal.prototype.run = function () {
    console.log( this.name + " is running " );
};
function Dog(name){
    //调用父类的构造函数，通过改变this指向将属性赋值到新的实例对象
    Animal.call(this, name);
}
Dog.prototype = new Animal();
var dog = new Dog("dog");
dog.run();