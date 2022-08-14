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
const { problem, page: Page } = store.state;

const problemList = ref<iProblemItem[]>([]);
const pageTitle = ref<string>("");

onLoad(({ id, name }) => {
  const _id = Number(id);
  if (!Number.isInteger(_id)) {
    console.log("无效的id", id);
  } else {
    problemList.value = problem.filter((item) => {
      return item.tags.indexOf(_id) !== -1;
    });
    pageTitle.value = name || "";
  }
});

// 打开详情页
const handleOpenDetail = (id: number) => {
  uni.navigateTo({
    url: `${Page.problemDetail}?id=${id}`,
  });
};
</script>

<style lang="scss" scoped>
.list {

 .listItem {
    padding: 20rpx 30rpx;
    font-size: 28rpx;
    color: #666;

    &:nth-child(odd) {
      background-color: #f1f1f1;
    }

    &:active {
      opacity: .5;
    }
  }
}
</style>