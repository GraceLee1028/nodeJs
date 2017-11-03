/**
 * Created by lea on 2017/11/3.
 */
//node.js模块系统
    //require 用于从外部获取一个模块的接口
const helloM = require("./hello_module.js");//获取模块的 exports 对象
helloM.hello();
//外部引用personModule模块时，其接口对象就是要输出的 Person 对象本身
const Person = require("./personModule.js");//获取Person对象本身
let person1 = new Person();
person1.setName("lea");
person1.setAge(24);
person1.getInfo();

//引入server模块
const server = require("./server.js");
const router = require("./route.js");
server.start(router.route);