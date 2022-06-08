<!--
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-05 19:00:38
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-08 18:41:28
-->
# 构造函数：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new操作符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面
## 用new操作符创建对象发生的事情
 + ### 在内存中创建一个新的空对象
 + ### 将构造函数的作用域赋给这个对象(即让this就指向了这个对象)
 + ### 执行构造函数中的代码(为这个对象添加属性和方法，以及执行构造函数中其他的代码)
 + ### 将这个新对象返回(因此构造函数里面不需要return) 如果有return 语句：
    + #### 返回的是一个对象，return语句之前的定义都会被覆盖
    + #### 如果返回的是一个非对象，那么return语句之前的定义不会被覆盖

## 实现一个简易的new操作符：
### 关键：
+ #### 让实例可以访问到私有属性
+ #### 让实例可以访问构造函数原型(constructor.prototype) 所在原型链上的属性
+ #### 构造函数返回的最终结果是引用数据类型


```
//创建构造函数
function Person(name, age){
    this.name = name
    this.age = age
}
function new(fn,...args) {
    let obj = {}
    fn.call(obj, ...args)
    return obj
}

let obj = new(Person,'张三'，18)
console.log(obj) //{ name:"张三"，age:18 }
```
