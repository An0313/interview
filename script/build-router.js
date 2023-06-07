const {pages, appConfig} = require('./data/app.json')
const {writeFile, stringify} = require('./utils')

writeFile('../src/', 'pages.json', stringify(appConfig))
writeFile('../src/const', 'pages.ts', 'export default ' + stringify(pages))