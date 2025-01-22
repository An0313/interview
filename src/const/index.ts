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
export const bottomLift = systemInfo.screenHeight - (systemInfo.safeArea?.bottom || systemInfo.screenHeight)
// 导航栏信息
export const navInfo: getNavInfoRes = getNavInfo()
export const terminal: getTerminalRes = getTerminal()
export const defaultShare = {
  title: appName,
  path: Pages.home
}

export const AdId = {
  home_top_banner: 'adunit-c05ae012df7980d9', // 首页顶部banner
  home_interstitial: 'adunit-5d354663ce6b74b9', // 首页插屏广告

  problemList_top_banner: 'adunit-5b18f0c9b3f1ad52', // 问题列表页顶部banner

  problemDetail_top_banner: 'adunit-9babcb790cec62f4', // 问题详情页顶部banner

  writtenExamination_top_banner: 'adunit-01645eb392428bf4', // 笔试题页顶部banner

  welfare_interstitial: 'adunit-8b2a8ebfdc5d298c', // 福利页激励广告
}