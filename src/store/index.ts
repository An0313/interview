import {createStore} from 'vuex'
import {getTerminal, getNavInfo} from '@/util'
import moduleA from './modules/moduleA'
import mutations from './mutations'

const store = createStore({
  state: {
    systemInfo: uni.getSystemInfoSync(),
    navInfo: getNavInfo(),
    terminal: getTerminal()
  },
  mutations,
  modules: {
    moduleA
  }
})

export default store
