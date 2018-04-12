/**
 * Created by lea on 2017/11/3.
 */
//exports 是模块公开的接口
//【每个文件被视为一个独立的模块】
exports.hello = function () {
  console.log("hello");
};
//module.exports：可以被赋予一个新的值（例如函数或对象）。
//通过 require.main === module 来判断一个文件是否被直接运行
console.log(require.main === module);

//# sourceMappingURL=hello_module-compiled.js.map