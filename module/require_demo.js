/**
 * Created by SZ on 2018/4/12.
 */
//require()：总是优先加载核心模块；【如：】
const path = require("path");//始终返回内置的path模块，即使有同名文件
//文件模块：按照确切的文件名没有找到模块，则node.js会尝试带上.js、.json或.node拓展名再加载。
//1、以 / 为前缀的模块是文件的绝对路径。

//2、 './' 为前缀的模块是相对于调用 require() 的文件的
//3、当没有以 '/'、'./' 或 '../' 开头来表示文件时，这个模块必须是一个【核心模块】或【加载自 node_modules 】目录。
//tips：强烈建议将所有的依赖放在本地的 node_modules 目录。 这样将会更快地加载，且更可靠。
//__dirname:当前模块的文件夹名称
console.log(_dirname);
//等于下面的
console.log(path.dirname(__filename));
//path.parse() 方法返回一个对象
console.log(path.parse('/home/user/dir/file.txt'));
//querystring.parse(str[, sep[, eq[, options]]])
const querystring = require("querystring");
/*结果：{
name: 'lee',
    age: 23
}*/
//把一个 URL 查询字符串 str 解析成一个键值对的集合
console.log(querystring.parse("http:shang.shuai.com?name=lee&age=23"));

//querystring.stringify(obj[, sep[, eq[, options]]])：
// 通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// 返回 'foo:bar;baz:qux'
querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
    { encodeURIComponent: "gbkEncodeURIComponent" });


