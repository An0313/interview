import {defineStore} from 'pinia';
import {problem, problemSort, problemTag, problemTagMenu, homeMenu, answerList} from '@/const/problem'
import {collectStorageKey, collectAnswerStorageKey} from '@/const/storageKey'


type ICollect = number[]

interface IState {
    problem: IProblem.item[],
    problemSort: IProblem.sort,
    problemTag: IProblem.tagItem[],
    problemTagMenu: IProblem.tagMenu,
    collectList: ICollect,
    problemListPageData: IProblem.item[],

    homeMenu: IProblem.homeMenuItem[],


    answerList: IProblem.answerList,
    collectAnswerList: ICollect,
    answerListPageData: IProblem.answerList,
}

export const useGlobalStore = defineStore('problem', {
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
            // 面试题 收藏
            collectList: uni.getStorageSync(collectStorageKey) || [],
            // 面试题分类列表页面数据
            problemListPageData: [],

            // 首页菜单
            homeMenu,


            // 笔试题
            answerList,
            // 笔试题 收藏
            collectAnswerList: uni.getStorageSync(collectAnswerStorageKey) || [],
            // 笔试题分类列表页面数据
            answerListPageData: [],
        };
    },

    actions: {
        // 设置面试题分类列表页面数据
        setProblemListPageData(list: IProblem.item[]) {
            this.problemListPageData = [...list]
        },
        // 设置面试题分类列表页面数据
        setAnswerListPageData(list: IProblem.answerList) {
            this.answerListPageData = [...list]
        },
        // 设置面试题 收藏
        setCollectList(list: ICollect) {
            this.collectList = list
        },
        // 设置笔试题 收藏
        setCollectAnswerList(list: ICollect) {
            this.collectAnswerList = list
        },
    },
});