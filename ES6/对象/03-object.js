// 利用构造函数创建对象
function Star(uname, age, sex){
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function(sang) {
        console.log(sang)
    }
}

// 调用函数返回的是一个对象
var ldh = new Star('刘德华', 18, '男');
console.log(typeof ldh)
console.log(ldh.name)
console.log(ldh['sex'])
ldh.sing('冰雨')