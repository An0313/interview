const {writeFile, stringify} = require('./utils')
const {problemTag, problemTagMenu, problem, problemSort, homeMenu} = require('./data/problem');
const {answerList} = require('./data/answer');


// 面试题文件
(() => {
    const problemText = 'export const problem: IProblem.item[] = ' + stringify(problem)
    const problemSortText = 'export const problemSort: IProblem.sort = ' + stringify(problemSort)
    const problemTagText = 'export const problemTag: IProblem.tagItem[] = ' + stringify(problemTag)
    const problemTagMenuText = 'export const problemTagMenu: IProblem.tagMenu =' + stringify(problemTagMenu)
    const homeMenuText = 'export const homeMenu: IProblem.homeMenuItem[] = ' + stringify(homeMenu)
    const answerText = 'export const answerList: IProblem.answerListItem[] = ' + stringify(answerList)
    writeFile('../src/const', 'problem.ts',
        problemText + '\n' +
        problemSortText + '\n' +
        problemTagText + '\n' +
        problemTagMenuText + '\n' +
        homeMenuText + '\n' +
        answerText
    )
})();
