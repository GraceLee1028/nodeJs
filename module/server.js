/**
 * Created by lea on 2017/11/3.
 */
//url和queryString模块
const http = require("http");
const url = require("url");
//通过依赖注入，传参
function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;//请求
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead("200",{"Content-Type":"text/plain"});
        response.end("hello world");
        response.end();
    }
    http.createServer(onRequest).listen("8888");
    console.log("");
}
exports.start = start;