# 如何实现 apply、call

---

## apply 规范

## 实现 apply

### 第一版本 借助 call 或 bind

借助原生提供的 call、bind 方法来改变函数的 this 指向，这种方式比较简单

```js
// 借助 call
Function.prototype.apply2 = function(content = window, args = []) {
  return this.call(content, ...args)
}

// 借助 bind
Function.prototype.apply3 = function(content = window, args = []) {
  return this.bind(content, ...args)()
}

const obj = {
  a: 100
}

function fn(a, b) {
  console.log(a + b)
  console.log(this.a)
}

fn.apply2(obj, [1, 2]) // 3 100
fn.apply3(obj, [1, 2]) // 3 100
```

### 第二版本

在传入的执行山下文对象（content）中动态创建一个属性，这个属性指向函数，再调用刚才 content 中创建的方法，这样 this 就会执行调用该方法的对象，也就是传入的 content。JavaScript 中的 this 指向具体参考: [JavaScript 中的 this](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/JavaScript%20%E4%B8%AD%E7%9A%84%20this.md)

```js
Function.prototype.apply2 = function(content = window, args = []) {
  content.fn = this
  const result = content.fn(...args)
  return result
}
```

### 第三个版本

次版本为上一个版本的改良版，主要是加上了异常判断，还有给传入的执行上下文动态添加方法的时候，借助的 es6 新增的 symbol 保证了 key 的唯一性。最后再将临时创建的方法删掉。

```js
Function.prototype.apply2 = function(content = window, args = []) {
  if (typeof this !== 'function') {
    throw new Error(`${this} not a function`)
  }
  const fn = Symbol('fn')
  content[fn] = this
  const result = content(...args)
  delete content[fn]
  return result
}
```
