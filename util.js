/**
 * Created by lea on 2017/11/3.
 */
//1、util.inherits(constructor, superConstructor):实现对象间原型继承 的函数。
const util = require("util");
function People(){
    this.name = "lea";
    this.age = 22;
    this.sayHello = function(){
        console.log("hello");
    };
}
People.prototype.getName = function(){
    console.log(this.name);
};
function John(){
    this.name = "John";
}
util.inherits(John,People);//实现对象间 原型继承 的函数。
let j = new John();
j.getName();
//util.inspect():
//一个将任意对象 转换 为字符串的方法，通常用于调试和错误输出
console.log(util.inspect(j));
console.log(j.age);//undefined [未继承]
//j.sayHello();//报错了：inherits（）：仅仅继承了在原型中定义的函数，而在构造函数内创造的属性和函数都没有被继承。

let p = new People();
p.getName();

let ageArr = ["lea","john"];
//util.isArray(参数)：参数是数组返回true,否则返回false
console.log(util.isArray(ageArr));//
//util.isRegExp(参数):是否是正则表达式
//util.isDate(参数 ):是否是一个日期
//util.isError(参数)：是否是一个错误对象



