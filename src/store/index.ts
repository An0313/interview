import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import moduleA from './modules/moduleA'
import mutations from './mutations'

interface iPage {
  [key: string]: string
}

interface iState {

}

const systemInfo = uni.getSystemInfoSync()

export const key: InjectionKey<Store<iState>> = Symbol()

export const store = createStore<iState>({
  state: {

  },
  mutations,
  modules: {
    moduleA
  }
})

// 定义自己的 `useStore` 组合式函数
export const useStore = () => baseUseStore(key)