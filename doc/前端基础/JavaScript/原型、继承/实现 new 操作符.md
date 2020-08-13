# 实现 new 操作符

---

```js
function newFn(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  fn.apply(obj, args)

  return obj
}
```
