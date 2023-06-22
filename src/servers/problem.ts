import Request from "@/utils/request";

/**
 * 获取面试题列表
 */
export const getProblem = (): IProblem.GET_PROBLEM_DATA => Request({
    url: 'https://mp-66fedf64-a9d9-4aa2-b71e-15bab6b06995.cdn.bspapp.com/problemData.json'
})