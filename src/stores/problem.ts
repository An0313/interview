import {defineStore} from 'pinia';
import {problem, problemSort} from '@/const/problem'
import {problemTag, problemTagMenu} from '@/const/problemTag'
import {collectStorageKey, collectAnswerStorageKey} from '@/const/storageKey'


type ICollect = number[]
interface IState {
    problem: IProblem.item[],
    problemSort: IProblem.sort,
    problemTag: IProblem.tagItem[],
    problemTagMenu: IProblem.tagMenu,
    answerList: any[],
    collectList: ICollect,
    collectAnswerList: ICollect,
}

export const useCounterStore = defineStore('problem', {
    state: (): IState => {
        return {
            // 面试题 列表
            problem,
            // 面试题 分类
            problemSort,
            // 面试题 标签列表
            problemTag,
            // 面试题 标签菜单
            problemTagMenu,
            // 笔试题
            answerList: [],
            // 面试题 收藏
            collectList: uni.getStorageSync(collectStorageKey) || [],
            // 笔试题 收藏
            collectAnswerList: uni.getStorageSync(collectAnswerStorageKey) || []
        };
    },
    actions: {},
});