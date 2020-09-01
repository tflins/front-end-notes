# vue 整体运行流程

---

```js
new Vue() -> _init -> $mount -> compile() -> render() -> vDomTree -> patch() -> Dom
```

## _init

_init 阶段，vue 会进行一系列的初始化操作，比如合并配置项、初始化生命周期、初始化事件中心、初始化渲染、初始化状态等。vue 的数据劫持就是在 initState 阶段进行的。

## $mount

vue 中，分为 运行时编译(Runtime + compiler) 和 只运行时(Runtime Only) 两个版本，使用 Runtime Only 版本的时候，通常是使用 webpack 的 vue-loader 将 .vue 文件编译成 js，因为只包含运行时的代码，不包含编译的代码，所以 Runtime Only 版本的 vue.js 会更轻量。

Runtime + compiler 版本就会在运行时编译，比如你需要将 `template` 编译成 render 函数，就需要这个版本，这个版本包含 vue 的编译器。

## compiler

vue 2.x 版本中，template 会被编译成 render 函数，运行 runder 函数得到 vDom。

编译可以分为 3 个阶段：`parse`、`optimize`、`generate`。

`parse` 阶段会去解析 `template` ，将 vue 模板解析成 抽象语法树(AST)。

`optimize` 阶段，会针对 `parse` 阶段生成的 AST 去进行优化。会去标记静态节点，因为静态的节点是不会去改变的，vue diff dom 的时候会跳过静态节点，这样会节省大量的编译时间。

`generate` 阶段会将 AST 转换成可执行的 JavaScript 代码，也就是 render 函数。

这样经过 `parse` -> `optimeze` -> `generate` 3 个阶段，就可以将 template 编译成获取 vDom 所需的 render 函数了。
