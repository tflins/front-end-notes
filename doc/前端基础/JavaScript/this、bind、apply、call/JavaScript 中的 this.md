# JavaScript 中的 this

在 ECAMScript 规范中，这样定义 this

> this 关键字执行为当前执行环境的 ThisBinding

在 MDN 中这样解释 this

> 在绝大多数情况下，函数的调用方式决定了this的值。

可以这样理解，在 JavaScript 中 this 的指向是调用时决定的，而不是在创建时决定的。如此一来，JavaScript 的 this 指向具有一定的迷惑性，简而言之，JavaScript 的 this 具有运行时绑定的特性。

---

## 全局上下文中的 this

全局上下文中的 this 指向全局对象。
