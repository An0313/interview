<template>
  <Layout title="学习资料">
    <view class="list">
      <view class="item" v-for="item in list" :key="item.id" @click="showAd">
        <image class="cover" :src="item.cover" mode="widthFix" />
        <text class="title">{{ item.name }}</text>
      </view>
    </view>
  </Layout>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import Pages from "@/const/pages";
import VUE_COVER from "./img/vue";
import REACT_COVER from "./img/react";
import TS_COVER from "./img/ts";
import WEBPACK_COVER from "./img/webpack";
import PINIA_COVER from "./img/pinia";

const list = [
  {
    id: 1,
    name: "2022年最新版Vue3全套教程",
    cover: VUE_COVER,
  },
  {
    id: 2,
    name: "React入门到实战(2022全网最新",
    cover: REACT_COVER,
  },
  {
    id: 3,
    name: "TypeScript教程",
    cover: TS_COVER,
  },
  {
    id: 4,
    name: "2022版Webpack5入门到原理",
    cover: WEBPACK_COVER,
  },
  {
    id: 5,
    name: "2022最新版！Pinia基础入门教程",
    cover: PINIA_COVER,
  },
];

// 领取资料
const receive = () => {
  uni.navigateTo({
    url: Pages.webview,
    success(res) {
      res.eventChannel.emit("onGetData", {
        src: "https://mp.weixin.qq.com/s?__biz=Mzg2Njg0NjgzOA==&mid=2247483662&idx=1&sn=b900ddebefd097d7c63a5fb7af37e3ce&chksm=ce45d017f9325901ec7e5e4ea2ef052902bb97816ee3dd22c5324233aba17e0af75c0ab9cbd5&token=1608215834&lang=zh_CN#rd",
      });
    },
  });
};

// #ifdef MP-WEIXIN
// 在页面中定义激励视频广告
let videoAd: any = null;

onLoad(() => {
  // 在页面onLoad回调事件中创建激励视频广告实例
  if (uni.createRewardedVideoAd) {
    videoAd = uni.createRewardedVideoAd({
      adUnitId: "adunit-8b2a8ebfdc5d298c",
    });
    videoAd.onLoad(() => {});
    videoAd.onError(() => {});
    videoAd.onClose((res: any) => {
      // 用户点击了【关闭广告】按钮
      if (res && res.isEnded) {
        // 正常播放结束，可以下发游戏奖励
        console.log("正常播放结束");
        receive();
      } else {
        // 播放中途退出，不下发游戏奖励
        console.log("放中途退出");
      }
    });
  }
});
// #endif

const showAd = () => {
  // #ifdef MP-WEIXIN
  // 用户触发广告后，显示激励视频广告
  if (videoAd) {
    videoAd.show().catch(() => {
      // 失败重试
      videoAd
        .load()
        .then(() => videoAd.show())
        .catch(() => {
          console.log("激励视频 广告显示失败");
        });
    });
  }
  // #endif
  // #ifndef MP-WEIXIN
  receive();
  // #endif
};
</script>

<style lang="scss" scoped>
.list {
  $w: 750rpx;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 30rpx;
  background-color: $i-bg-color-grey;
  overflow: hidden scroll;
  -webkit-overflow-scrolling: touch;

  .item {
    width: 100%;
    margin-bottom: 30rpx;
    border-radius: 30rpx;
    background-color: $i-bg-color;
    overflow: hidden;

    .cover {
      display: block;
      width: 100%;
    }

    .title {
      display: block;
      padding: 20rpx;
    }
  }
}
</style>