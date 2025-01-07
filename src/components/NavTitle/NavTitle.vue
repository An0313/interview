<template>
  <view
    class="navTitle"
    :style="{
      height: `${navInfo.navHeight}px`,
      paddingTop: `${navInfo.statusBarHeight}px`
    }"
  >
    <view
      class="titleBar"
      :style="{
        height: `${navInfo.titleHeight}px`,
        lineHeight: `${navInfo.titleHeight}px`,
      }"
    >
      <!--返回按钮-->
      <view
        class="backBtn"
        v-if="isShowNav"
        @click="handelBack"
      >
        <image
          class="backImg"
          mode="heightFix"
          :src="pagesLength === 1 ? homeIcon : LeftArrowIcon"
        />
      </view>
      <!--页面标题-->
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

// 获取当前页面信息
const pages = getCurrentPages();

// 当前是第几个页面
const pagesLength = pages.length;

// 是否显示导航栏
const isShowNav =  `/${pages[pagesLength - 1].route}` !== Page.home


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
        $size: 52rpx;
        width: $size;
        height: $size;
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
