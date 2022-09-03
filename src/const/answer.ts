export interface iAnswerListItem {
  id: number
  title: string
  code: string
  option: string[]
  answer: number
  explain: string[]
}

export const answer: iAnswerListItem[] = [
  {
    id: 1,
    title: '请问以下JS代码会输出什么',
    code: 'var a = 10;\n(function a() {\na = 20;\nconsole.log(a);\n})()',
    option: [
      '10',
      '20',
      'undefined',
      '函数a',
    ],
    answer: 3,
    explain: [
      '存在变量提升与函数提升，函数提升优先级更高，所以a先被赋值为函数',
      'a = 20; 这里的a是函数名，相当于修改函数a=20,无效',
      '又因为是立即执行函数所以执行了函数a输出a目前的值（即函数），之后才是被赋值为10'
    ]
  },
  {
    id: 2,
    title: '请问以下JS代码会输出什么',
    code: "var name=\"World!\";\n(function(){\n    var name;\n    if(typeof name==='undefined'){\n        name='Jack';\n        console.log('Goodbye'+name);\n    }\n    else{\n        console.log('hello'+name);\n    }\n})();",
    option: [
      'Hello World!',
      'Goodbye Jack',
      'Hello Jack',
      'Goodbye World!',
    ],
    answer: 1,
    explain: [
      'js搜索变量是从内部顺原型链往外部找的，内部直接找到了name，就不去外部了，执行第一次if时还没初始化值，所以为undefined，然后赋值'
    ]
  },
  {
    id: 3,
    title: '请问以下JS代码会输出什么',
    code: "let obj = {name: '222'};\nlet _name = obj.name;\nObject.defineProperty(obj, 'name', {\n  get() {\n    return _name;\n  },\n  set(newVal) {\n    console.log(newVal, _name);\n    _name = newVal;\n  }\n})\nobj.name = '11';",
    option: [
      '11',
      '222',
      '11 222',
      '什么都不打印',
    ],
    answer: 2,
    explain: [
      'newVal 就是set方法的参数11，_name值是字符串222，字符串类型的变量不受obj.name改变而改变'
    ]
  },
  {
    id: 4,
    title: '请问以下JS代码会输出什么',
    code: "let x = 10;\nlet foo = () => {\n    console.log(x);\n    let x = 20;\n    x++;\n}\nfoo();\n",
    option: [
      '抛出ReferenceError',
      '10',
      '20',
      '21',
    ],
    answer: 0,
    explain: [
      '使用let声明的变量，既不会发生变量提升，同时又存在“暂时性死区”，所以在块级作用域内，如果使用let声明一个变量，那么该变量在声明之前是不可用的，否则会抛出ReferenceError异常'
    ]
  },
  {
    id: 5,
    title: '请问以下JS代码会输出什么',
    code: "var b = 3;\n(function(){\n    b = 5;\n    var b = 2;\n})();\nconsole.log(b);",
    option: [
      '3',
      '5',
      '报错',
      '2',
    ],
    answer: 0,
    explain: [
      '自调函数运行内部b为局部变量存在变量提升，所以函数内的赋值是修改的局部变量'
    ]
  },
  {
    id: 6,
    title: '请问以下JS代码会输出什么',
    code: "function father() {\n  this.num = 935;\n  this.work = ['read', 'write', 'listen'];\n}\nfunction son() {}\nson.prototype = new father();\nlet son1 = new son();\nlet son2 = new son();\nson1.num = 117;\nson1.work.pop();\nconsole.log(son2.num);\nconsole.log(son2.work);",
    option: [
      "117、 ['read', 'write']",
      "935、['read', 'write','listen']",
      "117、['read', 'write','listen']",
      "935、 ['read', 'write']",
    ],
    answer: 3,
    explain: [
      'num变量为数字类型，修改不影响原型链',
      'work变了为数组类型，修改后影响原型链,因此会影响到下次实例化数组的值'
    ]
  },
  {
    id: 7,
    title: '请问以下JS代码会输出什么',
    code: "console.log(1);\nlet a = setTimeout(() => {console.log(2)}, 0);\nconsole.log(3);\nPromise.resolve(4).then(b => {\n    console.log(b);\n    clearTimeout(a);\n});\nconsole.log(5);",
    option: [
      "1、2、3、4、5",
      "1、2、4、5",
      "1、3、5、4",
      "1、3、5、4、2",
    ],
    answer: 2,
    explain: [
      'setTimeout()定时器函数为宏任务,js会先执行所有同步代码，然后执行微任务队列中的所有微任务，最后再继续执行宏任务,先执行同步代码并输出1 3 5，接着执行Promise.resolve().then()方法，输出4，由于在then()方法内删除了定时器函数，所以不会再输出2，最终输出结果为1 3 5 4'
    ]
  },
  {
    id: 8,
    title: '会抛出语法错误的是',
    code: "var s = Symbol('key'); // 1\nconsole.log(s + '123'); //2\nvar obj = {\n    [s]:function(){console.log(1);} //3\n}\nvar b = Reflect.ownKeys(obj); //4",
    option: [
      "1",
      "2",
      "3",
      "4",
    ],
    answer: 1,
    explain: [
      'Symbol值不能与其他类型的值进行运算'
    ]
  },
  {
    id: 9,
    title: '运行后的输出是',
    code: "(function() {\n var a = b = 5;\n  })();\nconsole.log(b);\nconsole.log(a);",
    option: [
      "5、5",
      "undefined、undefined",
      "5、undefined",
      "5、Uncaught ReferenceError: a is not defined",
    ],
    answer: 1,
    explain: [
      '其中变量a使用关键词var来声明。这就意味着a是这个函数的局部变量。与此相反，b被分配给了全局作用域（译注：也就是全局变量）',
      '因a为函数中的私有变量外部访问不到，所以报错 a is not defined'
    ]
  },
  {
    id: 10,
    title: '运行后的输出是',
    code: "var len = 117;\nlet func = {\n  len: 935,\n  showLen: function() {\n console.log(this.len);\n  },\n  show: function() {\n (function(cb) {\n   cb();\n })(this.showLen)\n  }\n}\nfunc.show();",
    option: [
      "117",
      "935",
      "undefined",
      "null",
    ],
    answer: 0,
    explain: [
      '个匿名函数，this为window（非严格模式下）'
    ]
  },
  {
    id: 11,
    title: '运行后的输出是',
    code: "var x = new Boolean(false);\nif (x) {\n  alert('hi'); \n}\nvar y = Boolean(0);\nif (y) {\n  alert('hello');  \n}",
    option: [
      "hi",
      "hi hello",
      "hello",
      "不显示",
    ],
    answer: 0,
    explain: [
      'x = Boolean对象； x 并不是 布尔类型的 false'
    ]
  },
  {
    id: 12,
    title: '分析下面代码，总共输出（ ）行########',
    code: "var i = 0;\nwhile( i < 40 ){\n if( i < 30 )\n continue;\n Document.write(‘########’);\n i++;\n}",
    option: [
      "0",
      "9",
      "30",
      "39",
      "40",
    ],
    answer: 0,
    explain: [
      '主要考察continue的知识，continue的意思是该行以后都不执行，然后进行下一轮循环'
    ]
  },
  {
    id: 13,
    title: '运行后的输出是',
    code: "console.log('one');\nsetTimeout(function(){\n console.log('two');\n},0);\nconsole.log('three');",
    option: [
      "’one’’two’’three’",
      "‘one’’three’’two’",
      "‘one’’three’",
      "‘two’’one’’three’",
    ],
    answer: 1,
    explain: [
      '定时器是异步宏任务，当同步代码执行结束，才会执行该任务'
    ]
  },
  {
    id: 14,
    title: '运行后的输出是',
    code: "var a = 'w' \nlet obj = {\n a: 'o',\n print: function() {\n console.log(this.a);\n },\n print2: () => { \n console.log(this.a);\n }\n}\nlet p = obj.print;\nlet p2 = obj.print2;\nobj.print();\nobj.print2();\np();\np2();",
    option: [
      "o、 undefined、 undefined、undefined",
      "o、 w、 undefined、 undefined",
      "o、 w、 w、 undefined",
      "o、 w、 w、 w",
    ],
    answer: 3,
    explain: [
      '定时器是异步宏任务，当同步代码执行结束，才会执行该任务'
    ]
  },
]