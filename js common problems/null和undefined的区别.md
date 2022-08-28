<!--
 * @Description: 
 * @Author: 曹俊
 * @Date: 2022-08-16 11:27:29
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-08-28 21:54:42
-->
# null & undefined 的区别

- 作者在设计js时，只设计了null作为表示“无”的值(借鉴了java中的null)
- null会被隐式转化为0，很容易发现不了错误
- 先有null，然后有undefined

### 主要区别：null表示的是一个“无”的对象，typeof为object，转化数值为0；undefined表示一个值定义了没有赋值，转化数值时为NAN

- NaN无论与谁比较，包括它自己，结果都是false，
- null与undefined比较，结果为true，除此之外，undefined和null与谁比较，结果都为false
- String与Number比较，先将String转为Number类型，再比较，''转为Number类型的结果为0，故''==0的结果为true
- Boolean与其他类型比较，Boolean先转为Number类型，true转为Number类型的值为1，故true==1的结果为true。