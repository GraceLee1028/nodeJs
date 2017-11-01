/**
 * Created by SZ on 2017/11/1.
 */
//buffer:用于存放二进制数据的缓存区
//创建 Buffer 实例
let buffer = new Buffer(10); //长度为10字节的buffer
//utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。
let buffer1 = new Buffer("www.douban.com", "utf-8"); //通过给定的字符串创建
let buffer2 = new Buffer([1, 2, 2, 3, 3, 4, 5, 6]); //通过给定的数组来创建

//写入缓冲区
let length = buffer.write("别想找到我,归隐"); //返回实际写入的大小
console.log(length);

//读取数据【解码缓冲区数据并使用指定的编码返回字符串】【toString()】
console.log(buffer2.toString()); //将数字转成字母
console.log(buffer2.toString("ascii")); //将数字转成字母
let buf = new Buffer(10);
for (let i = 0; i < 10; i++) {
    buf[i] = i + 1;
}
console.log(buf.toString()); //将数字转成字母
console.log(buf.toString("ascii")); //将数字转成字母

//将buffer转化成json对象【toJSON()】
console.log(buffer1.toJSON()); //输出结果是数字数组


//缓冲区合并
let buffer3 = Buffer.concat([buffer, buffer1]);
console.log(buffer3.toString());

//缓冲区比较【compare()】
let buf1 = new Buffer("ef");
let buf2 = new Buffer("ab");
let result = buf1.compare(buf2);
if (result < 0) {
    console.log(`${result},${buf1}在${buf2}之前`);
} else if (result == 0) {
    console.log(`${buf1}与${buf2}相同`);
} else {
    console.log(`${result},${buf1}在${buf2}之后`);
}

//拷贝缓冲区【copy()】
let buf3 = new Buffer("hello");
let buf4 = new Buffer(20);
buf3.copy(buf4); //将buf3的缓冲区复制给buf4
console.log(`buf4 content: ${buf4}`);

//缓冲区裁剪【slice】
console.log(buf3.slice(1, 3).toString()); //输出：el

//# sourceMappingURL=buffer-compiled.js.map