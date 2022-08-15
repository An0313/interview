<template>
  <Layout showTabbar>
    // #ifdef MP-WEIXIN
    <ad unit-id="adunit-c05ae012df7980d9"></ad>
    // #endif
    <view class="indexList">
      <template v-for="(item, index) in indexList" :key="index">
        <view class="title">{{ item.title }}</view>
        <view class="sub">
          <view
            class="subItem"
            v-for="(subItem, subIndex) in item.sub"
            :key="subIndex"
            @click="handleOpenList(subItem)"
          >
            <image class="icon" :src="subItem.icon" />
            <view class="info">
              <view class="name">{{ subItem.name }}</view>
              <view class="total">共{{ subItem.total }}条</view>
            </view>
          </view>
        </view>
      </template>
    </view>
  </Layout>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { problemTag, problemTagMnum, iTagItem } from "@/const/problemTag";
import { probleSort } from "@/const/problem";
import Page from "@/const/pages";
import { isDev } from "@/const";

interface iIndexListItemSub {
  name: string | number;
  total: number;
  icon: string;
  id: number | string;
}

interface iIndexListItem {
  title: string;
  sub: iIndexListItemSub[];
}

const indexList: iIndexListItem[] = (() =>
  [
    {
      title: "基础",
      sub: [problemTagMnum.html, problemTagMnum.css, problemTagMnum.js],
    },
    {
      title: "框架",
      sub: [problemTagMnum.vue, problemTagMnum.react, problemTagMnum.wx],
    },
    {
      title: "工具",
      sub: [problemTagMnum.git, problemTagMnum.pack],
    },
    {
      title: "其他",
      sub: [
        problemTagMnum.ts,
        problemTagMnum.algorithm,
        problemTagMnum.optimize,
        problemTagMnum.theory,
        problemTagMnum.hr,
        problemTagMnum.company,
      ],
    },
  ].map((item) => {
    return {
      title: item.title,
      sub: item.sub.map((subItem): iIndexListItemSub => {
        return {
          id: subItem,
          icon: (problemTag.find((item) => item.id === subItem) as iTagItem)
            .icon,
          name: problemTagMnum[subItem],
          total: probleSort[subItem]?.length || 0,
        };
      }),
    };
  }))();

// 打开分类列表页面
const handleOpenList = (subItem: iIndexListItemSub): void => {
  uni.navigateTo({
    url: `${Page.probleList}?id=${subItem.id}&name=${subItem.name}`,
  });
};

// #ifdef MP-WEIXIN
// 插屏广告
let interstitialAd: UniApp.InterstitialAdContext | null = null;
let showInterstitialAdNumber: number = 0;

onLoad(() => {
  if (uni.createInterstitialAd && !isDev) {
    interstitialAd = uni.createInterstitialAd({
      adUnitId: "adunit-5d354663ce6b74b9",
    });
    interstitialAd.onLoad(() => {
      // 插屏广告只显示一次
      if (showInterstitialAdNumber === 0) {
        // 在适合的场景显示插屏广告
        interstitialAd
          ?.show()
          .catch((err) => {
            console.error(err);
          })
          .then(() => showInterstitialAdNumber++);
      }
    });
    interstitialAd.onError((err) => {
      console.log("err", err);
    });
    interstitialAd.onClose(() => {});
  }
});
// #endif
</script>

<style lang="scss" scoped>
.indexList {
  $p: 30rpx;
  .title {
    padding: 15rpx $p;
    font-size: $i-font-size-base;
    color: $i-text-color;
    background-color: $i-bg-color-grey;
  }

  .sub {
    padding-left: $p;

    .subItem {
      $h: 120rpx;
      $lh: 40rpx;
      display: flex;
      height: $h;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1rpx solid $i-bg-color-grey;

      .icon {
        $size: 2 * $lh;
        width: $size;
        height: $size;
      }

      .info {
        flex: 1;
        padding-left: 30rpx;
        line-height: $lh;

        .name {
          font-size: $i-font-size-base;
          color: $i-text-color;
        }

        .total {
          font-size: $i-font-size-sm;
          color: $i-text-color-grey;
        }
      }
    }
  }
}
</style>
