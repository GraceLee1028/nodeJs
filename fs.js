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
fs.readFile("./asserts/text/address.txt",(err,data)=>{
    if(err){console.error(err);}
    console.log(data.toString());
});
console.log("readFile程序执行结束。");