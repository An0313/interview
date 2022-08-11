Component({
  properties: {
 
  },
  data: {
  },
  methods: {
  }
})

// 在页面中定义插屏广告
let interstitialAd = null

// 在页面onLoad回调事件中创建插屏广告实例
if (wx.createInterstitialAd) {
  interstitialAd = wx.createInterstitialAd({
    adUnitId: 'adunit-ffa44804d5e0158e'
  })
  interstitialAd.onLoad(() => { })
  interstitialAd.onError((err) => { })
  interstitialAd.onClose(() => { })
}

// 在适合的场景显示插屏广告
if (interstitialAd) {
  interstitialAd.show().catch((err) => {
    console.error(err)
  })
}