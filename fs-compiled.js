/**
 * Created by lea on 2017/10/10.
 */
//1、阻塞读取文件示例
const fs = require("fs");
console.log("阻塞读取文件示例");
//同步[阻塞]
const data = fs.readFileSync("./asserts/text/address.txt");
console.log(typeof data);
console.log(data.toString());
console.log("readFileSync程序执行结束。");

//2、非阻塞读取文件示例
console.log("非阻塞读取文件示例");
//异步函数用于读取文件
//异步【非阻塞】
fs.readFile("./asserts/text/address.txt", (err, data) => {
    if (err) {
        console.error(err.stack);return;
    }
    console.log(data.toString());
});
console.log("readFile程序执行结束。");

//3、读取流
//读取流【读取某个文件的内容】
//创建可读流
let readStream = fs.createReadStream("./asserts/text/test.txt");
//设置编码为UTF-8
readStream.setEncoding("UTF-8");
//处理流的事件【data:当有数据可读时触发，end:没有更多的数据可读时触发，】
let d = "";
readStream.on("data", function (chunk) {
    d += chunk;
});
readStream.on("end", function () {
    console.log(d);
});
readStream.on("error", function (err) {
    console.log(err.stack);
});
console.log("读取流,程序执行完毕");

//4、写入流
//写入流：向某个文件写入数据
let writeStream = fs.createWriteStream("./asserts/text/write.txt");

writeStream.write("hello my lord1!", "utf8"); //使用 utf8 编码写入数据
//// 标记文件末尾
writeStream.end();

//处理流的事件【finish:所有数据已被写入到底层系统时触发】
writeStream.on("finish", function () {
    console.log("写入完成");
});
writeStream.on("error", function (err) {
    console.log(err.stack);
});
console.log("写入流程序执行完毕！");

//5、管道流【从一个流中获取数据并将数据传递到另外一个流中】，

//把pwd.txt文件中的数据传递给copyPwd.txt文件
let readPwdStream = fs.createReadStream("./asserts/text/pwd.txt");
let writePwdStream = fs.createWriteStream("./asserts/text/copyPwd.txt");
/// 管道读写操作
// 读取 pwd.txt 文件内容，并将内容写入到 copyPwd.txt 文件中
readPwdStream.pipe(writePwdStream);

console.log("管道程序执行完毕");

//6、链式流【用管道和链式来压缩和解压文件。】【压缩和解压分开执行，先执行压缩，再执行解压】
let zlib = require('zlib');
// 压缩 pwd.txt 文件为 pwd.txt.gz

//fs.createReadStream('./asserts/text/pwd.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('./asserts/text/pwd.txt.gz'));
//console.log("压缩程序结束");

//解压pwd.txt.gz为pwdOne.txt

// fs.createReadStream('./asserts/text/pwd.txt.gz')
//    .pipe(zlib.createGunzip())
//    .pipe(fs.createWriteStream('./asserts/text/pwdOne.txt'));
//console.log("解压程序完成。");

//7、打开文件：fs.open()

//# sourceMappingURL=fs-compiled.js.map