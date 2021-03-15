# 如何实现 bind

JavaScript 中的 bind 方法，类似于 apply 和 call 可以改变函数的 this 指向。但与 apply、call 不同的是，bind 不会立即执行，而是返回一个改变了 this 指向的函数。

---

## 第一个版本 借助 apply 或者 call

```js
// 借助 apply
Function.prototype.bind2 = function (content = window, ...args) {
  return () => {
    return this.apply(content, args)
  }
}

// 借助 call
Function.prototype.bind3 = function(content = window, ...args) {
  return () => {
    return this.call(content, ...args)
  }
}
```

```js
Function.prototype.bind = function (content = window, ...args) {
  if (typeof this !== 'function') throw new Error(`${this} not a function`)
  return () => {
    const fn = Symbol('fn')
    content[fn] = this
    const reslut = content[fn](...args)

    delete content[fn]
    return result
  }
}
```
