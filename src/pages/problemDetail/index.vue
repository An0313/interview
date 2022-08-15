<template>
  <Layout :title="pageTitle">
    <view v-if="problem === undefined" class="err">出错了～</view>
    <view v-else class="problem">
      <view class="content">
        <view class="title">{{ problem?.title }}</view>
        <view class="tags">
          <view
            class="tagItem"
            v-for="tagItem in problem?.tags"
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
            v-for="(item, index) in problem?.answer"
            :key="index"
            >{{ item }}</view
          >
        </view>
      </view>
      <view class="footer">
        <view
          class="btn"
          :class="{ disabled: currentIndex === 0 }"
          @click="handleChangeProble(currentIndex - 1)"
          >上一题</view
        >
        <view
          class="btn"
          :class="{ disabled: currentIndex === list.length - 1 }"
          @click="handleChangeProble(currentIndex + 1)"
          >下一题</view
        >
      </view>
    </view>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { iProblemItem, probleSort } from "@/const/problem";
import { problemTagMnum } from "@/const/problemTag";

const list = ref<iProblemItem[]>([]);
const currentIndex = ref<number>(0);
const pageTitle = ref<string>("");
const problem = ref<iProblemItem | null>(null);

onLoad(({ sortId, index }) => {
  const _index = Number(index);
  const pList = sortId && probleSort[sortId];
  if (Number.isInteger(_index)) currentIndex.value = _index;
  if (pList && pList[_index]) list.value = pList;
});

// 切换面试题
const handleChangeProble = (val: number) => {
  if (list.value[val]) currentIndex.value = val;
};

watchEffect(() => {
  console.log('watchEffect')
  problem.value = list.value[currentIndex.value];
  pageTitle.value = `第${currentIndex.value + 1}题`;
});
</script>

<style lang="scss" scoped>
.problem {
  display: flex;
  height: 100%;
  flex-direction: column;

  .content {
    flex: 1;
    padding: 30rpx;
    background-color: $i-bg-color-grey;
    overflow: hidden scroll;

    .title {
      text-align: center;
      font-size: $i-font-size-lg;
      font-weight: bold;
    }

    .tags {
      display: flex;
      padding: 10rpx 0;

      .tagItem {
        padding: 20rpx 10rpx;
        font-size: 24rpx;
        color: #777;
      }
    }

    .answer {
      $h: 60rpx;
      padding-top: 30rpx;
      line-height: $h;
      font-size: 30rpx;
      color: #555;

      .row {
        width: 100%;
        min-height: $h;
      }
    }
  }

  .footer {
    $h: 80rpx;
    display: flex;
    width: 100%;
    height: $h;
    border-top: 1rpx solid $i-border-color;

    .btn {
      flex: 1;
      line-height: $h;
      text-align: center;
      font-size: $i-font-size-base;
      color: $i-text-color;

      &.disabled {
        color: $i-text-color-disable;
      }
    }
  }
}
</style>