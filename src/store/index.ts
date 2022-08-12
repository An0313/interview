import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { getTerminal, getTerminalRes, getNavInfo, getNavInfoRes } from '@/util'
import moduleA from './modules/moduleA'
import { problem, iProblemItem } from './modules/problem'
import { problemTag, iTagItem, problemTagMnum, iTagMnum } from './modules/problemTag'
import page from './modules/pages'
import mutations from './mutations'

interface iPage {
  [key: string]: string
}

interface iState {
  readonly systemInfo: UniApp.GetSystemInfoResult
  readonly navInfo: getNavInfoRes
  readonly bottomLift: number
  readonly terminal: getTerminalRes,
  readonly page: iPage
  readonly problem: iProblemItem[]
  readonly problemTag: iTagItem[]
  readonly problemTagMnum: iTagMnum
}

const systemInfo = uni.getSystemInfoSync()

export const key: InjectionKey<Store<iState>> = Symbol()

export const store = createStore<iState>({
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

// 定义自己的 `useStore` 组合式函数
export const useStore = () => baseUseStore(key)