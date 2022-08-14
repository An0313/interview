// 面试题
import { problemTagMnum as tagMnum } from './problemTag'

export interface iProblemItem {
  id: number,
  title: string,
  tags: Array<string | number>,
  answer: string[]
}

export const problem: iProblemItem[] = [
  {
    id: 1,
    title: 'H5和小程序有什么相同及不同的地方吗',
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
      '4、Server - Sent Events',
      '5、localStorage',
      '6、BroadcastChannel',
      '7、Cookie'
    ]
  },
  {
    id: 8,
    title: 'v-model的原理',
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
    title: '怎么给vue定义全局的方法',
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
    title: 'keep-alive有关的生命周期是哪些',
    tags: [tagMnum.vue],
    answer: [
      'activated 和 deactivated 两个生命周期函数',
      '',
      '当 keep-alive 组件激活时，触发 activated ， keep-alive 组件停用时调用 deactivated'
    ]
  },
  {
    id: 11,
    title: '你知道vue中key的原理吗',
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
    title: '事件 $event，使用 e.target 和 e.currentTarget 有什么区别',
    tags: [tagMnum.vue],
    answer: [
      'event.currentTarget 指向事件所绑定的元素',
      '',
      'event.target 始终指向事件发生时的元素',
    ]
  },
  {
    id: 17,
    title: 'vue 文件中 style 是必须的吗？那 script 是必须的吗？',
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
    title: 'vue 自定义事件中父组件怎么接收子组件的多个参数',
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
    tags: [tagMnum.vue, tagMnum.pack],
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
    title: '动态给 vue 的 data 添加一个新的属性时会发生什么？怎样解决？',
    tags: [tagMnum.vue],
    answer: [
      '如果在实例创建之后添加新的属性到实例上，它不会触发视图更新',
      '',
      '解决方法：Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上',
    ]
  },
  {
    id: 40,
    title: 'v-if 和 v-for 的优先级？如果同时出现时，那应该怎么优化？',
    tags: [tagMnum.vue],
    answer: [
      'v-for 优先级高',
      '',
      '避免出现这种情况，如果实在需要,应新增 template 标签来进行 v-if 判断, 在子元素里面使用 v-for',
    ]
  },
  {
    id: 41,
    title: '为什么 data 属性必须声明为返回一个初始数据的函数',
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
    title: 'html 中（head、body、！Doctype）标签的作用是什么',
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
      '跨域资源共享(CORS) Access - Control - Allow - Origin',
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
    tags: [tagMnum.js, tagMnum.es6],
    answer: [
      '',
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
    title: 'vue-router 路由有几种模式？说说它们的区别？',
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
]
