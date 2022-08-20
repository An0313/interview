// 面试题
import { iTagMnum, problemTagMnum as tagMnum } from './problemTag'

export interface iProblemItem {
  id: number,
  title: string,
  tags: Array<string | number>,
  answer: string[]
}

export const problem: iProblemItem[] = [
  {
    id: 1,
    title: 'H5和小程序有什么区别',
    tags: [tagMnum.html, tagMnum.wx],
    answer: [
      '运行环境的不同',
      'H5运行环境为浏览器',
      '浏览器具有跨平台性（同时兼容PC端、移动端、Windows、Linux、Android与ios）',
      '容易发布，无需审核',
      '',
      '微信小程序运行环境为微信App',
      '用户体验好,使用体验比H5更加流畅',
      '可以获取的系统级权限更多，功能更为强大',
      '只能在微信app内运行',
      '受微信管控，功能的开发取决于微信的赋能',
    ]
  },
  {
    id: 2,
    title: '重绘和回流是什么',
    tags: [tagMnum.html, tagMnum.css],
    answer: [
      '我们都知道一个页面从加载到完成，首先是构建DOM树，然后根据DOM节点进行几何布局形成render树(渲染树)，当渲染树构建完成后，页面就根据DOM树开始布局，渲染树也根据设置的样式渲染这些节点',
      '',
      '回流（Reflow）',
      '上面我们知道，我们会根据 渲染树 去遍历渲染，所以当我们的节点发生改变时，浏览器重新渲染部分节点或者全部文档，我们称这个过程为回流',
      '大致整理会导致回流的一些操作',
      '1、页面首次渲染',
      '2、浏览器窗口大小发生改变',
      '3、元素尺寸或位置发生改变',
      '4、元素内容变化（文字数量或图片大小等等）',
      '5、元素字体大小变化',
      '6、添加或者删除可见的DOM元素',
      '7、激活CSS伪类（例如：:hover）',
      '8、查询某些属性或调用某些方法',
      '',
      '重绘（Repaint）',
      '当我们操作的节点上的元素并不导致元素位置发生变化时，比如color,background-color,visibility(注意虽然节点隐藏了，但是元素还在，并且位置也不会发生变化),浏览器会将新的样式赋值给这些节点，我们称这个过程为重绘',
      '',
      '我们把页面文档比作一个积木的话，我们抽离中间或者底部的一个积木块，我们的积木会重新找到重心并且稳固下来，我们把这个过程称之为回流',
      '我们在某个积木上涂上颜色，这并不会造成整个积木的稳定，我们把这个过程叫做重绘',
      '所以说回流一定会触发重绘，重绘不一定触发回流',
    ]
  },
  {
    id: 3,
    title: '如何避免重绘与回流',
    tags: [tagMnum.html, tagMnum.css, tagMnum.optimize],
    answer: [
      '1、避免使用 table 布局',
      '2、尽可能在 DOM 树的最末端改变 class',
      '3、避免设置多层内联样式',
      '4、将动画效果应用到 position 属性为 absolute 或 fixed 的元素上',
      '5、避免使用CSS表达式（例如：calc()）',
      '6、避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性',
      '7、避免频繁操作 DOM ，把DOM离线后修改，创建一个 documentFragment ，在它上面应用所有 DOM 操作，最后再把它添加到文档中',
      '8、也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘',
      '9、避免频繁读取会引发回流 / 重绘的属性，如果确实需要多次使用，就用一个变量缓存起来',
      '10、对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流'
    ]
  },
  {
    id: 4,
    title: '本地存储与cookie存储区别',
    tags: [tagMnum.js],
    answer: [
      '1、 cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存',
      '2、 cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大',
      '3、 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭',
      '4、 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便'
    ]
  },
  {
    id: 5,
    title: '移动端布局的自适应如何做',
    tags: [tagMnum.html, tagMnum.css, tagMnum.js],
    answer: [
      '<meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1">',
      'rem, vw',
    ]
  },
  {
    id: 6,
    title: '导入样式时，使用 link 和 @import 有什么区别',
    tags: [tagMnum.css],
    answer: [
      '1、link是HTML标签，@import是css提供的',
      '2、link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载',
      '3、link没有兼容性问题，@import不兼容ie5以下',
      '4、link可以通过js操作DOM动态引入样式表改变样式，而 @import不可以'
    ]
  },
  {
    id: 7,
    title: '浏览器内多个标签页之间的通信方式有哪些',
    tags: [tagMnum.js],
    answer: [
      '1、WebSocket （可跨域）',
      '2、postMessage（可跨域）',
      '3、Worker之SharedWorker',
      '4、Server-Sent Events',
      '5、localStorage',
      '6、BroadcastChannel',
      '7、Cookie'
    ]
  },
  {
    id: 8,
    title: 'vue v-model 的原理',
    tags: [tagMnum.vue],
    answer: [
      'v-model只不过是一个语法糖',
      '',
      '<input :value="msg" @input="msg=$event.target.value">',
      '',
      "model: { prop: 'value',event: 'input'}",
      "this.$emit('input', $event.target.value);",
    ]
  },
  {
    id: 9,
    title: '怎么给 vue 定义全局的方法',
    tags: [tagMnum.vue],
    answer: [
      'vue2',
      '1、挂载到 Vue 的 prototype上',
      '2、利用全局混入mixin',
      '',
      'vue3',
      'main.js => app.config.globalProperties.xxx = () => {}'
    ]
  },
  {
    id: 10,
    title: 'keep-alive 有关的生命周期是哪些',
    tags: [tagMnum.vue],
    answer: [
      'activated 和 deactivated 两个生命周期函数',
      '',
      '当 keep-alive 组件激活时，触发 activated ， keep-alive 组件停用时调用 deactivated'
    ]
  },
  {
    id: 11,
    title: '你知道 vue 中 key 的原理吗',
    tags: [tagMnum.vue],
    answer: [
      '便于Diff时更高效的进行节点查询对比',
      '',
      '有key时，通过createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)生成的key与索引映射关系，直接通过新子节点的key查询是否存在于旧子节点序列中',
      '无key时，必须遍历旧子节点序列，依次与新子节点对比判断是否为新增节点',
    ]
  },
  {
    id: 12,
    title: '你知道 style 加 scoped 属性的用途和原理吗',
    tags: [tagMnum.vue],
    answer: [
      '用途：防止全局同名CSS污染',
      '',
      '原理：在标签加上 v-data-something 属性，再在选择器时加上对应 [v-data-something] ，即 CSS 带属性选择器，以此完成类似作用域的选择方式',
    ]
  },
  {
    id: 13,
    title: '如何在子组件中访问父组件的实例',
    tags: [tagMnum.vue],
    answer: [
      '1、直接在子组件中通过 this.$parent.event 来调用父组件的方法',
      '',
      '2、在子组件里用 $emit 向父组件触发一个事件，父组件监听这个事件',
      '',
      '3、父组件把方法传入子组件中，在子组件里直接调用这个方法',
    ]
  },
  {
    id: 14,
    title: 'babel-polyfill 主要是用来做什么的',
    tags: [tagMnum.vue],
    answer: [
      'Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign ）都不会转码',
      '',
      '举例来说，ES6在Array对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片',
      '',
      'Babel 默认不转码的API非常多，详细清单可以查看babel-plugin-transform-runtime模块的definitions.js文件',
    ]
  },
  {
    id: 15,
    title: '说说你对 vue 错误处理的了解',
    tags: [tagMnum.vue],
    answer: [
      '分为 errorCaptured 与errorHandler',
      '',
      'errorCaptured 是组件内部钩子，可捕捉本组件与子孙组件抛出的错误，接收 error、vm、info 三个参数，return false后可以阻止错误继续向上抛出',
      '',
      'errorHandler 为全局钩子，使用 Vue.config.errorHandler 配置，接收参数与 errorCaptured 一致，2.6后可捕捉 v-on 与 promise 链的错误，可用于统一错误处理与错误兜底',
    ]
  },
  {
    id: 16,
    title: '事件 e.target 和 e.currentTarget 的区别',
    tags: [tagMnum.vue],
    answer: [
      'event.currentTarget 指向事件所绑定的元素',
      '',
      'event.target 始终指向事件发生时的元素',
    ]
  },
  {
    id: 17,
    title: 'vue 文件中 style 与 script 是必须的吗？',
    tags: [tagMnum.vue],
    answer: [
      '1、如果没有 render 函数，那么 template 是必须要有的，否则报错',
      '',
      '2、如果有 render 函数，那么可以没有 template, style，但是要有 script',
      '',
      '3、可以只有 <template>，而 script、style 是非必须的'
    ]
  },
  {
    id: 18,
    title: 'vue怎么实现强制刷新组件',
    tags: [tagMnum.vue],
    answer: [
      '1、v-if',
      '2、this.$forceUpdate()',
      '3、更改 key'
    ]
  },
  {
    id: 19,
    title: 'vue 自定义事件怎么接收子组件的多个参数',
    tags: [tagMnum.vue],
    answer: [
      'this.$emit("eventName",data)',
      'data为一个对象'
    ]
  },
  {
    id: 20,
    title: '$attrs 和 $listeners的使用场景有哪些',
    tags: [tagMnum.vue],
    answer: [
      '多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。如果为了传递数据而无中间层处理，则可以使用Vue中提供的$attrs和$listeners'
    ]
  },
  {
    id: 21,
    title: '说说你对 vue 的表单修饰符 .lazy 的理解',
    tags: [tagMnum.vue],
    answer: [
      'v-model 默认的触发条件是 input 事件, 加了 .lazy 修饰符之后, v-model 会在 change 事件触发的时候去监听'
    ]
  },
  {
    id: 22,
    title: '怎么修改 vue 打包后生成文件路径',
    tags: [tagMnum.vue, tagMnum.pack, tagMnum.webpack, tagMnum.vite],
    answer: [
      'webpack: vue.config.js 中设置 outputDir ',
      '',
      'vite: vite.config.js 中设置 base'
    ]
  },
  {
    id: 23,
    title: 'vue 中什么是递归组件',
    tags: [tagMnum.vue],
    answer: [
      '当前注册一个vue组件定义 name 为 "node-tree" ，在组件 template 内部 <node-tree></node-tree>'
    ]
  },
  {
    id: 24,
    title: '怎么访问到子组件的实例或者子元素',
    tags: [tagMnum.vue],
    answer: [
      'this.$children',
      '',
      'this.$refs',
      '',
      'VUE3：import {ref} from “vue”;'
    ]
  },
  {
    id: 25,
    title: 'vue 双向绑定原理是什么',
    tags: [tagMnum.vue],
    answer: [
      'VUE2: 通过 Object.defineProperty 去监听对象的每一个属性，然后在 get , set 方法中通过发布订阅者模式来实现的数据响应，但是存在一定的缺陷，比如只能监听已存在的属性，对于新增删除属性就无能为力了，同时无法监听数组和对象的变化',
      '',
      'VUE3: 是采用数据劫持结合发布者-订阅者模式的方式，通过 new Proxy() 来劫持各个属性的 setter ， getter ，在数据变动时发布消息给订阅者，触发相应的监听回调'
    ]
  },
  {
    id: 26,
    title: '使用 vue 渲染大量数据时应该怎么优化',
    tags: [tagMnum.vue, tagMnum.optimize],
    answer: [
      '1、对与一次获取全部数据时可使用 Object.freeze',
      '',
      '2、分也加载或者分页渲染',
      '',
      '3、虚拟滚动'
    ]
  },
  {
    id: 27,
    title: '<template></template> 标签有什么作用',
    tags: [tagMnum.vue, tagMnum.optimize],
    answer: [
      'template作用：当做一个不可见的包裹元素，不显示在页面中，减少了不必要的dom元素',
      '',
      '常见场景：解决v-for、v-if等一起使用问题',
    ]
  },
  {
    id: 28,
    title: 'vue 的 is 这个特性主要用在哪些方面',
    tags: [tagMnum.vue, tagMnum.optimize],
    answer: [
      '1、解决限制元素',
      '有些 HTML 标签内只能使用特定元素，例如 <ul> <table> <select> 等元素。这会导致使用这些元素时遇到一些问题，例如：',
      '<ol><my-component></my-component></ol>',
      '这个 myComponent 自定义组件会被作为无效内容提升到外部，导致渲染结果出错，解决上述问题可使用 is 特性',
      '<ol><li is="my-component"></li></ol>',
      '',
      '2、动态组件',
      '<component :is="组件名称变量"></component>'
    ]
  },
  {
    id: 29,
    title: 'vue 的 :class 和 :style 有几种使用方式',
    tags: [tagMnum.vue],
    answer: [
      ':class',
      '1、绑定变量',
      '2、绑定对象',
      '3、绑定一个数组',
      '4、绑定三元表达式',
      '',
      ':style',
      '1、绑定变量',
      '2、绑定对象',
      '3、绑定函数返回值',
      '4、绑定三元表达式'
    ]
  },
  {
    id: 30,
    title: 'vue 组件中写 name 选项有什么作用',
    tags: [tagMnum.vue],
    answer: [
      '项目使用 keep-alive 时，可搭配组件 name 进行缓存过滤',
      '',
      '递归组件时需要调用自身 name',
      '',
      'vue-devtools 调试工具里显示的组见名称是由组件 name 决定的'
    ]
  },
  {
    id: 31,
    title: 'SSR 解决了什么问题',
    tags: [tagMnum.optimize],
    answer: [
      '优化首屏加载速度',
      '',
      'SEO问题'
    ]
  },
  {
    id: 32,
    title: '说说你对 vue 的 extend 的理解',
    tags: [tagMnum.vue],
    answer: [
      '创建、复用组件',
      '',
      '实际应用: 页面内不引入 toast 组件直接调用 this.toast(“提示”) 全局方法，页面显示提示弹窗'
    ]
  },
  {
    id: 33,
    title: 'vue 中常用的指令有哪些',
    tags: [tagMnum.vue],
    answer: [
      'v-if',
      'v-else-if',
      'v-else',
      'v-for',
      'v-text',
      'v-html',
      'v-show',
      'v-on',
      'v-bind',
      'v-model',
      'v-solt',
    ]
  },
  {
    id: 34,
    title: '第一次加载页面时会触发哪几个钩子',
    tags: [tagMnum.vue],
    answer: [
      'beforeCreate => created => beforeMount => mounted',
    ]
  },
  {
    id: 35,
    title: 'vue 生命周期总共有几个阶段',
    tags: [tagMnum.vue],
    answer: [
      'beforeCreate：在 new 一个 vue 实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建',
      '',
      'created：data 和 methods 都已经被初始化好了。（如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作）',
      '',
      'beforeMount：在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的',
      '',
      'mounted：Vue 实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 （如果我们想要通过插件操作页面上的 DOM 节点，最早可以在和这个阶段中进行）',
      '',
      'beforeUpdate：页面中的显示的数据还是旧的，data 中的数据是更新后的， 页面还没有和最新的数据保持同步',
      '',
      'updated：页面显示的数据和 data 中的数据已经保持同步了，都是最新的',
      '',
      'beforeDestroy：Vue 实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁',
      '',
      'destroyed：这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了',
    ]
  },
  {
    id: 36,
    title: 'react 和 vue 的区别',
    tags: [tagMnum.vue, tagMnum.react],
    answer: [
      'react 是 facebook 官方维护的，而 vue 是尤雨溪本人维护的。并且在其他周边库，如 react-rouer 和 redux ，是 react 社区在维护的。而 vuex 和 vue-router 都是尤雨溪在维护的',
      '',
      '监听数据变化的实现原理不同',
      '',
      '模板渲染方式，react 通过 JSX 渲染模板， vue 是通过拓展 HTML 语法进行渲染（本质上都是模版）',
      '',
      'vue 提供了一系列的api， 而react的api 很少',
      '',
      'vue的思想是响应式的，也就是基于是数据可变的，实现了数据的双向绑定，react整体是函数式的思想，是单向数据流，推崇结合immutable来实现数据不可变',
    ]
  },
  {
    id: 37,
    title: 'react 和 vue 的优缺点',
    tags: [tagMnum.vue, tagMnum.react],
    answer: [
      'vue 优点：',
      'vue 比 react 更容易上手',
      '官方文档很清晰',
      '提供了指令，过滤器等，可以非常方便，快捷地操作DOM,因此项目写起来更加简单',
      '',
      'vue 缺点：',
      'emmm...',
      '',
      'react 优点：',
      '可配置项多（对于大牛是优点）',
      'react社区更为繁荣',
      '扩展更强大',
      '',
      'react 缺点：',
      '学习路线陡，上手较难',
      '',
      '共同的缺点：',
      '不利于 SEO',
      '首屏加载慢',
    ]
  },
  {
    id: 38,
    title: 'react 和 vue 的共同点',
    tags: [tagMnum.vue, tagMnum.react],
    answer: [
      '都比较轻便',
      '',
      '都在使用Virtual DOM',
      '',
      '都提供了响应式和组件化的开发',
      '',
      '都有独立的路由系统，以及独立的状态管理库',
      '',
      '都将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库',
      '',
      '性能都很好',
      '',
      '都不需要操作 DOM',
      '',
    ]
  },
  {
    id: 39,
    title: '动态给 data 加新的属性会发生什么？怎样解决？',
    tags: [tagMnum.vue],
    answer: [
      '如果在实例创建之后添加新的属性到实例上，它不会触发视图更新',
      '',
      '解决方法：Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上',
    ]
  },
  {
    id: 40,
    title: 'v-if 和 v-for 的优先级？同时出现怎么优化？',
    tags: [tagMnum.vue],
    answer: [
      'v-for 优先级高',
      '',
      '避免出现这种情况，如果实在需要,应新增 template 标签来进行 v-if 判断, 在子元素里面使用 v-for',
    ]
  },
  {
    id: 41,
    title: 'vue data 什么是函数而不是对象',
    tags: [tagMnum.vue],
    answer: [
      '对象为引用类型，当重用组件时，由于数据对象都指向同一个 data 对象，当在一个组件中修改 data 时，其他重用的组件中的 data 会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（Object的实例），引用地址不同，则不会出现这个问题',
    ]
  },
  {
    id: 42,
    title: 'watch 和计算属性有什么区别',
    tags: [tagMnum.vue],
    answer: [
      '一个是侦听属性，一个是计算属性',
      '',
      '一个是为了应对复杂的逻辑计算，一个是对数据的变化作出反应',
      '',
      '一个是只有当缓存改变时才执行，一个是只要从新渲染就会执行',
      '',
      '一个有缓存，一个没有缓存',
    ]
  },
  {
    id: 43,
    title: '循环中 key 有什么作用',
    tags: [tagMnum.vue, tagMnum.react, tagMnum.optimize],
    answer: [
      '性能优化 diff 时更快更准确找到变化的位置'
    ]
  },
  {
    id: 44,
    title: 'v-show 和 v-if 有什么区别',
    tags: [tagMnum.vue, tagMnum.optimize],
    answer: [
      'v-if 不渲染 DOM，v-show 会渲染 DOM'
    ]
  },
  {
    id: 45,
    title: 'v-show 和 v-if 使用场景分别是什么',
    tags: [tagMnum.vue, tagMnum.optimize],
    answer: [
      'v-show 使用场景：',
      '1、预渲染需求',
      '2、需要频繁切换显示状态',
      '',
      'v-if 使用场景：',
      '少量切换显示状态，例如判断数据加载完成，显示页面内容'
    ]
  },
  {
    id: 46,
    title: 'vue 组件之间的通信都有哪些',
    tags: [tagMnum.vue, tagMnum.optimize],
    answer: [
      'props',
      '$emit / $on',
      '($parents / $children) / $refs',
      'Vuex',
      'Bus',
      '(provide / inject)',
      '($attrs / $listeners) '
    ]
  },
  {
    id: 47,
    title: 'head、body、!Doctype 标签的作用',
    tags: [tagMnum.html],
    answer: [
      '!DOCTYPE：',
      '它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令',
      '',
      'head：',
      '是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者',
      '该标签下所包含的部分可加入的标签有 style link meta title script 等标签',
      '',
      'body : ',
      '用于定义文档的主体, 包含了文档的所有内容',
      '该标签支持 html 的全局属性和事件属性'
    ]
  },
  {
    id: 48,
    title: 'h5 新特性有哪些',
    tags: [tagMnum.html, tagMnum.js],
    answer: [
      '!新增选择器 document.querySelector、document.querySelectorAll',
      '拖拽释放(Drag and drop) API',
      '媒体播放的 video 和 audio',
      '本地存储 localStorage 和 sessionStorage',
      '离线应用 manifest',
      '桌面通知 Notifications',
      '语意化标签 article、footer、header、nav、section',
      '增强表单控件 calendar、date、time、email、url、search',
      '地理位置 Geolocation',
      '多任务 webworker',
      '全双工通信协议 websocket',
      '历史管理 history',
      '跨域资源共享(CORS) Access-Control-Allow-Origin',
      '页面可见性改变事件 visibilitychange',
      '跨窗口通信 PostMessage',
      'Form Data 对象',
      '绘画 canvas'
    ]
  },
  {
    id: 49,
    title: '伪类和伪元素',
    tags: [tagMnum.html, tagMnum.css],
    answer: [
      '伪类：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的。',
      '例如：用户悬停在指定元素时，可以通过: hover 来描述这个元素的状态，虽然它和一般css相似，可以为已有元素添加样式，但是它只有处于 DOM 树无法描述的状态下才能为元素添加样式，所以称为伪类。',
      '',
      '伪元素：用于创建一些不在 DOM 树中的元素，并为其添加样式。',
      '例如，我们可以通过: before 来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见 这些文本，但是它实际上并不在 DOM 文档中。'
    ]
  },
  {
    id: 50,
    title: 'html5语义化标签有哪些',
    tags: [tagMnum.html],
    answer: [
      '<title>：页面标题',
      '',
      '<hn>： h1~h6，分级标题，<h1>与 < title > 协调有利于搜索引擎优化',
      '',
      '<ul>：无序列表',
      '',
      '<li>：有序列表',
      '',
      '<header>：页眉通常包括网站标志、主导航、全站链接以及搜索框',
      '',
      '<nav>：标记导航，仅对文档中重要的链接群使用',
      '',
      '<main>：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能',
      '',
      '<article>：定义外部的内容，其中的内容独立于文档的其余部分',
      '',
      '<section>：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分',
      '',
      '<aside>：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等',
      '',
      '<footer>：页脚，只有当父级是body时，才是整个页面的页脚',
      '',
      '<small>：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权',
      '',
      '<strong>：和 em 标签一样，用于强调文本，但它强调的程度更强一些',
      '',
      '<em>：将其中的文本表示为强调的内容，表现为斜体',
      '',
      '<mark>：使用黄色突出显示部分文本',
      '',
      '<figure>：规定独立的流内容（图像、图表、照片、代码等等）',
      '',
      '<figcaption>：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置 ',
      '',
      '<cite>：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题',
      '',
      '<blockquoto>：定义块引用，块引用拥有它们自己的空间',
      '',
      '<q>：短的引述（跨浏览器问题，尽量避免使用）',
      '',
      '<time>：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式',
      '',
      '<abbr>：简称或缩写',
      '',
      '<dfn>：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用',
      '',
      '<address>：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）',
      '',
      '<del>：移除的内容',
      '',
      '<ins>：添加的内容',
      '',
      '<code>：标记代码',
      '',
      '<meter>：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）',
      '',
      '<progress>：定义运行中的进度（进程）'
    ]
  },
  {
    id: 51,
    title: '使用语义化标签的优点',
    tags: [tagMnum.html, tagMnum.optimize],
    answer: [
      '易于用户阅读，样式丢失的时候能让页面呈现清晰的结构',
      '',
      '有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重',
      '',
      '方便屏幕阅读器解析，如盲人阅读器根据语义渲染网页',
      '',
      '有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐'
    ]
  },
  {
    id: 52,
    title: 'let const var',
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      'var',
      '在变量未赋值时，变量undefined（声明提升）',
      '作用域——var的作用域为方法作用域；只要在方法内定义了，整个方法内的定义变量后的代码都可以使用',
      '',
      'let',
      'ES6变量声明方式',
      '块级作用域',
      '在变量为声明前直接使用会报错',
      'let禁止重复声明变量，否则会报错；var可以重复声明',
      '',
      'const',
      'ES6变量声明方式',
      '块级作用域',
      'const为常量声明方式；声明变量时必须初始化，在后面出现的代码中不能再修改该常量的值',
      'const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动',
    ]
  },
  {
    id: 53,
    title: 'js 数据类型',
    tags: [tagMnum.js, tagMnum.es6, tagMnum.es10],
    answer: [
      '共有8种',
      'ES5中有6种：String、Number、Boolean、Null、Undefined、Object',
      'ES6新增了Symbol',
      'es10新增了bigInt',
    ]
  },
  {
    id: 54,
    title: 'for、for in、 for of、forEach 的区别',
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      'for：',
      '用来遍历数组',
      '可以使用 break，continue 跳出循环',
      '性能最好',
      '',
      'for in：',
      '适合遍历对象，还能遍历数组',
      '会查找循环原型上的属性',
      '循环的顺序不确定',
      '循环出的是key',
      '',
      'for of：',
      '可以使用 break，continue 跳出循环',
      '但只限于迭代器(iterator), 所以普通对象不能直接遍历',
      '可迭代的对象：Array, Map, Set, String, TypedArray, arguments对象等',
      '不会查找循环原型上的属性',
      '循环出的是value',
      '',
      'forEach：',
      '专门用来遍历数组',
      '无法使用break, continue, return控制'
    ]
  },
  {
    id: 55,
    title: 'iframe 优缺点',
    tags: [tagMnum.html],
    answer: [
      '优点：',
      '能原封不动的把嵌入的网页展现出来',
      '如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷',
      '网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用',
      '如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决',
      '',
      '缺点：',
      '会阻塞主页面的onload事件',
      'iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。会产生很多页面，不容易管理',
      'iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差',
      'iframe会不利于搜索引擎优化（SEO）',
      '很多的移动设备无法完全显示，设备兼容性差',
    ]
  },
  {
    id: 56,
    title: '变量提升与函数提升',
    tags: [tagMnum.js],
    answer: [
      '变量提升:',
      '即将变量声明提升到它所在作用域的最顶端',
      '使用var声明的变量，存在变量提升现象，但不会抛出异常，默认值会被设置为 undefined',
      '',
      '函数提升：',
      '函数声明式( function funName(){} )存在函数提升',
      '函数表达式(var funName = function(){} )的写法不存在函数提升，但存在变量提升',
    ]
  },
  {
    id: 57,
    title: 'vue-router 怎么配置404页面',
    tags: [tagMnum.vue, tagMnum.vueRouter],
    answer: [
      'path: "*" 放在最后',
    ]
  },
  {
    id: 58,
    title: 'vue-router 有几种模式？有哪些区别？',
    tags: [tagMnum.vue, tagMnum.vueRouter],
    answer: [
      '提供了两种路由模式：hash 模式和 history 模式',
      'hash 模式：',
      '1、url路径会出现“#”号字符',
      '2、hash值不包括在Http请求中，它是交由前端路由处理，所以不会向服务器发送请求',
      '',
      'history 模式：',
      '1、整个地址重新加载',
      '2、需要后台配置支持，没有后台配置的话，会出现404',
    ]
  },
  {
    id: 59,
    title: 'vue-router 有哪几种导航钩子',
    tags: [tagMnum.vue, tagMnum.vueRouter],
    answer: [
      '全局：',
      '1、beforeEach',
      '2、beforeResolve',
      '3、afterEach',
      '',
      '路由独享：',
      'beforeEnter',
      '',
      '组件内部：',
      '1、beforeRouteEnter',
      '2、beforeRouteUpdate',
      '3、beforeRouteLeave',
    ]
  },
  {
    id: 60,
    title: 'vue 完整的导航解析流程',
    tags: [tagMnum.vue, tagMnum.vueRouter],
    answer: [
      '1、导航被触发',
      '2、在失活的组件里调用 beforeRouteLeave 守卫',
      '3、调用全局的 beforeEach 守卫',
      '4、在重用的组件里调用 beforeRouteUpdate 守卫(2.2 +)',
      '5、在路由配置里调用 beforeEnter',
      '6、解析异步路由组件',
      '7、在被激活的组件里调用 beforeRouteEnter',
      '8、调用全局的 beforeResolve 守卫(2.5 +)',
      '9、导航被确认',
      '10、调用全局的 afterEach 钩子',
      '11、触发 DOM 更新',
      '12、调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入',
    ]
  },
  {
    id: 61,
    title: 'vue 怎样动态加载路由',
    tags: [tagMnum.vue, tagMnum.vueRouter],
    answer: [
      'router.addRoutes',
    ]
  },
  {
    id: 62,
    title: '为什么选择前端',
    tags: [tagMnum.hr],
    answer: []
  },
  {
    id: 63,
    title: '个人的优缺点',
    tags: [tagMnum.hr],
    answer: []
  },
  {
    id: 64,
    title: '介绍一下前端的学习经历',
    tags: [tagMnum.hr],
    answer: []
  },
  {
    id: 65,
    title: '作为前端应该掌握哪些知识',
    tags: [tagMnum.hr],
    answer: []
  },
  {
    id: 66,
    title: '对未来三年职业的规划',
    tags: [tagMnum.hr],
    answer: []
  },
  {
    id: 67,
    title: '你一般是通过什么方式学习前端的',
    tags: [tagMnum.hr],
    answer: []
  },
  {
    id: 68,
    title: '遇到实现不了的功能怎么进行处理',
    tags: [tagMnum.hr],
    answer: []
  },
  {
    id: 69,
    title: 'webpack和gulp的区别',
    tags: [tagMnum.pack, tagMnum.webpack, tagMnum.gulp],
    answer: [
      'gulp:',
      '是工具链、构建工具，可以配合各种插件做js压缩，css压缩，less编译 替代手工实现自动化工作',
      '',
      'webpack:',
      'WebPack是前端模块化方案，侧重模块打包，把开发中的所有资源（图片、js文件、css文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源，它最大的优点就是“模块化”（万物皆模块）',
      '',
      '相同点:',
      '都可以对文件进行合并与压缩（JS、CSS）',
      '',
      '不同点:',
      'gulp是工具链、构建工具',
      'Gulp严格上讲，它旨在规范前端开发流程，不包括模块化功能',
      'webpack是文件打包工具',
      'WebPack更是明显强调模块化开发，而那些文件压缩合并、预处理等功能，只是他附带的功能',
    ]
  },
  {
    id: 70,
    title: 'webpack打包流程',
    tags: [tagMnum.pack, tagMnum.webpack],
    answer: [
      '1、读取入口文件',
      '2、分析入口文件，得到其所依赖的文件信息',
      '3、递归读取每个文件的依赖信息，生成AST树，得到关系依赖图',
      '4、代码转化，生成ES5代码',
    ]
  },
  {
    id: 71,
    title: 'Git的一些常用命令',
    tags: [tagMnum.git],
    answer: [
      'git config',
      'git init',
      'git clone',
      'git add',
      'git commit',
      'git diff',
      'git reset',
      'git status',
      'git log',
      'git branch',
      'git checkout',
      'git merge',
      'git remote',
      'git push',
      'git pull',
      'git stash',
    ]
  },
  {
    id: 72,
    title: '微信小程序是单页应用吗',
    tags: [tagMnum.wx],
    answer: [
      '是，通过路由进行页面切换'
    ]
  },
  {
    id: 73,
    title: '微信小程序组件的生命周期',
    tags: [tagMnum.wx],
    answer: [
      'created：组件实例刚被创建好，此时还不能调用setData -- 刚被创建出来',
      'attached：组件完全初始化完毕，进入页面节点树',
      'ready: 组件视图层布局完成后执行。--渲染完成',
      'moved: 组件实例被移动到另一个节点树时执行',
      'detached：离开页面节点树。可以清理一些定时器等工作--  被销毁的时候',
    ]
  },
  {
    id: 74,
    title: '微信小程序是是单线程吗',
    tags: [tagMnum.wx],
    answer: [
      '微信小程序是双线程架构，分为逻辑层和渲染层，在进行文件解析的时候不会发生阻塞'
    ]
  },
  {
    id: 75,
    title: 'bindtap和catchtap的区别',
    tags: [tagMnum.wx],
    answer: [
      '相同点：首先他们都是作为点击事件函数，就是点击时触发',
      '',
      '不同点：bindtap不会阻止冒泡，catchtap是阻止冒泡的'
    ]
  },
  {
    id: 76,
    title: '微信小程序的优劣势',
    tags: [tagMnum.wx],
    answer: [
      '优:',
      '无需下载，通过搜索和扫一扫就可以打开',
      '良好的用户体验：打开速度快',
      '开发成本要比App要低',
      '安卓上可以添加到桌面，与原生App差不多',
      '为用户提供良好的安全保障',
      '',
      '劣:',
      '无法开发大型的程序',
      '上线需要审核',
      '太过依赖微信',
      '测试环境只有一个（体验版），多分枝开发测试时不方便'
    ]
  },
  {
    id: 77,
    title: '虚拟dom是什么',
    tags: [tagMnum.vue, tagMnum.react, tagMnum.js, tagMnum.theory],
    answer: [
      '虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而 提高性能'
    ]
  },
  {
    id: 78,
    title: 'react组件间通信',
    tags: [tagMnum.react],
    answer: [
      '1、父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯',
      '2、子组件向父组件通讯: props + 回调的方式, 父组件向子组件传递props进行通讯',
      '3、兄弟组件通信: 找到这两个兄弟节点共同的父节点, 结合上面两种方式由父节点转发信息进行通信',
      '4、跨层级通信: Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据',
      '5、发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应, 我们可以通过引入event模块进行通信',
      '6、全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信'
    ]
  },
  {
    id: 79,
    title: 'React hooks的优缺点',
    tags: [tagMnum.react],
    answer: [
      '优:',
      '1、更容易复用代码',
      '2、代码量更少',
      '3、更容易拆分组件',
      '4、更方便地把UI和状态分离',
      '5、解决了HOC和Render Props的嵌套问题',
      '6、解决了类组件的 this 指向容易错误、不同声明周期中的逻辑使得代码难以理解和维护',
      '',
      '缺:',
      '1、额外的学习成本',
      '2、写法限制增加了重构成本',
      '3、闭包场景可能会引用到旧的state、props值',
      '4、内部实现上不直观',
      '5、状态不同步',
    ]
  },
  {
    id: 80,
    title: '设计模式有哪些',
    tags: [tagMnum.theory],
    answer: [
      '设计模式分为三种类型，共23种',
      '',
      '创建型模式：单例模式、抽象工厂模式、建造者模式、工厂模式、原型模式',
      '',
      '结构型模式：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式',
      '',
      '行为型模式：模版方法模式、命令模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式（Interpreter模式）、状态模式、策略模式、职责链模式(责任链模式)、访问者模式'
    ]
  },
  {
    id: 81,
    title: '模块化、组件化、工程化',
    tags: [tagMnum.theory],
    answer: [
      '工程化：',
      '前端工程化是一个高层次的思想，而模块化和组件化是为工程化思想下相对较具体的开发方式，因此可以简单的认为模块化和组件化是工程化的表现形式。工程化是将前端项目当成一项系统工程进行分析、组织和构建从而达到项目结构清晰、分工明确、团队配合默契、开发效率提高的目的',
      '',
      '模块化：',
      '一个模块就是一个实现特定功能的文件，有了模块我们就可以更方便的使用别人的代码，要用什么功能就加载什么模块',
      'js模块化方案很多有AMD、CommonJS、UMD、ES6 Module等。css模块化开发大多数是在less、sass、stylus等预处理器的import、minxin特性支持下实现',
      '',
      '组件化：',
      '页面上的每个独立的、可视 / 可交互区域视为一个组件',
      '每个组件对应一个工程目录，组件所需的各种资源都在这个目录下就近维护；由于组件具有独立性，因此组件与组件之间可以自由组合；页面不过是组件的容器，负责组合组件形成功能完整的界面'
    ]
  },
  {
    id: 82,
    title: '谈谈对 MVC、MVP、MVVM 模式的理解',
    tags: [tagMnum.theory],
    answer: [
      'MVC',
      'MVC 除了把应用程序分为 View、Model层，还额外的加了一个 Controller层，它的职责是进行 Model 和 View 之间的协作（路由、输入预处理等）的应由逻辑（application logic）；Model 进行处理业务逻辑',
      '用户对 View 操作以后，View 捕获到这个操作，会把处理的权利交移给Controller（Pass calls）；Controller 会对来自 View 数据进行预处理、决定调用哪个 Model 的接口；然后由 Model 执行相关的业务逻辑；当Model 变更了以后，会通过观察者模式（Observer Pattern）通知 View；View 通过观察者模式收到 Model 变更的消息以后，会向 Model 请求最新的数据，然后重新更新界面',
      '',
      'MVP',
      '和 MVC 模式一样，用户对 View 的操作都会从 View 交易给 Presenter。Presenter 会执行相应的应用程序逻辑，并且会对 Model 进行相应的操作；而这时候 Model 执行业务逻辑以后，也是通过观察者模式把自己变更的消息传递出去，但是是传给 Presenter 而不是 View。Presenter 获取到 Model变更的消息以后，通过 View 提供的接口更新界面',
      '',
      'MVVM',
      'MVVM 可以看做是一种特殊的 MVP（Passive View）模式，或者说是对 MVP 模式的一种改良',
      'MVVM 代表的是 Model-View-ViewModel，可以简单把 ViewModel 理解为页面上所显示内容的数据抽象，和 Domain Model 不一样，ViewModel 更适合用来描述 View。 MVVM 的依赖关系和 MVP 依赖关系一致，只不过是把 P 换成了 VM',
      '',
      'MVVM的调用关系：',
      'MVVM 的调用关系和 MVP 一样。但是，在 ViewModel 当中会有一个叫 Binder，或者是 Data-binding engine 的东西。以前全部由 Presenter 负责的 View 和 Model 之间数据同步操作交由给 Binder 处理。你只需要在View 的模板语法当中，指令式声明 View 上的显示的内容是和 Model 的哪一块数据绑定的。当 ViewModel 对进行 Model 更新的时候，Binder 会自动把数据更新到 View 上，当用户对 View 进行操作（例如表单输入），Binder 也会自动把数据更新到 Model 上。这种方式称为：Two-way data-binding，双向数据绑定。可以简单而不恰当地理解为一个模板引擎，但是会根据数据变更实时渲染'
    ]
  },
  {
    id: 83,
    title: '跨域是什么？如何解决跨域？',
    tags: [tagMnum.js],
    answer: [
      '跨域是什么?',
      '请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域',
      '它是由浏览器的 同源策略 造成的,是浏览器对 JavaScript 实施的安全限制',
      '',
      '如何解决跨域？',
      'nginx的反向代理',
      'jsonp: 只支持 get 请求',
      '服务端修改相应头 Access-Control-Allow-Origin',
      '代理',
    ]
  },
  {
    id: 84,
    title: 'GET 和 POST区别',
    tags: [tagMnum.js],
    answer: [
      'GET产生一个TCP数据包；POST产生两个',
      '通常get用来获取数据，post用来提交数据',
      'get参数有长度限制',
      'get请求的数据会附加在url，post是放在请求体中',
      'get是明文传输，post可以通过抓包工具看到，也相当于是明文',
      'GET请求会被浏览器主动cache，POST除非手动设置',
      '',
      '上面是标准答案但实际，GET和POST本质上没有区别',
    ]
  },
  {
    id: 85,
    title: '数组去重',
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      '1、Array.from(new Set(arr))',
      '2、双for循环',
      '3、其他 for + indexOf、 filter + indexOf、 for + includes等等'
    ]
  },
  {
    id: 86,
    title: '简单说说 js 中有哪几种内存泄露的情况',
    tags: [tagMnum.js],
    answer: [
      '意外的全局变量',
      '闭包',
      '未被清空的定时器',
      '未被销毁的事件监听',
      'DOM 引用'
    ]
  },
  {
    id: 87,
    title: 'promise和 async await 区别',
    tags: [tagMnum.js, tagMnum.es6, tagMnum.es7],
    answer: [
      'Promise的出现解决了传统callback函数导致的“地域回调”问题，但它的语法导致了它向纵向发展行成了一个回调链，遇到复杂的业务场景，这样的语法显然也是不美观的。而async await代码看起来会简洁些，使得异步代码看起来像同步代码，await的本质是可以提供等同于”同步效果“的等待异步返回能力的语法糖，只有这一句代码执行完，才会执行下一句',
      '',
      'async await与Promise一样，是非阻塞的。',
      'async await是基于Promise实现的，可以说是改良版的Promise，它不能用于普通的回调函数',
    ]
  },
  {
    id: 88,
    title: 'promise的理解',
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      'ES6中的Promise 是异步编程的一种方案',
      '可以很好地解决回调地狱的问题',
      '语法简洁。Promise 对象提供了简洁的API，使得控制异步操作更加容易',
      'promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变'
    ]
  },
  {
    id: 89,
    title: 'call appy bind 作用和区别',
    tags: [tagMnum.js],
    answer: [
      '作用：改变this指向',
      '区别:',
      'call 和 apply 会调用函数',
      'call 和 apply 传递的参数不一样，call 传递参数arg1, arg2...形式 apply 必须数组形式[arg]',
      'bind 不会调用函数',
    ]
  },
  {
    id: 90,
    title: 'new 会发生什么',
    tags: [tagMnum.js],
    answer: [
      '1、创建一个新对象',
      '2、将新对象的__proto__（原型）指向构造函数的prototype（原型对象）',
      '3、构造函数绑定新对象的this并执行返回结果',
      '4、判断返回结果是否为null，如果为null, 返回新对象，否则直接返回执行结果',
    ]
  },
  {
    id: 91,
    title: '箭头函数与普通函数的区别',
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      '语法更加简洁、清晰',
      '箭头函数没有自己的this',
      '箭头函数没有 arguments',
      'call apply bind 无法改变箭头函数中this的指向',
      '箭头函数不能作为构造函数使用(this)',
      '箭头函数没有原型prototype',
    ]
  },
  {
    id: 92,
    title: '哪些类型能被扩展操作符...扩展',
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      '数组、对象、字符串',
    ]
  },
  {
    id: 93,
    title: '什么是暂时性死区',
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      '在代码块内，使用let和const命令声明变量之前，该变量都是不可用的，语法上被称为暂时性死区',
      '',
      '暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量'
    ]
  },
  {
    id: 94,
    title: '防抖和节流？应用场景？',
    tags: [tagMnum.js],
    answer: [
      '防抖和节流：优化高频率执行js代码的一种手段，js中的一些事件如浏览器的resize、scroll，鼠标的mousemove、mouseover，input输入框的keypress等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制',
      '',
      '防抖：',
      '在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时',
      '应用场景：搜索框搜索输入、窗口大小Resize',
      '',
      '节流：',
      '每隔一段时间，只执行一次函数',
      '应用场景：滚动加载、高频点击提交'
    ]
  },
  {
    id: 95,
    title: '浅拷贝与深拷贝',
    tags: [tagMnum.js],
    answer: [
      '浅拷贝只复制对象的第一层属性、深拷贝可以对对象的属性进行递归复制'
    ]
  },
  {
    id: 96,
    title: 'css 无继承性的属性有哪些',
    tags: [tagMnum.css],
    answer: [
      'display',
      'vertical-align',
      'text-decoration',
      'text-shadow',
      'white-space',
      'unicode-bidi',
    ]
  },
  {
    id: 97,
    title: 'css有继承性的属性',
    tags: [tagMnum.css],
    answer: [
      'font',
      'font-family',
      'font-weight',
      'font-size',
      'font-style',
      'line-height',
      'text-align',
      'direction',
      'color',
    ]
  },
  {
    id: 98,
    title: 'css预处理工具有哪些',
    tags: [tagMnum.css, tagMnum.less, tagMnum.sass, tagMnum.stylus],
    answer: [
      'Less',
      'Sass: 最早也是最成熟的CSS预处理器',
      'Stylus: 来自Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如Sass和Less',
    ]
  },
  {
    id: 99,
    title: '说说css mask的用途',
    tags: [tagMnum.css],
    answer: [
      'CSS 属性 mask 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域',
      '',
      '详见：https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask'
    ]
  },
  {
    id: 100,
    title: 'css使一个元素多背景叠加',
    tags: [tagMnum.css],
    answer: [
      'background: background1, ..., backgroundN',
      '',
      '图小的要在前面， 图大要在后面不然会遮挡住',
      '',
      '详见：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds'
    ]
  },
  {
    id: 101,
    title: 'display:flex后，哪些属性会失效呢',
    tags: [tagMnum.css],
    answer: [
      '子元素的float、clear和vertical-align属性将失效'
    ]
  },
  {
    id: 102,
    title: 'flex是哪些属性的简写',
    tags: [tagMnum.css],
    answer: [
      'flex-grow：项目放大的比例',
      'flex-shrink：项目缩小的比例',
      'flex-basis：项目所占大小',
      '默认值： 0 1 auto'
    ]
  },
  {
    id: 103,
    title: '对盒子模型的理解',
    tags: [tagMnum.css],
    answer: [
      '一个盒子由 context,padding,margin,border 组成',
      '',
      '标准模式，是浏览器默认的盒子模型',
      'box-sizing: content-box',
      '增加padding、border和margin不会影响内容区域的尺寸，但是会增加元素框的总尺寸',
      '',
      '怪异模式',
      'box-sizing: border-box',
      '增加padding、border和margin会影响内容区域的尺寸，不会增加元素框的总尺寸'
    ]
  },
  {
    id: 104,
    title: 'css选择器有哪些',
    tags: [tagMnum.css],
    answer: [
      '常见选择器',
      'id选择器、类选择器、标签选择器、后代选择器、子选择器、相邻同胞选择器、群组选择器',
      '',
      '伪类选择器',
      ':link、:visited、:active、:hover 、:first-child、:first-of-type、:last-child、:last-of-type、:checked、:disabled、:empty、:enabled、:focus、:in-range、:invalid、:lang(language)、:not(selector)、:nth-child(n)、:nth-last-child(n)、:nth-last-of-type(n)、:nth-of-type(n)、:nly-of-type、:only-child、:optional、:out-of-range、:read-only、:read-write、:required、:root、:target、:valid、',
      '',
      '伪元素选择器',
      '::after、::before、::first-letter、::first-line、::selection',
      '',
      '属性选择器',
      '[attribute]、[attribute=value]、[attribute~=value]、[attribute|=value]、[attribute^=value]、[attribute$=value]、[attribute*=value]',
    ]
  },
  {
    id: 105,
    title: 'css选择器优先级',
    tags: [tagMnum.css],
    answer: [
      '!important >内联 > ID选择器 > 类选择器 > 标签选择器',
    ]
  },
  {
    id: 106,
    title: '元素不定宽高，如何水平垂直居',
    tags: [tagMnum.css],
    answer: [
      'margin:0 auto',
      '定位 + transform负值',
      '定位 + margin负值',
      'flex布局',
      'grid网格布局',
      'table布局 父元素 display:table-cell 子元素 display: inline-block',
    ]
  },
  {
    id: 107,
    title: '响应式网站如何开发',
    tags: [tagMnum.css],
    answer: [
      'meta声明viewport',
      '媒体查询',
    ]
  },
  {
    id: 108,
    title: 'CSS提高性能的方法有哪些',
    tags: [tagMnum.css, tagMnum.optimize],
    answer: [
      '加载性能',
      'css压缩',
      '内联首屏关键CSS',
      '异步加载CSS',
      '减少@import,而建议使用link',
      '',
      '选择器性能',
      '减少css嵌套',
      'ID选择器前不进行嵌套',
      '不用css表达式',
      '避免使用通配符规则',
      '了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则',
      '',
      '渲染性能',
      '慎重使用高性能属性：浮动，定位',
      '尽量减少页面的重排和重绘',
      '属性值为0时，不加单位',
      '属性值为浮动小数0.***，可以省略小数点之前的0',
      '标准化各种浏览器前缀，带浏览器前缀的在前。标准属性在后',
      'css雪碧图',
      '',
      '建立公共样式类',
    ]
  },
  {
    id: 109,
    title: 'JS基本数据类型和引用数据类型有哪些',
    tags: [tagMnum.js],
    answer: [
      '值类型(基本类型)：',
      'Number、String、Boolean、Undefined、Null',
      '',
      '引用数据类型（对象类型）：',
      'Object、Array、Function，特殊的对象： RegExp和Date',
    ]
  },
  {
    id: 110,
    title: 'JS不同数据类型如何存储',
    tags: [tagMnum.js],
    answer: [
      '基本数据类型：',
      '直接存储在栈中，占据空间小、大小固定，属于希望被频繁引用的数据',
      '',
      '引用数据类型：',
      '同时存在栈和堆中，占据空间大，大小不固定。在堆中存对象，在栈中存对象指针，指向堆中实体的地址',
    ]
  },
  {
    id: 111,
    title: 'typeof 与 instanceof 区别',
    tags: [tagMnum.js],
    answer: [
      'typeof的返回值是一个字符串，用来说明变量的数据类型（null ,Array、Object 结果都是Object）；instanceof的返回值是布尔值，用于判断一个变量是否属于某个对象的实例',
    ]
  },
  {
    id: 112,
    title: '说说你对闭包的理解',
    tags: [tagMnum.js],
    answer: [
      '闭包就是可以访问其他函数内部变量的函数，我们通常用它来定义私有化的变量和方法，创建一个闭包最简单的方法就是在一个函数内创建一个函数，它有三个特性是 函数内可以再嵌套函数，内部函数可以访问外部的方法和变量，方法和变量不会被垃圾回收机制回收',
      '优点',
      '变量长期在内存中',
      '可重复的使用变量，不会污染',
      '',
      '缺点',
      '内存消耗大，不能滥用，否则会造成性能问题，解决方法：退出函数时，将局部变量删除',

    ]
  },
  {
    id: 113,
    title: '闭包使用场景',
    tags: [tagMnum.js],
    answer: [
      '创建私有变量与私有方法',
      '延长变量的生命周期',
      '',
      '常见场景',
      '防抖与节流',
    ]
  },
  {
    id: 114,
    title: '常见的BOM对象你了解哪些',
    tags: [tagMnum.js],
    answer: [
      'window、location、navigator 、screen、history',
    ]
  },
  {
    id: 115,
    title: 'js判断一个数组',
    tags: [tagMnum.js],
    answer: [
      'Array.isArray()',
      'instanceof',
      'constructor',
      'Object.prototype.toString.call()',
    ]
  },
  {
    id: 116,
    title: '什么是原型和原型链',
    tags: [tagMnum.js],
    answer: [
      '原型',
      '1.所有引用类型都有一个__proto__(隐式原型)属性，属性值是一个普通的对象',
      '2.所有函数都有一个prototype(原型)属性，属性值是一个普通的对象',
      '3.所有引用类型的__proto__属性指向它构造函数的prototype',
      '',
      '原型链',
      '当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链',
    ]
  },
  {
    id: 117,
    title: '什么是事件代理',
    tags: [tagMnum.js],
    answer: [
      '事件代理（Event Delegation），又称之为事件委托。是JavaScript中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件（click、keydown......）委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡',
    ]
  },
  {
    id: 118,
    title: '冒泡与捕获的区别',
    tags: [tagMnum.js],
    answer: [
      '事件冒泡：一个由里到外，冒泡，向上层延申',
      '事件捕获：一个由外到里，前往捕获，形成向下趋势'
    ]
  },
  {
    id: 119,
    title: '什么是bundle？什么是chunk?什么是module?',
    tags: [tagMnum.pack, tagMnum.webpack],
    answer: [
      'bundle：是由webpack打包出来的文件',
      'chunk：是一个代码块，一个chunk由多个模块组合而成',
      'module：是开发中的单个模块'
    ]
  },
  {
    id: 120,
    title: '什么是Loader?什么是Plugin?',
    tags: [tagMnum.pack, tagMnum.webpack],
    answer: [
      'Loader：因为webpack本身只理解JavaScript,所以loader用来解析js以外的东西',
      '主要功能：用于告诉webpack如何处理某一类型的文件，并引入到打包出来的文件中',
      '',
      '常用Loader：',
      '1.file-loader：把文件输出到一个文件夹中，在代码中通过相对URL去引用输出的文件',
      '2.url-loader：和file-loader类似，但是能在文件很小的情况下以base64的方式把文件内容注入到代码中去',
      '3.source-map-loader：加载额外的Source Map文件，以方便断点调试image-loader：加载并且压缩图片文件',
      '4.babel-loader：把ES6转换成ES5css-loader：加载CSS，支持模块化、压缩、文件导入等特性',
      '5.style-loader：把CSS代码注入到JavaScript中，通过DOM操作去加载CSS。',
      '6.eslint-loader：通过ESLint检查JavaScript代码',
      '',
      'Plugin：中文名称 插件，是一个扩展器，丰富webpack本身，增强功能 ，针对的是在loader结束之后，webpack打包的整个过程，他并不直接操作文件，而是基于事件机制工作，监听webpack打包过程中的某些节点, 在合适的机会通过webpackt提供的API改变输出结果',
      '',
      '常用Plugin:',
      '1.define-plugin：定义环境变量',
      '2.commons-chunk-plugin：提取公共代码',
      '3.uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码'
    ]
  },
  {
    id: 121,
    title: '如何利用webpack来优化前端性能',
    tags: [tagMnum.optimize, tagMnum.pack, tagMnum.webpack],
    answer: [
      '压缩代码',
      '利用CDN加速',
      '删除死代码',
      '提取公共代码',
    ]
  },
  {
    id: 122,
    title: '如何提高webpack的构建速度',
    tags: [tagMnum.optimize, tagMnum.pack, tagMnum.webpack],
    answer: [
      '多入口情况下，使用CommonsChunkPlugin来提取公共代码',
      '',
      '通过externals配置来提取常用库',
      '',
      '利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来',
      '',
      '使用Happypack实现多线程加速编译',
      '',
      '使用webpack-uglify-parallel来 提 升uglifyPlugin的 压 缩 速 度 。原 理 上webpack-uglify-parallel采用了多核并行压缩来提升压缩速度',
      '',
      '使用Tree-shaking和Scope Hoisting来剔除多余代码',
    ]
  },
]

export interface iProbleSort {
  [key: string | number]: iProblemItem[]
}

export const probleSort = (() => {
  const sort: iProbleSort = {}
  problem.forEach(item => {
    item.tags.forEach(tag => {
      if (!sort[tag]) sort[tag] = []
      sort[tag].push(item)
    })
  })
  return sort
})()