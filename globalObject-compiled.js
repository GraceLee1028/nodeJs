/**
 * Created by lea on 2017/11/3.
 */

//1、__filename 表示当前正在执行的脚本的文件名
// 输出全局变量 __filename 的值
console.log(__filename); //输出文件所在位置的绝对路径

//2、__dirname:当前执行脚本所在的目录
console.log(__dirname);
//3、倒计时
console.log("start , wait");
let t = setTimeout(function () {
  console.log("look at me");
}, 2000);
clearTimeout(t); //清除倒计时
//4、
//输出错误消息
console.error("error:1 is undefined");
//输入警告信息
console.warn("be careful");
//对一个对象进行检查（inspect），并以易于阅读和打印的格式显示
console.dir({ name: 'lea', age: '24' });
//输出时间，表示计时开始
console.time("test");
//结束时间，表示计时结束
console.timeEnd("test");
//判断某个表达式或变量是否为真
//	console.assert(value[, message][, ...])

//# sourceMappingURL=globalObject-compiled.js.map