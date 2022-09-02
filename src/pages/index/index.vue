<template>
  <Layout :title="tabbar[selectIndex].title">
    <template #default>
      <view class="page">
        <view
          class="pageContent"
          :style="{
            width: `${tabbar.length}00vw`,
            transform: `translateX(-${selectIndex * 100}vw)`,
          }"
        >
          <Home class="pageItem"></Home>
          <WrittenExamination class="pageItem"></WrittenExamination>
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
import WrittenExamination from "./components/writtenExamination";
import User from "./components/user";
import homeIcon from "./components/Tabbar/img/home";
import homeFillIcon from "./components/Tabbar/img/home-fill";
import writtenExaminationIcon from "./components/Tabbar/img/writtenExamination";
import writtenExaminationFillIcon from "./components/Tabbar/img/writtenExamination-fill";
import userIcon from "./components/Tabbar/img/user";
import userFillIcon from "./components/Tabbar/img/user-fill";

enum tabbarKey {
  home,
  writtenExamination,
  user,
}

const selectIndex = ref<number>(0);
const tabbar = [
  {
    key: tabbarKey.home,
    icon: homeIcon,
    selectedIcon: homeFillIcon,
    title: appName,
    name: "面试题",
  },
  {
    key: tabbarKey.writtenExamination,
    icon: writtenExaminationIcon,
    selectedIcon: writtenExaminationFillIcon,
    title: "笔试题",
    name: "笔试题",
  },
  {
    key: tabbarKey.user,
    icon: userIcon,
    selectedIcon: userFillIcon,
    title: "个人中心",
    name: "我的",
  },
];

onLoad(({ sKey }) => {
  if (sKey && tabbarKey[sKey as any]) {
    selectIndex.value = Number(tabbarKey[sKey as any]);
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
    height: 100%;
    transform: translateX(0);
    transition: transform 0.25s;
    overflow: hidden;

    .pageItem {
      width: 100%;
      overflow: hidden scroll;
      -webkit-overflow-scrolling: touch;
    }
  }
}
</style>
