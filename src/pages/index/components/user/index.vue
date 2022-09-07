<template>
  <view class="user">
    <view class="userInfo"></view>
    <view class="list">
      <view class="item" @click="handleViewCollect"> 
        我的收藏
        <text class="tips">（本地存储）</text>
      </view>
    </view>
     // #ifdef MP-WEIXIN
    <view class="list">
      <view class="item relative">
        联系我们
        <OpenBtn openType="contact"></OpenBtn>
      </view>
      <view class="item relative">
        问题反馈
        <OpenBtn openType="feedback"></OpenBtn>
      </view>
    </view>
     // #endif
  </view>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";
import { problem } from "@/const/problem";
import Pages from "@/const/pages";

const store = useStore();
const collectList = computed(() => store.state.collectList);

const handleViewCollect = () => {
  store.dispatch(
    "setProbleList",
    problem.filter((item) => collectList.value.includes(item.id))
  );
  uni.navigateTo({
    url: `${Pages.probleList}?name=我的收藏`,
  });
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  min-height: 100%;
  background-color: $i-bg-color-grey;

  .userInfo {
    width: 100%;
    height: 30rpx;
  }

  .list {
    width: 690rpx;
    margin: 30rpx auto;
    background-color: $i-bg-color;
    border-radius: 20rpx;

    .item {
      $h: 80rpx;
      height: $h;
      line-height: $h;
      padding: 0 30rpx;
      font-size: $i-font-size-base;
      color: $i-text-color;
      border-bottom: 1rpx solid $i-border-color;

      &:last-child {
        border: none;
      }

      .tips {
        font-size: $i-font-size-sm;
        color: $i-text-color-grey;
      }
    }

    .relative {
      position: relative;
    }
  }
}
</style>