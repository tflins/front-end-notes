# tflin 的前端知识体系

万丈高楼平地起，稳扎稳打，构建自己的前端知识体系。
在金庸的武侠世界中，习武之人讲究的是融汇贯通，打通自身经脉，才能达到内力生生不息。我虽非习武之人，但却是一名计算机从业者，需要足够扎实的理论基础才能撑得起各种实践。前端的知识太多太多，零零散散，需要从点到面去扩展，再由面到点的去深入，将这些知识联系起来构建自己的知识体系，加深理解，以便做到融会贯通。构建自己的知识体系的时候，用自己的话，将这些知识讲出来，讲清楚，以达到加深理解，整个过程中逐渐融汇贯通，业精于勤荒于嬉，行成于思毁于随。

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
  - 垃圾回收机制
- this/bind/apply/call
  - [JavaScript 中的 this](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/JavaScript%20%E4%B8%AD%E7%9A%84%20this.md)
  - [如何改变 this 指向](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/%E5%A6%82%E4%BD%95%E6%94%B9%E5%8F%98%20this%20%E6%8C%87%E5%90%91.md)
  - [bind 和 apply、call 的区别](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/apply%20%E5%92%8C%20apply%E3%80%81bind%20%E7%9A%84%E5%8C%BA%E5%88%AB.md)
  - [如何实现 apply、call](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%20apply%E3%80%81call.md)
  - [如何实现 bind](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/this%E3%80%81bind%E3%80%81apply%E3%80%81call/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%20bind.md)
- 原型、继承
  - [JavaScript new 操作符的过程](https://s0developer0mozilla0org.icopy.site/en-US/docs/Web/JavaScript/Reference/Operators/new)
  - [实现 new 操作符](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E5%8E%9F%E5%9E%8B%E3%80%81%E7%BB%A7%E6%89%BF/%E5%AE%9E%E7%8E%B0%20new%20%E6%93%8D%E4%BD%9C%E7%AC%A6.md)
  - [JavaScript 的原型介绍](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E5%8E%9F%E5%9E%8B%E3%80%81%E7%BB%A7%E6%89%BF/JavaScript%20%E7%9A%84%E5%8E%9F%E5%9E%8B%E4%BB%8B%E7%BB%8D.md)
  - [原型链是什么](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E5%8E%9F%E5%9E%8B%E3%80%81%E7%BB%A7%E6%89%BF/%E5%8E%9F%E5%9E%8B%E9%93%BE%E6%98%AF%E4%BB%80%E4%B9%88.md)
  - [如何实现继承](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/JavaScript/%E5%8E%9F%E5%9E%8B%E3%80%81%E7%BB%A7%E6%89%BF/%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%BB%A7%E6%89%BF.md)
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
  - [谈谈原生 Ajax](https://tflin.com/2018/08/25/%E8%B0%88%E8%B0%88%E5%8E%9F%E7%94%9F%20Ajax/)

### CSS

- [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
- 行内元素/块状元素
- [盒模型](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/CSS/%E7%9B%92%E6%A8%A1%E5%9E%8B.md)
- BFC/IFC
- 浮动/清除浮动
- 外边距合并
- 居中和常用布局
- flex 布局

## 前端框架

### vue

- mvvm
  - 什么是 mvvm
  - 对 mvvm 的理解
- [vue 运行的整体流程](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/vue/vue%20%E8%BF%90%E8%A1%8C%E7%9A%84%E6%95%B4%E4%BD%93%E6%B5%81%E7%A8%8B.md)
- [new vue 做了什么](https://github.com/tflins/front-end-notes/blob/master/doc/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/vue/new%20vue%20%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88.md)
- vue 双向绑定的原理
- [vue 的生命周期](https://ustbhuangyi.github.io/vue-analysis/v2/components/lifecycle.html#beforecreate-created)
- $nextTick 的原理
- 组件通信
- 状态管理
- vue diff 算法

## 前端工程化

### 模块化

- 早期的模块化
- AMD 和 CMD
- CommonJS 和 ES Module

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

## 移动端

- [浅谈移动端 100 vh 的坑，及解决方案和原理](https://tflin.com/2020/09/15/%E6%B5%85%E8%B0%88%20100vh%20%E5%9C%A8%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%B8%AD%E7%9A%84%E5%B7%AE%E5%BC%82%E5%8F%8A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/)

## 前端安全

- XSS 跨站脚本攻击
- CSRF 跨站请求伪造

## 计算机网络

### http/https

- [http 常见的状态码](https://github.com/tflins/front-end-notes/blob/master/doc/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/http/http%20%E5%B8%B8%E8%A7%81%E7%8A%B6%E6%80%81%E7%A0%81.md)
- http 缓存策略
- http 常见方法
- keep-alive
