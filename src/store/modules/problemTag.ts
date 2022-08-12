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

export interface iTagItem {
  id: number,
  name: string,
  key: string,
  icon: string,
  children?: []
}

// 面试题标签
const problemTag: Array<iTagItem> = [
  {
    id: 5,
    name: 'html',
    key: 'html',
    icon: HtmlIcon
  },
  {
    id: 4,
    name: 'css',
    key: 'css',
    icon: CssIcon
  },
  {
    id: 3,
    name: 'js',
    key: 'js',
    icon: JsIcon
  },
  {
    id: 1,
    name: 'vue',
    key: 'vue',
    icon: VueIcon
    // children: [
    //   {
    //     id: 101,
    //     name: 'vue router'
    //   }, {
    //     id: 102,
    //     name: 'vuex'
    //   }
    // ]
  },
  {
    id: 2,
    name: 'react',
    key: 'react',
    icon: ReactIcon
  },
  {
    id: 8,
    name: '公众号/小程序',
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
    id: 6,
    name: '性能优化',
    key: 'optimize',
    icon: OptimizeIcon
  }, {
    id: 9,
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