<template>
  <Layout :title="pageTitle">
    // #ifdef MP-WEIXIN
    <ad unit-id="adunit-5b18f0c9b3f1ad52"></ad>
    // #endif
    <ProbleList :list="problemListPageData" @clickItem="handleOpenDetail"/>
  </Layout>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {onLoad, onShareAppMessage, onShareTimeline} from "@dcloudio/uni-app";
import {useCounterStore} from '@/stores/problem';
import Page from "@/const/pages";
import {defaultShare} from "@/const";

const store = useCounterStore();

// 题目列表
const {problemListPageData} = store;
// 页面标题
const pageTitle = ref<string>("");

onLoad(({name}) => {
  pageTitle.value = name || "";
});

/**
 * 打开详情页
 */
const handleOpenDetail = (index: number): void => {
  uni.navigateTo({
    url: `${Page.problemDetail}?index=${index}`,
  });
};

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
</style>