import { createStore } from 'vuex'
import { getTerminal, getNavInfo } from '@/util'
import moduleA from './modules/moduleA'
import { problem } from './modules/problem'
import { problemTag, problemTagMnum } from './modules/problemTag'
import page from './modules/pages'
import mutations from './mutations'

const systemInfo = uni.getSystemInfoSync()

const store = createStore({
  state: {
    systemInfo,
    navInfo: getNavInfo(),
    bottomLift: systemInfo.screenHeight - (systemInfo.safeArea?.bottom || systemInfo.screenHeight),
    terminal: getTerminal(),
    page,
    problem,
    problemTag,
    problemTagMnum
  },
  mutations,
  modules: {
    moduleA
  }
})

export default store
