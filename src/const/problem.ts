export const problem: IProblem.item[] = [
  {
    "id": 1,
    "title": "H5和小程序有什么区别",
    "tags": [
      1,
      6
    ],
    "answer": [
      "运行环境的不同",
      "H5运行环境为浏览器",
      "浏览器具有跨平台性（同时兼容PC端、移动端、Windows、Linux、Android与ios）",
      "容易发布，无需审核",
      "",
      "微信小程序运行环境为微信App",
      "用户体验好,使用体验比H5更加流畅",
      "可以获取的系统级权限更多，功能更为强大",
      "只能在微信app内运行",
      "受微信管控，功能的开发取决于微信的赋能"
    ]
  },
  {
    "id": 2,
    "title": "重绘和回流是什么",
    "tags": [
      1,
      2
    ],
    "answer": [
      "我们都知道一个页面从加载到完成，首先是构建DOM树，然后根据DOM节点进行几何布局形成render树(渲染树)，当渲染树构建完成后，页面就根据DOM树开始布局，渲染树也根据设置的样式渲染这些节点",
      "",
      "回流（Reflow）",
      "上面我们知道，我们会根据 渲染树 去遍历渲染，所以当我们的节点发生改变时，浏览器重新渲染部分节点或者全部文档，我们称这个过程为回流",
      "大致整理会导致回流的一些操作",
      "1、页面首次渲染",
      "2、浏览器窗口大小发生改变",
      "3、元素尺寸或位置发生改变",
      "4、元素内容变化（文字数量或图片大小等等）",
      "5、元素字体大小变化",
      "6、添加或者删除可见的DOM元素",
      "7、激活CSS伪类（例如：:hover）",
      "8、查询某些属性或调用某些方法",
      "",
      "重绘（Repaint）",
      "当我们操作的节点上的元素并不导致元素位置发生变化时，比如color,background-color,visibility(注意虽然节点隐藏了，但是元素还在，并且位置也不会发生变化),浏览器会将新的样式赋值给这些节点，我们称这个过程为重绘",
      "",
      "我们把页面文档比作一个积木的话，我们抽离中间或者底部的一个积木块，我们的积木会重新找到重心并且稳固下来，我们把这个过程称之为回流",
      "我们在某个积木上涂上颜色，这并不会造成整个积木的稳定，我们把这个过程叫做重绘",
      "所以说回流一定会触发重绘，重绘不一定触发回流"
    ]
  },
  {
    "id": 3,
    "title": "如何避免重绘与回流",
    "tags": [
      1,
      2,
      12
    ],
    "answer": [
      "1、避免使用 table 布局",
      "2、尽可能在 DOM 树的最末端改变 class",
      "3、避免设置多层内联样式",
      "4、将动画效果应用到 position 属性为 absolute 或 fixed 的元素上",
      "5、避免使用CSS表达式（例如：calc()）",
      "6、避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性",
      "7、避免频繁操作 DOM ，把DOM离线后修改，创建一个 documentFragment ，在它上面应用所有 DOM 操作，最后再把它添加到文档中",
      "8、也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘",
      "9、避免频繁读取会引发回流 / 重绘的属性，如果确实需要多次使用，就用一个变量缓存起来",
      "10、对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流"
    ]
  },
  {
    "id": 4,
    "title": "本地存储与cookie存储区别",
    "tags": [
      3
    ],
    "answer": [
      "1、 cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存",
      "2、 cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大",
      "3、 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭",
      "4、 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便"
    ]
  },
  {
    "id": 5,
    "title": "移动端布局的自适应如何做",
    "tags": [
      1,
      2,
      3
    ],
    "answer": [
      "<meta name=\"viewport\" content=\"initial-scale=1,maximum-scale=1, minimum-scale=1\">",
      "rem, vw"
    ]
  },
  {
    "id": 6,
    "title": "导入样式时，使用 link 和 @import 有什么区别",
    "tags": [
      2
    ],
    "answer": [
      "1、link是HTML标签，@import是css提供的",
      "2、link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载",
      "3、link没有兼容性问题，@import不兼容ie5以下",
      "4、link可以通过js操作DOM动态引入样式表改变样式，而 @import不可以"
    ]
  },
  {
    "id": 7,
    "title": "浏览器内多个标签页之间的通信方式有哪些",
    "tags": [
      3
    ],
    "answer": [
      "1、WebSocket （可跨域）",
      "2、postMessage（可跨域）",
      "3、Worker之SharedWorker",
      "4、Server-Sent Events",
      "5、localStorage",
      "6、BroadcastChannel",
      "7、Cookie"
    ]
  },
  {
    "id": 8,
    "title": "Vue v-model 的原理",
    "tags": [
      4
    ],
    "answer": [
      "v-model只不过是一个语法糖",
      "",
      "<input :value=\"msg\" @input=\"msg=$event.target.value\">",
      "",
      "model: { prop: 'value',event: 'input'}",
      "this.$emit('input', $event.target.value);"
    ]
  },
  {
    "id": 9,
    "title": "怎么给 Vue 定义全局的方法",
    "tags": [
      4
    ],
    "answer": [
      "Vue2",
      "1、挂载到 Vue 的 prototype上",
      "2、利用全局混入mixin",
      "",
      "Vue3",
      "main.js => app.config.globalProperties.xxx = () => {}"
    ]
  },
  {
    "id": 10,
    "title": "keep-alive 有关的生命周期是哪些",
    "tags": [
      4
    ],
    "answer": [
      "activated 和 deactivated 两个生命周期函数",
      "",
      "当 keep-alive 组件激活时，触发 activated ， keep-alive 组件停用时调用 deactivated"
    ]
  },
  {
    "id": 11,
    "title": "你知道 Vue 中 key 的原理吗",
    "tags": [
      4
    ],
    "answer": [
      "便于Diff时更高效的进行节点查询对比",
      "",
      "有key时，通过createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)生成的key与索引映射关系，直接通过新子节点的key查询是否存在于旧子节点序列中",
      "无key时，必须遍历旧子节点序列，依次与新子节点对比判断是否为新增节点"
    ]
  },
  {
    "id": 12,
    "title": "你知道 style 加 scoped 属性的用途和原理吗",
    "tags": [
      4
    ],
    "answer": [
      "用途：防止全局同名CSS污染",
      "",
      "原理：在标签加上 v-data-something 属性，再在选择器时加上对应 [v-data-something] ，即 CSS 带属性选择器，以此完成类似作用域的选择方式"
    ]
  },
  {
    "id": 13,
    "title": "如何在子组件中访问父组件的实例",
    "tags": [
      4
    ],
    "answer": [
      "1、直接在子组件中通过 this.$parent.event 来调用父组件的方法",
      "",
      "2、在子组件里用 $emit 向父组件触发一个事件，父组件监听这个事件",
      "",
      "3、父组件把方法传入子组件中，在子组件里直接调用这个方法"
    ]
  },
  {
    "id": 14,
    "title": "babel-polyfill主要是用来做什么的",
    "tags": [
      3
    ],
    "answer": [
      "Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign ）都不会转码",
      "",
      "举例来说，ES6在Array对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片",
      "",
      "Babel 默认不转码的API非常多，详细清单可以查看babel-plugin-transform-runtime模块的definitions.js文件"
    ]
  },
  {
    "id": 15,
    "title": "说说你对 Vue 错误处理的了解",
    "tags": [
      4
    ],
    "answer": [
      "分为 errorCaptured 与errorHandler",
      "",
      "errorCaptured 是组件内部钩子，可捕捉本组件与子孙组件抛出的错误，接收 error、vm、info 三个参数，return false后可以阻止错误继续向上抛出",
      "",
      "errorHandler 为全局钩子，使用 Vue.config.errorHandler 配置，接收参数与 errorCaptured 一致，2.6后可捕捉 v-on 与 promise 链的错误，可用于统一错误处理与错误兜底"
    ]
  },
  {
    "id": 16,
    "title": "事件 e.target 和 e.currentTarget 的区别",
    "tags": [
      4
    ],
    "answer": [
      "event.currentTarget 指向事件所绑定的元素",
      "",
      "event.target 始终指向事件发生时的元素"
    ]
  },
  {
    "id": 17,
    "title": "Vue 文件中 style 与 script 是必须的吗？",
    "tags": [
      4
    ],
    "answer": [
      "1、如果没有 render 函数，那么 template 是必须要有的，否则报错",
      "",
      "2、如果有 render 函数，那么可以没有 template, style，但是要有 script",
      "",
      "3、可以只有 <template>，而 script、style 是非必须的"
    ]
  },
  {
    "id": 18,
    "title": "Vue怎么实现强制刷新组件",
    "tags": [
      4
    ],
    "answer": [
      "1、v-if",
      "2、this.$forceUpdate()",
      "3、更改 key"
    ]
  },
  {
    "id": 19,
    "title": "Vue 自定义事件怎么接收子组件的多个参数",
    "tags": [
      4
    ],
    "answer": [
      "this.$emit(\"eventName\",data)",
      "data为一个对象"
    ]
  },
  {
    "id": 20,
    "title": "$attrs 和 $listeners的使用场景有哪些",
    "tags": [
      4
    ],
    "answer": [
      "多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。如果为了传递数据而无中间层处理，则可以使用Vue中提供的$attrs和$listeners"
    ]
  },
  {
    "id": 21,
    "title": "说说你对 Vue 的表单修饰符 .lazy 的理解",
    "tags": [
      4
    ],
    "answer": [
      "v-model 默认的触发条件是 input 事件, 加了 .lazy 修饰符之后, v-model 会在 change 事件触发的时候去监听"
    ]
  },
  {
    "id": 22,
    "title": "怎么修改 Vue 打包后生成文件路径",
    "tags": [
      4,
      10,
      1001,
      1003
    ],
    "answer": [
      "webpack: vue.config.js 中设置 outputDir ",
      "",
      "vite: vite.config.js 中设置 base"
    ]
  },
  {
    "id": 23,
    "title": "Vue 中什么是递归组件",
    "tags": [
      4
    ],
    "answer": [
      "当前注册一个vue组件定义 name 为 \"node-tree\" ，在组件 template 内部 <node-tree></node-tree>"
    ]
  },
  {
    "id": 24,
    "title": "怎么访问到子组件的实例或者子元素",
    "tags": [
      4
    ],
    "answer": [
      "this.$children",
      "",
      "this.$refs",
      "",
      "Vue3：import {ref} from “vue”;"
    ]
  },
  {
    "id": 25,
    "title": "Vue 双向绑定原理是什么",
    "tags": [
      4
    ],
    "answer": [
      "VUE2: 通过 Object.defineProperty 去监听对象的每一个属性，然后在 get , set 方法中通过发布订阅者模式来实现的数据响应，但是存在一定的缺陷，比如只能监听已存在的属性，对于新增删除属性就无能为力了，同时无法监听数组和对象的变化",
      "",
      "Vue3: 是采用数据劫持结合发布者-订阅者模式的方式，通过 new Proxy() 来劫持各个属性的 setter ， getter ，在数据变动时发布消息给订阅者，触发相应的监听回调"
    ]
  },
  {
    "id": 26,
    "title": "使用 Vue 渲染大量数据时应该怎么优化",
    "tags": [
      4,
      12
    ],
    "answer": [
      "1、对与一次获取全部数据时可使用 Object.freeze",
      "",
      "2、分也加载或者分页渲染",
      "",
      "3、虚拟滚动"
    ]
  },
  {
    "id": 27,
    "title": "<template></template> 标签有什么作用",
    "tags": [
      4,
      12
    ],
    "answer": [
      "template作用：当做一个不可见的包裹元素，不显示在页面中，减少了不必要的dom元素",
      "",
      "常见场景：解决v-for、v-if等一起使用问题"
    ]
  },
  {
    "id": 28,
    "title": "Vue的is这个特性主要用在哪些方面",
    "tags": [
      4,
      12
    ],
    "answer": [
      "1、解决限制元素",
      "有些 HTML 标签内只能使用特定元素，例如 <ul> <table> <select> 等元素。这会导致使用这些元素时遇到一些问题，例如：",
      "<ol><my-component></my-component></ol>",
      "这个 myComponent 自定义组件会被作为无效内容提升到外部，导致渲染结果出错，解决上述问题可使用 is 特性",
      "<ol><li is=\"my-component\"></li></ol>",
      "",
      "2、动态组件",
      "<component :is=\"组件名称变量\"></component>"
    ]
  },
  {
    "id": 29,
    "title": "Vue 的 :class 和 :style 有几种使用方式",
    "tags": [
      4
    ],
    "answer": [
      ":class",
      "1、绑定变量",
      "2、绑定对象",
      "3、绑定一个数组",
      "4、绑定三元表达式",
      "",
      ":style",
      "1、绑定变量",
      "2、绑定对象",
      "3、绑定函数返回值",
      "4、绑定三元表达式"
    ]
  },
  {
    "id": 30,
    "title": "Vue 组件中写 name 选项有什么作用",
    "tags": [
      4
    ],
    "answer": [
      "项目使用 keep-alive 时，可搭配组件 name 进行缓存过滤",
      "",
      "递归组件时需要调用自身 name",
      "",
      "vue-devtools 调试工具里显示的组见名称是由组件 name 决定的"
    ]
  },
  {
    "id": 31,
    "title": "SSR 解决了什么问题",
    "tags": [
      12
    ],
    "answer": [
      "优化首屏加载速度",
      "",
      "SEO问题"
    ]
  },
  {
    "id": 32,
    "title": "说说你对 Vue 的 extend 的理解",
    "tags": [
      4
    ],
    "answer": [
      "创建、复用组件",
      "",
      "实际应用: 页面内不引入 toast 组件直接调用 this.toast(“提示”) 全局方法，页面显示提示弹窗"
    ]
  },
  {
    "id": 33,
    "title": "Vue 中常用的指令有哪些",
    "tags": [
      4
    ],
    "answer": [
      "v-if",
      "v-else-if",
      "v-else",
      "v-for",
      "v-text",
      "v-html",
      "v-show",
      "v-on",
      "v-bind",
      "v-model",
      "v-solt"
    ]
  },
  {
    "id": 34,
    "title": "第一次加载页面时会触发哪几个钩子",
    "tags": [
      4
    ],
    "answer": [
      "beforeCreate => created => beforeMount => mounted"
    ]
  },
  {
    "id": 35,
    "title": "Vue 生命周期总共有几个阶段",
    "tags": [
      4
    ],
    "answer": [
      "beforeCreate：在 new 一个 vue 实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建",
      "",
      "created：data 和 methods 都已经被初始化好了。（如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作）",
      "",
      "beforeMount：在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的",
      "",
      "mounted：Vue 实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 （如果我们想要通过插件操作页面上的 DOM 节点，最早可以在和这个阶段中进行）",
      "",
      "beforeUpdate：页面中的显示的数据还是旧的，data 中的数据是更新后的， 页面还没有和最新的数据保持同步",
      "",
      "updated：页面显示的数据和 data 中的数据已经保持同步了，都是最新的",
      "",
      "beforeDestroy：Vue 实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁",
      "",
      "destroyed：这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了"
    ]
  },
  {
    "id": 36,
    "title": "React 和 Vue 的区别",
    "tags": [
      4,
      5
    ],
    "answer": [
      "React 是 facebook 官方维护的，而 vue 是尤雨溪本人维护的。并且在其他周边库，如 react-rouer 和 redux ，是 React 社区在维护的。而 vuex 和 vue-router 都是尤雨溪在维护的",
      "",
      "监听数据变化的实现原理不同",
      "",
      "模板渲染方式，React 通过 JSX 渲染模板， Vue 是通过拓展 HTML 语法进行渲染（本质上都是模版）",
      "",
      "Vue 提供了一系列的api， 而React的api 很少",
      "",
      "Vue的思想是响应式的，也就是基于是数据可变的，实现了数据的双向绑定，React整体是函数式的思想，是单向数据流，推崇结合immutable来实现数据不可变"
    ]
  },
  {
    "id": 37,
    "title": "React 和 Vue 的优缺点",
    "tags": [
      4,
      5
    ],
    "answer": [
      "Vue 优点：",
      "Vue 比 React 更容易上手",
      "官方文档很清晰",
      "提供了指令，过滤器等，可以非常方便，快捷地操作DOM,因此项目写起来更加简单",
      "",
      "Vue 缺点：",
      "emmm...",
      "",
      "React 优点：",
      "可配置项多（对于大牛是优点）",
      "React社区更为繁荣",
      "扩展更强大",
      "",
      "React 缺点：",
      "学习路线陡，上手较难",
      "",
      "共同的缺点：",
      "不利于 SEO",
      "首屏加载慢"
    ]
  },
  {
    "id": 38,
    "title": "React 和 Vue 的共同点",
    "tags": [
      4,
      5
    ],
    "answer": [
      "都比较轻便",
      "",
      "都在使用Virtual DOM",
      "",
      "都提供了响应式和组件化的开发",
      "",
      "都有独立的路由系统，以及独立的状态管理库",
      "",
      "都将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库",
      "",
      "性能都很好",
      "",
      "都不需要操作 DOM",
      ""
    ]
  },
  {
    "id": 39,
    "title": "动态给 data 加新的属性会发生什么？怎样解决？",
    "tags": [
      4
    ],
    "answer": [
      "如果在实例创建之后添加新的属性到实例上，它不会触发视图更新",
      "",
      "解决方法：Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上"
    ]
  },
  {
    "id": 40,
    "title": "v-if 和 v-for 的优先级？同时出现怎么优化？",
    "tags": [
      4
    ],
    "answer": [
      "v-for 优先级高",
      "",
      "避免出现这种情况，如果实在需要,应新增 template 标签来进行 v-if 判断, 在子元素里面使用 v-for"
    ]
  },
  {
    "id": 41,
    "title": "Vue data 什么是函数而不是对象",
    "tags": [
      4
    ],
    "answer": [
      "对象为引用类型，当重用组件时，由于数据对象都指向同一个 data 对象，当在一个组件中修改 data 时，其他重用的组件中的 data 会同时被修改；而使用返回对象的函数，由于每次返回的都是一个新对象（Object的实例），引用地址不同，则不会出现这个问题"
    ]
  },
  {
    "id": 42,
    "title": "watch 和计算属性有什么区别",
    "tags": [
      4
    ],
    "answer": [
      "一个是侦听属性，一个是计算属性",
      "",
      "一个是为了应对复杂的逻辑计算，一个是对数据的变化作出反应",
      "",
      "一个是只有当缓存改变时才执行，一个是只要从新渲染就会执行",
      "",
      "一个有缓存，一个没有缓存"
    ]
  },
  {
    "id": 43,
    "title": "循环中 key 有什么作用",
    "tags": [
      4,
      5,
      12
    ],
    "answer": [
      "性能优化 diff 时更快更准确找到变化的位置"
    ]
  },
  {
    "id": 44,
    "title": "v-show 和 v-if 有什么区别",
    "tags": [
      4,
      12
    ],
    "answer": [
      "v-if 不渲染 DOM，v-show 会渲染 DOM"
    ]
  },
  {
    "id": 45,
    "title": "v-show 和 v-if 使用场景分别是什么",
    "tags": [
      4,
      12
    ],
    "answer": [
      "v-show 使用场景：",
      "1、预渲染需求",
      "2、需要频繁切换显示状态",
      "",
      "v-if 使用场景：",
      "少量切换显示状态，例如判断数据加载完成，显示页面内容"
    ]
  },
  {
    "id": 46,
    "title": "Vue 组件之间的通信都有哪些",
    "tags": [
      4,
      12
    ],
    "answer": [
      "props",
      "$emit / $on",
      "($parents / $children) / $refs",
      "Vuex",
      "Bus",
      "(provide / inject)",
      "($attrs / $listeners) "
    ]
  },
  {
    "id": 47,
    "title": "head、body、!Doctype 标签的作用",
    "tags": [
      1
    ],
    "answer": [
      "!DOCTYPE：",
      "它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令",
      "",
      "head：",
      "是所有头部元素的容器, 绝大多数头部标签的内容不会显示给读者",
      "该标签下所包含的部分可加入的标签有 style link meta title script 等标签",
      "",
      "body : ",
      "用于定义文档的主体, 包含了文档的所有内容",
      "该标签支持 html 的全局属性和事件属性"
    ]
  },
  {
    "id": 48,
    "title": "h5 新特性有哪些",
    "tags": [
      1,
      3
    ],
    "answer": [
      "!新增选择器 document.querySelector、document.querySelectorAll",
      "拖拽释放(Drag and drop) API",
      "媒体播放的 video 和 audio",
      "本地存储 localStorage 和 sessionStorage",
      "离线应用 manifest",
      "桌面通知 Notifications",
      "语意化标签 article、footer、header、nav、section",
      "增强表单控件 calendar、date、time、email、url、search",
      "地理位置 Geolocation",
      "多任务 webworker",
      "全双工通信协议 websocket",
      "历史管理 history",
      "跨域资源共享(CORS) Access-Control-Allow-Origin",
      "页面可见性改变事件 visibilitychange",
      "跨窗口通信 PostMessage",
      "Form Data 对象",
      "绘画 canvas"
    ]
  },
  {
    "id": 49,
    "title": "伪类和伪元素",
    "tags": [
      1,
      2
    ],
    "answer": [
      "伪类：用于已有元素处于某种状态时为其添加对应的样式，这个状态是根据用户行为而动态变化的",
      "例如：用户悬停在指定元素时，可以通过: hover 来描述这个元素的状态，虽然它和一般css相似，可以为已有元素添加样式，但是它只有处于 DOM 树无法描述的状态下才能为元素添加样式，所以称为伪类",
      "",
      "伪元素：用于创建一些不在 DOM 树中的元素，并为其添加样式",
      "例如，我们可以通过: before 来在一个元素之前添加一些文本，并为这些文本添加样式，虽然用户可以看见 这些文本，但是它实际上并不在 DOM 文档中"
    ]
  },
  {
    "id": 50,
    "title": "html5语义化标签有哪些",
    "tags": [
      1
    ],
    "answer": [
      "<title>：页面标题",
      "",
      "<hn>： h1~h6，分级标题，<h1>与 < title > 协调有利于搜索引擎优化",
      "",
      "<ul>：无序列表",
      "",
      "<li>：有序列表",
      "",
      "<header>：页眉通常包括网站标志、主导航、全站链接以及搜索框",
      "",
      "<nav>：标记导航，仅对文档中重要的链接群使用",
      "",
      "<main>：页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能",
      "",
      "<article>：定义外部的内容，其中的内容独立于文档的其余部分",
      "",
      "<section>：定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分",
      "",
      "<aside>：定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等",
      "",
      "<footer>：页脚，只有当父级是body时，才是整个页面的页脚",
      "",
      "<small>：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权",
      "",
      "<strong>：和 em 标签一样，用于强调文本，但它强调的程度更强一些",
      "",
      "<em>：将其中的文本表示为强调的内容，表现为斜体",
      "",
      "<mark>：使用黄色突出显示部分文本",
      "",
      "<figure>：规定独立的流内容（图像、图表、照片、代码等等）",
      "",
      "<figcaption>：定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置 ",
      "",
      "<cite>：表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题",
      "",
      "<blockquoto>：定义块引用，块引用拥有它们自己的空间",
      "",
      "<q>：短的引述（跨浏览器问题，尽量避免使用）",
      "",
      "<time>：datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式",
      "",
      "<abbr>：简称或缩写",
      "",
      "<dfn>：定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用",
      "",
      "<address>：作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）",
      "",
      "<del>：移除的内容",
      "",
      "<ins>：添加的内容",
      "",
      "<code>：标记代码",
      "",
      "<meter>：定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）",
      "",
      "<progress>：定义运行中的进度（进程）"
    ]
  },
  {
    "id": 51,
    "title": "使用语义化标签的优点",
    "tags": [
      1,
      12
    ],
    "answer": [
      "易于用户阅读，样式丢失的时候能让页面呈现清晰的结构",
      "",
      "有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重",
      "",
      "方便屏幕阅读器解析，如盲人阅读器根据语义渲染网页",
      "",
      "有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐"
    ]
  },
  {
    "id": 52,
    "title": "let const var",
    "tags": [
      3,
      301
    ],
    "answer": [
      "var",
      "在变量未赋值时，变量undefined（声明提升）",
      "作用域——var的作用域为方法作用域；只要在方法内定义了，整个方法内的定义变量后的代码都可以使用",
      "",
      "let",
      "ES6变量声明方式",
      "块级作用域",
      "在变量为声明前直接使用会报错",
      "let禁止重复声明变量，否则会报错；var可以重复声明",
      "",
      "const",
      "ES6变量声明方式",
      "块级作用域",
      "const为常量声明方式；声明变量时必须初始化，在后面出现的代码中不能再修改该常量的值",
      "const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动"
    ]
  },
  {
    "id": 53,
    "title": "js 数据类型",
    "tags": [
      3,
      301,
      305
    ],
    "answer": [
      "共有8种",
      "ES5中有6种：String、Number、Boolean、Null、Undefined、Object",
      "ES6新增了Symbol",
      "es10新增了bigInt"
    ]
  },
  {
    "id": 54,
    "title": "for、for in、 for of、forEach 的区别",
    "tags": [
      3,
      301
    ],
    "answer": [
      "for：",
      "用来遍历数组",
      "可以使用 break，continue 跳出循环",
      "性能最好",
      "",
      "for in：",
      "适合遍历对象，还能遍历数组",
      "会查找循环原型上的属性",
      "循环的顺序不确定",
      "循环出的是key",
      "",
      "for of：",
      "可以使用 break，continue 跳出循环",
      "但只限于迭代器(iterator), 所以普通对象不能直接遍历",
      "可迭代的对象：Array, Map, Set, String, TypedArray, arguments对象等",
      "不会查找循环原型上的属性",
      "循环出的是value",
      "",
      "forEach：",
      "专门用来遍历数组",
      "无法使用break, continue, return控制"
    ]
  },
  {
    "id": 55,
    "title": "iframe 优缺点",
    "tags": [
      1
    ],
    "answer": [
      "优点：",
      "能原封不动的把嵌入的网页展现出来",
      "如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷",
      "网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用",
      "如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决",
      "",
      "缺点：",
      "会阻塞主页面的onload事件",
      "iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。会产生很多页面，不容易管理",
      "iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差",
      "iframe会不利于搜索引擎优化（SEO）",
      "很多的移动设备无法完全显示，设备兼容性差"
    ]
  },
  {
    "id": 56,
    "title": "变量提升与函数提升",
    "tags": [
      3
    ],
    "answer": [
      "变量提升:",
      "即将变量声明提升到它所在作用域的最顶端",
      "使用var声明的变量，存在变量提升现象，但不会抛出异常，默认值会被设置为 undefined",
      "",
      "函数提升：",
      "函数声明式( function funName(){} )存在函数提升",
      "函数表达式(var funName = function(){} )的写法不存在函数提升，但存在变量提升"
    ]
  },
  {
    "id": 57,
    "title": "vue-router 怎么配置404页面",
    "tags": [
      4,
      401
    ],
    "answer": [
      "path: \"*\" 放在最后"
    ]
  },
  {
    "id": 58,
    "title": "vue-router 有几种模式？有哪些区别？",
    "tags": [
      4,
      401
    ],
    "answer": [
      "提供了两种路由模式：hash 模式和 history 模式",
      "hash 模式：",
      "1、url路径会出现“#”号字符",
      "2、hash值不包括在Http请求中，它是交由前端路由处理，所以不会向服务器发送请求",
      "",
      "history 模式：",
      "1、整个地址重新加载",
      "2、需要后台配置支持，没有后台配置的话，会出现404"
    ]
  },
  {
    "id": 59,
    "title": "vue-router 有哪几种导航钩子",
    "tags": [
      4,
      401
    ],
    "answer": [
      "全局：",
      "1、beforeEach",
      "2、beforeResolve",
      "3、afterEach",
      "",
      "路由独享：",
      "beforeEnter",
      "",
      "组件内部：",
      "1、beforeRouteEnter",
      "2、beforeRouteUpdate",
      "3、beforeRouteLeave"
    ]
  },
  {
    "id": 60,
    "title": "Vue 完整的导航解析流程",
    "tags": [
      4,
      401
    ],
    "answer": [
      "1、导航被触发",
      "2、在失活的组件里调用 beforeRouteLeave 守卫",
      "3、调用全局的 beforeEach 守卫",
      "4、在重用的组件里调用 beforeRouteUpdate 守卫(2.2 +)",
      "5、在路由配置里调用 beforeEnter",
      "6、解析异步路由组件",
      "7、在被激活的组件里调用 beforeRouteEnter",
      "8、调用全局的 beforeResolve 守卫(2.5 +)",
      "9、导航被确认",
      "10、调用全局的 afterEach 钩子",
      "11、触发 DOM 更新",
      "12、调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入"
    ]
  },
  {
    "id": 61,
    "title": "Vue 怎样动态加载路由",
    "tags": [
      4,
      401
    ],
    "answer": [
      "router.addRoutes"
    ]
  },
  {
    "id": 62,
    "title": "为什么选择前端",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 63,
    "title": "个人的优缺点",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 64,
    "title": "介绍一下前端的学习经历",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 65,
    "title": "作为前端应该掌握哪些知识",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 66,
    "title": "对未来三年职业的规划",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 67,
    "title": "通过什么方式提高能力",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 68,
    "title": "遇到实现不了的功能怎么进行处理",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 69,
    "title": "webpack和gulp的区别",
    "tags": [
      10,
      1001,
      1002
    ],
    "answer": [
      "gulp:",
      "是工具链、构建工具，可以配合各种插件做js压缩，css压缩，less编译 替代手工实现自动化工作",
      "",
      "webpack:",
      "WebPack是前端模块化方案，侧重模块打包，把开发中的所有资源（图片、js文件、css文件等）都看成模块，通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源，它最大的优点就是“模块化”（万物皆模块）",
      "",
      "相同点:",
      "都可以对文件进行合并与压缩（JS、CSS）",
      "",
      "不同点:",
      "gulp是工具链、构建工具",
      "Gulp严格上讲，它旨在规范前端开发流程，不包括模块化功能",
      "webpack是文件打包工具",
      "WebPack更是明显强调模块化开发，而那些文件压缩合并、预处理等功能，只是他附带的功能"
    ]
  },
  {
    "id": 70,
    "title": "webpack打包流程",
    "tags": [
      10,
      1001
    ],
    "answer": [
      "1、读取入口文件",
      "2、分析入口文件，得到其所依赖的文件信息",
      "3、递归读取每个文件的依赖信息，生成AST树，得到关系依赖图",
      "4、代码转化，生成ES5代码"
    ]
  },
  {
    "id": 71,
    "title": "Git的一些常用命令",
    "tags": [
      9
    ],
    "answer": [
      "git config",
      "git init",
      "git clone",
      "git add",
      "git commit",
      "git diff",
      "git reset",
      "git status",
      "git log",
      "git branch",
      "git checkout",
      "git merge",
      "git remote",
      "git push",
      "git pull",
      "git stash"
    ]
  },
  {
    "id": 72,
    "title": "微信小程序是单页应用吗",
    "tags": [
      6
    ],
    "answer": [
      "是，通过路由进行页面切换"
    ]
  },
  {
    "id": 73,
    "title": "微信小程序组件的生命周期",
    "tags": [
      6
    ],
    "answer": [
      "created：组件实例刚被创建好，此时还不能调用setData -- 刚被创建出来",
      "attached：组件完全初始化完毕，进入页面节点树",
      "ready: 组件视图层布局完成后执行。--渲染完成",
      "moved: 组件实例被移动到另一个节点树时执行",
      "detached：离开页面节点树。可以清理一些定时器等工作--  被销毁的时候"
    ]
  },
  {
    "id": 74,
    "title": "微信小程序是是单线程吗",
    "tags": [
      6
    ],
    "answer": [
      "微信小程序是双线程架构，分为逻辑层和渲染层，在进行文件解析的时候不会发生阻塞"
    ]
  },
  {
    "id": 75,
    "title": "bindtap和catchtap的区别",
    "tags": [
      6
    ],
    "answer": [
      "相同点：首先他们都是作为点击事件函数，就是点击时触发",
      "",
      "不同点：bindtap不会阻止冒泡，catchtap是阻止冒泡的"
    ]
  },
  {
    "id": 76,
    "title": "微信小程序的优劣势",
    "tags": [
      6
    ],
    "answer": [
      "优:",
      "无需下载，通过搜索和扫一扫就可以打开",
      "良好的用户体验：打开速度快",
      "开发成本要比App要低",
      "安卓上可以添加到桌面，与原生App差不多",
      "为用户提供良好的安全保障",
      "",
      "劣:",
      "无法开发大型的程序",
      "上线需要审核",
      "太过依赖微信",
      "测试环境只有一个（体验版），多分枝开发测试时不方便"
    ]
  },
  {
    "id": 77,
    "title": "虚拟dom是什么",
    "tags": [
      4,
      5,
      3,
      13
    ],
    "answer": [
      "虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而 提高性能"
    ]
  },
  {
    "id": 78,
    "title": "React组件间通信",
    "tags": [
      5
    ],
    "answer": [
      "1、父组件向子组件通讯: 父组件可以向子组件通过传 props 的方式，向子组件进行通讯",
      "2、子组件向父组件通讯: props + 回调的方式, 父组件向子组件传递props进行通讯",
      "3、兄弟组件通信: 找到这两个兄弟节点共同的父节点, 结合上面两种方式由父节点转发信息进行通信",
      "4、跨层级通信: Context设计目的是为了共享那些对于一个组件树而言是“全局”的数据",
      "5、发布订阅模式: 发布者发布事件，订阅者监听事件并做出反应, 我们可以通过引入event模块进行通信",
      "6、全局状态管理工具: 借助Redux或者Mobx等全局状态管理工具进行通信"
    ]
  },
  {
    "id": 79,
    "title": "React hooks的优缺点",
    "tags": [
      5
    ],
    "answer": [
      "优:",
      "1、更容易复用代码",
      "2、代码量更少",
      "3、更容易拆分组件",
      "4、更方便地把UI和状态分离",
      "5、解决了HOC和Render Props的嵌套问题",
      "6、解决了类组件的 this 指向容易错误、不同声明周期中的逻辑使得代码难以理解和维护",
      "",
      "缺:",
      "1、额外的学习成本",
      "2、写法限制增加了重构成本",
      "3、闭包场景可能会引用到旧的state、props值",
      "4、内部实现上不直观",
      "5、状态不同步"
    ]
  },
  {
    "id": 80,
    "title": "设计模式有哪些",
    "tags": [
      13
    ],
    "answer": [
      "设计模式分为三种类型，共23种",
      "",
      "创建型模式：单例模式、抽象工厂模式、建造者模式、工厂模式、原型模式",
      "",
      "结构型模式：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式",
      "",
      "行为型模式：模版方法模式、命令模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式（Interpreter模式）、状态模式、策略模式、职责链模式(责任链模式)、访问者模式"
    ]
  },
  {
    "id": 81,
    "title": "模块化、组件化、工程化",
    "tags": [
      13
    ],
    "answer": [
      "工程化：",
      "前端工程化是一个高层次的思想，而模块化和组件化是为工程化思想下相对较具体的开发方式，因此可以简单的认为模块化和组件化是工程化的表现形式。工程化是将前端项目当成一项系统工程进行分析、组织和构建从而达到项目结构清晰、分工明确、团队配合默契、开发效率提高的目的",
      "",
      "模块化：",
      "一个模块就是一个实现特定功能的文件，有了模块我们就可以更方便的使用别人的代码，要用什么功能就加载什么模块",
      "js模块化方案很多有AMD、CommonJS、UMD、ES6 Module等。css模块化开发大多数是在less、sass、stylus等预处理器的import、minxin特性支持下实现",
      "",
      "组件化：",
      "页面上的每个独立的、可视 / 可交互区域视为一个组件",
      "每个组件对应一个工程目录，组件所需的各种资源都在这个目录下就近维护；由于组件具有独立性，因此组件与组件之间可以自由组合；页面不过是组件的容器，负责组合组件形成功能完整的界面"
    ]
  },
  {
    "id": 82,
    "title": "谈谈对 MVC、MVP、MVVM 模式的理解",
    "tags": [
      13
    ],
    "answer": [
      "MVC",
      "MVC 除了把应用程序分为 View、Model层，还额外的加了一个 Controller层，它的职责是进行 Model 和 View 之间的协作（路由、输入预处理等）的应由逻辑（application logic）；Model 进行处理业务逻辑",
      "用户对 View 操作以后，View 捕获到这个操作，会把处理的权利交移给Controller（Pass calls）；Controller 会对来自 View 数据进行预处理、决定调用哪个 Model 的接口；然后由 Model 执行相关的业务逻辑；当Model 变更了以后，会通过观察者模式（Observer Pattern）通知 View；View 通过观察者模式收到 Model 变更的消息以后，会向 Model 请求最新的数据，然后重新更新界面",
      "",
      "MVP",
      "和 MVC 模式一样，用户对 View 的操作都会从 View 交易给 Presenter。Presenter 会执行相应的应用程序逻辑，并且会对 Model 进行相应的操作；而这时候 Model 执行业务逻辑以后，也是通过观察者模式把自己变更的消息传递出去，但是是传给 Presenter 而不是 View。Presenter 获取到 Model变更的消息以后，通过 View 提供的接口更新界面",
      "",
      "MVVM",
      "MVVM 可以看做是一种特殊的 MVP（Passive View）模式，或者说是对 MVP 模式的一种改良",
      "MVVM 代表的是 Model-View-ViewModel，可以简单把 ViewModel 理解为页面上所显示内容的数据抽象，和 Domain Model 不一样，ViewModel 更适合用来描述 View。 MVVM 的依赖关系和 MVP 依赖关系一致，只不过是把 P 换成了 VM",
      "",
      "MVVM的调用关系：",
      "MVVM 的调用关系和 MVP 一样。但是，在 ViewModel 当中会有一个叫 Binder，或者是 Data-binding engine 的东西。以前全部由 Presenter 负责的 View 和 Model 之间数据同步操作交由给 Binder 处理。你只需要在View 的模板语法当中，指令式声明 View 上的显示的内容是和 Model 的哪一块数据绑定的。当 ViewModel 对进行 Model 更新的时候，Binder 会自动把数据更新到 View 上，当用户对 View 进行操作（例如表单输入），Binder 也会自动把数据更新到 Model 上。这种方式称为：Two-way data-binding，双向数据绑定。可以简单而不恰当地理解为一个模板引擎，但是会根据数据变更实时渲染"
    ]
  },
  {
    "id": 83,
    "title": "跨域是什么？如何解决跨域？",
    "tags": [
      3
    ],
    "answer": [
      "跨域是什么?",
      "请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域",
      "它是由浏览器的 同源策略 造成的,是浏览器对 JavaScript 实施的安全限制",
      "",
      "如何解决跨域？",
      "nginx的反向代理",
      "jsonp: 只支持 get 请求",
      "服务端修改相应头 Access-Control-Allow-Origin",
      "代理"
    ]
  },
  {
    "id": 84,
    "title": "GET 和 POST区别",
    "tags": [
      3
    ],
    "answer": [
      "GET产生一个TCP数据包；POST产生两个",
      "通常get用来获取数据，post用来提交数据",
      "get参数有长度限制",
      "get请求的数据会附加在url，post是放在请求体中",
      "get是明文传输，post可以通过抓包工具看到，也相当于是明文",
      "GET请求会被浏览器主动cache，POST除非手动设置",
      "",
      "上面是标准答案但实际，GET和POST本质上没有区别"
    ]
  },
  {
    "id": 85,
    "title": "数组去重",
    "tags": [
      3,
      301
    ],
    "answer": [
      "1、Array.from(new Set(arr))",
      "2、双for循环",
      "3、其他 for + indexOf、 filter + indexOf、 for + includes等等"
    ]
  },
  {
    "id": 86,
    "title": "简单说说 js 中有哪几种内存泄露的情况",
    "tags": [
      3
    ],
    "answer": [
      "意外的全局变量",
      "闭包",
      "未被清空的定时器",
      "未被销毁的事件监听",
      "DOM 引用"
    ]
  },
  {
    "id": 87,
    "title": "promise和 async await 区别",
    "tags": [
      3,
      301,
      302
    ],
    "answer": [
      "Promise的出现解决了传统callback函数导致的“地域回调”问题，但它的语法导致了它向纵向发展行成了一个回调链，遇到复杂的业务场景，这样的语法显然也是不美观的。而async await代码看起来会简洁些，使得异步代码看起来像同步代码，await的本质是可以提供等同于”同步效果“的等待异步返回能力的语法糖，只有这一句代码执行完，才会执行下一句",
      "",
      "async await与Promise一样，是非阻塞的",
      "async await是基于Promise实现的，可以说是改良版的Promise，它不能用于普通的回调函数",
      "promise是一个对象，async是一个函数",
      "promise属于ES6，async属于es7",
      "promise处理异步是另一种地狱回调，async是测底拉平，更加优雅好用",
      "promise是async的底层"
    ]
  },
  {
    "id": 88,
    "title": "promise的理解",
    "tags": [
      3,
      301
    ],
    "answer": [
      "ES6中的Promise 是异步编程的一种方案",
      "可以很好地解决回调地狱的问题",
      "语法简洁。Promise 对象提供了简洁的API，使得控制异步操作更加容易",
      "promise有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变"
    ]
  },
  {
    "id": 89,
    "title": "call appy bind 作用和区别",
    "tags": [
      3
    ],
    "answer": [
      "作用：改变this指向",
      "区别:",
      "call 和 apply 会调用函数",
      "call 和 apply 传递的参数不一样，call 传递参数arg1, arg2...形式 apply 必须数组形式[arg]",
      "bind 不会调用函数"
    ]
  },
  {
    "id": 90,
    "title": "new 会发生什么",
    "tags": [
      3
    ],
    "answer": [
      "1、创建一个新对象",
      "2、将新对象的__proto__（原型）指向构造函数的prototype（原型对象）",
      "3、构造函数绑定新对象的this并执行返回结果",
      "4、判断返回结果是否为null，如果为null, 返回新对象，否则直接返回执行结果"
    ]
  },
  {
    "id": 91,
    "title": "箭头函数与普通函数的区别",
    "tags": [
      3,
      301
    ],
    "answer": [
      "语法更加简洁、清晰",
      "箭头函数没有自己的this",
      "箭头函数没有 arguments",
      "call apply bind 无法改变箭头函数中this的指向",
      "箭头函数不能作为构造函数使用(this)",
      "箭头函数没有原型prototype"
    ]
  },
  {
    "id": 92,
    "title": "哪些类型能被扩展操作符...扩展",
    "tags": [
      3,
      301
    ],
    "answer": [
      "数组、对象、字符串"
    ]
  },
  {
    "id": 93,
    "title": "什么是暂时性死区",
    "tags": [
      3,
      301
    ],
    "answer": [
      "在代码块内，使用let和const命令声明变量之前，该变量都是不可用的，语法上被称为暂时性死区",
      "",
      "暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量"
    ]
  },
  {
    "id": 94,
    "title": "防抖和节流？应用场景？",
    "tags": [
      3
    ],
    "answer": [
      "防抖和节流：优化高频率执行js代码的一种手段，js中的一些事件如浏览器的resize、scroll，鼠标的mousemove、mouseover，input输入框的keypress等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制",
      "",
      "防抖：",
      "在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时",
      "应用场景：搜索框搜索输入、窗口大小Resize",
      "",
      "节流：",
      "每隔一段时间，只执行一次函数",
      "应用场景：滚动加载、高频点击提交"
    ]
  },
  {
    "id": 95,
    "title": "浅拷贝与深拷贝",
    "tags": [
      3
    ],
    "answer": [
      "浅拷贝只复制对象的第一层属性、深拷贝可以对对象的属性进行递归复制"
    ]
  },
  {
    "id": 96,
    "title": "css 无继承性的属性有哪些",
    "tags": [
      2
    ],
    "answer": [
      "display",
      "vertical-align",
      "text-decoration",
      "text-shadow",
      "white-space",
      "unicode-bidi"
    ]
  },
  {
    "id": 97,
    "title": "css有继承性的属性",
    "tags": [
      2
    ],
    "answer": [
      "font",
      "font-family",
      "font-weight",
      "font-size",
      "font-style",
      "line-height",
      "text-align",
      "direction",
      "color"
    ]
  },
  {
    "id": 98,
    "title": "css预处理工具有哪些",
    "tags": [
      2,
      201,
      202,
      203
    ],
    "answer": [
      "Less: 可以在浏览器中运行，实现主题定制功能；编程能力弱，不直接支持对象，循环，判断等；",
      "Sass: 用户多，更容易找到scss的学习资源；可编程能力比较强，支持函数，列表，对象，判断，循环等；安装node-sass会经常失败或者报错，需要使用cnpm或者手工安装",
      "Stylus: 来自NodeJS社区，所以和NodeJS走得很近，与JavaScript联系非常紧密。还有专门JavaScript API, 人气不高和教程较少"
    ]
  },
  {
    "id": 99,
    "title": "说说css mask的用途",
    "tags": [
      2
    ],
    "answer": [
      "CSS 属性 mask 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域",
      "",
      "详见：https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask"
    ]
  },
  {
    "id": 100,
    "title": "css使一个元素多背景叠加",
    "tags": [
      2
    ],
    "answer": [
      "background: background1, ..., backgroundN",
      "",
      "图小的要在前面， 图大要在后面不然会遮挡住",
      "",
      "详见：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"
    ]
  },
  {
    "id": 101,
    "title": "display:flex后，哪些属性会失效呢",
    "tags": [
      2
    ],
    "answer": [
      "子元素的float、clear和vertical-align属性将失效"
    ]
  },
  {
    "id": 102,
    "title": "flex是哪些属性的简写",
    "tags": [
      2
    ],
    "answer": [
      "flex-grow：项目放大的比例",
      "flex-shrink：项目缩小的比例",
      "flex-basis：项目所占大小",
      "默认值： 0 1 auto"
    ]
  },
  {
    "id": 103,
    "title": "对盒子模型的理解",
    "tags": [
      2
    ],
    "answer": [
      "一个盒子由 context,padding,margin,border 组成",
      "",
      "标准模式，是浏览器默认的盒子模型",
      "box-sizing: content-box",
      "增加padding、border和margin不会影响内容区域的尺寸，但是会增加元素框的总尺寸",
      "",
      "怪异模式",
      "box-sizing: border-box",
      "增加padding、border和margin会影响内容区域的尺寸，不会增加元素框的总尺寸"
    ]
  },
  {
    "id": 104,
    "title": "css选择器有哪些",
    "tags": [
      2
    ],
    "answer": [
      "常见选择器",
      "id选择器、类选择器、标签选择器、后代选择器、子选择器、相邻同胞选择器、群组选择器",
      "",
      "伪类选择器",
      ":link、:visited、:active、:hover 、:first-child、:first-of-type、:last-child、:last-of-type、:checked、:disabled、:empty、:enabled、:focus、:in-range、:invalid、:lang(language)、:not(selector)、:nth-child(n)、:nth-last-child(n)、:nth-last-of-type(n)、:nth-of-type(n)、:nly-of-type、:only-child、:optional、:out-of-range、:read-only、:read-write、:required、:root、:target、:valid、",
      "",
      "伪元素选择器",
      "::after、::before、::first-letter、::first-line、::selection",
      "",
      "属性选择器",
      "[attribute]、[attribute=value]、[attribute~=value]、[attribute|=value]、[attribute^=value]、[attribute$=value]、[attribute*=value]"
    ]
  },
  {
    "id": 105,
    "title": "css选择器优先级",
    "tags": [
      2
    ],
    "answer": [
      "!important >内联 > ID选择器 > 类选择器 > 标签选择器"
    ]
  },
  {
    "id": 106,
    "title": "元素不定宽高，如何水平垂直居",
    "tags": [
      2
    ],
    "answer": [
      "margin:0 auto",
      "定位 + transform负值",
      "定位 + margin负值",
      "flex布局",
      "grid网格布局",
      "table布局 父元素 display:table-cell 子元素 display: inline-block"
    ]
  },
  {
    "id": 107,
    "title": "响应式网站如何开发",
    "tags": [
      2
    ],
    "answer": [
      "meta声明viewport",
      "媒体查询"
    ]
  },
  {
    "id": 108,
    "title": "CSS提高性能的方法有哪些",
    "tags": [
      2,
      12
    ],
    "answer": [
      "加载性能",
      "css压缩",
      "内联首屏关键CSS",
      "异步加载CSS",
      "减少@import,而建议使用link",
      "",
      "选择器性能",
      "减少css嵌套",
      "ID选择器前不进行嵌套",
      "不用css表达式",
      "避免使用通配符规则",
      "了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则",
      "",
      "渲染性能",
      "慎重使用高性能属性：浮动，定位",
      "尽量减少页面的重排和重绘",
      "属性值为0时，不加单位",
      "属性值为浮动小数0.***，可以省略小数点之前的0",
      "标准化各种浏览器前缀，带浏览器前缀的在前。标准属性在后",
      "css雪碧图",
      "",
      "建立公共样式类"
    ]
  },
  {
    "id": 109,
    "title": "JS基本数据类型和引用数据类型有哪些",
    "tags": [
      3
    ],
    "answer": [
      "值类型(基本类型)：",
      "Number、String、Boolean、Undefined、Null",
      "",
      "引用数据类型（对象类型）：",
      "Object、Array、Function，特殊的对象： RegExp和Date"
    ]
  },
  {
    "id": 110,
    "title": "JS不同数据类型如何存储",
    "tags": [
      3
    ],
    "answer": [
      "基本数据类型：",
      "直接存储在栈中，占据空间小、大小固定，属于希望被频繁引用的数据",
      "",
      "引用数据类型：",
      "同时存在栈和堆中，占据空间大，大小不固定。在堆中存对象，在栈中存对象指针，指向堆中实体的地址"
    ]
  },
  {
    "id": 111,
    "title": "typeof 与 instanceof 区别",
    "tags": [
      3
    ],
    "answer": [
      "typeof的返回值是一个字符串，用来说明变量的数据类型（null ,Array、Object 结果都是Object）；instanceof的返回值是布尔值，用于判断一个变量是否属于某个对象的实例"
    ]
  },
  {
    "id": 112,
    "title": "说说你对闭包的理解",
    "tags": [
      3
    ],
    "answer": [
      "闭包就是可以访问其他函数内部变量的函数，我们通常用它来定义私有化的变量和方法，创建一个闭包最简单的方法就是在一个函数内创建一个函数，它有三个特性是 函数内可以再嵌套函数，内部函数可以访问外部的方法和变量，方法和变量不会被垃圾回收机制回收",
      "优点",
      "变量长期在内存中",
      "可重复的使用变量，不会污染",
      "",
      "缺点",
      "内存消耗大，不能滥用，否则会造成性能问题，解决方法：退出函数时，将局部变量删除"
    ]
  },
  {
    "id": 113,
    "title": "闭包使用场景",
    "tags": [
      3
    ],
    "answer": [
      "创建私有变量与私有方法",
      "延长变量的生命周期",
      "",
      "常见场景",
      "防抖与节流"
    ]
  },
  {
    "id": 114,
    "title": "常见的BOM对象你了解哪些",
    "tags": [
      3
    ],
    "answer": [
      "window、location、navigator 、screen、history"
    ]
  },
  {
    "id": 115,
    "title": "js判断一个数组",
    "tags": [
      3
    ],
    "answer": [
      "Array.isArray()",
      "instanceof",
      "constructor",
      "Object.prototype.toString.call()"
    ]
  },
  {
    "id": 116,
    "title": "什么是原型和原型链",
    "tags": [
      3
    ],
    "answer": [
      "原型",
      "1.所有引用类型都有一个__proto__(隐式原型)属性，属性值是一个普通的对象",
      "2.所有函数都有一个prototype(原型)属性，属性值是一个普通的对象",
      "3.所有引用类型的__proto__属性指向它构造函数的prototype",
      "",
      "原型链",
      "当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链"
    ]
  },
  {
    "id": 117,
    "title": "什么是事件代理",
    "tags": [
      3
    ],
    "answer": [
      "事件代理（Event Delegation），又称之为事件委托。是JavaScript中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件（click、keydown......）委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡"
    ]
  },
  {
    "id": 118,
    "title": "冒泡与捕获的区别",
    "tags": [
      3
    ],
    "answer": [
      "事件冒泡：一个由里到外，冒泡，向上层延申",
      "事件捕获：一个由外到里，前往捕获，形成向下趋势"
    ]
  },
  {
    "id": 119,
    "title": "什么是bundle？什么是chunk?什么是module?",
    "tags": [
      10,
      1001
    ],
    "answer": [
      "bundle：是由webpack打包出来的文件",
      "chunk：是一个代码块，一个chunk由多个模块组合而成",
      "module：是开发中的单个模块"
    ]
  },
  {
    "id": 120,
    "title": "什么是Loader?什么是Plugin?",
    "tags": [
      10,
      1001
    ],
    "answer": [
      "Loader：因为webpack本身只理解JavaScript,所以loader用来解析js以外的东西",
      "主要功能：用于告诉webpack如何处理某一类型的文件，并引入到打包出来的文件中",
      "",
      "常用Loader：",
      "1.file-loader：把文件输出到一个文件夹中，在代码中通过相对URL去引用输出的文件",
      "2.url-loader：和file-loader类似，但是能在文件很小的情况下以base64的方式把文件内容注入到代码中去",
      "3.source-map-loader：加载额外的Source Map文件，以方便断点调试image-loader：加载并且压缩图片文件",
      "4.babel-loader：把ES6转换成ES5css-loader：加载CSS，支持模块化、压缩、文件导入等特性",
      "5.style-loader：把CSS代码注入到JavaScript中，通过DOM操作去加载CSS",
      "6.eslint-loader：通过ESLint检查JavaScript代码",
      "",
      "Plugin：中文名称 插件，是一个扩展器，丰富webpack本身，增强功能 ，针对的是在loader结束之后，webpack打包的整个过程，他并不直接操作文件，而是基于事件机制工作，监听webpack打包过程中的某些节点, 在合适的机会通过webpackt提供的API改变输出结果",
      "",
      "常用Plugin:",
      "1.define-plugin：定义环境变量",
      "2.commons-chunk-plugin：提取公共代码",
      "3.uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码"
    ]
  },
  {
    "id": 121,
    "title": "如何利用webpack来优化前端性能",
    "tags": [
      12,
      10,
      1001
    ],
    "answer": [
      "压缩代码",
      "利用CDN加速",
      "删除死代码",
      "提取公共代码",
      "通过image-webpack-loader加载器，对图片进行压缩",
      "通过purgecss-webpack-plugin插件,移除无用的css",
      "代码分割和动态import",
      "IgnorePlugin，忽略moment的locale文件，减少文件尺寸"
    ]
  },
  {
    "id": 122,
    "title": "如何提高webpack的构建速度",
    "tags": [
      12,
      10,
      1001
    ],
    "answer": [
      "多入口情况下，使用CommonsChunkPlugin来提取公共代码",
      "",
      "通过externals配置来提取常用库",
      "",
      "利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来",
      "",
      "使用Happypack实现多线程加速编译",
      "",
      "使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度。原理上webpack-uglify-parallel采用了多核并行压缩来提升压缩速度",
      "",
      "使用Tree-shaking和Scope Hoisting来剔除多余代码",
      "",
      "静态资源CDN托管",
      "",
      "生产关闭sourceMap",
      "",
      "nodeModulesTransform，置type: none不去编译node_modules下的依赖文件",
      "",
      "并行压缩，通过terser-webpack-plugin插件，设置parallel并行数量",
      "",
      "缩小构建范围，通过babel-loader 设置exclude的范围",
      "",
      "通过babel-cache/terser-webpack-plugin开启缓存",
      ""
    ]
  },
  {
    "id": 123,
    "title": "Vue3做了那些优化",
    "tags": [
      4
    ],
    "answer": [
      "小",
      "移除一些不常用的 API",
      "引入tree-shaking，使打包的整体体积变小了",
      "",
      "快",
      "diff算法优化",
      "静态提升",
      "事件监听缓存",
      "SSR优化",
      "",
      "友好",
      "兼顾Vue2的options API的同时还推出了composition API，大大增加了代码的逻辑组织和代码复用能力",
      "",
      "Vue3是基于typeScript编写的，提供了更好的类型检查，能支持复杂的类型推导",
      "",
      "数据劫持优化 Object.defineProperty => Proxy"
    ]
  },
  {
    "id": 124,
    "title": "React生命周期",
    "tags": [
      5
    ],
    "answer": [
      "挂载阶段:",
      "1.constructor() 组件挂载前",
      "2.componentWillMount: 在调用 render 方法之前调用",
      "3.componentDidMount(): 组件挂载后立即调用",
      "",
      "更新运行阶段:",
      "4.componentWillReceiveProps: 在接受父组件改变后的props需要重新渲染组件时用到的比较多，外部组件传递频繁的时候会导致效率比较低",
      "5.shouldComponentUpdate(): 用于控制组件重新渲染的生命周期，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新",
      "6.render(): render() 方法是 class 组件中唯一必须实现的方法",
      "7.componentWillUpdate() *: shouldComponentUpdate返回true以后，组件进入重新渲染完成之前进入这个函数",
      "8.componentDidUpdate(): 每次state改变并重新渲染页面后都会进入这个生命周期",
      "",
      "卸载或销毁阶段:",
      "componentWillUnmount()： 组件卸载和数据的销毁"
    ]
  },
  {
    "id": 125,
    "title": "说说React中的setState执行机制",
    "tags": [
      5
    ],
    "answer": [
      "setState第一个参数可以是一个对象，或者是一个函数，而第二个参数是一个回调函数，用于可以实时的获取到更新之后的数据",
      "",
      "在使用setState更新数据的时候，setState的更新类型分成：同步更新，异步更新",
      "",
      "在组件生命周期或React合成事件中，setState是异步",
      "",
      "在setTimeout或者原生dom事件中，setState是同步",
      "",
      "对同一个值进行多次 setState， setState 的批量更新策略会对其进行覆盖，取最后一次的执行结果"
    ]
  },
  {
    "id": 126,
    "title": "React中类组件和函数组件的区别",
    "tags": [
      5
    ],
    "answer": [
      "函数组件",
      "函数组件也称无状态组件，以函数形态存在的组件",
      "",
      "类组件",
      "类组件就是基于 ES6 语法，通过继承 React.component 得到的组件",
      "",
      "区别:",
      "1.类组件有生命周期，函数组件没有",
      "2.类组件需要继承 Class，函数组件不需要",
      "3.类组件可以获取实例化this，函数组件不行",
      "4.类组件内部可以定义并维护state， 函数组件为无状态组件（可以通过hooks实现）",
      "5.函数组件更轻量与灵活，便于逻辑的拆分复用",
      "6.函数式组件一般用于比较简单的组件定义，类组件用于复杂的组件定义",
      "6.ReactDOM.render的过程不同"
    ]
  },
  {
    "id": 127,
    "title": "React Hooks解决了什么问题",
    "tags": [
      5
    ],
    "answer": [
      "Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性",
      "",
      "1.难以重用和共享组件中的与状态相关的逻辑",
      "2.逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面",
      "3.组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题",
      "4.由于业务变动，函数组件不得不改为类组件等等"
    ]
  },
  {
    "id": 128,
    "title": "React性能优化的手段有哪些",
    "tags": [
      5,
      12
    ],
    "answer": [
      "避免使用内联函数与匿名函数",
      "使用内联函数，则每次调用render函数时都会创建一个新的函数实例",
      "",
      "懒加载组件",
      "创建多个包，并在运行时动态加载，减少初始包的大小",
      "",
      "事件绑定方式",
      "在render方法中使用bind和箭头函数，都会生成新的方法实例，要在constructer中使用bind和箭头函数",
      "",
      "使用 React Fragments 避免额外标记",
      "",
      "合理使用hooks",
      "",
      "缓存优化",
      "",
      "状态下放，缩小状态影响范围",
      "个状态只在某部分子树中使用，那么可以将这部分子树提取为组件，并将该状态移动到该组件内部",
      "",
      "列表项使用 key 属性"
    ]
  },
  {
    "id": 129,
    "title": "对TypeScript的理解？与JavaScript的区别",
    "tags": [
      7,
      3
    ],
    "answer": [
      "TypeScript是JavaScript的类型的超集，支持ES6语法，支持面向对象编程的概念，其是一种静态类型检查的语言，提供了类型注解，在代码编译阶段就可以检查出数据类型的错误，TypeScript在编译阶段需要编译成JavaScript来运行",
      "",
      "js 脚步语言，ts面向对象编程语言",
      "js学习难度小，ts相对js学习难度高",
      "js轻量级解释编辑语言，ts强类型面向对象编程语言",
      "js更灵活",
      "js人气更高，很方便地找到大量成熟的开发项目和可用资源",
      "ts代码质量更好、更清晰",
      "ts可以在开发人员编写脚本时检测错误",
      "ts进行重构更变的容易、快捷"
    ]
  },
  {
    "id": 130,
    "title": "React如何获取表单数据",
    "tags": [
      5
    ],
    "answer": [
      "1.给文本框value属性绑定state中定义的变量,配合onChange事件修改state",
      "2.给文本框添加ref,表单提交时或获取ref的value"
    ]
  },
  {
    "id": 131,
    "title": "受控组件和非受控组件",
    "tags": [
      1,
      3,
      4,
      5
    ],
    "answer": [
      "受控组件",
      "就是受我们控制的组件，由自己维护state",
      "例如：<Input value={x} onChange={fn}/>",
      "",
      "非受控组件",
      "由DOM自身进行维护，ref获取DOM 进行数据的更新这样就不可控",
      "<Input defaultValue={x} ref={input}/>"
    ]
  },
  {
    "id": 132,
    "title": "React路由跳转的方式有哪些",
    "tags": [
      5,
      501
    ],
    "answer": [
      "声明式导航:",
      "使用NavLink或者Link跳转",
      "",
      "编程式导航跳转: ",
      "props.history.push(url) ",
      "props.history.replace(url)",
      "props.history.go(num)"
    ]
  },
  {
    "id": 133,
    "title": "React中state和props有什么区别",
    "tags": [
      5
    ],
    "answer": [
      "相同：",
      "两者都是 JavaScript 对象",
      "两者都是用于保存信息",
      "props 和 state 都能触发渲染更新",
      "",
      "区别：",
      "props 是外部传递给组件的，而 state 是在组件内被组件自己管理的",
      "props 在组件内部是不可修改的，但 state 在组件内部可以进行修改"
    ]
  },
  {
    "id": 134,
    "title": "super()和super(props)的区别",
    "tags": [
      5
    ],
    "answer": [
      "在React中，类组件基于ES6，所以在constructor中必须使用 super",
      "",
      "在调用super过程，无论是否传入props，React内部都会将porps赋值给组件实例porps属性中",
      "",
      "如果只调用了super()，那么this.props在super()和构造函数结束之前仍是undefined"
    ]
  },
  {
    "id": 135,
    "title": "说说你对发布订阅、观察者模式的理解",
    "tags": [
      13
    ],
    "answer": [
      "发布订阅模式",
      "发布-订阅是一种消息范式，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在",
      "",
      "观察者模式",
      "观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新观察者模式属于行为型模式，行为型模式关注的是对象之间的通讯，观察者模式就是观察者和被观察者之间的通讯",
      "",
      "区别",
      "1.观察者模式里，只有两个角色——观察者 + 被观察者; 发布订阅模式里面，却不仅仅只有发布者和订阅者两个角色，还有一个经常被我们忽略的-中间人",
      "2.观察者和被观察者，是松耦合的关系; 发布者和订阅者，则完全不存在耦合",
      "3.观察者模式，多用于单个应用内部; 发布订阅模式，则更多的是一种跨应用的模式，比如我们常用的消息中间件",
      "4.观察者模式大多数时候是同步的，比如当事件触发，Subject就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的（使用消息队列）"
    ]
  },
  {
    "id": 136,
    "title": "浏览器的渲染过程",
    "tags": [
      1,
      2,
      13
    ],
    "answer": [
      "HTML 经过解析生成 DOM树； CSS经过解析生成　Style Rules。 二者一结合生成了Render Tree。 通过layout计算出DOM要显示的宽高、位置、颜色。 最后渲染在界面上"
    ]
  },
  {
    "id": 137,
    "title": "为什么换工作",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 138,
    "title": "印象最深刻的项目",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 139,
    "title": "你认为什么样的代码是好的",
    "tags": [
      14
    ],
    "answer": []
  },
  {
    "id": 140,
    "title": "从浏览器地址输入url到显示页面的步骤",
    "tags": [
      13
    ],
    "answer": [
      "1、首先，在浏览器地址栏中输入url",
      "2、浏览器先查看浏览器缓存 - 系统缓存 - 路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作",
      "3、在发送http请求前，需要域名解析(DNS解析)，解析获取相应的IP地址",
      "4、浏览器向服务器发起tcp连接，与服务器建立tcp三次握手",
      "5、握手成功后，浏览器向服务器发送http请求，请求数据包",
      "6、服务器处理收到的请求，将数据返回至浏览器",
      "7、浏览器收到HTTP响应。根据情况选择关闭TCP连接或者保留重用",
      "8、如果得到的资源(静态)可以缓存，进行缓存",
      "8、读取页面内容，浏览器渲染，解析html源码",
      "9、生成Dom树、解析css样式、js交互",
      "10、ajax请求数据"
    ]
  },
  {
    "id": 141,
    "title": "git发生冲突如何解决",
    "tags": [
      9
    ],
    "answer": [
      "本地当前分支上，修改冲突代码--->add--->commit--->push"
    ]
  },
  {
    "id": 142,
    "title": "高阶组件的理解与应用场景",
    "tags": [
      13,
      5
    ],
    "answer": [
      "高阶函数（Higher-order function），至少满足下列一个条件的函数",
      "1.接受一个或多个函数作为输入",
      "2.输出一个函数",
      "在React中，高阶组件即接受一个或多个组件作为参数并且返回一个组件，本质也就是一个函数，并不是一个组件",
      "",
      "应用场景",
      "通过上面的了解，高阶组件能够提高代码的复用性和灵活性，在实际应用中，常常用于与核心业务无关但又在多个模块使用的功能，如权限控制、日志记录、数据校验、异常处理、统计上报等"
    ]
  },
  {
    "id": 143,
    "title": "小程序的wxss和css有哪些区别",
    "tags": [
      6,
      2
    ],
    "answer": [
      "WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改",
      "1.尺寸单位 rpx",
      "2.提供了全局的样式和局部样式",
      "3.WXSS 仅支持部分 CSS 选择器"
    ]
  },
  {
    "id": 144,
    "title": "微信小程序rpx与px如何换算",
    "tags": [
      6,
      2
    ],
    "answer": [
      "rpx换算px (屏幕宽度/750)",
      "px换算rpx (750/屏幕宽度)"
    ]
  },
  {
    "id": 145,
    "title": "微信小程序性能如何优化",
    "tags": [
      6,
      12
    ],
    "answer": [
      "加载性能",
      "1.控制包大小",
      "2.加载顺序",
      "3.采用分包加载机制",
      "4.预加载",
      "5.和主包之间是无关的，采用独立分包",
      "6.利用缓存",
      "7.按需注入",
      "",
      "渲染性能优化",
      "1.避免使用不当setData,",
      "2.切勿在后台页面进行setData",
      "3.用户事件使用不当",
      "4.减少setData次数和数据量"
    ]
  },
  {
    "id": 146,
    "title": "为什么要使用CSS预编译",
    "tags": [
      2
    ],
    "answer": [
      "CSS缺点",
      "1.语法不够强大，比如无法嵌套书写，导致模块化开发中需要书写很多重复的选择器",
      "2.没有变量和合理的样式复用机制，使得逻辑上相关的属性值必须以字面量的形式重复输出，导致难以维护",
      "",
      "CSS预编译优点",
      "1.可以提供 CSS 缺失的样式层复用机制、减少冗余代码，提高样式代码的可维护性。大大提高了开发效率",
      "2.增强编程能力；增强可复用性；增强可维护性；更便于解决浏览器兼容性",
      "",
      "CSS预编译缺点",
      "预编译CSS步骤的加入，让我们开发工作流中多了一个环节，调试也变得更麻烦了。更大的问题在于，预编译很容易造成后代选择器的滥用"
    ]
  },
  {
    "id": 147,
    "title": "Vue Router模式hash和history的实现原理",
    "tags": [
      4,
      401
    ],
    "answer": [
      "hash模式实现原理",
      "基于location.hash来实现的，其实实现原理很简单，location.hash的值就是URL中#后面的内容",
      "",
      "history模式的实现原理",
      "HTML5提供了History API来实现URL的变化",
      "history.pushState()和history.replaceState()。这两个API可以在不进行刷新的情况下，操作浏览器的历史记录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录"
    ]
  },
  {
    "id": 148,
    "title": "Vue数据更新页面不更新的情况有哪些",
    "tags": [
      4
    ],
    "answer": [
      "1.不存在于 data 中的 变量",
      "2.对象的动态添加和删除",
      "3.数组不能通过索引直接修改或者赋值，也不能修改数组的长度",
      "4.循环嵌套层级太深",
      "5.路由参数变化时，页面不更新"
    ]
  },
  {
    "id": 149,
    "title": "webpack中代码分割的方法",
    "tags": [
      10,
      1001
    ],
    "answer": [
      "1.Entry Points：入口文件设置的时候可以配置",
      "2.CommonsChunkPlugin",
      "3.Dynamic Imports：动态导入,通过模块的内联函数调用来分割"
    ]
  },
  {
    "id": 150,
    "title": "组合式API中保留state和getter的响应性",
    "tags": [
      4,
      404,
      402
    ],
    "answer": [
      "import { computed } from 'vue'",
      "import { useStore } from 'vuex'",
      "",
      "const store = useStore()",
      "const a = computed(() => store.getters.double)"
    ]
  },
  {
    "id": 151,
    "title": "CSS3新特性有哪些",
    "tags": [
      2
    ],
    "answer": [
      "边框",
      "border-radius、border-shadow、border-image、border-image-source、border-image-slice、border-image-width、border-image-outset、border-image-repeat",
      "",
      "背景",
      "Background-size、Background-origin、background-position、Background-clip",
      "",
      "渐变",
      "Linear-gradient()、Radial-gradient()",
      "",
      "文本效果",
      "Word-break、Word-wrap、Text-overflow、Text-shadow",
      "",
      "转换",
      "Transform",
      "",
      "过渡",
      "Transition",
      "",
      "动画",
      "animation"
    ]
  },
  {
    "id": 152,
    "title": "清除浮动的方式有哪些",
    "tags": [
      2
    ],
    "answer": [
      "1.给父元素单独定义高度",
      "2.父级定义overflow：hidden",
      "3.在浮动元素后面加一个空标签clear：both；height：0；overflow：hidden"
    ]
  },
  {
    "id": 153,
    "title": "如何让chrome浏览器显示小于12px的文字",
    "tags": [
      2
    ],
    "answer": [
      "方法一（低版本chrome）",
      "html{-webkit-text-size-adjust: none;}",
      "方法二",
      "transform: scale()"
    ]
  },
  {
    "id": 154,
    "title": "行内元素/块级元素有哪些",
    "tags": [
      1
    ],
    "answer": [
      "行内元素：相邻的行内元素会排列在同一行，不会独占一行 设置宽高无效 span",
      "",
      "块级元素：会独占一行 可以设置宽高等属性div",
      "",
      "块级元素：div h1 - h6 hr p ul ol table address blockquote dir from menu",
      "",
      "行内元素：a br I em img input select span sub sup u textarea"
    ]
  },
  {
    "id": 155,
    "title": "flex属性有那些请简述",
    "tags": [
      2
    ],
    "answer": [
      "父",
      "flex-direction：主轴的方向",
      "flex-wrap：换行",
      "flex-flow：flex-direction和flex-wrap简写",
      "justify-content：主轴上的对齐方式",
      "align-items：交叉轴上对齐方式",
      "align-content：多根轴线的对齐方式",
      "",
      "子",
      "order：排列顺序，越小排列越靠前",
      "flex-grow：放大比例",
      "flex-shrink：缩小比例",
      "flex-basis：设置或检索弹性盒伸缩基准值",
      "flex：flex-grow,flex-shrink和flex-basis的简写",
      "align-self：对齐方式，覆盖align-items"
    ]
  },
  {
    "id": 156,
    "title": "为什么0.1 + 0.2 = 0.30000000000000004",
    "tags": [
      3
    ],
    "answer": [
      "js存在计算精度不足问题",
      "js的Number在内存中存储使用的是一种64位双精度浮点数存储方法",
      "",
      "由于计算机在计算的过程中，会把十进制数字先转换成二进制，然后做运算，因为浮点类型的小数位的限制而截断了运算完的二进制，这时候再把它转换成了十进制就产生了精度的问题"
    ]
  },
  {
    "id": 157,
    "title": "如何解决js计算精度问题",
    "tags": [
      3
    ],
    "answer": [
      "四舍五入",
      "(0.1 + 0.2).toFixed(1); // 0.3",
      "",
      "换算成整型计算",
      "(0.1 * 10 + 0.2*10) / 10; // 0.3"
    ]
  },
  {
    "id": 158,
    "title": "什么叫优雅降级和渐进增强",
    "tags": [
      13
    ],
    "answer": [
      "渐进增强",
      "针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验",
      "",
      "优雅降级",
      "一开始就构建完整的功能，然后再针对低版本浏览器进行兼容",
      "",
      "经常会提到向上兼容和向下兼容的概念。渐进增强相当于向上兼容，而优雅降级相当于向下兼容"
    ]
  },
  {
    "id": 159,
    "title": "什么是柯里化",
    "tags": [
      13,
      3
    ],
    "answer": [
      "柯里化函数：把一个多参数的函数转化为单参数函数的方法。并且返回接受余下的参数而且返回结果的新函数的技术"
    ]
  },
  {
    "id": 160,
    "title": "宏任务和微任务",
    "tags": [
      13,
      3
    ],
    "answer": [
      "js中的一个机制，就是遇到宏任务，先将宏任务放入eventqueue，然后在执行微任务",
      "",
      "宏任务：setTimeout, setInterval, Ajax, DOM事件",
      "",
      "微任务：Promise async/await"
    ]
  },
  {
    "id": 161,
    "title": "require与import的区别",
    "tags": [
      3,
      8
    ],
    "answer": [
      "require是CommonJS规范的模块化语法，import是ECMAScript 6规范的模块化语法",
      "",
      "require是运行时加载，import是编译时加载；",
      "",
      "require可以写在代码的任意位置，import只能写在文件的最顶端且不可在条件语句或函数作用域中使用",
      "",
      "require通过module.exports导出的值就不能再变化，import通过export导出的值可以改变",
      "",
      "require通过module.exports导出的是exports对象，import通过export导出是指定输出的代码",
      "",
      "require运行时才引入模块的属性所以性能相对较低，import编译时引入模块的属性所所以性能稍高"
    ]
  },
  {
    "id": 162,
    "title": "scoped 原理及穿透方法",
    "tags": [
      4,
      2
    ],
    "answer": [
      "原理",
      "通过在 DOM 结构以及 css 样式上加唯一不重复的标记：data-v-hash 的方式，以保证唯一(通过 PostCSS 转译)，达到样式私有模块化的目的",
      "",
      "穿透方法",
      "/deep/ >>>"
    ]
  },
  {
    "id": 163,
    "title": "为什么要使用脚手架",
    "tags": [
      4,
      5
    ],
    "answer": [
      "快速开始一个项目，不用手动配置，直接开发"
    ]
  },
  {
    "id": 164,
    "title": "Vue与React怎么兼容 IE",
    "tags": [
      4,
      5
    ],
    "answer": [
      "使用 babel-polyfill 插件,和前缀名 hack"
    ]
  },
  {
    "id": 165,
    "title": "Vue中使用了哪些设计模式",
    "tags": [
      4,
      13
    ],
    "answer": [
      "1.工厂模式-传入参数即可创建实例 虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode",
      "2.单例模式-整个程序有且仅有一个实例 vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉",
      "3.发布-订阅模式(vue 事件机制)",
      "4.观察者模式(响应式数据原理)",
      "5.策略模式 策略模式指对象有某个行为, 但是在不同的场景中, 该行为有不同的实现方案-比如选项的合并策略"
    ]
  },
  {
    "id": 166,
    "title": "面向过程，面向对象是什么？优缺点",
    "tags": [
      3
    ],
    "answer": [
      "1.面向过程：面向过程就是分析出实现需求所需要的步骤，通过函数一步一步实现这些步骤，接着依次调用即可",
      "",
      "优点：性能上它是优于面向对象的，因为类在调用的时候需要实例化，开销过大",
      "",
      "缺点：不易维护、复用、扩展",
      "",
      "用途：单片机、嵌入式开发、Linux / Unix等对性能要求较高的地方",
      "",
      "",
      "2.面向对象：将数据与函数绑定到一起，进行封装，这样能够更快速的开发程序，减少了重复代码的重写过程",
      "",
      "面向对象有三大特性：封装，继承，多态",
      "",
      "优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统更加灵活、更加易于维护 ",
      "",
      "缺点：性能比面向过程低"
    ]
  },
  {
    "id": 167,
    "title": "Node是什么",
    "tags": [
      8
    ],
    "answer": [
      "node是一个JS运行环境",
      "浏览器也是一个运行环境，JS代码写好之后需要放到浏览器里面去运行，脱离了浏览器是没有办法运行的，现在不仅浏览器能运行JS，Node也能运行Js",
      "他比浏览器拥有更多能力"
    ]
  },
  {
    "id": 168,
    "title": "为什么要用Node",
    "tags": [
      8
    ],
    "answer": [
      "简单强大，轻量可扩展",
      "简单体现在node使用的是javascript,json来进行编码，人人都会；强大体现在非阻塞IO,可以适应分块传输数据，较慢的网络环境，尤其擅长高并发访问；轻量体现在node本身既是代码，又是服务器，前后端使用统一语言;可扩展体现在可以轻松应对多实例，多服务器架构，同时有海量的第三方应用组件"
    ]
  },
  {
    "id": 169,
    "title": "Vue组件为什么只能有一个根元素",
    "tags": [
      4,
      404
    ],
    "answer": [
      "这题现在有些落伍，vue3已经不用一个根了。因此这题目很有说头！",
      "",
      "vue2中组件确实只能有一个根，但vue3中组件已经可以多根节点了",
      "",
      "之所以需要这样是因为vdom是一颗单根树形结构，patch方法在遍历的时候从根节点开始遍历，它要求只有一个根节点。组件也会转换为一个vdom，自然应该满足这个要求",
      "",
      "vue3中之所以可以写多个根节点，是因为引入了Fragment的概念，这是一个抽象的节点，如果发现组件是多根的，就创建一个Fragment节点，把多个根节点作为它的children。将来patch的时候，如果发现是一个Fragment节点，则直接遍历children创建或更新"
    ]
  },
  {
    "id": 170,
    "title": "Vue ref和reactive的区别",
    "tags": [
      4,
      404
    ],
    "answer": [
      "1.ref接收内部值（inner value）返回响应式Ref对象，reactive返回响应式代理对象",
      "2.从定义上看ref通常用于处理单值的响应式，reactive用于处理对象类型的数据响应式",
      "3.两者均是用于构造响应式数据，但是ref主要解决原始值的响应式问题",
      "4.ref返回的响应式数据在JS中使用需要加上.value才能访问其值，在视图中使用会自动脱ref，不需要.value；ref可以接收对象或数组等非原始值，但内部依然是reactive实现响应式；reactive内部如果接收Ref对象会自动脱ref；使用展开运算符(...)展开reactive返回的响应式对象会使其失去响应性，可以结合toRefs()将值转换为Ref对象之后再展开"
    ]
  },
  {
    "id": 171,
    "title": "Vue watch和watchEffect的区别",
    "tags": [
      4,
      404
    ],
    "answer": [
      "watchEffect立即运行一个函数，然后被动地追踪它的依赖，当这些依赖改变时重新执行该函数",
      "",
      "watch侦测一个或多个响应式数据源并在数据源变化时调用一个回调函数",
      "",
      "从实现上来说，watchEffect(fn)相当于watch(fn,fn,{immediate:true})"
    ]
  },
  {
    "id": 172,
    "title": "vue-loader是什么？它有什么作用",
    "tags": [
      4,
      10,
      1001
    ],
    "answer": [
      "是什么",
      "vue-loader是用于处理单文件组件（SFC，Single-File Component）的webpack loader",
      "",
      "作用",
      "因为有了vue-loader，我们就可以在项目中编写SFC格式的Vue组件，我们可以把代码分割为<template>、<script>和<style>，代码会异常清晰。结合其他loader我们还可以用Pug编写<template>，用SASS编写<style>，用TS编写<script>。我们的<style>还可以单独作用当前组件"
    ]
  },
  {
    "id": 173,
    "title": "写过自定义指令吗？使用场景有哪些",
    "tags": [
      4
    ],
    "answer": [
      "v-model或v-for",
      "v-once",
      "图片懒加载 v-lazy"
    ]
  },
  {
    "id": 174,
    "title": "v-once的使用场景",
    "tags": [
      4
    ],
    "answer": [
      "仅渲染元素和组件一次，并且跳过未来更新"
    ]
  },
  {
    "id": 175,
    "title": "从零开始写一个vuex，说说你的思路",
    "tags": [
      4,
      402
    ],
    "answer": [
      "官方说vuex是一个状态管理模式和库，并确保这些状态以可预期的方式变更。可见要实现一个vuex：",
      "",
      "要实现一个Store存储全局状态",
      "要提供修改状态所需API：commit(type, payload), dispatch(type, payload)",
      "",
      "实现Store时，可以定义Store类，构造函数接收选项options，设置属性state对外暴露状态，提供commit和dispatch修改属性state。这里需要设置state为响应式对象，同时将Store定义为一个Vue插件",
      "",
      "commit(type, payload)方法中可以获取用户传入mutations并执行它，这样可以按用户提供的方法修改状态。 dispatch(type, payload)类似，但需要注意它可能是异步的，需要返回一个Promise给用户以处理异步结果"
    ]
  },
  {
    "id": 176,
    "title": "vuex中actions和mutations有什么区别",
    "tags": [
      4,
      402
    ],
    "answer": [
      "修改状态只能是mutations，actions只能通过提交mutation修改状态"
    ]
  },
  {
    "id": 177,
    "title": "刷新后vuex与redux的数据丢失怎么解决",
    "tags": [
      4,
      402,
      5,
      502
    ],
    "answer": [
      "localStorage",
      "",
      "不是所有状态都需要持久化,通过插件的选项控制哪些需要持久化,",
      "",
      "类似的插件有vuex-persist、redux-persist、vuex-persistedstate"
    ]
  },
  {
    "id": 178,
    "title": "Composition API 与 Options API 有什么不同",
    "tags": [
      4,
      404
    ],
    "answer": [
      "Composition API是一组API，包括：Reactivity API、生命周期钩子、依赖注入，使用户可以通过导入函数方式编写vue组件。而Options API则通过声明组件选项的对象形式编写组件",
      "",
      "Composition API最主要作用是能够简洁、高效复用逻辑。解决了过去Options API中mixins的各种缺点",
      "",
      "Composition API具有更加敏捷的代码组织能力，很多用户喜欢Options API，认为所有东西都有固定位置的选项放置代码，但是单个组件增长过大之后这反而成为限制，一个逻辑关注点分散在组件各处，形成代码碎片，维护时需要反复横跳，Composition API则可以将它们有效组织在一起",
      "",
      "Composition API拥有更好的类型推断，对ts支持更友好",
      "",
      "低复杂度的场景，Options API仍是一个好选择。对于那些大型，高扩展，强维护的项目上，Composition API会获得更大收益"
    ]
  },
  {
    "id": 179,
    "title": "什么是React Context",
    "tags": [
      5
    ],
    "answer": [
      "Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性"
    ]
  },
  {
    "id": 180,
    "title": "在React中Props如何验证类型",
    "tags": [
      5
    ],
    "answer": [
      "import PropTypes from \"prop-types\""
    ]
  },
  {
    "id": 181,
    "title": "React使用构造函数和getInitialState的区别",
    "tags": [
      5
    ],
    "answer": [
      "构造函数和getInitialState之间的区别就是ES6和ES5本身的区别。在使用ES6类时，应该在构造函数中初始化state，并在使用React.createClass时定义getInitialState方法"
    ]
  },
  {
    "id": 182,
    "title": "如何打印出字符串中的转义字符",
    "tags": [
      3
    ],
    "answer": [
      "JSON.stringify(str)"
    ]
  },
  {
    "id": 183,
    "title": "Typescript 中的 interface 和 type 有什么区别",
    "tags": [
      7
    ],
    "answer": [
      "1.interface定义数据的形状，具体这个数据结构如何，有哪些属性，如定义一个object；type定义数据的类型，指一个数据具体值是什么类型，如boolean，string",
      "2.interface可以被class继承和实现，也可以继承class；但type不行",
      "3.interface不能作为交叉、联合类型的产物，但可以作为其组成元素；而type就没有什么限制既可以作为组成元素又可作为产物",
      "4.使用type可以自定义范型函数，为己所用；interface不行",
      "",
      "但是在日常的工作中他俩还真没有太大区别，特殊场景单独分析，基本上都能怎么舒服怎么来"
    ]
  },
  {
    "id": 184,
    "title": "JS 是单线程的，为什么 JS 能有异步任务",
    "tags": [
      3
    ],
    "answer": [
      "Js代码分为同步，异步代码。宏观任务和微观任务。js是单线程的，在主线程里面在执行代码的时候按照顺序最先执行同步代码，在执行的过程中发现有异步代码（回调函数）则会把异步代码放在任务队列中（消息队列）。在执行了所有的主线程里的同步代码以后，异步代码会放在主线程里面最后执行"
    ]
  },
  {
    "id": 185,
    "title": "js声明变量的六种方法是什？",
    "tags": [
      3
    ],
    "answer": [
      "ES5: var 、function； ES6:  let、const、import、class "
    ]
  },
  {
    "id": 186,
    "title": "CSS中，自适应的单位都有哪些",
    "tags": [
      2
    ],
    "answer": [
      "1. % ",
      "2. vw（相对于视口宽度的单位） ",
      "3. vh ",
      "4. vm（相对于视口宽度或者高度，取决于哪个小）",
      "5. em（相对于父元素字体大小的单位） ",
      "6. rem（相对于根元素字体大小的单位）"
    ]
  },
  {
    "id": 187,
    "title": "HTML 中 title 属性 和 alt 属性有什么区别",
    "tags": [
      1
    ],
    "answer": [
      "title表示，当图片正常显示时，鼠标悬浮在图片时显示的文字，alt表示，图片无法正常显示时，展示的文字"
    ]
  }
]
export const problemSort: IProblem.sort = {
  "1": [
    0,
    1,
    2,
    4,
    46,
    47,
    48,
    49,
    50,
    54,
    130,
    135,
    153,
    186
  ],
  "2": [
    1,
    2,
    4,
    5,
    48,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    135,
    142,
    143,
    145,
    150,
    151,
    152,
    154,
    161,
    185
  ],
  "3": [
    3,
    4,
    6,
    13,
    47,
    51,
    52,
    53,
    55,
    76,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    128,
    130,
    155,
    156,
    158,
    159,
    160,
    165,
    181,
    183,
    184
  ],
  "4": [
    7,
    8,
    9,
    10,
    11,
    12,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    56,
    57,
    58,
    59,
    60,
    76,
    122,
    130,
    146,
    147,
    149,
    161,
    162,
    163,
    164,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177
  ],
  "5": [
    35,
    36,
    37,
    42,
    76,
    77,
    78,
    123,
    124,
    125,
    126,
    127,
    129,
    130,
    131,
    132,
    133,
    141,
    162,
    163,
    176,
    178,
    179,
    180
  ],
  "6": [
    0,
    71,
    72,
    73,
    74,
    75,
    142,
    143,
    144
  ],
  "7": [
    128,
    182
  ],
  "8": [
    160,
    166,
    167
  ],
  "9": [
    70,
    140
  ],
  "10": [
    21,
    68,
    69,
    118,
    119,
    120,
    121,
    148,
    171
  ],
  "12": [
    2,
    25,
    26,
    27,
    30,
    42,
    43,
    44,
    45,
    50,
    107,
    120,
    121,
    127,
    144
  ],
  "13": [
    76,
    79,
    80,
    81,
    134,
    135,
    139,
    141,
    157,
    158,
    159,
    164
  ],
  "14": [
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    136,
    137,
    138
  ],
  "201": [
    97
  ],
  "202": [
    97
  ],
  "203": [
    97
  ],
  "301": [
    51,
    52,
    53,
    84,
    86,
    87,
    90,
    91,
    92
  ],
  "302": [
    86
  ],
  "305": [
    52
  ],
  "401": [
    56,
    57,
    58,
    59,
    60,
    146
  ],
  "402": [
    149,
    174,
    175,
    176
  ],
  "404": [
    149,
    168,
    169,
    170,
    177
  ],
  "501": [
    131
  ],
  "502": [
    176
  ],
  "1001": [
    21,
    68,
    69,
    118,
    119,
    120,
    121,
    148,
    171
  ],
  "1002": [
    68
  ],
  "1003": [
    21
  ]
}
export const problemTag: IProblem.tagItem[] = [
  {
    "id": 1,
    "name": "HTML",
    "key": "html",
    "icon": "data:image/png;base64,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"
  },
  {
    "id": 2,
    "name": "CSS",
    "key": "css",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAq1BMVEUAAAAlTeUtSe8mTeUnTtomTeQmTeQlTeQlTeQlTeQmTeUlTeQqSNwlTeQjTegmTuUgTuMmTeUmTeQmTOYmTeUmTeUlTeUlTeQlTeQmTeQmTeQlTeQlTeQlTeUmTOUmTeQkT+YlTeQmTeUlTeQlTOQmTeQmTeUlTOQmTeUmTeQmTeUlTOUmTuMnTOUmTeUmTeQoUfAnT+koUvMnUO4oUvQmTeYnT+spU/YqVv/5WGLrAAAAL3RSTlMA/APpDMS++MhnJ2AGig9ACeLQOy7zsKWWj4FQ77d1SBXb1qs2zEMinuZ7bB0aVwnbDvQAAAWySURBVHja7ZrrctowEIW9hsQQzCXQJCSF3LgFKFi+5/2frE3S9gRReeVtNdMfnJnOdJrKPruSVp9X8U466aT/Tk3H8hiFi8m64UzryWLAOXhO8tiZ8uSZeb3vnasgosiJKArUueczBmYJRc5EyYw1MM5cGsjGrIG70qWB8o410HY7BW3WwFfl0oD6yhropy4NpH3WwJfIqb6wBr4FeeRM+dUOBgzqNeLImeJG0+MUPhXOFgEVz77HqpW6M6DO2BnwvalyaODawsBL4s5AMrYw0HV1GKASVxu4d2gg21oY6OhTQHLpT1J7CwMP+iJMlVz5oYF0aWFgHmu2W2dyaWU1n1sYWAWHBoKdJ9dlTAfPWsGAUY+TWHcd+jJ5j1cHGYgnPY9XCNfcvLHZvKDDSvwU2oxbpBjGMES99UTpwmrUuYIBhqLq7SgClFeOukkORpUbmQHUFMRyY2XgNjsYld3KDdwLHuV7m9LWNn+ulFwyeTAnNZUbeEm45cSDOaUtuYGpst9QGDUq6HDzemK1Dg0UIxiwB/O4sRv0ZB0I/5AvAeUMmF9pYF6rAzFsGgk7D75ZzWZTB/PYXrl68g3fGIByTv6zFMwpohTci8nUoNwVmGPT4jtT30+QIzCn5OWTgb0yVBR3YE5l95OBbUIGc2wBlXPvPQyg26KZcwjmlHQ+GRgnZDDHHqLyRfjwycB1QgZzPEZIFc8/GThTZDDHgVSlAarSAfeioMCcJUpWKFcVyugRTxpoUE4XdueqBtOa8sl5hc5mofE5+RXMmQTn5lXWkkJ5fDnwLDVMzQaKp4HnV8gMFunQY2RYvToe9BxBOd8xx6Eug/KZtYGxwQCwRgTlYwwUdcztwQ7Nnnr9GcMpBgFtXUE5znHmuHEC5Ri5TCsMlPeehKwwdzZgrldC0bdiWB/K0aXJK6Er5OuQDuVWnXIMncQVBq49VnIoR/JEp1FrDAMyKEeXRnIep68tM5Qr/MyqSyMhkkChl4CvbKZTznRpbIUdgj6DBMrRpTEHXWGg3AignOnSaNOeqrTCAKotLoF5KOe7NMVwtOx/aDlq59XnhOFQJ2VTwrF+zCyzY05KrGQBlBtgKl43f2FY6D1ODCkA9wLsGChncRI8yyErqq3p/wUwVwPM+ci0TJmhfIIg6oA50sdWKVRbOZQbosQCQpUy3UtiHcUiKEeU+hYyVCm92mInyaAce9jYdtio4M8OAgXuFUM5wNzYeGm/qpjouFZH8WvXCwHlJTGXpgyYGw+SXufmsshUDhNEVCQJLW4vtJkSQDnAvOooHYzuWkGSxPSuXGXx5U1nVXnvkWxrGdirCpj4IL/Vj0TEmSoSdXW+GYX4gQHK93YGQDNGnMKrwvnm7Gm83338i69DuejyDTxXCZR4o4+/CqCcIVoWqf1Qe7uoU84Oh39hCGgrSMGcij4MCCYRl6bWah0dBqFvbeENG+aSTnnFJuoOsPgrhA2ySQ2dciGYx5Pp/Rd9u5l2xkX7GmtIu32Ugvlbucufx18fEeSfQ+893A7prUgKv6n1owQiiopM6Yk4Dj3N0oiooo0v6HDBw3EiEPqy+xE6EdNXEYD5cSKutxcf7/4Z+hahCzpLHJgfJyJWWTS8fej9mvUoQ+iC3hoD5oZEpJlqTNvtaUMZQhd0yqEdoLoqEckPmUKXdMqh5hobqULEvpyHcv76VC4eyvmOuVwyKMeN118bYKDc/e81Mp1yV9enkBDKAeb/dA1saxvolAH9IwtEQbmvbWA+KVDg5KL3klk0wJTWai67C0oUV+f4WhksusuBJxPOd2Ho6XrWXnkigXC6Cxzz9UJvdftNPEkgM+jws76edVZ4hLV41COyCf1OGLo8EQj98oYJXSIe/BD6QBC6NBGE0JUsdHkifm+N36GPpKHLEzFbF1mals5C5xPR7HcXjkPnE+E2dN7E+5+TTjrpb/QdxM+BBMwKVd4AAAAASUVORK5CYII=",
    "children": [
      {
        "id": 201,
        "name": "Less",
        "key": "less"
      },
      {
        "id": 202,
        "name": "Sass",
        "key": "sass"
      },
      {
        "id": 203,
        "name": "Stylus",
        "key": "stylus"
      }
    ]
  },
  {
    "id": 3,
    "name": "JavaScript",
    "key": "js",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAq1BMVEUAAAD+kADu3Br13R723R389CLx1gj13R723R723h713R333x303R352yP23R713h3y3Bv13R323R723h323h713R713h713R723R313R713R333R723h723R313R723R713R323B713R333h333SL23h723h703Rzy3CH23h723h733R713h713R/23R713R743x7/6yD/7CD95B//5h/74h7/6R//7iD/8iGtvtymAAAAL3RSTlMAAh32+wQD+f39aGAiB/J5G+yPVuXSy5atoUMl2L23pptOMisW3W4SDcGIOoF0XACi91AAAAUeSURBVHja7ZuJcpswEIaFWZBwfN9HfDe2kybVBdjv/2SVfCAwnnYGB5q2/JN4ImWl/WbRsQKDSpX6MrIKFvpqcluVQtVyk/FHrTa2CxRut5CVAKjggBWoAFduAWzm0cLkMfsOAC1QJUAJUAKUACVACVAClAAlQAlQApQAJUAJUAKUACVACVAClAAlQAlQCAABLZKq/zQADyLRW6mqQIac81AygJwA/IO4iN+6J76g7f58sRi9vuBQBJADAJGjbfOsjzdI+g/9wcdmf3bg1FbDtmDw6QAgfkTNdzjWGBh/nSAtV+nkZf/RCOHTAXgV1R2tOpriWL3ET6pDx7KuzyNdB6FvMwE5ADiXxjUc89/bKPcoIV1eCigCgASNGqqjlFyExgLyB/BoMEn6Nx7QPITcAUB0kJN4Hh2Lwa4RkLwBWHuHLHPh9aeLLqqjicwPIB0AS/1UpjsdhguO857jGDg39oLvyL326DafbWjPVvpvbTl5EfkAmMZe0Ksj61LnzI6SURbysV6R0H7sS5w3AISzawAc1DzaRNfh40KVuz0BQHMH4GNzBQb+xSE+PNVHYYApzR9ADKOq+osk0dToHYDQQgCWyElFQHkz23Hel2BkxkDnaJvUheYC8JQC8AeqcKnbvQhs4l4MAGWN6JshLmoNDgEmxQIA7yLH7H/bnpAAxQKMVJ0h2Ff7YUihKAAtMlXF+G60mgeCQWEAwBe6MoGwXtoKobAI+KtkQqKz0lbHFh4UBMBSKZnOSStLKXHOACYpnSLHSuWk358F5AtgCBpddAfBGXNSCAAFFo53KQRl2gy9vAB0RmREQLS3zi2C5aImh9wAbv7HxEu1rjOh5GVYcigGgHogRe+9pr3GnbjPkuSXlCZFIBB4MdHTMDYOuhxyzAdSUaDcH3T1WmT8qBDkAdBqsPs24PO+zsujELwJyAPgmwG4gzBEJkmY+PkDeOAlEY5DA/A98B4CIL8HACoCkkT1r+clC22Aeg8AgGSJaZgGIBAGnb6OsxEWzcRoyQwA7NBvs6gUrpB72xhL/rpG6yCRB4N4M6jZAQhweEcfB3wty1hgPepdFsCuPodXEwcRLOITNisADvh8qiwH4YWANb4h6zq09Oz2mLCbrl7zXfQuGDaBw5XIcs1oJgCgoqc3WRdNbR8DIWAfh+YQ8oPrsYXHLV043RGogqBwlhRVY9nlkAWA+EFnj1xXd7HuHUIpw+NrHVnRKUiAPpmaDVCBLjAXnAsh+6vYQrQUWQCI7K9V60sf+/fX5+fZ1lKNEudAZtfMuq/TsKfhaLRsThROZFjvBSQDAIRzVLdMun+KRcz/5jIvZ8gyOXnEEqf6kXEz0rdlnchWx9nVH7ErcO8WmeO4rvo1TMjKuh2ToL1DbszcSjTF0algiwxYSvVoK8owC/jcxPw23VyYTMv/YbKgtGHX9zKnZCCGKth3u90a/x6VH+huEHTbLqMZAAyBmWWJbqtS9WoI1HJlRkhi2Lz5lDySFQMfbE5dW9FAcNRHJ6Re0gw6tesQtJRc50Sz6gviPXYuAJ8Op+cZduocKXWfhZdeNPGo+w3FVdv2Q/n48wKgAubVzfXkt183TbdJO84bs7enybpWqW0mT51XLHzw6CMApmtBX2aL4XA5GvSYkEDu2wELBfcptjH1ufApeJ91PAegMuRCcO4HFMivDJVTxhgl8NmP7QicRbPq/3l0+/cBFPyq11d72e1PvO73lV54/AqyfqN//qXXUv+vfgKZ0VcqFpRWhgAAAABJRU5ErkJggg==",
    "children": [
      {
        "id": 301,
        "name": "ES6",
        "key": "es6"
      },
      {
        "id": 302,
        "name": "ES7",
        "key": "es7"
      },
      {
        "id": 303,
        "name": "ES8",
        "key": "es8"
      },
      {
        "id": 304,
        "name": "ES9",
        "key": "es9"
      },
      {
        "id": 305,
        "name": "ES10",
        "key": "es10"
      }
    ]
  },
  {
    "id": 4,
    "name": "Vue",
    "key": "vue",
    "icon": "data:image/png;base64,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",
    "children": [
      {
        "id": 401,
        "name": "Vue Router",
        "key": "vueRouter"
      },
      {
        "id": 402,
        "name": "Vuex",
        "key": "vuex"
      },
      {
        "id": 403,
        "name": "vue-cli",
        "key": "vueCli"
      },
      {
        "id": 404,
        "name": "Vue3",
        "key": "vue3"
      }
    ]
  },
  {
    "id": 5,
    "name": "React",
    "key": "react",
    "icon": "data:image/png;base64,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",
    "children": [
      {
        "id": 501,
        "name": "React Router",
        "key": "reactRouter"
      },
      {
        "id": 502,
        "name": "Redux",
        "key": "redux"
      }
    ]
  },
  {
    "id": 6,
    "name": "微信开发",
    "key": "wx",
    "icon": "data:image/png;base64,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"
  },
  {
    "id": 7,
    "name": "TypeScript",
    "key": "ts",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAgVBMVEUAAAAAh88BiNICh88CiNEDh9ICiNEDitMDiNEBiNECiNEDiNECiNACiNECiNECidIAi9MAitEAg80CiNECiNEBiNECh9AAiNEAh9IAhtACiNEBiNICiNICiNECh9EDh9EEiNAAitMCiNIBiNICiNEChs8Dh9ECiNECiNIAi9ECiNF+repcAAAAKnRSTlMAQL+A3lXUTMSyh1x39ctsKB4U7uKsYzoyLuq8nZiSUUQPz7mmcEn61wtfUvS3AAAB0UlEQVR42u3Y226CQBSF4Y0DqCAgng9Vaz20nfd/wMZE3KJOayOu2rj+OxlCvhDcQxDGGGOPlAfLBbCgCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACngPQMCaaNdPKAC35qZqenMyCzv7ocjv3KwFkvwC8eVIqqgIQXw/ony3Fye2A+hUA95mvvZsB3rWAQC41ggFeHKszDMB93ggEmOrvseeNpShoVDSIkokfpjUpaqRhr5tY7aX83HX7+kescBIqwD2v8mIg7q5bsyiAjovB4Z7kxloYQC+d6aZgkYBFsbKwGhIwcCwBH8JDfShAl7R6EwfQ2lIi4AFGNCXgADoJlAAGJKIpAQiwDTkre0cC7Ecup7VDJMB2F3KWQQC0aSynhRCAlmZLKTUCATTfdOS4CAZQQutTtDEOoIWZaD4G4J4KfSRAC6VogwJM/cvbk4cB+AMJ/hIQiUhZECMB61zkRNAby77g7oDuUIqCdH9sstVJdHeA7YgW1HZFR4dW9wes5ZvqiEkYi7smAuC3xVULsxuGLsEI9UISvsql2sBXsnnuuP8ogJ3Mh3LccvNmKwaYIutoZfaGznBg/Cf9Wk4AAQT8TwAsYYwx9kB9AY6lCB2KA5UEAAAAAElFTkSuQmCC"
  },
  {
    "id": 8,
    "name": "NodeJS",
    "key": "node",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAilBMVEUAAABon2NonWJooGNon2Non2Non2NpoGNon2Ngol5on2NooGNon2NnnWFon2Non2Non2Non2Non2Non2Non2Non2Nnn2Non2JnoGRon2Non2Non2Non2NpnmRon2NooGJon2Non2RqnmNon2Non2Non2JnoWJon2Npn2Non2Non2NooGNooGNon2MPpl3vAAAALXRSTlMAv4AZrNaMNKEH9Us5Dmfmy5R665uEcyoTxmxiWC/RT+FBJbanRiHxslTdXLtmw2wuAAAEjUlEQVR42u3b2ZaiMBAG4GITWRVEUVAUFVzr/V9vzsyBDrHZjBRz43fZ7dHfTqhUkwBfX19fn7Cm2uWiTS34P24bLGxuMD79jBVnHcalTPDFRIERRXf85R7BWPYS1pL2MIbdFBtNd0BtvTSx4iLLGlaYyzWQcjX+G4cADh9Jc4FO9uTH3KodlGcGNMLgZdY3TssghOE58qXtuo8O/NRwYGBxglWq/SsgX5qSGIaUnrBqvoUatopVpxSGcvSwaraCBts5VnlHGILhL/q/Lf/ahW/Ax7bz9/6wQeNgdeseVy3uUapPr9NVXM7PbLPnxbXV+As2B0GrmehKszT5Wfthx8Xqbn98dd7cPuy48BC9fe1K+EHPpkwG6Lf2B+H3iO7DTGRfrGfbS8NdymeBnk3GIYuZwtcxGTo9hi7nGVedH52zn2BBW2FF19Vw5equgK4F4gqtrEp/6wzZT7Gq1l7QJmQdvm2W9QDalIvfFoZX1CUV2kjFBQsEZPbeBAEMJbTtMF//jwCGJV9nrOCqvmUQBdhOpb+4WaS4Kv6mugpFgLJIV7786oD1ZrIyQoBwjs1mD/IAoYatVsQBnAQ7RLQBJtjloFAGsPCHJrt7++g4R3vvygkyHmEA1vdu9sDZ+RoWzJwuQG6Wnw8cfnb4dAG25ZfUW94HE7oAS2xb3G5YyMkCqO3Le1miMvIAansf6JIPwQFqrYv1MaYKwNp3OYQ6rvxPShYgxB/S0oZf6JdjjVv61EmUHY1RA0zqir/kxboxUgBoXAy1M+vKSPsBZGq7MuIAbBSauzLyntCdY5t7ShWAcU/YJiULwKwfnrTAJmvaACxFGnlSXYt+pQ7Ay9NYnkpY9RgtALOOr/jjOWYAJvewZNAEmHLLfcuLUaEJYBZVFxqw1XJHE6Cc8c0LMRZ0mgAb1nd3BHAoArCO7AQNlHJFILoKsvabr+zFElEAZ4atN9S25IVIbrubvw+wcFlTBVBmlWq30vPyg5TdTa2sTR7dWuDii4W2SWavP6NcjmXsZpP2AzF22CjUd8kkbDM16O8T+ndskmwJu2LGiRKscVGjNdAGYHaxJ13wh7kJopT4P6MaxloJdVs/Ks5n/xueWQFtCSCm3MQV2rL5PMASCxOBTavPA+zxhyW+bTctosG7FK33th1kWHHK6nadDgK7hkz21jYnBkf2G7vczYa3uC+38Dvdmjavn+X8hDfoC6zQUpHtez/8dyJCZV+iN+UqdobB1ZDP4AVS/1FkZOFzEI6/wCaSwKUncA7i6GGDuOfgz/mTPIb4ISreud/g8/m9HETcJPzlBH1EWHVNQVT8RJ4MPVgzrjF5wCfSYFH5KhZ026kDn+gzrImamAtN8vVe544JjrcK191TBuOyNi+HD2noJ23Vduic9RMk9IDbrOQHn/6Y+/ZaOVZe5d5fDh+SsObIXHyD/eI50qMO8YJbX261h85JT/gf+c867wAc2Rz1cZfsxB+0lbXeh0cpHnLgHVZAj3/MQ6DjInjK6Y2Oi+A5L9ZxjW014zuu8eVeR8dFTw+SyyUJdPj6+vr6wB9EwmmAiAeOdAAAAABJRU5ErkJggg=="
  },
  {
    "id": 9,
    "name": "Git",
    "key": "git",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAhFBMVEUAAADnWjnnWzfnWjnnWjnlWjjmWjnmWDjmWjfbVzvnWjnnWjnpWTrnWjnoWjnnWjnnWjnoWjnpWjboWjnoWjnnWjnoWjjoWjrqWDroWTfmWz3nWjnnWznnWTnjVzrqWDrnWjnnWTnoWjjzTUDoWjnoWjrnWDjoWjroWjnnWjnnWznnWjlMuM9TAAAAK3RSTlMA1Cqqn4BmORQMzHYY9vLt4tAH57ynYDEmIBDcilEiHZmTjwSwWEBuwmxJneB6SwAAA4dJREFUeNrt2dlu4mAMhuE/FLIQloS9UPaBLr7/+xtpKvVrJdNPjF35pD6cOrzPtAQCSZZZ1n9G7WlRpqCpR/JvskuKmM5MPqbL1/37mQjmIfHx78cI0I8RoB8jQD9GgH6MAP0YAfoxAvRjBOjHCNCPEaAfI0D/V/AriBJ0ggSoLmMEaG6CBChuOjEC9JrV5385XM/lqljMxz8uwP93+qg8J8/bKRE4nnfjgbYw6BOB43k/KtWdHhGY+5hhpW79IQJ7H4KJtrbeEIG9j1EXt0IEfv2RunkmZ6NfX54SeRYQgbUvhb6cCxF49eVR3y6ECLz6MtHXV0IEXn0p9f1SiMCrLx39gLMwgVNftvoRV6ECU59+H3UQLjD1yTtiEjEJeB9Tm66V7X1pk1Fg//zrJfjvxzn6CAyPcqgMAkMf068NAlMfg/PvbBHwPgcMJwYB7XOAUcD7HCCjyiDgR3KAjA0CHGcAyHRtEPCjOECmpUHAj+EAaQwCHGEAyGZwr8DUBwCC/edHPF4766rI50MiQN8MkAwCXDnuXxsmmIkTQFr1Q8Nj9/vru1rcANLfJW2e5NY8p7QcOQAgWKmCm7+DYZGexRMgrSoos9sXN3NfgGQdTbCQGzNLY2eAKPlvnulNap0Bcx1wFH1G6eQMuN73/UE/LZwBnfu+P+imMvMFrHXATvRZpHTxBVQ6oBJ1TniV8AIUOmAg2ry8X00+eAJyHfCGDeU14+HnT8P6mz4EHoDhXgX09T4EbgB51fo56UNgBzTKRcG6JX0I7ADpkrdj9E0CAPjXyT3Sh8AHIN3yy0vAjPQhsAIQWOBR84z2IbACMLNjXuyqwVtNzj9dYAdg9L5VMH36eM+Z1M39fatg/uVUX72Y+lzAT7PDfX2roE/uGLG+VTAslE9fY7c+F/TIzVvSNwum+g3sqVOfC3r6ET1Lnwv4LZuLU58Ldvr+ytLnAn7fcOLU54K9vr3nfSfBUl9e0r6XYKHv5qzvJuiSVdK3Cxp9syF9R0FO/gKkbxf0tbU+6dsE/MW4Z+ibBbzvLzitP/98fWJ9f0G7xU+3Le/7C2TzVOyqalf0MjH0DQLMj/YhiOpDENWHIKoPQVQfgqg+BFF9CKL6EET1IYjqQxDVhyCqD0FUH4KoPgRRfQii+hBE9SGI6kMQ1Ycgqg9BTF+/DTLrpIi5ZO/5UZ2CpswP2Xj+vLQ8xl+kU4sVZzdTTAAAAABJRU5ErkJggg=="
  },
  {
    "id": 10,
    "name": "打包工具",
    "key": "pack",
    "icon": "data:image/png;base64,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",
    "children": [
      {
        "id": 1001,
        "name": "webpack",
        "key": "webpack"
      },
      {
        "id": 1002,
        "name": "gulp",
        "key": "gulp"
      },
      {
        "id": 1003,
        "name": "vite",
        "key": "vite"
      }
    ]
  },
  {
    "id": 11,
    "name": "算法",
    "key": "algorithm",
    "icon": "data:image/png;base64,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"
  },
  {
    "id": 12,
    "name": "性能优化",
    "key": "optimize",
    "icon": "data:image/png;base64,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"
  },
  {
    "id": 13,
    "name": "理论概念",
    "key": "theory",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAPFBMVEUAAAD/ywD/ygD/zAD/zAD/zQD/zAD/zAD/zAD/zAD/zAD/ygD/zwD/zAD/zwD/zQD/ywD/zAD/zAD/zABreZm1AAAAE3RSTlMAQD+/gGDw0JBQoDAQnyBwT7DfL24/MgAAAfhJREFUeNrt29tugzAMgGGHkANnWr//u05KmSJosiSCxRv1fzcJKV+l1a0oBpewBitnrIDvZokkyRlcg0ai9OBev0ay9AwAEgmTAAJJE2CRNAsGSZOAxDGAAQxgAAMYwAAGMIABDAgC5AAZjQtuLSNkNMhswAB5KXQpyEtkAwBKBApyKwGMTTIn2M5vko2FAIHJJidw50+YTFwL8ILX+RQAL5iQAuAFE1IAvGDCXwToTgTrDG49n7hlYtfqE4AOInV4LH6tOgEQBUNNRLGVAKaBYKs5CQi+VoEFMYABlQC6FcGsrgSID6JKgPggqgR4jBBs/PeDSL5VFRDsgwBLDKAqAdC2wazGt/TxWnkSUJqCY6YOID6I+roAC4dmXReAWu4yiJUA8c4DTGy+Pz5lEKkYoKsE0G0TbNGY7hb/hPF4FOeM4vYGgP1NB5MCCOm7BtAVTB+xu+AuAL02vtXUBQRiAAMY8OcBN/wwKql7AzzqAsza7Gs/7TshA+4GGEWwBV2t+6PHrV6kG4sA8ax7x+1vgfSQ2RU/37evQe8FBecPFzzAsOr9Ewt9yfkyAShNOYE7X9E8Q6L8bUsKgBcopAB4gUIKgBcopASglLd8kOmHGMAABjCAAQxgwA0B5AuP5Cuf5Euv5Gu/9IvP5Kvf9MvvNOv/clv//wLY1B2Td4whVgAAAABJRU5ErkJggg=="
  },
  {
    "id": 14,
    "name": "hr面/Boos面",
    "key": "hr",
    "icon": "data:image/png;base64,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"
  },
  {
    "id": 15,
    "name": "大厂面试",
    "key": "company",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAn1BMVEUAAADYHAfYHgbZHgbYHgbZHgbYHQbZHgbZHgbYHwXWHwfYHgbYHgbYHQXXHgXZHgTYHgbZHQfYHgXYHQXZHQbYHwfZHQXaHQjYGwDZHgbZHQbYHQXZHgbUHgDVGADYHgbYHQbYHgXYHQbYHgbZHQfYHQXYHQbZHgXYHgbXHQbYHwbYHQbZHQfYHQXYHgfZHQXXHgbYHwbXHgXZHAbYHgbkKpQwAAAANHRSTlMAJM6a2cO2sqgwIPvmjWY7onJjXldKNRcF8ceVdxAM9+vp34BNQNK8uK18UEW/l5OHhGcsfnx/kAAAAsBJREFUeNrt2Nl22jAQBuDf2GC8sEPY962BNEmT//2fradtUoVAiGQ01o2/ex+fI82MZgaFQqFgrhlu4VRCjj04NCS5mAzgTMo/Shu4EvCfX3CkxDf7Bpwo8928BRfKVMZwYMcPQuQv4Ec75C7liSHyNuSpFXKW8JMqcuXxzAR56vJcHTl65gUb5KfCC8rIT8pLWshLnRelMXJS4gcOXoU6v/KAXJT4lRB5qJNOj2BaouKiIj/xmi2kdXlVE8L6Aa+7gyyf3/Ah6pnfWcwgaMzvdSGnScXFHYTUsYKUn9TTwH+ei//zGe86rExhS0BdJby7JwMPVswS6sMbL7FWmSLqU79s8a9X3MyjkfqnEXqKG/WpGFSCja3EnI2oGERhaKtLuKcpdQA2Vkk1GpupA7h9ZOjQXB/AkSc6yCha0lwMeCueWHrI5gczeL3w3SMyaTGLO9Qsdezekll0uzxXQQaPtKgNYw+0KZgKlCAT5uWoQbvmkZsIUNYw4g1p2QhG1rQuMu9CHd7BNCHp8g6OFOAZ9QECWkarKAFl6KOIAXTdUXESBHWK2BrsYkR0oKtMERNXSWC+zw4oIoSuJUWUoGtOEQvoSigiga6UIlLXWVAymMlE/DDYiopoumkHlBp0Tag4KcVtKk4GxB5F9Ax2cyL60LangD3gNgjagNs76MNASOtCmHihdS8wEdO6GEYqtKwCxcloUIfiojUvw1SXVnVhrCIUAW5epB4yqNKaKhQnu8oGMvFpiY9sZmVaMZoio3hFC5YRMrtLeLsNFBe52MJNOrLDgPyMcI+bteUqkPzWsA0r4kCgABqZVZnBPoY9YxrzB7BpvaCRxRqWxbU5tc1rMeyLfGryI8hoVKmh2oCcXjPlVWmzB1mD41PALwRPxwHyEB1GPDM6RMjRwNt2Dn5lNxzuKv6hs/UGKBQKhWx+AyFq/tck1I0lAAAAAElFTkSuQmCC"
  }
]
export const problemTagMenu: IProblem.tagMenu ={
  "1": "HTML",
  "2": "CSS",
  "3": "JavaScript",
  "4": "Vue",
  "5": "React",
  "6": "微信开发",
  "7": "TypeScript",
  "8": "NodeJS",
  "9": "Git",
  "10": "打包工具",
  "11": "算法",
  "12": "性能优化",
  "13": "理论概念",
  "14": "hr面/Boos面",
  "15": "大厂面试",
  "201": "Less",
  "202": "Sass",
  "203": "Stylus",
  "301": "ES6",
  "302": "ES7",
  "303": "ES8",
  "304": "ES9",
  "305": "ES10",
  "401": "Vue Router",
  "402": "Vuex",
  "403": "vue-cli",
  "404": "Vue3",
  "501": "React Router",
  "502": "Redux",
  "1001": "webpack",
  "1002": "gulp",
  "1003": "vite",
  "html": 1,
  "css": 2,
  "less": 201,
  "sass": 202,
  "stylus": 203,
  "js": 3,
  "es6": 301,
  "es7": 302,
  "es8": 303,
  "es9": 304,
  "es10": 305,
  "vue": 4,
  "vueRouter": 401,
  "vuex": 402,
  "vueCli": 403,
  "vue3": 404,
  "react": 5,
  "reactRouter": 501,
  "redux": 502,
  "wx": 6,
  "ts": 7,
  "node": 8,
  "git": 9,
  "pack": 10,
  "webpack": 1001,
  "gulp": 1002,
  "vite": 1003,
  "algorithm": 11,
  "optimize": 12,
  "theory": 13,
  "hr": 14,
  "company": 15
}
export const homeMenu: IProblem.homeMenuItem[] = [
  {
    "title": "基础",
    "sub": [
      {
        "id": 1,
        "icon": "data:image/png;base64,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",
        "name": "HTML",
        "total": 14
      },
      {
        "id": 2,
        "icon": "data:image/png;base64,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",
        "name": "CSS",
        "total": 28
      },
      {
        "id": 3,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAq1BMVEUAAAD+kADu3Br13R723R389CLx1gj13R723R723h713R333x303R352yP23R713h3y3Bv13R323R723h323h713R713h713R723R313R713R333R723h723R313R723R713R323B713R333h333SL23h723h703Rzy3CH23h723h733R713h713R/23R713R743x7/6yD/7CD95B//5h/74h7/6R//7iD/8iGtvtymAAAAL3RSTlMAAh32+wQD+f39aGAiB/J5G+yPVuXSy5atoUMl2L23pptOMisW3W4SDcGIOoF0XACi91AAAAUeSURBVHja7ZuJcpswEIaFWZBwfN9HfDe2kybVBdjv/2SVfCAwnnYGB5q2/JN4ImWl/WbRsQKDSpX6MrIKFvpqcluVQtVyk/FHrTa2CxRut5CVAKjggBWoAFduAWzm0cLkMfsOAC1QJUAJUAKUACVACVAClAAlQAlQApQAJUAJUAKUACVACVAClAAlQAlQCAABLZKq/zQADyLRW6mqQIac81AygJwA/IO4iN+6J76g7f58sRi9vuBQBJADAJGjbfOsjzdI+g/9wcdmf3bg1FbDtmDw6QAgfkTNdzjWGBh/nSAtV+nkZf/RCOHTAXgV1R2tOpriWL3ET6pDx7KuzyNdB6FvMwE5ADiXxjUc89/bKPcoIV1eCigCgASNGqqjlFyExgLyB/BoMEn6Nx7QPITcAUB0kJN4Hh2Lwa4RkLwBWHuHLHPh9aeLLqqjicwPIB0AS/1UpjsdhguO857jGDg39oLvyL326DafbWjPVvpvbTl5EfkAmMZe0Ksj61LnzI6SURbysV6R0H7sS5w3AISzawAc1DzaRNfh40KVuz0BQHMH4GNzBQb+xSE+PNVHYYApzR9ADKOq+osk0dToHYDQQgCWyElFQHkz23Hel2BkxkDnaJvUheYC8JQC8AeqcKnbvQhs4l4MAGWN6JshLmoNDgEmxQIA7yLH7H/bnpAAxQKMVJ0h2Ff7YUihKAAtMlXF+G60mgeCQWEAwBe6MoGwXtoKobAI+KtkQqKz0lbHFh4UBMBSKZnOSStLKXHOACYpnSLHSuWk358F5AtgCBpddAfBGXNSCAAFFo53KQRl2gy9vAB0RmREQLS3zi2C5aImh9wAbv7HxEu1rjOh5GVYcigGgHogRe+9pr3GnbjPkuSXlCZFIBB4MdHTMDYOuhxyzAdSUaDcH3T1WmT8qBDkAdBqsPs24PO+zsujELwJyAPgmwG4gzBEJkmY+PkDeOAlEY5DA/A98B4CIL8HACoCkkT1r+clC22Aeg8AgGSJaZgGIBAGnb6OsxEWzcRoyQwA7NBvs6gUrpB72xhL/rpG6yCRB4N4M6jZAQhweEcfB3wty1hgPepdFsCuPodXEwcRLOITNisADvh8qiwH4YWANb4h6zq09Oz2mLCbrl7zXfQuGDaBw5XIcs1oJgCgoqc3WRdNbR8DIWAfh+YQ8oPrsYXHLV043RGogqBwlhRVY9nlkAWA+EFnj1xXd7HuHUIpw+NrHVnRKUiAPpmaDVCBLjAXnAsh+6vYQrQUWQCI7K9V60sf+/fX5+fZ1lKNEudAZtfMuq/TsKfhaLRsThROZFjvBSQDAIRzVLdMun+KRcz/5jIvZ8gyOXnEEqf6kXEz0rdlnchWx9nVH7ErcO8WmeO4rvo1TMjKuh2ToL1DbszcSjTF0algiwxYSvVoK8owC/jcxPw23VyYTMv/YbKgtGHX9zKnZCCGKth3u90a/x6VH+huEHTbLqMZAAyBmWWJbqtS9WoI1HJlRkhi2Lz5lDySFQMfbE5dW9FAcNRHJ6Re0gw6tesQtJRc50Sz6gviPXYuAJ8Op+cZduocKXWfhZdeNPGo+w3FVdv2Q/n48wKgAubVzfXkt183TbdJO84bs7enybpWqW0mT51XLHzw6CMApmtBX2aL4XA5GvSYkEDu2wELBfcptjH1ufApeJ91PAegMuRCcO4HFMivDJVTxhgl8NmP7QicRbPq/3l0+/cBFPyq11d72e1PvO73lV54/AqyfqN//qXXUv+vfgKZ0VcqFpRWhgAAAABJRU5ErkJggg==",
        "name": "JavaScript",
        "total": 44
      }
    ]
  },
  {
    "title": "框架",
    "sub": [
      {
        "id": 4,
        "icon": "data:image/png;base64,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",
        "name": "Vue",
        "total": 62
      },
      {
        "id": 5,
        "icon": "data:image/png;base64,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",
        "name": "React",
        "total": 24
      },
      {
        "id": 6,
        "icon": "data:image/png;base64,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",
        "name": "微信开发",
        "total": 9
      }
    ]
  },
  {
    "title": "工具",
    "sub": [
      {
        "id": 9,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAhFBMVEUAAADnWjnnWzfnWjnnWjnlWjjmWjnmWDjmWjfbVzvnWjnnWjnpWTrnWjnoWjnnWjnnWjnoWjnpWjboWjnoWjnnWjnoWjjoWjrqWDroWTfmWz3nWjnnWznnWTnjVzrqWDrnWjnnWTnoWjjzTUDoWjnoWjrnWDjoWjroWjnnWjnnWznnWjlMuM9TAAAAK3RSTlMA1Cqqn4BmORQMzHYY9vLt4tAH57ynYDEmIBDcilEiHZmTjwSwWEBuwmxJneB6SwAAA4dJREFUeNrt2dlu4mAMhuE/FLIQloS9UPaBLr7/+xtpKvVrJdNPjF35pD6cOrzPtAQCSZZZ1n9G7WlRpqCpR/JvskuKmM5MPqbL1/37mQjmIfHx78cI0I8RoB8jQD9GgH6MAP0YAfoxAvRjBOjHCNCPEaAfI0D/V/AriBJ0ggSoLmMEaG6CBChuOjEC9JrV5385XM/lqljMxz8uwP93+qg8J8/bKRE4nnfjgbYw6BOB43k/KtWdHhGY+5hhpW79IQJ7H4KJtrbeEIG9j1EXt0IEfv2RunkmZ6NfX54SeRYQgbUvhb6cCxF49eVR3y6ECLz6MtHXV0IEXn0p9f1SiMCrLx39gLMwgVNftvoRV6ECU59+H3UQLjD1yTtiEjEJeB9Tm66V7X1pk1Fg//zrJfjvxzn6CAyPcqgMAkMf068NAlMfg/PvbBHwPgcMJwYB7XOAUcD7HCCjyiDgR3KAjA0CHGcAyHRtEPCjOECmpUHAj+EAaQwCHGEAyGZwr8DUBwCC/edHPF4766rI50MiQN8MkAwCXDnuXxsmmIkTQFr1Q8Nj9/vru1rcANLfJW2e5NY8p7QcOQAgWKmCm7+DYZGexRMgrSoos9sXN3NfgGQdTbCQGzNLY2eAKPlvnulNap0Bcx1wFH1G6eQMuN73/UE/LZwBnfu+P+imMvMFrHXATvRZpHTxBVQ6oBJ1TniV8AIUOmAg2ry8X00+eAJyHfCGDeU14+HnT8P6mz4EHoDhXgX09T4EbgB51fo56UNgBzTKRcG6JX0I7ADpkrdj9E0CAPjXyT3Sh8AHIN3yy0vAjPQhsAIQWOBR84z2IbACMLNjXuyqwVtNzj9dYAdg9L5VMH36eM+Z1M39fatg/uVUX72Y+lzAT7PDfX2roE/uGLG+VTAslE9fY7c+F/TIzVvSNwum+g3sqVOfC3r6ET1Lnwv4LZuLU58Ldvr+ytLnAn7fcOLU54K9vr3nfSfBUl9e0r6XYKHv5qzvJuiSVdK3Cxp9syF9R0FO/gKkbxf0tbU+6dsE/MW4Z+ibBbzvLzitP/98fWJ9f0G7xU+3Le/7C2TzVOyqalf0MjH0DQLMj/YhiOpDENWHIKoPQVQfgqg+BFF9CKL6EET1IYjqQxDVhyCqD0FUH4KoPgRRfQii+hBE9SGI6kMQ1Ycgqg9BTF+/DTLrpIi5ZO/5UZ2CpswP2Xj+vLQ8xl+kU4sVZzdTTAAAAABJRU5ErkJggg==",
        "name": "Git",
        "total": 2
      },
      {
        "id": 10,
        "icon": "data:image/png;base64,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",
        "name": "打包工具",
        "total": 9
      }
    ]
  },
  {
    "title": "其他",
    "sub": [
      {
        "id": 7,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAgVBMVEUAAAAAh88BiNICh88CiNEDh9ICiNEDitMDiNEBiNECiNEDiNECiNACiNECiNECidIAi9MAitEAg80CiNECiNEBiNECh9AAiNEAh9IAhtACiNEBiNICiNICiNECh9EDh9EEiNAAitMCiNIBiNICiNEChs8Dh9ECiNECiNIAi9ECiNF+repcAAAAKnRSTlMAQL+A3lXUTMSyh1x39ctsKB4U7uKsYzoyLuq8nZiSUUQPz7mmcEn61wtfUvS3AAAB0UlEQVR42u3Y226CQBSF4Y0DqCAgng9Vaz20nfd/wMZE3KJOayOu2rj+OxlCvhDcQxDGGGOPlAfLBbCgCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACngPQMCaaNdPKAC35qZqenMyCzv7ocjv3KwFkvwC8eVIqqgIQXw/ony3Fye2A+hUA95mvvZsB3rWAQC41ggFeHKszDMB93ggEmOrvseeNpShoVDSIkokfpjUpaqRhr5tY7aX83HX7+kescBIqwD2v8mIg7q5bsyiAjovB4Z7kxloYQC+d6aZgkYBFsbKwGhIwcCwBH8JDfShAl7R6EwfQ2lIi4AFGNCXgADoJlAAGJKIpAQiwDTkre0cC7Ecup7VDJMB2F3KWQQC0aSynhRCAlmZLKTUCATTfdOS4CAZQQutTtDEOoIWZaD4G4J4KfSRAC6VogwJM/cvbk4cB+AMJ/hIQiUhZECMB61zkRNAby77g7oDuUIqCdH9sstVJdHeA7YgW1HZFR4dW9wes5ZvqiEkYi7smAuC3xVULsxuGLsEI9UISvsql2sBXsnnuuP8ogJ3Mh3LccvNmKwaYIutoZfaGznBg/Cf9Wk4AAQT8TwAsYYwx9kB9AY6lCB2KA5UEAAAAAElFTkSuQmCC",
        "name": "TypeScript",
        "total": 2
      },
      {
        "id": 8,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAilBMVEUAAABon2NonWJooGNon2Non2Non2NpoGNon2Ngol5on2NooGNon2NnnWFon2Non2Non2Non2Non2Non2Non2Non2Nnn2Non2JnoGRon2Non2Non2Non2NpnmRon2NooGJon2Non2RqnmNon2Non2Non2JnoWJon2Npn2Non2Non2NooGNooGNon2MPpl3vAAAALXRSTlMAv4AZrNaMNKEH9Us5Dmfmy5R665uEcyoTxmxiWC/RT+FBJbanRiHxslTdXLtmw2wuAAAEjUlEQVR42u3b2ZaiMBAG4GITWRVEUVAUFVzr/V9vzsyBDrHZjBRz43fZ7dHfTqhUkwBfX19fn7Cm2uWiTS34P24bLGxuMD79jBVnHcalTPDFRIERRXf85R7BWPYS1pL2MIbdFBtNd0BtvTSx4iLLGlaYyzWQcjX+G4cADh9Jc4FO9uTH3KodlGcGNMLgZdY3TssghOE58qXtuo8O/NRwYGBxglWq/SsgX5qSGIaUnrBqvoUatopVpxSGcvSwaraCBts5VnlHGILhL/q/Lf/ahW/Ax7bz9/6wQeNgdeseVy3uUapPr9NVXM7PbLPnxbXV+As2B0GrmehKszT5Wfthx8Xqbn98dd7cPuy48BC9fe1K+EHPpkwG6Lf2B+H3iO7DTGRfrGfbS8NdymeBnk3GIYuZwtcxGTo9hi7nGVedH52zn2BBW2FF19Vw5equgK4F4gqtrEp/6wzZT7Gq1l7QJmQdvm2W9QDalIvfFoZX1CUV2kjFBQsEZPbeBAEMJbTtMF//jwCGJV9nrOCqvmUQBdhOpb+4WaS4Kv6mugpFgLJIV7786oD1ZrIyQoBwjs1mD/IAoYatVsQBnAQ7RLQBJtjloFAGsPCHJrt7++g4R3vvygkyHmEA1vdu9sDZ+RoWzJwuQG6Wnw8cfnb4dAG25ZfUW94HE7oAS2xb3G5YyMkCqO3Le1miMvIAansf6JIPwQFqrYv1MaYKwNp3OYQ6rvxPShYgxB/S0oZf6JdjjVv61EmUHY1RA0zqir/kxboxUgBoXAy1M+vKSPsBZGq7MuIAbBSauzLyntCdY5t7ShWAcU/YJiULwKwfnrTAJmvaACxFGnlSXYt+pQ7Ay9NYnkpY9RgtALOOr/jjOWYAJvewZNAEmHLLfcuLUaEJYBZVFxqw1XJHE6Cc8c0LMRZ0mgAb1nd3BHAoArCO7AQNlHJFILoKsvabr+zFElEAZ4atN9S25IVIbrubvw+wcFlTBVBmlWq30vPyg5TdTa2sTR7dWuDii4W2SWavP6NcjmXsZpP2AzF22CjUd8kkbDM16O8T+ndskmwJu2LGiRKscVGjNdAGYHaxJ13wh7kJopT4P6MaxloJdVs/Ks5n/xueWQFtCSCm3MQV2rL5PMASCxOBTavPA+zxhyW+bTctosG7FK33th1kWHHK6nadDgK7hkz21jYnBkf2G7vczYa3uC+38Dvdmjavn+X8hDfoC6zQUpHtez/8dyJCZV+iN+UqdobB1ZDP4AVS/1FkZOFzEI6/wCaSwKUncA7i6GGDuOfgz/mTPIb4ISreud/g8/m9HETcJPzlBH1EWHVNQVT8RJ4MPVgzrjF5wCfSYFH5KhZ026kDn+gzrImamAtN8vVe544JjrcK191TBuOyNi+HD2noJ23Vduic9RMk9IDbrOQHn/6Y+/ZaOVZe5d5fDh+SsObIXHyD/eI50qMO8YJbX261h85JT/gf+c867wAc2Rz1cZfsxB+0lbXeh0cpHnLgHVZAj3/MQ6DjInjK6Y2Oi+A5L9ZxjW014zuu8eVeR8dFTw+SyyUJdPj6+vr6wB9EwmmAiAeOdAAAAABJRU5ErkJggg==",
        "name": "NodeJS",
        "total": 3
      },
      {
        "id": 11,
        "icon": "data:image/png;base64,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",
        "name": "算法",
        "total": 0
      },
      {
        "id": 12,
        "icon": "data:image/png;base64,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",
        "name": "性能优化",
        "total": 15
      },
      {
        "id": 13,
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAPFBMVEUAAAD/ywD/ygD/zAD/zAD/zQD/zAD/zAD/zAD/zAD/zAD/ygD/zwD/zAD/zwD/zQD/ywD/zAD/zAD/zABreZm1AAAAE3RSTlMAQD+/gGDw0JBQoDAQnyBwT7DfL24/MgAAAfhJREFUeNrt29tugzAMgGGHkANnWr//u05KmSJosiSCxRv1fzcJKV+l1a0oBpewBitnrIDvZokkyRlcg0ai9OBev0ay9AwAEgmTAAJJE2CRNAsGSZOAxDGAAQxgAAMYwAAGMIABDAgC5AAZjQtuLSNkNMhswAB5KXQpyEtkAwBKBApyKwGMTTIn2M5vko2FAIHJJidw50+YTFwL8ILX+RQAL5iQAuAFE1IAvGDCXwToTgTrDG49n7hlYtfqE4AOInV4LH6tOgEQBUNNRLGVAKaBYKs5CQi+VoEFMYABlQC6FcGsrgSID6JKgPggqgR4jBBs/PeDSL5VFRDsgwBLDKAqAdC2wazGt/TxWnkSUJqCY6YOID6I+roAC4dmXReAWu4yiJUA8c4DTGy+Pz5lEKkYoKsE0G0TbNGY7hb/hPF4FOeM4vYGgP1NB5MCCOm7BtAVTB+xu+AuAL02vtXUBQRiAAMY8OcBN/wwKql7AzzqAsza7Gs/7TshA+4GGEWwBV2t+6PHrV6kG4sA8ax7x+1vgfSQ2RU/37evQe8FBecPFzzAsOr9Ewt9yfkyAShNOYE7X9E8Q6L8bUsKgBcopAB4gUIKgBcopASglLd8kOmHGMAABjCAAQxgwA0B5AuP5Cuf5Euv5Gu/9IvP5Kvf9MvvNOv/clv//wLY1B2Td4whVgAAAABJRU5ErkJggg==",
        "name": "理论概念",
        "total": 12
      },
      {
        "id": 14,
        "icon": "data:image/png;base64,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",
        "name": "hr面/Boos面",
        "total": 10
      }
    ]
  }
]
export const answerList: IProblem.answerListItem[] = [
  {
    "id": 1,
    "title": "请问以下JS代码会输出什么",
    "code": "var a = 10;\n(function a() {\n    a = 20;\n    console.log(a);\n})()",
    "option": [
      "10",
      "20",
      "undefined",
      "函数a"
    ],
    "answer": 3,
    "explain": [
      "存在变量提升与函数提升，函数提升优先级更高，所以a先被赋值为函数",
      "a = 20; 这里的a是函数名，相当于修改函数a=20,无效",
      "又因为是立即执行函数所以执行了函数a输出a目前的值（即函数），之后才是被赋值为10"
    ]
  },
  {
    "id": 2,
    "title": "请问以下JS代码会输出什么",
    "code": "var name=\"World!\";\n(function(){\n    var name;\n    if(typeof name==='undefined'){\n        name='Jack';\n        console.log('Goodbye'+name);\n    }\n    else{\n        console.log('hello'+name);\n    }\n})();",
    "option": [
      "Hello World!",
      "Goodbye Jack",
      "Hello Jack",
      "Goodbye World!"
    ],
    "answer": 1,
    "explain": [
      "js搜索变量是从内部顺原型链往外部找的，内部直接找到了name，就不去外部了，执行第一次if时还没初始化值，所以为undefined，然后赋值"
    ]
  },
  {
    "id": 3,
    "title": "请问以下JS代码会输出什么",
    "code": "let obj = {name: '222'};\nlet _name = obj.name;\nObject.defineProperty(obj, 'name', {\n  get() {\n    return _name;\n  },\n  set(newVal) {\n    console.log(newVal, _name);\n    _name = newVal;\n  }\n})\nobj.name = '11';",
    "option": [
      "11",
      "222",
      "11 222",
      "什么都不打印"
    ],
    "answer": 2,
    "explain": [
      "newVal 就是set方法的参数11，_name值是字符串222，字符串类型的变量不受obj.name改变而改变"
    ]
  },
  {
    "id": 4,
    "title": "请问以下JS代码会输出什么",
    "code": "let x = 10;\nlet foo = () => {\n    console.log(x);\n    let x = 20;\n    x++;\n}\nfoo();",
    "option": [
      "抛出ReferenceError",
      "10",
      "20",
      "21"
    ],
    "answer": 0,
    "explain": [
      "使用let声明的变量，既不会发生变量提升，同时又存在“暂时性死区”，所以在块级作用域内，如果使用let声明一个变量，那么该变量在声明之前是不可用的，否则会抛出ReferenceError异常"
    ]
  },
  {
    "id": 5,
    "title": "请问以下JS代码会输出什么",
    "code": "var b = 3;\n(function(){\n    b = 5;\n    var b = 2;\n})();\nconsole.log(b);",
    "option": [
      "3",
      "5",
      "报错",
      "2"
    ],
    "answer": 0,
    "explain": [
      "自调函数运行内部b为局部变量存在变量提升，所以函数内的赋值是修改的局部变量"
    ]
  },
  {
    "id": 6,
    "title": "请问以下JS代码会输出什么",
    "code": "function father() {\n  this.num = 935;\n  this.work = ['read', 'write', 'listen'];\n}\nfunction son() {}\nson.prototype = new father();\nlet son1 = new son();\nlet son2 = new son();\nson1.num = 117;\nson1.work.pop();\nconsole.log(son2.num);\nconsole.log(son2.work);",
    "option": [
      "117、 ['read', 'write']",
      "935、['read', 'write','listen']",
      "117、['read', 'write','listen']",
      "935、 ['read', 'write']"
    ],
    "answer": 3,
    "explain": [
      "num变量为数字类型，修改不影响原型链",
      "work变了为数组类型，修改后影响原型链,因此会影响到下次实例化数组的值"
    ]
  },
  {
    "id": 7,
    "title": "请问以下JS代码会输出什么",
    "code": "console.log(1);\nlet a = setTimeout(() => {console.log(2)}, 0);\nconsole.log(3);\nPromise.resolve(4).then(b => {\n    console.log(b);\n    clearTimeout(a);\n});\nconsole.log(5);",
    "option": [
      "1、2、3、4、5",
      "1、2、4、5",
      "1、3、5、4",
      "1、3、5、4、2"
    ],
    "answer": 2,
    "explain": [
      "setTimeout()定时器函数为宏任务,js会先执行所有同步代码，然后执行微任务队列中的所有微任务，最后再继续执行宏任务,先执行同步代码并输出1 3 5，接着执行Promise.resolve().then()方法，输出4，由于在then()方法内删除了定时器函数，所以不会再输出2，最终输出结果为1 3 5 4"
    ]
  },
  {
    "id": 8,
    "title": "会抛出语法错误的是",
    "code": "var s = Symbol('key'); // 1\nconsole.log(s + '123'); //2\nvar obj = {\n    [s]:function(){console.log(1);} //3\n}\nvar b = Reflect.ownKeys(obj); //4",
    "option": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explain": [
      "Symbol值不能与其他类型的值进行运算"
    ]
  },
  {
    "id": 9,
    "title": "运行后的输出是",
    "code": "(function() {\n    var a = b = 5;\n})();\nconsole.log(b);\nconsole.log(a);",
    "option": [
      "5、5",
      "undefined、undefined",
      "5、undefined",
      "5、Uncaught ReferenceError: a is not defined"
    ],
    "answer": 1,
    "explain": [
      "其中变量a使用关键词var来声明。这就意味着a是这个函数的局部变量。与此相反，b被分配给了全局作用域（译注：也就是全局变量）",
      "因a为函数中的私有变量外部访问不到，所以报错 a is not defined"
    ]
  },
  {
    "id": 10,
    "title": "运行后的输出是",
    "code": "var len = 117;\nlet func = {\n  len: 935,\n  showLen: function() {\n console.log(this.len);\n  },\n  show: function() {\n (function(cb) {\n   cb();\n })(this.showLen)\n  }\n}\nfunc.show();",
    "option": [
      "117",
      "935",
      "undefined",
      "null"
    ],
    "answer": 0,
    "explain": [
      "个匿名函数，this为window（非严格模式下）"
    ]
  },
  {
    "id": 11,
    "title": "运行后的输出是",
    "code": "var x = new Boolean(false);\nif (x) {\n  alert('hi'); \n}\nvar y = Boolean(0);\nif (y) {\n  alert('hello');  \n}",
    "option": [
      "hi",
      "hi hello",
      "hello",
      "不显示"
    ],
    "answer": 0,
    "explain": [
      "x = Boolean对象； x 并不是 布尔类型的 false"
    ]
  },
  {
    "id": 12,
    "title": "分析下面代码，总共输出（ ）行########",
    "code": "var i = 0;\nwhile( i < 40 ){\n if( i < 30 )\n continue;\n Document.write(‘########’);\n i++;\n}",
    "option": [
      "0",
      "9",
      "30",
      "39",
      "40"
    ],
    "answer": 0,
    "explain": [
      "主要考察continue的知识，continue的意思是该行以后都不执行，然后进行下一轮循环"
    ]
  },
  {
    "id": 13,
    "title": "运行后的输出是",
    "code": "console.log('one');\nsetTimeout(function(){\n console.log('two');\n},0);\nconsole.log('three');",
    "option": [
      "’one’’two’’three’",
      "‘one’’three’’two’",
      "‘one’’three’",
      "‘two’’one’’three’"
    ],
    "answer": 1,
    "explain": [
      "定时器是异步宏任务，当同步代码执行结束，才会执行该任务"
    ]
  },
  {
    "id": 14,
    "title": "运行后的输出是",
    "code": "var a = 'w' \nlet obj = {\n a: 'o',\n print: function() {\n console.log(this.a);\n },\n print2: () => { \n console.log(this.a);\n }\n}\nlet p = obj.print;\nlet p2 = obj.print2;\nobj.print();\nobj.print2();\np();\np2();",
    "option": [
      "o、 undefined、 undefined、undefined",
      "o、 w、 undefined、 undefined",
      "o、 w、 w、 undefined",
      "o、 w、 w、 w"
    ],
    "answer": 3,
    "explain": [
      "箭头函数的this与最外层的this保持一致"
    ]
  },
  {
    "id": 15,
    "title": "运行后的输出是",
    "code": "var myObject = {\n foo: \"bar\",\n func: function() {\n var self = this;\n console.log(this.foo); \n console.log(self.foo); \n (function() {\n console.log(this.foo); \n console.log(self.foo); \n }());\n }\n};\nmyObject.func();",
    "option": [
      "bar、bar、bar、bar",
      "bar、bar、bar、undefined",
      "bar、bar、undefined、bar",
      "undefined、bar、undefined、bar"
    ],
    "answer": 2,
    "explain": [
      "1.第一个this.foo输出bar，因为当前this指向对象myObject",
      "2.第二个self.foo输出bar，因为self是this的副本，同指向myObject对象",
      "3.第三个this.foo输出undefined，因为这个IIFE(立即执行函数表达式)中的this指向window",
      "4.第四个self.foo输出bar，因为这个匿名函数所处的上下文中没有self，所以通过作用域链向上查找，从包含它的父函数中找到了指向myObject对象的self。"
    ]
  },
  {
    "id": 16,
    "title": "运行后的输出是",
    "code": "var str1=new RegExp(\"e\");\ndocument.write(str1.exec(\"hello\"));",
    "option": [
      "e",
      "null",
      "1",
      "true"
    ],
    "answer": 0,
    "explain": [
      "该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null",
      "本题的exec执行结果是一个数组，但是使用了document.write，所以会默认调用toString的方法,结果就是e"
    ]
  },
  {
    "id": 17,
    "title": "运行后的输出是",
    "code": "for(var i = 0; i < 5; i++){\n setTimeout(function(){\n console.log(i);\n }, 1000 * i);\n}",
    "option": [
      "4 4 4 4 4",
      "0 1 2 3 4",
      "0 0 0 0 0",
      "5 5 5 5 5"
    ],
    "answer": 3,
    "explain": [
      "setTimeout()是一个异步函数，由于js会先执行所有同步任务，再执行异步任务，所以当开始执行setTimeout()异步任务时，for循环早已结束，并且由var声明的变量i不具有块级作用域的特点，当for循环结束时，i值为5，故再执行setTimeout()函数时，输出结果为5 5 5 5 5"
    ]
  },
  {
    "id": 18,
    "title": "运行后的输出是",
    "code": "console.log(0xff ^ 33)",
    "option": [
      "111",
      "333",
      "222",
      "444"
    ],
    "answer": 2,
    "explain": [
      "异或运算 (0xff)1111111 ^ (33)00100001 = 11011110 = 222"
    ]
  },
  {
    "id": 19,
    "title": "返回值为true的是",
    "code": "Object.is(NaN,NaN); //1\nObject.is(+0,-0); //2\nNaN === NaN; //3\n+0 === -0; //4",
    "option": [
      "1 4",
      "1 3",
      "2 3",
      "2 4"
    ],
    "answer": 0,
    "explain": [
      "Object.is()，其行为与===基本一致，不过有两处不同： +0不等于-0。 NaN等于自身"
    ]
  },
  {
    "id": 20,
    "title": "输出的结果是",
    "code": "function f(x) {\n console.log(x);\n var x = 200;\n console.log(x);\n }\nf(a = 100);\nconsole.log(a);",
    "option": [
      "undefined、200、undefined",
      "100、200、undefined",
      "100、200、100",
      "undefined、200、100"
    ],
    "answer": 2,
    "explain": [
      "JS中的函数是非惰性求值，也就是说f（a=100）是将a=100完成计算赋值后的结果即100传入到了f函数中，传入的是值而不是逻辑，相当于f（100），同时变量a也处于函数外也即全局环境了，因此f函数里面的x一开始是传进来的100，后续被重新赋值为200"
    ]
  },
  {
    "id": 21,
    "title": "输出的结果是",
    "code": "var one;\nvar two = null;\nconsole.log(one == two,one === two);",
    "option": [
      "true false",
      "true true",
      "false false",
      "false true"
    ],
    "answer": 0,
    "explain": [
      "变量one只声明未赋值，所以其值为undefined，在使用“==”对undefined和null进行比较时，不能将null和undefined转换成其他任何值，并且规定undefined == null返回结果为true，而使用“===”进行比较时，由于“===”需要严格区分数据类型，故undefined === null返回结果为False"
    ]
  },
  {
    "id": 22,
    "title": "输出的结果是",
    "code": "1 in Object(1.0).constructor;\nNumber[1] = 123;\n1 in Object(1.0).constructor;",
    "option": [
      "true false",
      "true true",
      "false false",
      "false true"
    ],
    "answer": 3,
    "explain": [
      "实际上Object（1.0）就是将数字“1.0”封装成它对应的包装类的一个对象实例比如Number（1.0），所以目的是为了检测1是否在Number上。一开始1并不在Number原型链上所以返回false，直到添加了“Number[1]”这个下标属性之后才让1处于Number的原型链上，也因此返回了true"
    ]
  },
  {
    "id": 23,
    "title": "输出的结果是",
    "code": "function out(x){\n var temp = 2;\n function inside(y){\n document.write( x + y + (temp--));\n }\n inside(5);\n }\n out(3);",
    "option": [
      "11",
      "10",
      "9",
      "8"
    ],
    "answer": 1,
    "explain": [
      "如果该运算符作为后置操作符，则返回它递减之前的值",
      "如果该运算符作为前置操作符，则返回它递减之后的值。"
    ]
  },
  {
    "id": 24,
    "title": "输出的结果是",
    "code": "['1', '7', '11'].map(parseInt)",
    "option": [
      "[1, NaN, 3]",
      "[1, 7, 11]"
    ],
    "answer": 0,
    "explain": [
      "['1', '7', '11'].map(parseInt) = ",
      "[parseInt('1', 0)、 parseInt('7', 1)、 parseInt('11', 2)] =",
      "[1, NaN (没有一进制 所以NaN), 3 (11 二进制转十进制 = 3)]"
    ]
  },
  {
    "id": 25,
    "title": "输出的结果是",
    "code": "parseInt(0.0000005)",
    "option": [
      "0",
      "5",
      "NaN"
    ],
    "answer": 1,
    "explain": [
      "1. 隐式转换 parseInt(String(0.0000005))",
      "2. parseInt('5e-7')"
    ]
  },
  {
    "id": 26,
    "title": "输出的结果是",
    "code": "var a = 1;\nfunction fn(){\n var a = 2;\n function a(){console.log(3);}\n return a;\n function a(){console.log(4);}\n}\nvar b = fn();\nconsole.log(b);",
    "option": [
      "1",
      "2",
      "f a(){console.log(3);}",
      "f a(){console.log(4);}"
    ],
    "answer": 1,
    "explain": [
      "由于存在变量提升和函数提升，且函数提升会在变量提升之前，因此变量a会先被赋值为函数f a(){console.log(3);}，之后被重新赋值为函数f a(){console.log(4);}，最后被赋值为2，所以b值为2"
    ]
  },
  {
    "id": 27,
    "title": "输出的结果是",
    "code": "var foo = \"10\"+3-\"1\";\nconsole.log(foo);",
    "option": [
      "\"102\"",
      "102",
      "12",
      "\"12\""
    ],
    "answer": 1,
    "explain": [
      "隐式转换"
    ]
  }
]