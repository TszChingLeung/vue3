// 利用 new Object 创建对象
var obj = new Object();

obj.uname = '张三疯';
obj.age = 18;
obj.sex = '男';
obj.sayHi = function() {
    console.log('hi~')
}

console.log(obj.uname)
console.log(obj['sex'])
obj.sayHi()