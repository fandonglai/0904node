/*this 行为主体
* 直接执行函数  this＝全局
* 对象执行他自己的属性函数 this＝这个对象的本身
* call apply this ＝ 第一个刹那红素
* 提交git
* git add
* git commit
* */
var number = 2;
n = 5;
global.val = 6;//global下声明对象

var obj = {
    number:4,
    fn1:(function(){
        this.number *=2;
        number = number*2;
        var number = 3;
        return function(){
            this.number *=2;
            number *=3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
console.log(number);//2  node没有window 只有globle
fn1();//9
obj.fn1();//27
console.log(number);
console.log(obj.number);
