const fs = require('fs')
const path = require('path')
const { problemTag, problemTagMnum, problem, probleSort } = require('./data');

// 写入文件
const writeFile = (filePath, fileName, fileContent) => {
    fs.writeFile(path.resolve(__dirname, filePath, fileName), fileContent, e => {
        if (e) console.error(e)
        else console.log(`${fileName} 创建成功`)
    })
}

// toJSON
const stringify = (obj) => JSON.stringify(obj, null, '  ')


// 面试题文件
const problemJs = () => {
    const problemText = 'export const problem = ' + stringify(problem)
    const probleSortText = 'export const probleSort = ' + stringify(probleSort)
    writeFile('../src/const', 'problem.js', problemText + '\n' + probleSortText)
}

// 面试题标签文件
const problemTagJs = () => {
    const problemTagText = 'export const problemTag = ' + stringify(problemTag)
    const problemTagMnumText = 'export const problemTagMnum =' + stringify(problemTagMnum)
    writeFile('../src/const', 'problemTag.js', problemTagText + '\n' + problemTagMnumText)
}

problemJs()
problemTagJs()