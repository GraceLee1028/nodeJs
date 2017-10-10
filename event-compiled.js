/**
 * Created by lea on 2017/10/10.
 */
const events = require("events");
//创建对象
const eventEmitter = new events.EventEmitter();
//处理程序
var handler = function () {
  console.log("hello boy");
};
//绑定事件以及事件的处理程序
eventEmitter.on("hello", handler);
//触发事件
eventEmitter.emit("hello");

//# sourceMappingURL=event-compiled.js.map