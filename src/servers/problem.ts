import Request from "@/utils/request";

/**
 * 获取面试题列表
 */
export const getProblem = (): IProblem.GET_PROBLEM_DATA => Request({
    url: 'http://qn-interview.an1688.top/problemData.json'
})