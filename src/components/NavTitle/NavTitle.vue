<template>
  <view
    class="navTitle"
    :style="{
      height: `${navHeight}px`,
    }"
  >
    <view
      class="statusBar"
      :style="{
        height: `${statusBarHeight}px`,
      }"
    />
    <view
      class="titleBar"
      :style="{
        height: `${titleHeight}px`,
        lineHeight: `${titleHeight}px`,
      }"
    >
      <view
        class="backBtn"
        @click="handelBack"
        v-if="
          currentPagePath !== cPagePath.home &&
          currentPagePath !== cPagePath.search &&
          currentPagePath !== cPagePath.company &&
          currentPagePath !== cPagePath.user
        "
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
import { useStore } from "vuex";
import { appName } from "@/const";
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

const store = useStore();
const { statusBarHeight, navHeight, titleHeight } = store.state.navInfo;
const cPagePath = store.state.page

// 返回上一页
const handelBack = () => {
  pagesLength === 1
    ? uni.switchTab({ url: cPagePath.home })
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

  .statusBar {
    width: 100%;
  }

  .titleBar {
    position: relative;

    .backBtn {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100rpx;
      height: 100%;
      padding-left: 30rpx;
      background-color: $navBg;
      z-index: 10;

      .backImg {
        height: 60%;
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
      font-size: 28rpx;
      font-weight: bold;
      color: #333333;
    }
  }
}
</style>
