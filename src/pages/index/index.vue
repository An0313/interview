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
import Page from "@/const/pages";
import { appName } from "@/const";
import Tabbar from "./components/Tabbar";
import Home from "./components/home";
import User from "./components/user";
import homeIcon from "@/static/img/tabbar/home";
import homeFillIcon from "@/static/img/tabbar/home-fill";
import userIcon from "@/static/img/tabbar/user";
import userFillIcon from "@/static/img/tabbar/user-fill";

const selectIndex = ref<number>(0);
const tabbar = [
  {
    name: "home",
    page: Page.home,
    icon: homeIcon,
    selectedIcon: homeFillIcon,
    title: appName,
  },
  {
    name: "user",
    page: Page.user,
    icon: userIcon,
    selectedIcon: userFillIcon,
    title: "个人中心",
  },
];
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
    }
  }
}
</style>
