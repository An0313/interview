/**
 * 防抖函数
 * @param {fn} fn 外部传入的函数
 * @param {number} delay 延迟的时间
 * @returns
 */
export const debounce = function (fn, delay) {
  // 定义一个定时器， 保存上一次的定时器
  let timer: null | number = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay)
  }
}

/**
 * 节流函数
 * @param {fn} fn 外部传入的函数
 * @param {number} interval 间隔的时间
 * @returns
 */
export const throttle = function (fn, interval = 2000) {
  let lastTime = Date.now();
  return function (...args) {
    const nowTime = Date.now()
    if (nowTime - lastTime >= interval) {
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

export const getNavInfo = (): getNavInfoRes => {
  const { app, mp } = getTerminal()

  const navData = {
    statusBarHeight: 0,
    navHeight: 0,
    titleHeight: 0
  }

  if (app || mp) {
    navData.statusBarHeight = (uni.getSystemInfoSync().statusBarHeight as number)

    if (mp) {
      const { top, height } = uni.getMenuButtonBoundingClientRect()
      navData.titleHeight = 2 * (top - navData.statusBarHeight) + height
      navData.navHeight = navData.statusBarHeight + navData.titleHeight
    }
  }

  return navData
}


export const getCurrentinstance = () => {
  const pages = getCurrentPages()
  pages[0]
  return pages[pages.length - 1] as any
}

export const toast = (title: string, fn?: () => any) => {
  const duration = 1500
  uni.showToast({
    title,
    icon: 'none',
    duration,
    position: 'center',
    success() {
      if (fn) {
        setTimeout(fn, debounce)
      }
    }
  })
}