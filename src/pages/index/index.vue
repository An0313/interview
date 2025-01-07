<template>
  <Layout :title="tabBar[selectIndex].title">
    <template #default>
      <view class="page">
        <view
          class="pageContent"
          :style="{
            width: `${tabBar.length}00vw`,
            transform: `translateX(-${selectIndex * 100}vw)`,
          }"
        >
          <Home class="pageItem"/>
          <WrittenExamination class="pageItem"/>
          <Welfare class="pageItem"/>
          <User class="pageItem"/>
        </view>
      </view>

    </template>
    <template #footer>
      <TabBar v-model:selectIndex="selectIndex" :tabBar="tabBar" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad, onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";
import { appName, defaultShare } from "@/const";
import TabBar from "./components/TabBar/index.vue";
import type {iTabBarItem} from './components/TabBar/index'
import Home from "./components/home/index.vue";
import WrittenExamination from "./components/writtenExamination/index.vue";
import Welfare from "./components/Welfare/index.vue";
import User from "./components/user/index.vue";
import * as TabBarImg from "./components/TabBar/imgs";

enum TabBarKey {
  home,
  writtenExamination,
  learningMaterials,
  user,
}

// 选中 tabBar 的下标
const selectIndex = ref<number>(0);

// 要渲染的 tabBar 的数据
const tabBar: iTabBarItem[] = [
  {
    key: TabBarKey.home,
    icon: TabBarImg.HOME,
    selectedIcon: TabBarImg.HOME_FILL,
    title: appName,
    name: "面试题",
  },
  {
    key: TabBarKey.writtenExamination,
    icon: TabBarImg.WRITTENEXAMINATION,
    selectedIcon: TabBarImg.WRITTENEXAMINATION_FILL,
    title: "笔试题",
    name: "笔试题",
  },
  {
    key: TabBarKey.learningMaterials,
    icon: TabBarImg.WELFARE,
    selectedIcon: TabBarImg.WELFARE_FILL,
    title: "学习资料",
    name: "领资料",
  },
  {
    key: TabBarKey.user,
    icon: TabBarImg.USER,
    selectedIcon: TabBarImg.USER_FILL,
    title: "个人中心",
    name: "我的",
  },
];

onLoad(({ sKey } = {}) => {
  if (sKey && TabBarKey[sKey]) {
    selectIndex.value = Number(TabBarKey[sKey]);
  }
});




// 微信小程序分享配置
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
