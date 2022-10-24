<!--
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-10-21 20:54:26
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-10-24 19:23:55
-->

# 手写 promise 需要做到的点

- 执行了 resolve，Promise 状态会变成 fulfilled
- 执行了 reject，Promise 状态会变成 rejected
- Promise 只以第一次为准，第一次成功就永久为 fulfilled，第一次失败就永远状态为 rejected
- Promise 中有 throw 的话，就相当于执行了 reject

#### 术语：
- “promise”是具有then行为符合本规范的方法的对象或函数。
- “thenable”是定义then方法的对象或函数。
- “value”是任何合法的 JavaScript 值（包括undefined，thenable 或 promise）。
- “异常”是使用throw语句抛出的值。
- “reason” 是一个值，表示一个承诺被拒绝的原因。
