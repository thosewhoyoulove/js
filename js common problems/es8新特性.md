<!--
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-06-08 17:00:36
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-06-14 10:44:07
-->
# async函数和await表达式

### 用途：能够让异步操作像同步操作一样

## async函数：
+ ### async函数的返回值为promise对象
+ ### promise对象的结果由async函数执行的返回值决定
```
async function fn(){
    return 'caojun'
    //返回的结果不是一个 Promise类型的对象，返回的结果就是成功Promise对象,如果返回为空，值为undefined
    //抛出错误，返回的结果是一个失败的对象
    //如果返回的结果是一个Promise对象,成功失败由返回的Promise对象决定
}
```

## await表达式：
+ ### await必须写在async函数中
+ ### await右侧的表达式一般为promise对象
+ ### await返回的是promise成功的值
+ ### await的promise失败了，就会抛出异常，需要通过try...catch捕获处理 