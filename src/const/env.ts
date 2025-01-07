/**
 * 环境变量
 */

// 是否是开发环境
export const isDev = process.env.NODE_ENV === 'development'

// 微信云开发id
export const wxCloudEnvId = isDev ? 'dev-yn2lc' : 'prod-0gbnp82ae1300650'