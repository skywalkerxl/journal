/**
 * Created by Administrator on 2017/7/20.
 */
Object.prototype.bar = 1;
var foo = { goo : undefined };

console.log(foo.bar);//1
console.log('bar' in foo);//true
console.log(foo.hasOwnProperty(bar));//false
console.log(foo.hasOwnProperty(goo));//undefined
//从这里我们可以看到本身bar是不存在于foo中，而hasOwnProperty则能给出准确的判断  
//d