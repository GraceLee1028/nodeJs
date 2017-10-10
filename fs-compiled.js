/**
 * Created by lea on 2017/10/10.
 */
const fs = require("fs");
console.log("阻塞读取文件示例");
const data = fs.readFileSync("./asserts/text/address.txt");
console.log(typeof data);
console.log(data.toString());
console.log("readFileSync程序执行结束。");

console.log("非阻塞读取文件示例");
//异步函数用于读取文件
fs.readFile("./asserts/text/address1.txt", (err, data) => {
  if (err) {
    console.error(err.stack);return;
  }
  console.log(data.toString());
});
console.log("readFile程序执行结束。");

//# sourceMappingURL=fs-compiled.js.map