# 如何改变 this 指向

---

## 通过 new

使用 new 操作符可以将一个构造函数构造成一个对象，构造函数的 this 永久绑定到这个正在构造的对象。

## 通过 apply、call

每个函数的原型里面都有一个非继承的 apply、和 call 方法，这两方法可以改变一个函数的 this 指向。

## 通过 bind

bind 和 apply、call 方法类似，将一个新的执行上下文绑定到一个函数中，bind 与上两者的区别是：bind 返回的一个改变了 this 指向的函数，而 apply 和 call 则是立即执行函数。
