/**
 * 常用工具函数
 */

/**
 * 防抖函数
 * @param {fn} fn 外部传入的函数
 * @param {number} delay 延迟的时间
 * @returns
 */
export const debounce = function (fn: Function, delay: number) {
  // 定义一个定时器， 保存上一次的定时器
  let timer: NodeJS.Timeout | null = null;

  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer as  NodeJS.Timeout);
      timer = null
    }
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, delay) as NodeJS.Timeout;
  }
}

/**
 * 节流函数
 * @param {fn} fn 外部传入的函数
 * @param {number} interval 间隔的时间
 * @returns
 */
export const throttle = function (fn: Function, interval = 2000) {
  let lastTime = Date.now();
  return function (...args: any[]) {
    const nowTime = Date.now()
    if (nowTime - lastTime >= interval) {
      // @ts-ignore
      fn.apply(this, args);
      lastTime = nowTime;
    }
  }
}

// 获取客户终端信息
export interface getTerminalRes {
  app: boolean
  appNvue: boolean
  h5: boolean
  h5Wx: boolean
  mpWeixin: boolean
  mpAlipay: boolean
  mpBaidu: boolean
  mMpToutiao: boolean
  mpQq: boolean
  mp360: boolean
  mpJd: boolean
  mp: boolean
  quickappWebview: boolean
  quickappWebviewUnion: boolean
  quickappWebviewHuawei: boolean
}

// 获取终端信息
export const getTerminal = (): getTerminalRes => {
  const terminal = {
    /**App*/
    app: false,

    /**App nvue*/
    appNvue: false,

    /**H5*/
    h5: false,
    h5Wx: false,

    /**微信小程序*/
    mpWeixin: false,

    /**支付宝小程序*/
    mpAlipay: false,

    /**百度小程序*/
    mpBaidu: false,

    /**字节跳动小程序*/
    mMpToutiao: false,

    /**QQ小程序*/
    mpQq: false,

    /**360小程序*/
    mp360: false,

    /**京东小程序*/
    mpJd: false,

    /**微信小程序/支付宝小程序/百度小程序/字节跳动小程序/QQ小程序/360小程序*/
    mp: false,

    /**快应用通用(包含联盟、华为)*/
    quickappWebview: false,

    /**快应用联盟*/
    quickappWebviewUnion: false,

    /**快应用华为*/
    quickappWebviewHuawei: false,
  }

  //#ifdef APP-PLUS
  terminal.app = true
  //#endif

  //#ifdef APP-PLUS-NVUE
  terminal.appNvue = true
  //#endif

  //#ifdef H5
  terminal.h5 = true
  // @ts-ignore
  terminal.h5Wx = window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'
  //#endif

  //#ifdef MP-WEIXIN
  terminal.mpWeixin = true
  //#endif

  //#ifdef MP-ALIPAY
  terminal.mpAlipay = true
  //#endif

  //#ifdef MP-BAIDU
  terminal.mpBaidu = true
  //#endif

  //#ifdef MP-TOUTIAO
  terminal.mMpToutiao = true
  //#endif

  //#ifdef MP-QQ
  terminal.mpQq = true
  //#endif

  //#ifdef MP-360
  terminal.mp360 = true
  //#endif

  //#ifdef MP-JD
  terminal.mpJd = true
  //#endif

  //#ifdef MP
  terminal.mp = true
  //#endif

  //#ifdef quickapp-webview
  terminal.quickappWebview = true
  //#endif

  //#ifdef quickapp-webview-union
  terminal.quickappWebviewUnion = true
  //#endif

  //#ifdef quickapp-webview-huawei
  terminal.quickappWebviewHuawei = true
  //#endif

  return terminal
}

// 获取导航栏信息
export interface getNavInfoRes {
  statusBarHeight: number
  navHeight: number
  titleHeight: number
}

// 获取导航栏信息
export const getNavInfo = (): getNavInfoRes => {

  const navData = {
    statusBarHeight: 0,
    navHeight: 0,
    titleHeight: 0
  }

  navData.statusBarHeight = (uni.getSystemInfoSync().statusBarHeight as number)

  //#ifdef MP
  const { top, height } = uni.getMenuButtonBoundingClientRect()
  navData.titleHeight = 2 * (top - navData.statusBarHeight) + height
  //#endif
  //#ifndef MP
  navData.titleHeight = 40;
  //#endif
  navData.navHeight = navData.statusBarHeight + navData.titleHeight

  return navData
}

// 获取当前页面栈实例
export const getCurrentinstance = (): Page.PageInstance<AnyObject, {}> => {
  const pages: (Page.PageInstance<AnyObject, {}> & {})[] = getCurrentPages()
  return pages[pages.length - 1]
}

// toast 提示
export const toast = (title: string, fn?: () => void) => {
  const duration: number = 1500
  uni.showToast({
    title,
    icon: 'none',
    duration,
    position: 'center',
    success() {
      if (fn) {
        setTimeout(fn, duration)
      }
    }
  })
}