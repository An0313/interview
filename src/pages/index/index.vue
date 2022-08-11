<template>
  <Layout showTabbar>
    // #ifdef MP-WEIXIN
    <ad unit-id="adunit-c05ae012df7980d9"></ad>
    // #endif
    <view class="tags">
      <view
        class="tagItem"
        v-for="(item, index) in tags"
        :key="item.id"
        @click="handleOpenList(index)"
      >
        <image class="tagIcon" :src="item.icon" />
        <text>{{ item.name }}</text>
      </view>
    </view>
  </Layout>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const { page: Page, problemTag: tags } = store.state;
const handleOpenList = (i: number) => {
  const { id, name } = tags[i];
  uni.navigateTo({
    url: `${Page.list}?id=${id}&name=${name}`,
  });
};
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
    font-size: 30rpx;
    color: #333;
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
