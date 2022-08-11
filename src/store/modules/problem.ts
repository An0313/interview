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
    title: 'H5和小程序有什么相同及不同的地方吗？',
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
    title: '重绘和回流是什么？',
    tags: [tagMnum.html, tagMnum.css],
    answer: [
      '我们都知道一个页面从加载到完成，首先是构建DOM树，然后根据DOM节点进行几何布局形成render树(渲染树)，当渲染树构建完成后，页面就根据DOM树开始布局，渲染树也根据设置的样式渲染这些节点。',
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
      '所以说回流一定会触发重绘，重绘不一定触发回流。',
    ]
  },
  {
    id: 3,
    title: '如何避免重绘与回流？',
    tags: [tagMnum.html, tagMnum.css, tagMnum.optimize],
    answer: [
      '1、避免使用 table 布局。',
      '2、尽可能在 DOM 树的最末端改变 class。',
      '3、避免设置多层内联样式。',
      '4、将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。',
      '5、避免使用CSS表达式（例如：calc()）。',
      '6、避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。',
      '7、避免频繁操作 DOM ，把DOM离线后修改，创建一个 documentFragment ，在它上面应用所有 DOM 操作，最后再把它添加到文档中。',
      '8、也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。',
      '9、避免频繁读取会引发回流 / 重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。',
      '10、对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。'
    ]
  },
  {
    id: 4,
    title: '本地存储与cookie存储区别？',
    tags: [tagMnum.js],
    answer: [
      '1、 cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。',
      '2、 cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。',
      '3、 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。',
      '4、 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便。'
    ]
  },
  {
    id: 5,
    title: '移动端布局的自适应如何做？',
    tags: [tagMnum.html, tagMnum.css, tagMnum.js],
    answer: [
      '<meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1">',
      'rem, vw',
    ]
  },
  {
    id: 6,
    title: '导入样式时，使用link和@import有什么区别？',
    tags: [tagMnum.css],
    answer: [
      '1、link是HTML标签，@import是css提供的。',
      '2、link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。',
      '3、link没有兼容性问题，@import不兼容ie5以下。',
      '4、link可以通过js操作DOM动态引入样式表改变样式，而 @import不可以。'
    ]
  },
  {
    id: 7,
    title: '浏览器内多个标签页之间的通信方式有哪些？',
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
    title: 'v-model的原理？',
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
    title: '怎么给vue定义全局的方法？',
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
    title: 'keep-alive有关的生命周期是哪些？',
    tags: [tagMnum.vue],
    answer: [
      'activated 和 deactivated 两个生命周期函数',
      '',
      '当 keep-alive 组件激活时，触发 activated ， keep-alive 组件停用时调用 deactivated'
    ]
  },
  {
    id: 11,
    title: '你知道vue中key的原理吗？',
    tags: [tagMnum.vue],
    answer: [
      '便于Diff时更高效的进行节点查询对比。',
      '',
      '有key时，通过createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)生成的key与索引映射关系，直接通过新子节点的key查询是否存在于旧子节点序列中。',
      '无key时，必须遍历旧子节点序列，依次与新子节点对比判断是否为新增节点。',
    ]
  },
  {
    id: 12,
    title: '你知道 style 加 scoped 属性的用途和原理吗？',
    tags: [tagMnum.vue],
    answer: [
      '用途：防止全局同名CSS污染',
      '',
      '原理：在标签加上 v-data-something 属性，再在选择器时加上对应 [v-data-something] ，即 CSS 带属性选择器，以此完成类似作用域的选择方式',
    ]
  },
  {
    id: 13,
    title: '如何在子组件中访问父组件的实例？',
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
    title: 'babel-polyfill 主要是用来做什么的？',
    tags: [tagMnum.vue],
    answer: [
      'Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的API，比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign ）都不会转码。',
      '',
      '举例来说，ES6在Array对象上新增了 Array.from 方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用 babel-polyfill，为当前环境提供一个垫片。',
      '',
      'Babel 默认不转码的API非常多，详细清单可以查看babel-plugin-transform-runtime模块的definitions.js文件。',
    ]
  },
  {
    id: 15,
    title: '说说你对 vue 错误处理的了解？',
    tags: [tagMnum.vue],
    answer: [
      '分为 errorCaptured 与errorHandler。',
      '',
      'errorCaptured 是组件内部钩子，可捕捉本组件与子孙组件抛出的错误，接收 error、vm、info 三个参数，return false后可以阻止错误继续向上抛出。',
      '',
      'errorHandler 为全局钩子，使用 Vue.config.errorHandler 配置，接收参数与 errorCaptured 一致，2.6后可捕捉 v-on 与 promise 链的错误，可用于统一错误处理与错误兜底。',
    ]
  },
  {
    id: 16,
    title: '事件 $event，使用 e.target 和 e.currentTarget 有什么区别？',
    tags: [tagMnum.vue],
    answer: [
      'event.currentTarget 指向事件所绑定的元素',
      '',
      'event.target 始终指向事件发生时的元素。',
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
    title: 'vue怎么实现强制刷新组件？',
    tags: [tagMnum.vue],
    answer: [
      '1、v-if',
      '2、this.$forceUpdate()',
      '3、更改 key'
    ]
  },
  {
    id: 19,
    title: 'vue 自定义事件中父组件怎么接收子组件的多个参数？',
    tags: [tagMnum.vue],
    answer: [
      'this.$emit("eventName",data)',
      'data为一个对象'
    ]
  },
  {
    id: 20,
    title: '$attrs 和 $listeners的使用场景有哪些？',
    tags: [tagMnum.vue],
    answer: [
      '多级组件嵌套需要传递数据时，通常使用的方法是通过vuex。如果为了传递数据而无中间层处理，则可以使用Vue中提供的$attrs和$listeners'
    ]
  },
  {
    id: 21,
    title: '说说你对vue的表单修饰符.lazy的理解',
    tags: [tagMnum.vue],
    answer: [
      'v-model 默认的触发条件是 input 事件, 加了 .lazy 修饰符之后, v-model 会在 change 事件触发的时候去监听'
    ]
  }
]
