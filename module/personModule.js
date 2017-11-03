/**
 * Created by lea on 2017/11/3.
 */
function Person(){
    let name,age;
    this.setName = function(n){
        name = n;
    };
    this.setAge = function(a){
        age = a;
    };
    this.getInfo = function(){
        console.log(`name:${name},age:${age}`);
    }
}
module.exports = Person;