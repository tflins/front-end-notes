# JavaScript 中的 this

在 ECAMScript 规范中，这样定义 this

> this 关键字执行为当前执行环境的 ThisBinding

在 MDN 中这样解释 this

> 在绝大多数情况下，函数的调用方式决定了 this 的值。

可以这样理解，在 JavaScript 中 this 的指向是调用时决定的，而不是在创建时决定的。如此一来，JavaScript 的 this 指向具有一定的迷惑性，简而言之，JavaScript 的 this 具有运行时绑定的特性。

---

## 全局执行上下文中的 this

全局执行上下文（任何函数外部）中的 this 指向全局对象。

```js
// 在浏览器中全局执行上下文是 window 对象
console.log(this === window) // true

this.a = '1997'

console.log(this.a === window.a) // true

console.log(a, this.a, window.a) // 1 1 1
```

## 函数执行上下文中的 this

在函数内部的 this 指向，取决于函数调用的方式。

### 直接调用

在非严格模式下，this 指向全局对象

```js
function fn() {
  console.log(this === window) // true
  console.log(this) // Window {TEMPORARY: 0, PERSISTENT: 1, Symbol(Symbol.toStringTag): "Window", constructor: ƒ}
}
fn() // true
```

在严格模式下，如果 this 没有被执行环境定义，则保持为 `undefined`，如以下代码，第一个例子中的全局函数是直接调用则 this 为 undefined，第二个例子全局对象作为 window 对象的方法调用，则 this 为 window。

```js
function fn() {
  'use strict'

  console.log(this === window) // false
  console.log(this) // undefined
}
fn()
```

```js
function fn() {
  'use strict'

  console.log(this === window) // true
  console.log(this) // Window {TEMPORARY: 0, PERSISTENT: 1, Symbol(Symbol.toStringTag): "Window", constructor: ƒ}
}
window.fn()
```

### 作为对象的方法调用

当函数作为对象的方法调用时，函数的 this 是调用该函数的对象。

如下列代码，fn 作为对象 obj 的一个方法来调用，this 的指向便是调用这个方法的对象 obj。

```js
var value = 1943

const obj = {
  value: 1997,
  fn: function () {
    console.log(this.value) // 1997
  }
}

obj.fn()
```

但值得一提的是，下列代码中的 fn 函数又被赋值给 fn2，fn2 直接调用，this 指向 window（浏览器中），所以打印的值为 1943

```js
var value = 1943

const obj = {
  value: 1997,
  fn: function () {
    console.log(this.value) // 1997
  }
}

const fn2 = obj.fn
fn2()
```

## call()、apply()

使用 call() 或 apply() 方法改变函数的执行上下文，函数的 this 指向为传入的执行上下文。

```js


```

## bind()

## 构造函数

## 箭头函数
