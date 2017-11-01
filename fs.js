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
fs.readFile("./asserts/text/address1.txt",(err,data)=>{
    if(err){console.error(err.stack);return;}
    console.log(data.toString());
});
console.log("readFile程序执行结束。");


//读取流【读取某个文件的内容】
//创建可读流
let readStream = fs.createReadStream("./asserts/text/test.txt");
//设置编码为UTF-8
readStream.setEncoding("UTF-8");
//处理流的事件【data:当有数据可读时触发，end:没有更多的数据可读时触发，】
let d = "";
readStream.on("data",function(chunk){
    d+=chunk;
});
readStream.on("end",function(){
    console.log(d);
});
readStream.on("error",function(err){
    console.log(err.stack);
});
console.log("读取流,程序执行完毕");

//写入流：向某个文件写入数据
let writeStream = fs.createWriteStream("./asserts/text/write.txt");

writeStream.write("hello my lord1!","utf8");//使用 utf8 编码写入数据
//// 标记文件末尾
writeStream.end();

//处理流的事件【finish:所有数据已被写入到底层系统时触发】
writeStream.on("finish",function(){
    console.log("写入完成");
});
writeStream.on("error",function(err){
    console.log(err.stack);
});
console.log("写入流程序执行完毕！");