declare namespace API {
    type RESUL<T = any> = Promise<{
        code: number, // 0 成功， 其他失败
        msg: string, // 错误信息
        data: T, // 返回数据
    }>
}