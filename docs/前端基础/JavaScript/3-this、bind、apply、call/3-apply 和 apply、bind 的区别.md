# bind 和 apply、call 的区别

---

bind、apply、call 这三个方法都可以改变函数的 this（执行上下文）指向。

bind 和 apply、call 有所不同的是：bind 会返回一个改变了 this 指向的函数，不会自执行；而 apply、call 改变 this 执行后会立即执行函数。

apply、call 的区别在于传入的参数，两者的第一个参数都是传入的执行上下文，函数的执行参数以参数数组的形式传入 apply，而 call 的函数执行参数则是第二个参数开始传入。

```js
function fn(msg) {
  console.log(msg)
  return this.a
}
var obj = {
  a: 1
}
var msg = '这是一条消息'

var bindFn = fn.bind(obj, msg)

var result1 = fn.apply(obj, [msg]) // 立即执行 输出 '这是一条消息'
var result2 = fn.call(obj, msg) // 立即执行 输出 '这是一条消息'

console.log(bindFn()) // 调用才执行 输出 '这是一条消息' 1

console.log(result1, result2) // 1 1

```
