<template>
  <Layout>
    <view class="tags">
      <view class="tagItem" v-for="item in tags" :key="item.id">
        <image class="tagIcon" :src="item.icon" />
        <text>{{ item.name }}</text>
      </view>
    </view>
  </Layout>
</template>

<script setup lang="ts">
import { tags } from "@/const/tag";
</script>

<style lang="scss" scoped>
.tags {
  $w: 750rpx;
  display: flex;
  width: $w;
  flex-wrap: wrap;

  .tagItem {
    $size: calc($w / 3);
    $border: 1rpx solid #eee;
    display: flex;
    width: $size;
    height: $size;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: $border;
    border-right: $border;
    overflow: hidden;

    &:nth-child(3n) {
      border-right: none;
    }

    .tagIcon {
      $iconSize: calc($size / 2);
      width: $iconSize;
      height: $iconSize;
    }
  }
}
</style>
