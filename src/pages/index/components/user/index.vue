<template>
  <view class="user">
    <view class="userInfo"></view>
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
  </view>
</template>

<script lang="ts">
export default {};
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
    }

    .relative {
      position: relative;
    }
  }
}
</style>