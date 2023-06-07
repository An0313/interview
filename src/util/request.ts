// uni.request 文档 https://uniapp.dcloud.net.cn/api/request/request.html

// 默认参数
const defaultOptions: Omit<UniNamespace.RequestOptions, 'url'> = {
    method: 'GET',
    header: {
        'content-type': 'application/json'
    },
    data: {},
    timeout: 6000,
    dataType: 'json'
}

// request 函数返回值
interface IRES<T = {}> {
    code: number, // 0 成功， 其他失败
    msg: string, // 错误信息
    data: T, // 返回数据
}

/**
 * 发送请求
 * @param {UniNamespace.RequestOptions} ags 请求参数
 * @param {boolean} isRequestTask 是否返回 isRequestTask
 * @return {Promise<IRES> | UniNamespace.RequestTask}
 */
const request = function (ags: UniNamespace.RequestOptions, isRequestTask: boolean = false) {
    const header = {...defaultOptions.header, ...(ags.header || {})}
    const options: UniNamespace.RequestOptions = {...defaultOptions, ...ags, header}

    if (isRequestTask) return uni.request(options)
    const res: IRES = {
        code: 0,
        msg: '',
        data: {}
    }
    const errRes = {...res, code: -1}
    return new Promise(resolve => {
        uni.request({
            ...options,
            success: ({data, statusCode}) => {
                resolve(statusCode === 200 || statusCode === 304 ? {...res, data} : {...errRes, code: statusCode})
            },
            fail: ({errMsg}) => {
                resolve({...errRes, msg: errMsg})
            }
        })
    })
}

export default request