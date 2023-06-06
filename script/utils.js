// 设置面试id
const fs = require("fs");
const path = require("path");
const setId = (dataArr, baseId) => {
    return dataArr.map((item, index) => {
        const _item = {
            id: (baseId ? baseId * 100: 0) + index + 1,
            ...item
        }
        
        if (_item.children) {
            _item.children = setId(_item.children, _item.id)
        }
        return _item
    })
}

module.exports.setId = setId

/**
 * 生成文件
 * @param {string} filePath 目录地址
 * @param {string}  fileName 文件名称
 * @param {string}  fileContent 文件内容
 * @return {void}
 */
exports.writeFile = (filePath, fileName, fileContent) => {
    fs.writeFile(path.resolve(__dirname, filePath, fileName), fileContent, e => {
        if (e) console.error(e)
        else console.log(`${fileName} 创建成功`)
    })
}

/**
 * 转 json
 * @param {object} obj 要转为 string 的对象
 * @returns {string}
 */
exports.stringify = (obj) => JSON.stringify(obj, null, '  ')