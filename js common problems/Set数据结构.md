<!--
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-20 11:10:54
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-20 21:23:33
-->
# Set数据结构
## 基本用法

### ES6 提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
### Set本身是一个构造函数，用来生成Set数据结构

```js
const s = new Set()
[2,3,4,5,2,2,3].forEach(x =>s.add(x))
for(let i of s){
   console.log(i) 
}
// 2 3 4 5

```
### 上面的代码通过 **add()** 方法向Set结构中加入成员，结果表明Set结构不会添加重复的值

### Set函数可以接受一个数组(或者具有iterable接口的其他数据结构)作为参数，用来初始化

```js
//例一
const set = new Set([1,2,3,4,4])
[...set]
// [1,2,3,4]

//例二
const items = new Set([1,2,3,4,5,6,6,6,6])
items.size //6

//例三
const set = new Set(document.querySelectorAll('div'));
set.size // 15

// 类似于
const set = new Set();
document
 .querySelectorAll('div')
 .forEach(div => set.add(div));
set.size // 15
```

### 上面代码中，例一和例二都是Set函数接受数组作为参数，例三是接受类似数组的对象作为参数。

### 上面代码也展示了一种去除数组重复成员的方法。
```js
[...new Set(array)]
```

### 上面的方法也可以用于，去除字符串里面的重复字符。
```js
[...new Set('abbac')].join('')

//相当于
const set = new Set('abbac')
//set: Set{'a','b','c'}
[...set]
// set ['a','b','c']
然后再调用数组的join()方法将字符串拼接起来
```
### join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

### 展开语法 (Spread syntax),即： **...**  可以在函数调用/数组构造时，将数组表达式或者 string 在语法层面展开；还可以在构造字面量对象时，将对象表达式按 key-value 的方式展开

### 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。
```js
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
let c = +0;
let d = -0;
set.add(c);
set.add(d);
set // Set {NaN , 0}
```

### 上面代码向 Set 实例添加了两次NaN，但是只会加入一个。这表明，在 Set 内部，两个NaN是相等的,+0和-0也是相等的

### 另外，两个对象总是不相等的。
```js
let set = new Set();

set.add({});
set.size // 1

set.add({});
set.size // 2
```

### 上面代码表示，由于两个空对象不相等，所以它们被视为两个值。


## Set的属性和方法

### Set 结构的实例有以下属性：
 - Set.prototype.constructor：构造函数，默认就是Set函数
 - Set.prototype.size:返回Set实例的成员总数

### Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法:

- Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
- Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
- Set.prototype.clear()：清除所有成员，没有返回值。

### 上面这些属性和方法的实例如下:
```js
let s = new Set()
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
```

### 下面是一个对比，看看在判断是否包括一个键上面，Object结构和Set结构的写法不同  

```js
// 对象的写法
const properties = {
  'width': 1,
  'height': 1
};

if (properties[someName]) {
  // do something
}

// Set的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
  // do something
}
```

### **Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。** 
### Array.from方法可以将 Set 结构转为数组。
```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);

// 数组去重
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
    
```