# tflin 的前端知识体系

万丈高楼平地起，稳扎稳打，构建自己的前端知识体系。

![构建前端知识体系.png](http://ww1.sinaimg.cn/large/006iQgpIgy1ghctgcdg48j30yf10edjm.jpg)

---

## 前端基础

### JavaScript

- 数据类型
  - [数据类型](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md)
  - [判断数据类型](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/%E5%88%A4%E6%96%AD%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md)
  - [null 和 undefined](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/null%20%E5%92%8C%20undefined.md)
  - [== 和 ===](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/%3D%3D%20%E5%92%8C%20%3D%3D%3D.md)
  - [四则运算](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/%E5%9B%9B%E5%88%99%E8%BF%90%E7%AE%97.md)
- 执行上下文、作用域、闭包
  - [执行上下文](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E3%80%81%E4%BD%9C%E7%94%A8%E5%9F%9F%E3%80%81%E9%97%AD%E5%8C%85/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.md)
  - [作用域链](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E3%80%81%E4%BD%9C%E7%94%A8%E5%9F%9F%E3%80%81%E9%97%AD%E5%8C%85/%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.md)
  - [闭包](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E3%80%81%E4%BD%9C%E7%94%A8%E5%9F%9F%E3%80%81%E9%97%AD%E5%8C%85/%E9%97%AD%E5%8C%85.md)
- this/bind/apply/call
  - [JavaScript 中的 this](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/JavaScript%20%E4%B8%AD%E7%9A%84%20this.md)
  - [如何改变 this 指向](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/%E5%A6%82%E4%BD%95%E6%94%B9%E5%8F%98%20this%20%E6%8C%87%E5%90%91.md)
  - [bind 和 apply、call 的区别](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/apply%20%E5%92%8C%20apply%E3%80%81bind%20%E7%9A%84%E5%8C%BA%E5%88%AB.md)
  - [如何实现 apply、call](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%20apply%E3%80%81call.md)
  - [如何实现 bind](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%20bind.md)
- 原型、继承
  - JavaScript new 操作符的过程
  - 实现 new 操作符
  - JavaScript 的原型介绍
  - 原型链是什么
  - 如何实现继承
- Promise、async/await
  - Promise 是什么
  - 如何实现 Promise
  - async/await
  - async/await 和 Promise 的区别
- EventLoop
  - JavaScript 的 EventLoop
  - 浏览器的 EventLoop 和 node 的 EventLoop 的区别
  - 宏任务和微任务的区别
- 深浅拷贝
  - 如何实现浅拷贝
  - 如何实现深拷贝
- Ajax
  - 什么是 Ajax
  - 实现一个 Ajax

### CSS

- position
- 行内元素/块状元素
- 盒模型
  - 什么是盒模型
  - 如何改变盒模型
  - 各个盒模型的好处
- BFC/IFC
- 外边距合并
- 居中和常用布局
- flex 布局

## 前端框架

### vue

- mvvm
  - 什么是 mvvm
  - 对 mvvm 的理解
- vue 双向绑定的原理
- [vue 的生命周期](https://ustbhuangyi.github.io/vue-analysis/v2/components/lifecycle.html#beforecreate-created)
- $nextTick 的原理
- 组件通信
- 状态管理
- vue diff 算法

## 前端工程化

### webpack

- webpack 是什么
- webpack 的构建流程
- loader 和 plugin
- webpack 层面如何做性能优化
- 介绍一下 webpack 的 dll

### babel

- babel 的工作原理
- 介绍一下 AST

## 性能优化
