<template>
  <Layout :title="pageTitle">
    // #ifdef MP-WEIXIN
    <ad unit-id="adunit-5b18f0c9b3f1ad52"></ad>
    // #endif
    <ProbleList :list="problemList" @clickItem="handleOpenDetail" />
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { iProblemItem, probleSort } from "@/const/problem";
import Page from "@/const/pages";

// 题目列表
const problemList = ref<iProblemItem[]>([]);
// 页面标题
const pageTitle = ref<string>("");

onLoad(({ id, name }) => {
  if (!Number.isInteger(Number(id))) {
    console.log("无效的id", id);
  } else {
    problemList.value = probleSort[id as string];
    pageTitle.value = name || "";
  }
});

/**
 * 打开详情页
 */
const handleOpenDetail = (index: number): void => {
  uni.navigateTo({
    url: `${Page.problemDetail}`,
    success({ eventChannel: { emit } }) {
      emit("getListData", {
        list: problemList.value,
        index,
      });
    },
  });
};
</script>

<style lang="scss" scoped>

</style>