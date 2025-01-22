<template>
  <Layout :title="pageTitle">
    <AdBanner :ad_id="AdId.problemList_top_banner" />
    <ProbleList :list="problemListPageData" @clickItem="handleOpenDetail"/>
  </Layout>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {onLoad, onShareAppMessage, onShareTimeline} from "@dcloudio/uni-app";
import {useGlobalStore} from '@/stores/problem';
import Page from "@/const/pages";
import {defaultShare, AdId} from "@/const";
import AdBanner from '@/components/AdBanner/index.vue'

const store = useGlobalStore();

// 题目列表
const {problemListPageData} = store;
// 页面标题
const pageTitle = ref<string>("");

onLoad((options: undefined | {name?: string}) => {
  pageTitle.value = options?.name || "";
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