<template>
  <view class="list">
    <view
      class="item"
      v-for="(item, index) in list"
      :key="item.id"
      @click="showAd(index)"
    >
      <image class="cover" :src="item.cover" mode="widthFix" />
      <text class="title">{{ item.name }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad, onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";
import Pages from "@/const/pages";
import * as IMGS from "./imgs";

interface iListItem {
  id: number;
  name: string;
  cover: string;
  avid: string;
}

let avid: string = "";
let isEnded: boolean = false;

const list: iListItem[] = [
  {
    id: 1,
    name: "2022年最新版Vue3全套教程",
    cover: IMGS.VUE_COVER,
    avid: "897124656",
  },
  {
    id: 2,
    name: "React入门到实战(2022全网最新",
    cover: IMGS.REACT_COVER,
    avid: "979795771",
  },
  {
    id: 3,
    name: "TypeScript教程",
    cover: IMGS.TS_COVER,
    avid: "800627522",
  },
  {
    id: 4,
    name: "2022版Webpack5入门到原理",
    cover: IMGS.WEBPACK_COVER,
    avid: "939218689",
  },
  {
    id: 5,
    name: "2022最新版！Pinia基础入门教程",
    cover: IMGS.PINIA_COVER,
    avid: "555256420",
  },
];

// 领取资料
const receive = () => {
  const timestamp = Date.now();
  uni.navigateToMiniProgram({
    appId: "wx7564fd5313d24844",
    path: `pages/video/video?__preload_=${timestamp * 10 + 3}&__key_=${
      timestamp * 10 + 4
    }&avid=${avid}`,
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
        isEnded = true;
        receive();
      } else {
        // 播放中途退出，不下发游戏奖励
        console.log("放中途退出");
      }
    });
  }
});

onShareAppMessage(() => {
  return {
    title: "web前端学习资料免费领取",
    path: Pages.learningMaterials,
  };
});
onShareTimeline(() => {
  return {
    title: "web前端学习资料免费领取",
  };
});
// #endif

const showAd = (i: number) => {
  avid = list[i].avid;
  // #ifdef MP-WEIXIN
  // 用户触发广告后，显示激励视频广告
  if (isEnded) receive();
  else if (videoAd) {
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