import { getTerminal, getTerminalRes, getNavInfo, getNavInfoRes } from '@/util'
import Pages from './pages'

export const appName = '前端面试宝'
export const isDev = process.env.NODE_ENV === 'development'

export const systemInfo = uni.getSystemInfoSync()
export const bottomLift = systemInfo.screenHeight - (systemInfo.safeArea?.bottom || systemInfo.screenHeight)
export const navInfo: getNavInfoRes = getNavInfo()
export const terminal: getTerminalRes = getTerminal()
export const defaultShare = {
  title: appName,
  path: Pages.home
}