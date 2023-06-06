import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { iProblemItem } from '@/const/problem'
import { iAnswerListItem } from '@/const/answer'

interface iState {
  probleList: iProblemItem[]
  collectList: number[]
  answerList: iAnswerListItem[]
  collectAnswerList: number[]
}

const collectStorageKey = 'collectList'
const collectAnswerStorageKey = 'collectAnswer'

export const key: InjectionKey<Store<iState>> = Symbol()

export const store = createStore<iState>({
  state: {
    probleList: [],
    collectList: uni.getStorageSync(collectStorageKey) || [],
    answerList: [],
    collectAnswerList: uni.getStorageSync(collectAnswerStorageKey) || []
  },
  mutations: {
    setState(state, payload) {
      console.log('setState', payload)
      for (let [key, val] of Object.entries(payload)) {
        (state as any)[key] = val;
      }
    }
  },
  actions: {
    setState(context, payload) {
      context.commit('setState', payload)
    },
    setProbleList(context, payload) {
      context.commit('setState', { probleList: payload })
    },
    setCollectList(context, payload) {
      context.commit('setState', { collectList: payload })
      uni.setStorage({ key: collectStorageKey, data: payload })
    },
    setCollectAnswerList(context, payload) {
      context.commit('setState', { collectAnswerList: payload })
      uni.setStorage({ key: collectAnswerStorageKey, data: payload })
    }
  },
  modules: {
  }
})

// 定义自己的 `useStore` 组合式函数
export const useStore = () => baseUseStore(key)