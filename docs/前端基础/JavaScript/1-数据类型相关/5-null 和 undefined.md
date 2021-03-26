# null 和 undefined

在 JavaScript 中 `null == undefined` 为 `true` ，null 表示为空，是 JavaScript 的关键字，常用来描述 “空值”，从逻辑上看 null 表示一个空对象指针。undefined 是声明一个变量但没有进行初始化的时候的默认值，表述变量未初始化。

## 相同点

- 都是原始数据类型，都没有函数可以调用。
- 在转成 boolean 类型的时候，都是 false

## 不同点

- null 是关键词、undefined 不是关键词

  在非严格模式下：

  ```js
  var null // 报错：意外的标记
  var undefined // 不报错
  ```

- `typeof null` 为 `'object'` ，`typeof undefined` 为 `'undefined'`
- null 转成数字的时候值为 0 ，undefined 转为数字是 `NaN`
