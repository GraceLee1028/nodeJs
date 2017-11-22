/**
 * Created by lea on 2017/11/22.
 */
//表单提交到服务器一般都使用 GET/POST 请求。
let http = require("http");
let util = require("util");
let querystring = require("querystring");

//1、解析url
//let url = require("url");
//http.createServer(function(req, res){
//    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//    //
//    let urlObj = url.parse(req.url, true);//将请求地址解析为一个对象
//    res.write(util.inspect(urlObj));//将一个对象解析为字符串输出
//    // 解析 url 参数
//    let query = urlObj.query;//查询参数对象
//    res.write("<br>网站名：" + query.name);
//    res.end();
//}).listen(3000);
//在浏览器输入如下地址：http://localhost:3000/index?name=lea

//2、获取 POST 请求内容
//http.createServer(function(req, res){
//    // 定义了一个post变量，用于暂存请求体的信息
//    var data = '';
//
//    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
//    req.on('data', function(chunk){
//        data += chunk;
//    });
//
//    // 在end事件触发后，通过querystring.parse将data解析为 格式，然后向客户端返回。
//    req.on('end', function(){
//        data = querystring.parse(data);
//        res.end(util.inspect(data));
//    });
//}).listen(3000);
//post请求示例
var postHtml = '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '用户名： <input name="name"><br>' +
    '密码： <input name="pwd"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer((req,res)=>{
    let data = "";
    req.on("data",chunk=>{
        data+=chunk;
    });
    req.on("end",function(){
        data = querystring.parse(data);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});//响应头部
        if(data.name&&data.pwd){
            res.write(`用户名：${data.name}<br>密码：${data.pwd}<br>`);
            res.write("网站名：" + data.name);
            res.write("<br>");
            res.write("网站 URL：" + data.pwd);
        }else{
            res.write(postHtml);
        }
        res.end();
    });
}).listen(3000);