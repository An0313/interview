<template>
  <Layout title="'Layout'">
    <view class="list">
      <view
        class="listItem"
        v-for="(item, index) in problemList"
        :key="item.id"
      >
        <view class="title">{{ index + 1 }} {{ item.title }}</view>
        <view class="tags">
          <view class="tagItem" v-for="tagItem in item.tags" :key="tagItem">{{
            tagMnum[tagItem]
          }}</view>
        </view>
      </view>
    </view>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { problem } from "@/const/problem";
import { tagMnum } from "@/const/tag";

const problemList = ref<any[]>([]);

onLoad(({ id }) => {
  console.log(id);
  const _id = Number(id);
  if (!Number.isInteger(_id)) {
    console.log("无效的id", id);
  } else {
    problemList.value = problem.filter((item) => {
      return item.tags.indexOf(_id) !== -1;
    });
  }
});
</script>

<style lang="scss" scoped>
.list {
  padding: 30rpx;

  .listItem {
    padding: 20rpx 0;
    border-bottom: 1rpx solid #eee;

    .title {
      margin-bottom: 10rpx;
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
    }

    .tags {
      display: flex;

      .tagItem {
        padding: 5rpx 10rpx;
        font-size: 24rpx;
        color: #777;
      }
    }
  }
}
</style>