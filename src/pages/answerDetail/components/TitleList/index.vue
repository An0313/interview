<template>
  <view class="titleList">
    <view class="moreBtn" @click="handleShowPopup">
      <image class="moreImg" :src="MORE_IMG" />
    </view>
    <view
      class="popup"
      :class="{ show: showPopup }"
      @click="handleHidePopup"
      @touchmove.stop.prevent="() => {}"
    >
      <view class="content" :class="{ show: showPopup }" @click.stop="() => {}">
        <view class="header">题 号</view>
        <view class="body" @click="handleChangeIndex">
          <view
            class="number"
            v-for="(item, index) in props.list"
            :key="index"
            :data-index="index"
            :class="{
              active: index === props.index,
              correct: item === answer[index].answer,
              wrong: item !== answer[index].answer && item !== undefined,
            }"
            >{{ index + 1 }}</view
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { answer } from "@/const/answer";
import MORE_IMG from "@/static/img/more";

interface PropsType {
  list: Array<number | undefined>;
  index: number;
}

const props = withDefaults(defineProps<PropsType>(), {});

const $emit = defineEmits(["change"]);

const showPopup = ref<boolean>(false);

const handleShowPopup = () => (showPopup.value = true);
const handleHidePopup = () => (showPopup.value = false);
const handleChangeIndex = (e: any) => {
  const { index } = e.target.dataset;

  if (index !== undefined && index !== props.index) $emit("change", index);
};

defineExpose({ handleShowPopup });
</script>

<style lang="scss" scoped>
$btn-zIndex: 10;
$popup-zIndex: calc($btn-zIndex + 1);
.moreBtn {
  $size: 80rpx;
  position: absolute;
  bottom: 100rpx;
  right: 10rpx;
  display: flex;
  width: $size;
  height: $size;
  justify-content: center;
  align-items: center;
  font-size: 0;
  background-color: $i-bg-color;
  border-radius: 50%;
  box-shadow: 0 0 5rpx $i-text-color-grey;
  z-index: $btn-zIndex;

  .moreImg {
    $i-size: calc($size / 100 * 61.8);
    width: $i-size;
    height: $i-size;
  }
}

.popup {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: $i-bg-color-mask;
  z-index: $popup-zIndex;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.25s;

  &.show {
    height: 100%;
    opacity: 1;
  }

  .content {
    $h: 600rpx;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -$h;
    display: flex;
    width: 100%;
    height: $h;
    flex-direction: column;
    transition: bottom 0.25s;
    background-color: $i-bg-color;
    border-radius: 30rpx 30rpx 0 0;

    &.show {
      bottom: 0;
    }
  }

  .header {
    $h: 100rpx;
    width: 100%;
    height: $h;
    line-height: $h;
    text-align: center;
    font-size: $i-font-size-lg;
    color: $i-text-color;
    border-bottom: 1rpx solid $i-border-color;
  }

  .body {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    background-color: $i-bg-color-grey;
    overflow: hidden scroll;
    -webkit-overflow-scrolling: touch;

    .number {
      $size: 95rpx;
      width: $size;
      height: $size;
      margin: 15rpx;
      line-height: $size;
      text-align: center;
      font-size: $i-font-size-sm;
      color: $i-text-color-grey;
      border: 1rpx solid $i-border-color;
      border-radius: 50%;

      &.correct {
        color: $i-text-color-inverse;
        background-color: #89916b;
      }

      &.wrong {
        color: $i-text-color-inverse;
        background-color: #8b6773;
      }

      &.active {
        box-shadow: 0 0 15rpx #666;
      }
    }
  }
}
</style>