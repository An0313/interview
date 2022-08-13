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
import DesignPatternIcon from '@/static/img/designPatternIcon'
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
    name: 'html',
    key: 'html',
    icon: HtmlIcon,
  },
  {
    id: 2,
    name: 'css',
    key: 'css',
    icon: CssIcon,
  },
  {
    id: 3,
    name: 'js',
    key: 'js',
    icon: JsIcon,
    children: [
      {
        id: 301,
        name: 'es6',
        key: 'es6',
      }, {
        id: 302,
        name: 'es7',
        key: 'es7'
      }, {
        id: 303,
        name: 'es8',
        key: 'ves8'
      }
    ]
  },
  {
    id: 4,
    name: 'vue',
    key: 'vue',
    icon: VueIcon,
    children: [
      {
        id: 101,
        name: 'vue-router',
        key: 'vue router',
      }, {
        id: 102,
        name: 'vuex',
        key: 'vuex'
      }, {
        id: 103,
        name: 'vue-cli',
        key: 'vue-cli'
      }
    ]
  },
  {
    id: 5,
    name: 'react',
    key: 'react',
    icon: ReactIcon
  },
  {
    id: 6,
    name: '微信开发',
    key: 'wx',
    icon: WxIcon
  },
  {
    id: 7,
    name: 'ts',
    key: 'ts',
    icon: TsIcon
  },
  {
    id: 8,
    name: 'git',
    key: 'git',
    icon: GitIcon
  },
  {
    id: 9,
    name: '打包工具',
    key: 'pack',
    icon: WebpackIcon
  },
  {
    id: 97,
    name: '算法',
    key: 'algorithm',
    icon: AlgorithmIcon
  },
  {
    id: 98,
    name: '性能优化',
    key: 'optimize',
    icon: OptimizeIcon
  },
  {
    id: 99,
    name: '设计模式',
    key: 'designPattern',
    icon: DesignPatternIcon
  },
  {
    id: 100,
    name: 'hr面',
    key: 'hr',
    icon: HrIcon
  },
  {
    id: 101,
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
})

export { problemTag, problemTagMnum }