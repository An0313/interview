<template>
  <view class="home">
    <SearchBar :list="store.problem" @search="search"/>
    <AdBanner :ad_id="AdId.home_top_banner"></AdBanner>
    <view class="indexList">
      <template v-for="(item, index) in indexList" :key="index">
        <view class="title">{{ item.title }}</view>
        <view class="sub">
          <view
              v-for="(subItem, subIndex) in item.sub"
              :key="subIndex"
              class="subItem"
              @click="handleClickItem(subItem)"
          >
            <image :src="subItem.icon" class="icon"/>
            <view class="info">
              <view class="name">{{ subItem.name }}</view>
              <view class="total">共{{ subItem.total }}条</view>
            </view>
          </view>
        </view>
      </template>
    </view>
  </view>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {onLoad} from "@dcloudio/uni-app";
import SearchBar from "./components/SearchBar/index.vue";
import AdBanner from "@/components/AdBanner/index.vue"
import {useGlobalStore} from '@/stores/problem';
import Page from "@/const/pages";
import {AdId} from "@/const";
import {isDev} from "@/const/env";


const store = useGlobalStore();

const indexList = computed<IProblem.homeMenuItem[]>(() => store.homeMenu)
// 打开分类列表页面
const handleOpenList = (name: string, list: IProblem.item[]): void => {
  store.setProblemListPageData(list)
  uni.navigateTo({
    url: `${Page.problemList}?name=${name}`,
  });
};

// 点击列表项 打开分类列表页面
const handleClickItem = (subItem: IProblem.homeMenuItemSub) => {
  handleOpenList(subItem.name, store.problemSort[subItem.id].map(index => store.problem[index]));
};

// 搜索
const search = (value: IProblem.item[]) => {
  console.log(value)
  handleOpenList("搜索", value);
};


// #ifdef MP-WEIXIN
// 插屏广告
let interstitialAd: UniApp.InterstitialAdContext | null = null;
let showInterstitialAdNumber: number = 0;

onLoad(() => {
  if (uni.createInterstitialAd && !isDev) {
    interstitialAd = uni.createInterstitialAd({adUnitId: AdId.home_interstitial});
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
    interstitialAd.onClose(() => {
    });
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