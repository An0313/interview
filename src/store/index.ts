import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { iProblemItem } from '@/const/problem'

interface iPage {
  [key: string]: string
}

interface iState {
  probleList: iProblemItem[]
}

const systemInfo = uni.getSystemInfoSync()

export const key: InjectionKey<Store<iState>> = Symbol()

export const store = createStore<iState>({
  state: {
    probleList: []
  },
  mutations: {
    setProbleList(state, payload) {
      console.log('mutations setProbleList')
      state.probleList = payload
    }
  },
  actions: {
    setProbleList(context, payload) {
      context.commit('setProbleList', payload)
    }
  },
  modules: {
  }
})

// 定义自己的 `useStore` 组合式函数
export const useStore = () => baseUseStore(key)