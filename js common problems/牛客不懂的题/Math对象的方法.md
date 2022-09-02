<!--
 * @Description:
 * @Author: 曹俊
 * @Date: 2022-09-02 12:36:55
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-09-02 12:41:17
-->

### Math.random()

#### Math.random() 函数返回一个浮点数， 伪随机数在范围从 0 到小于 1，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1），然后您可以缩放到所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。[0,1)

### Math.round()

#### Math.round()函数返回一个数字四舍五入后最接近的整数。

### Math.abs()

#### Math.abs(x) 函数返回指定数字 “x“ 的绝对值

### Math.abs() 函数的行为:

#### 传入一个非数字形式的字符串或者 undefined/empty 变量，将返回 NaN。传入 null 将返回 0。

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```
