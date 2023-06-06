export const problemTag: IProblem.tagItem[] = [
  {
    "id": 1,
    "name": "HTML",
    "key": "html",
    "icon": "@/static/img/htmlIcon"
  },
  {
    "id": 2,
    "name": "CSS",
    "key": "css",
    "icon": "@/static/img/cssIcon",
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
    "icon": "@/static/img/jsIcon",
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
    "icon": "@/static/img/vueIcon",
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
    "icon": "@/static/img/reactIcon",
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
    "icon": "@/static/img/wxIcon"
  },
  {
    "id": 7,
    "name": "TypeScript",
    "key": "ts",
    "icon": "@/static/img/tsIcon"
  },
  {
    "id": 8,
    "name": "NodeJS",
    "key": "node",
    "icon": "@/static/img/NodeIcon"
  },
  {
    "id": 9,
    "name": "Git",
    "key": "git",
    "icon": "@/static/img/gitIcon"
  },
  {
    "id": 10,
    "name": "打包工具",
    "key": "pack",
    "icon": "@/static/img/webpackIcon",
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
    "icon": "@/static/img/algorithmIcon"
  },
  {
    "id": 12,
    "name": "性能优化",
    "key": "optimize",
    "icon": "@/static/img/optimizeIcon"
  },
  {
    "id": 13,
    "name": "理论概念",
    "key": "theory",
    "icon": "@/static/img/theoryIcon"
  },
  {
    "id": 14,
    "name": "hr面/Boos面",
    "key": "hr",
    "icon": "@/static/img/hrIcon"
  },
  {
    "id": 15,
    "name": "大厂面试",
    "key": "company",
    "icon": "@/static/img/company"
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