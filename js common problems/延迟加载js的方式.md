<!--
 * @Description:
 * @Author: 曹俊
 * @Date: 2022-08-16 11:44:30
 * @LastEditors: 曹俊
 * @LastEditTime: 2022-11-05 18:45:28
-->

# 问题引入：

浏览器的解析规则是：如果遇到 script 标签，则暂停构建 DOM，转而开始执行 script 标签，如果是外部 script，那么浏览器还需要一直等待其「下载」并「执行」后，再继续解析后面的 HTML。

# 延迟加载 js 的方式：script 标签的两个属性

- defer：
  - 不阻塞浏览器解析 HTML，等解析完 HTML 之后，才会执行 `script`。
  - 会并行下载 JavaScript 资源。
  - 会按照 HTML 中的相对顺序执行脚本。
  - 会在脚本下载并执行完成之后，才会触发 `DOMContentLoaded` 事件。
  - 在脚本执行过程中，一定可以获取到 HTML 中已有的元素。
  - `defer` 属性对模块脚本无效。
  - 适用于：所有外部脚本（通过 src 引用的 `script`）。
- async：
  - 不阻塞浏览器解析 HTML，但是 `script` 下载完成后，会立即中断浏览器解析 HTML，并执行此 `script`。
  - 会并行下载 JavaScript 资源。
  - 互相独立，谁先下载完，谁先执行，没有固定的先后顺序，不可控。
  - 由于没有确定的执行时机，所以在脚本里面可能会获取不到 HTML 中已有的元素。
  - `DOMContentLoaded` 事件和 `script` 脚本无相关性，无法确定他们的先后顺序。
  - 适用于：独立的第三方脚本。

### 总结：async 和 defer 之间最大的

- 区别：在于它们的执行时机
- 共同点：都可以并行下载 JavaScript 资源
