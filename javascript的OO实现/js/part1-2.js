/**
 * Created by Administrator on 2017/7/9.
 */
console.log("---------------------------基于原型链的面向对象----------------------------");
function Animal(name) {
    this.name = name;
}
Animal.prototype.run = function () {
    console.log( this.name + " is running!" );
};

var a = new Animal("a");
var b = new Animal("b");

console.log( Animal.prototype );
console.log( Animal.prototype instanceof Object);
console.log( Animal.prototype.constructor == Animal );
console.log( a.__proto__ == Animal.prototype );
console.log( b.__proto__ == Animal.prototype );
console.log( a.__proto__.__proto__ );
console.log( a.__proto__.run == a.run );
console.log( a.__proto__.run == Animal.prototype.run );
console.log( a.__proto__ );