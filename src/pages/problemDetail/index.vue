<template>
  <Layout>
    <view v-if="_problem === undefined"></view>
    <view v-else class="problem">
      <view class="title">{{ _problem?.title }}</view>
      <view class="tags">
        <view
          class="tagItem"
          v-for="tagItem in _problem?.tags"
          :key="tagItem"
          >{{ problemTagMnum[tagItem] }}</view
        >
      </view>
      // #ifdef MP-WEIXIN
      <ad unit-id="adunit-9babcb790cec62f4"></ad>
      // #endif
      <view class="answer">
        <view
          class="row"
          v-for="(item, index) in _problem?.answer"
          :key="index"
          >{{ item }}</view
        >
      </view>
    </view>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { iProblemItem, probleSort } from "@/const/problem";
import { problemTagMnum } from '@/const/problemTag'

const _problem = ref<iProblemItem | undefined>(undefined);

onLoad(({ sortId, pId }) => {
  const _pId = Number(pId);
  const pList = sortId && probleSort[sortId];
  if (!Number.isInteger(_pId) || pList === undefined) {
    console.log("无效的id", _pId, sortId);
  } else {
    _problem.value = (pList as iProblemItem[]).find((item) => {
      return item.id === _pId;
    });
    if (!_problem.value) console.log("无效的id", _pId);
  }
});
</script>

<style lang="scss" scoped>
.problem {
  padding: 30rpx;

  .title {
    text-align: center;
    font-size: $i-font-size-lg;
    font-weight: bold;
  }

  .tags {
    display: flex;
    padding: 10rpx 0;

    .tagItem {
      padding: 5rpx 10rpx;
      font-size: 24rpx;
      color: #777;
    }
  }

  .answer {
    $h: 60rpx;
    line-height: $h;
    font-size: 30rpx;
    color: #555;

    .row {
      width: 100%;
      min-height: $h;
    }
  }
}
</style>