/**
 * Created by Administrator on 2017/7/9.
 */
//Javascript本身没有类的概念，但是它的函数可以new出一个新的对象，所以一个简单的class可以用function模拟出来
function Animal(name) {
    this.name = name;
    this.run = function () {
        console.log(this.name + " is running!");
    }
}

var pet = new Animal("pet");
pet.run();// pet is running