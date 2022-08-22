<template>
  <Layout :title="tabbar[selectIndex].title">
    <template #default>
      <view class="page">
        <view
          class="pageContent"
          :style="{ transform: `translateX(-${selectIndex * 100}vw)` }"
        >
          <Home class="pageItem"></Home>
          <User class="pageItem"></User>
        </view>
      </view>
      <!-- <component :is="tabbar[selectIndex].component" /> -->
    </template>
    <template #footer>
      <Tabbar v-model:selectIndex="selectIndex" :tabbar="tabbar"></Tabbar>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad, onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";
import Page from "@/const/pages";
import { appName, defaultShare } from "@/const";
import Tabbar from "./components/Tabbar";
import Home from "./components/home";
import User from "./components/user";
import homeIcon from "./components/Tabbar/img/home";
import homeFillIcon from "./components/Tabbar/img/home-fill";
import userIcon from "./components/Tabbar/img/user";
import userFillIcon from "./components/Tabbar/img/user-fill";

const selectIndex = ref<number>(0);
const tabbar = [
  {
    name: "home",
    icon: homeIcon,
    selectedIcon: homeFillIcon,
    title: appName,
  },
  {
    name: "user",
    icon: userIcon,
    selectedIcon: userFillIcon,
    title: "个人中心",
  },
];

onLoad(({ index }) => {
  if (index) {
    selectIndex.value = Number(index);
  }
});

// #ifdef MP-WEIXIN
onShareAppMessage(() => {
  return defaultShare;
});
onShareTimeline(() => {
  return defaultShare;
});
// #endif
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .pageContent {
    display: flex;
    width: 200vw;
    height: 100%;
    transform: translateX(0);
    transition: transform 0.5s;
    overflow: hidden;

    .pageItem {
      width: 100%;
      overflow: hidden scroll;
      -webkit-overflow-scrolling: touch;
    }
  }
}
</style>
