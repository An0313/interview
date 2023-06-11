// 笔试题
const {setId} = require('../utils');

exports.answer = setId([
    {

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

        title: '请问以下JS代码会输出什么',
        code: "let x = 10;\nlet foo = () => {\n    console.log(x);\n    let x = 20;\n    x++;\n}\nfoo();",
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
            '箭头函数的this与最外层的this保持一致'
        ]
    },
    {

        title: '运行后的输出是',
        code: "var myObject = {\n foo: \"bar\",\n func: function() {\n var self = this;\n console.log(this.foo); \n console.log(self.foo); \n (function() {\n console.log(this.foo); \n console.log(self.foo); \n }());\n }\n};\nmyObject.func();",
        option: [
            "bar、bar、bar、bar",
            "bar、bar、bar、undefined",
            "bar、bar、undefined、bar",
            "undefined、bar、undefined、bar",
        ],
        answer: 2,
        explain: [
            '1.第一个this.foo输出bar，因为当前this指向对象myObject',
            '2.第二个self.foo输出bar，因为self是this的副本，同指向myObject对象',
            '3.第三个this.foo输出undefined，因为这个IIFE(立即执行函数表达式)中的this指向window',
            '4.第四个self.foo输出bar，因为这个匿名函数所处的上下文中没有self，所以通过作用域链向上查找，从包含它的父函数中找到了指向myObject对象的self。'
        ]
    },
    {

        title: '运行后的输出是',
        code: "var str1=new RegExp(\"e\");\ndocument.write(str1.exec(\"hello\"));",
        option: [
            "e",
            "null",
            "1",
            "true",
        ],
        answer: 0,
        explain: [
            '该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null',
            '本题的exec执行结果是一个数组，但是使用了document.write，所以会默认调用toString的方法,结果就是e'
        ]
    },
    {

        title: '运行后的输出是',
        code: "for(var i = 0; i < 5; i++){\n setTimeout(function(){\n console.log(i);\n }, 1000 * i);\n}",
        option: [
            "4 4 4 4 4",
            "0 1 2 3 4",
            "0 0 0 0 0",
            "5 5 5 5 5",
        ],
        answer: 3,
        explain: [
            'setTimeout()是一个异步函数，由于js会先执行所有同步任务，再执行异步任务，所以当开始执行setTimeout()异步任务时，for循环早已结束，并且由var声明的变量i不具有块级作用域的特点，当for循环结束时，i值为5，故再执行setTimeout()函数时，输出结果为5 5 5 5 5'
        ]
    },
    {

        title: '运行后的输出是',
        code: "console.log(0xff ^ 33)",
        option: [
            "111",
            "333",
            "222",
            "444",
        ],
        answer: 2,
        explain: [
            '异或运算 (0xff)1111111 ^ (33)00100001 = 11011110 = 222'
        ]
    },
    {

        title: '返回值为true的是',
        code: "Object.is(NaN,NaN); //1\nObject.is(+0,-0); //2\nNaN === NaN; //3\n+0 === -0; //4",
        option: [
            "1 4",
            "1 3",
            "2 3",
            "2 4",
        ],
        answer: 0,
        explain: [
            'Object.is()，其行为与===基本一致，不过有两处不同： +0不等于-0。 NaN等于自身'
        ]
    },
    {

        title: '输出的结果是',
        code: "function f(x) {\n console.log(x);\n var x = 200;\n console.log(x);\n }\nf(a = 100);\nconsole.log(a);",
        option: [
            "undefined、200、undefined",
            "100、200、undefined",
            "100、200、100",
            "undefined、200、100",
        ],
        answer: 2,
        explain: [
            'JS中的函数是非惰性求值，也就是说f（a=100）是将a=100完成计算赋值后的结果即100传入到了f函数中，传入的是值而不是逻辑，相当于f（100），同时变量a也处于函数外也即全局环境了，因此f函数里面的x一开始是传进来的100，后续被重新赋值为200'
        ]
    },
    {

        title: '输出的结果是',
        code: "var one;\nvar two = null;\nconsole.log(one == two,one === two);",
        option: [
            "true false",
            "true true",
            "false false",
            "false true",
        ],
        answer: 0,
        explain: [
            '变量one只声明未赋值，所以其值为undefined，在使用“==”对undefined和null进行比较时，不能将null和undefined转换成其他任何值，并且规定undefined == null返回结果为true，而使用“===”进行比较时，由于“===”需要严格区分数据类型，故undefined === null返回结果为False'
        ]
    },
    {

        title: '输出的结果是',
        code: "1 in Object(1.0).constructor;\nNumber[1] = 123;\n1 in Object(1.0).constructor;",
        option: [
            "true false",
            "true true",
            "false false",
            "false true",
        ],
        answer: 3,
        explain: [
            '实际上Object（1.0）就是将数字“1.0”封装成它对应的包装类的一个对象实例比如Number（1.0），所以目的是为了检测1是否在Number上。一开始1并不在Number原型链上所以返回false，直到添加了“Number[1]”这个下标属性之后才让1处于Number的原型链上，也因此返回了true'
        ]
    },
    {

        title: '输出的结果是',
        code: "function out(x){\n var temp = 2;\n function inside(y){\n document.write( x + y + (temp--));\n }\n inside(5);\n }\n out(3);",
        option: [
            "11",
            "10",
            "9",
            "8",
        ],
        answer: 1,
        explain: [
            '如果该运算符作为后置操作符，则返回它递减之前的值',
            '如果该运算符作为前置操作符，则返回它递减之后的值。'
        ]
    },
    {

        title: '输出的结果是',
        code: "['1', '7', '11'].map(parseInt)",
        option: [
            "[1, NaN, 3]",
            "[1, 7, 11]",
        ],
        answer: 0,
        explain: [
            "['1', '7', '11'].map(parseInt) = ",
            "[parseInt('1', 0)、 parseInt('7', 1)、 parseInt('11', 2)] =",
            "[1, NaN (没有一进制 所以NaN), 3 (11 二进制转十进制 = 3)]"
        ]
    },
    {

        title: '输出的结果是',
        code: "parseInt(0.0000005)",
        option: [
            "0",
            "5",
            "NaN",
        ],
        answer: 1,
        explain: [
            "1. 隐式转换 parseInt(String(0.0000005))",
            "2. parseInt('5e-7')"
        ]
    },
    {

        title: '输出的结果是',
        code: "var a = 1;\nfunction fn(){\n var a = 2;\n function a(){console.log(3);}\n return a;\n function a(){console.log(4);}\n}\nvar b = fn();\nconsole.log(b);",
        option: [
            "1",
            "2",
            "f a(){console.log(3);}",
            "f a(){console.log(4);}",
        ],
        answer: 1,
        explain: [
            "由于存在变量提升和函数提升，且函数提升会在变量提升之前，因此变量a会先被赋值为函数f a(){console.log(3);}，之后被重新赋值为函数f a(){console.log(4);}，最后被赋值为2，所以b值为2"
        ]
    },
    {

        title: '输出的结果是',
        code: "var foo = \"10\"+3-\"1\";\nconsole.log(foo);",
        option: [
            '"102"',
            "102",
            "12",
            '"12"'
        ],
        answer: 1,
        explain: [
            "隐式转换"
        ]
    },
])