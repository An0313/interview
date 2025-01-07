/**
 * 静态变量
 */
import { getTerminal, getTerminalRes, getNavInfo, getNavInfoRes } from '@/utils'
import Pages from './pages'

// 小程序名称
export const appName = '前端面试宝'

// 系统信息
export const systemInfo = uni.getSystemInfoSync()
// 底部安全区域
export const bottomLift = systemInfo.safeArea?.bottom || 0
// 导航栏信息
export const navInfo: getNavInfoRes = getNavInfo()
export const terminal: getTerminalRes = getTerminal()
export const defaultShare = {
  title: appName,
  path: Pages.home
}