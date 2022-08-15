<template>
  <view
    class="navTitle"
    :style="{
      height: `${navHeight}px`,
      paddingTop: `${statusBarHeight}px`
    }"
  >
    <view
      class="titleBar"
      :style="{
        height: `${titleHeight}px`,
        lineHeight: `${titleHeight}px`,
      }"
    >
      <view
        class="backBtn"
        v-if="currentPagePath !== Page.home && currentPagePath !== Page.user"
        @click="handelBack"
      >
        <image
          class="backImg"
          :src="pagesLength === 1 ? homeIcon : LeftArrowIcon"
          mode="heightFix"
        />
      </view>
      <view class="title">{{ props.title }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { navInfo, appName } from "@/const";
import Page from '@/const/pages'
import homeIcon from "@/static/img/home";
import LeftArrowIcon from "@/static/img/left-arrow";

interface PropsType {
  title?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: appName,
});

const pages = getCurrentPages();
const pagesLength = pages.length;
const currentPagePath = `/${pages[pagesLength - 1].route}`;

const { statusBarHeight, navHeight, titleHeight } = navInfo;

// 返回上一页
const handelBack = () => {
  pagesLength === 1
    ? uni.reLaunch({ url: Page.home })
    : uni.navigateBack();
};
</script>

<style lang="scss" scoped>
.navTitle {
  $navBg: #fff;
  width: 100%;
  background-color: $navBg;
  border-bottom: 1rpx solid #eee;
  overflow: hidden;

  .titleBar {
    position: relative;

    .backBtn {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100rpx;
      height: 100%;
      padding-left: 20rpx;
      background-color: $navBg;
      z-index: 10;

      .backImg {
        height: 65%;
        vertical-align: middle;
      }
    }

    .title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 36rpx;
      font-weight: 400;
      color: #333333;
    }
  }
}
</style>
