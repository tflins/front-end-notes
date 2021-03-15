# new Vue 的时候做了什么

new Vue 的时候，调用了 vue 的构造函数。vue 的构造函数中调用了其原型上的 `_init()` 方法，`_init()` 方法主要是对 vue 进行一系列的初始化操作。

vue 的构造函数在 [src/core/instance/index.js](src/core/instance/index.js) 中：

```js
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 初始化
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

## 包装函数

```js
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

vue 使用了一系列的包装函数往构造函数的原型上添加方法和属性，`_init` 方法便是在 `initMixin(Vue)` 中添加：

在 [src/core/instance/init.js](src/core/instance/init.js) 中

```js
export function initMixin (Vue: Class<Component>) {
  // vue 构造函数的初始化操作
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    // 每个组件都有一个自增的 uid
    vm._uid = uid++

    let startTag, endTag
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    // 一系列的初始化操作
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)

    // 触发 beforeCreate 钩子，尚未初始化数据
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props

    // 初始化状态 响应式对象主要在这里处理
    initState(vm)
    initProvide(vm) // resolve provide after data/props

    // created 钩子，说明上述的操作已执行完成
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```

在 `Vue.protoype._init` 中，主要做了：合并配置项、初始化生命周期、初始化事件中心、初始化渲染、初始化状态等，最终调用 `$mount` 方法挂载 vm。
