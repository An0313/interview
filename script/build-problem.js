const {writeFile, stringify} = require('./utils')
const {problemTag, problemTagMenu, problem, problemSort} = require('./data/problem');
const {answer} = require('./data/answer');


// 面试题文件
(() => {
    const problemText = 'export const problem: IProblem.item[] = ' + stringify(problem)
    const problemSortText = 'export const problemSort: IProblem.sort = ' + stringify(problemSort)
    writeFile('../src/const', 'problem.ts', problemText + '\n' + problemSortText)
})();

// 面试题标签文件
(() => {
    const problemTagText = 'export const problemTag: IProblem.tagItem[] = ' + stringify(problemTag)
    const problemTagMenuText = 'export const problemTagMenu: IProblem.tagMenu =' + stringify(problemTagMenu)
    writeFile('../src/const', 'problemTag.ts', problemTagText + '\n' + problemTagMenuText)
})();

(() => {
    const answerText = 'export const answer: IProblem.answerListItem[] = ' + stringify(answer)
    writeFile('../src/const', 'answer.ts', answerText)
})();