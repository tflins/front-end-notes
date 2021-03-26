# 实现 new 操作符

new 操作符可以把一个构造函数实例化成一个对象。

---

## new 操作符到底做了什么

1. 创建一个空对象（即 `{}`）且构造函数的 this 对象引用该对象，同时继承了该函数的原型。
2. 方法和属性被加入到 this 引用的对象中。
3. 如果该函数没有返回对象，则返回 this。

## 实现

```js
function newFn(fn, ...args) {
  // 不是一个函数，抛出异常
  if (typeof fn !== 'function') throw new Error(`${fn} not a function`)
  // 1. 创建一个空对象 obj
  const obj = {}
  // 2. 继承该函数的原型
  Object.setPrototypeOf(obj, fn.prototype)
  // 3. 将构造函数的 this 的上下文指向 obj，同时传入剩下的参数，并执行
  const result = fn.apply(obj, args)
  // 4. 如果构造函数返回的是一个对象则将这个返回值正常返回，否则返回第一步创建的 obj
  return result instanceof Object ? result : obj
}
```

通过构造函数实例化出来的对象，可以访问到构造函数的原型对象，所以使用 `Object.setPrototype` 将两者联系起来。`Object.setPrototypeOf(obj, fn.prototype)` 等同于 `obj.__proto__ = fn.prototype`。之所以不这么做，是因为通常认为 `Object.setPrototype` 比直接使用 `Object.prototype.__proto__` 更安全。

## 相关链接

- [new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [重学 JS 系列：聊聊 new 操作符](https://juejin.im/post/6844903789070123021)
- [手写代码/new.js](https://github.com/tflins/front-end-review/blob/master/%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81/new.js)
