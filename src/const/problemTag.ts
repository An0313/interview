// 面试题分类
import VueIcon from '@/static/img/vueIcon'
import ReactIcon from '@/static/img/reactIcon'
import HtmlIcon from '@/static/img/htmlIcon'
import CssIcon from '@/static/img/cssIcon'
import JsIcon from '@/static/img/jsIcon'
import TsIcon from '@/static/img/tsIcon'
import OptimizeIcon from '@/static/img/optimizeIcon'
import CompanyIcon from '@/static/img/company'
import WxIcon from '@/static/img/wxIcon'
import GitIcon from '@/static/img/gitIcon'
import WebpackIcon from '@/static/img/webpackIcon'
import AlgorithmIcon from '@/static/img/algorithmIcon'
import TheoryIcon from '@/static/img/theoryIcon'
import HrIcon from '@/static/img/hrIcon'

interface iBaseTagItem {
  id: number,
  name: string,
  key: string,
}

export interface iTagItem extends iBaseTagItem {
  icon: string,
  children?: iBaseTagItem[]
}

// 面试题标签
const problemTag: Array<iTagItem> = [
  {
    id: 1,
    name: 'HTML',
    key: 'html',
    icon: HtmlIcon,
  },
  {
    id: 2,
    name: 'CSS',
    key: 'css',
    icon: CssIcon,
    children: [
      {
        id: 201,
        name: 'Less',
        key: 'less',
      },
      {
        id: 202,
        name: 'Sass',
        key: 'sass',
      },
      {
        id: 203,
        name: 'Stylus',
        key: 'stylus',
      },
    ]
  },
  {
    id: 3,
    name: 'JavaScript',
    key: 'js',
    icon: JsIcon,
    children: [
      {
        id: 301,
        name: 'ES6',
        key: 'es6',
      }, {
        id: 302,
        name: 'ES7',
        key: 'es7'
      }, {
        id: 303,
        name: 'ES8',
        key: 'es8'
      }, {
        id: 304,
        name: 'ES9',
        key: 'es9'
      }, {
        id: 305,
        name: 'ES10',
        key: 'es10'
      }
    ]
  },
  {
    id: 4,
    name: 'Vue',
    key: 'vue',
    icon: VueIcon,
    children: [
      {
        id: 401,
        name: 'Vue Router',
        key: 'vueRouter',
      }, {
        id: 402,
        name: 'vuex',
        key: 'vuex'
      }, {
        id: 403,
        name: 'vue-cli',
        key: 'vueCli'
      }
    ]
  },
  {
    id: 5,
    name: 'React',
    key: 'react',
    icon: ReactIcon,
    children: [
      {
        id: 501,
        name: 'React Router',
        key: 'reactRouter',
      // }, {
      //   id: 102,
      //   name: 'vuex',
      //   key: 'vuex'
      // }, {
      //   id: 103,
      //   name: 'vue-cli',
      //   key: 'vueCli'
      }
    ]
  },
  {
    id: 6,
    name: '微信开发',
    key: 'wx',
    icon: WxIcon
  },
  {
    id: 7,
    name: 'TypeScript',
    key: 'ts',
    icon: TsIcon
  },
  {
    id: 8,
    name: 'Git',
    key: 'git',
    icon: GitIcon
  },
  {
    id: 9,
    name: '打包工具',
    key: 'pack',
    icon: WebpackIcon,
    children: [
      {
        id: 901,
        name: 'webpack',
        key: 'webpack',
      }, {
        id: 902,
        name: 'gulp',
        key: 'gulp'
      }, {
        id: 903,
        name: 'vite',
        key: 'vite'
      }
    ]
  },
  {
    id: 10,
    name: '算法',
    key: 'algorithm',
    icon: AlgorithmIcon
  },
  {
    id: 11,
    name: '性能优化',
    key: 'optimize',
    icon: OptimizeIcon
  },
  {
    id: 12,
    name: '理论概念',
    key: 'theory',
    icon: TheoryIcon
  },
  {
    id: 13,
    name: 'hr面/Boos面',
    key: 'hr',
    icon: HrIcon
  },
  {
    id: 14,
    name: '大厂面试',
    key: 'company',
    icon: CompanyIcon
  },

]

export interface iTagMnum {
  [key: string]: string | number
}

// 面试题标签枚举
const problemTagMnum: iTagMnum = {}

problemTag.forEach(item => {
  problemTagMnum[item.id] = item.name
  problemTagMnum[item.key] = item.id
  item.children?.forEach(_item => {
    problemTagMnum[_item.id] = _item.name
    problemTagMnum[_item.key] = _item.id
  })
})

export { problemTag, problemTagMnum }