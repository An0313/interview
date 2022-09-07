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
          <Welfare class="pageItem"></Welfare>
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
import Tabbar from "./components/Tabbar/index.vue";
import Home from "./components/home/index.vue";
import WrittenExamination from "./components/writtenExamination/index.vue";
import Welfare from "./components/Welfare/index.vue";
import User from "./components/user/index.vue";
import * as TabbarImg from "./components/Tabbar/imgs";

enum tabbarKey {
  home,
  writtenExamination,
  learningMaterials,
  user,
}

const selectIndex = ref<number>(0);
const tabbar = [
  {
    key: tabbarKey.home,
    icon: TabbarImg.HOME,
    selectedIcon: TabbarImg.HOME_FILL,
    title: appName,
    name: "面试题",
  },
  {
    key: tabbarKey.writtenExamination,
    icon: TabbarImg.WRITTENEXAMINATION,
    selectedIcon: TabbarImg.WRITTENEXAMINATION_FILL,
    title: "笔试题",
    name: "笔试题",
  },
  {
    key: tabbarKey.learningMaterials,
    icon: TabbarImg.WELFARE,
    selectedIcon: TabbarImg.WELFARE_FILL,
    title: "学习资料",
    name: "领资料",
  },
  {
    key: tabbarKey.user,
    icon: TabbarImg.USER,
    selectedIcon: TabbarImg.USER_FILL,
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
