/**
 * Created by lea on 2017/10/10.
 */
//引入 events 模块
const events = require("events");
//创建对象
const eventEmitter = new events.EventEmitter();

//单个监听器
//示例一
//处理程序
let handler = function(){
    console.log("hello boy");
};
//绑定事件以及事件的处理程序
eventEmitter.on("hello",handler);//为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数
//addListener(event, listener):为指定事件添加一个监听器到监听器数组的尾部。
eventEmitter.addListener("hello",()=>{
    console.log("hello girl,再次监听hello事件");
});
//once(event, listener):为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
//触发事件
eventEmitter.emit("hello");
//示例二
let connectHandler = function(){
    console.log("连接成功");
    eventEmitter.emit("data_received");
};
eventEmitter.on("connect",connectHandler);
let receivedHandler = function(){
    console.log("接收数据");
};
eventEmitter.on("data_received",receivedHandler);
eventEmitter.emit("connect");
console.log("程序执行结束");

//多个监听器
eventEmitter.on("changeEvent",(arg1,arg2)=>{
    console.log(`listener1 参数一：${arg1}；参数二：${arg2}`);
});
eventEmitter.on("changeEvent",(arg1,arg2)=>{
    console.log(`listener2 参数一：${arg1}；参数二：${arg2}`);
});
eventEmitter.emit("changeEvent","name","age");
console.log("程序执行结束");