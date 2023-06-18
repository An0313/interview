/**
 * 上传面试题
 */
const qiniu = require('qiniu')
const {writeFile, stringify} = require('./utils')
const {problemTag, problemTagMenu, problem, problemSort, homeMenu} = require('./data/problem')
const {answerList} = require('./data/answer')

const data = {
    problemTag,
    problemTagMenu,
    problem,
    problemSort,
    homeMenu,
    answerList,
};

(() => {
    const fileName = 'problemData.json'
    const path = './'
    // 生成要上传的文件
    writeFile(path, fileName, stringify(data))


    // 定义好其中鉴权对象mac
    var accessKey = 'RjrBCYHzH1cx-1qWDREFyBWAc0ME-pquNOcTeyfO';
    var secretKey = '4BbMHueGjdVRV8dXzUrFMreQAtVUAlrK2ChKGtZW';
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var key = fileName;

    // 简单上传的凭证
    var options = {
        scope: `interview-prod:${key}`,
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken=putPolicy.uploadToken(mac);

    var config = new qiniu.conf.Config();
    // 空间对应的机房
    config.zone = qiniu.zone.Zone_z1;


    var localFile = `${path}${fileName}`;
    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();

    // 文件上传
    formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
                                                                          respBody, respInfo) {
        if (respErr) {
            throw respErr;
        }
        if (respInfo.statusCode == 200) {
            console.log(respBody);
        } else {
            console.log(respInfo.statusCode);
            console.log(respBody);
        }
    });
})();