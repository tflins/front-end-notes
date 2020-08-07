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
