<!--
 * @Description:
 * @Author: 曹俊
 * @Date: 2022-06-05 19:00:38
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-11-05 19:03:55
-->

# 构造函数：

## 是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 操作符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面

### 用 new 操作符创建对象发生的事情

- ### 在内存中创建一个新的空对象
- ### 将构造函数的作用域赋给这个对象(即让 this 就指向了这个对象)
- ### 执行构造函数中的代码(为这个对象添加属性和方法，以及执行构造函数中其他的代码)
- ### 将这个新对象返回(因此构造函数里面不需要 return) 如果有 return 语句：
  - #### 返回的是一个对象，return 语句之前的定义都会被覆盖
  - #### 如果返回的是一个非对象，那么 return 语句之前的定义不会被覆盖

## 实现一个简易的 new 操作符：

### 关键：

- #### 让实例可以访问到私有属性
- #### 让实例可以访问构造函数原型(constructor.prototype) 所在原型链上的属性
- #### 构造函数返回的最终结果是引用数据类型

```js
//创建构造函数
function Person(name, age){
    this.name = name
    this.age = age
}
function myNew(fn,...args) {
  console.log(args)
    let obj = {}
    fn.call(obj, ...args)
    return obj
}

let obj = myNew(Person,'张三'，18)
console.log(obj) //{ name:"张三"，age:18 }
```

#### 在构造函数里面，如果不写 return 的话默认就是返回创建的实例对象，但是如果加入了 return 的话，如果 return 的是一个基本数据类型的话比如，boolean,number,undefined 等那么仍然返回实例对象，如果返回的是一个对象的话，则返回该对象，原本的指向实际对象的 this 会被无效化。
