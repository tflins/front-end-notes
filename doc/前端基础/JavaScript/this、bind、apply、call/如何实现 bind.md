# 如何实现 bind

---

```js
Function.prototype.bind = function (content = window, ...args) {
  return function () {
    return content.apply(content, args)
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
