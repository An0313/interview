const fs = require('fs')
const path = require('path')
const {pages, appConfig} = require('./index')

const pagesJsonPath = path.resolve(__dirname, '../pages.json')
const pagesObjPath = path.resolve(__dirname, '../const/pages.ts')

fs.writeFile(pagesJsonPath, JSON.stringify(appConfig, null, '  '), e => {
  if (e) console.error(e)
  else console.log('pages.json 配置成功')
})

fs.writeFile(pagesObjPath, 'export default ' + JSON.stringify(pages, null, '  '), e => {
  if (e) console.error(e)
  else console.log('pages.ts 配置成功')
})
