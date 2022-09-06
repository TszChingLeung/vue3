// 利用字面量创建对象
var obj = {
    uname: '张三丰',
    age: 18,
    sex: '男',
    sayHi: function(){
        console.log('hi~')
    }
}

console.log(obj.uname);
console.log(obj['age'])

obj.sayHi();