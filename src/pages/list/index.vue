<template>
  <Layout :title="pageTitle">
    // #ifdef MP-WEIXIN
    <ad unit-id="adunit-5b18f0c9b3f1ad52"></ad>
    // #endif
    <view class="list" v-if="problemList.length">
      <view
        class="listItem"
        v-for="(item, index) in problemList"
        :key="item.id"
        @click="handleOpenDetail(item.id)"
      >
        {{ index + 1 }}、{{ item.title }}
      </view>
    </view>
    <Nodata v-else />
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "@/store";
import { onLoad } from "@dcloudio/uni-app";
import { iProblemItem } from "@/store/modules/problem";

const store = useStore();
const { probleSort, page: Page } = store.state;
// 题目列表
const problemList = ref<iProblemItem[]>([]);
// 页面标题
const pageTitle = ref<string>("");
// 面试题分类id
let sortId: null | string = null;

onLoad(({ id, name }) => {
  if (!Number.isInteger(Number(id))) {
    console.log("无效的id", id);
  } else {
    sortId = id as string;
    problemList.value = probleSort[id as string];
    pageTitle.value = name || "";
  }
});

/**
 * 打开详情页
 * @param pId 面试题id
 */
const handleOpenDetail = (pId: number): void => {
  uni.navigateTo({
    url: `${Page.problemDetail}?sortId=${sortId}&pId=${pId}`,
  });
};
</script>

<style lang="scss" scoped>
.list {
  .listItem {
    padding: 30rpx;
    font-size: $i-font-size-base;
    color: $i-text-color;

    &:nth-child(odd) {
      background-color: $i-bg-color-grey;;
    }

    &:active {
      opacity: 0.5;
    }
  }
}
</style>