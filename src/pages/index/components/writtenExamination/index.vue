<template>
  <view class="writtenExamination">
    // #ifdef MP-WEIXIN
    <ad unit-id="adunit-01645eb392428bf4"></ad>
    // #endif
    <view class="answer">
      <view
        class="startBtn"
        hover-class="hover"
        v-for="(item, index) in answerBtn"
        :key="item.key"
        @click="handleOpenDefail(index)"
      >
        <text>{{ item.name }}</text>
        <text class="sub" v-if="item.sub">{{ item.sub }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { answer, iAnswerListItem } from "@/const/answer";
import Pages from "@/const/pages";

enum answerBtnKey {
  order,
  random,
  error,
  collect,
}

interface iAnswerBtnItem {
  key: answerBtnKey;
  name: string;
  sub?: string;
  list: iAnswerListItem[];
}

const startIndex = 0;
const answerBtn: iAnswerBtnItem[] = [
  {
    key: answerBtnKey.order,
    name: "顺序练习",
    sub: `(0/${answer.length})`,
    list: answer,
  },
  {
    key: answerBtnKey.random,
    name: "随机练习",
    list: answer.sort(() => Math.random() - 0.5),
  },
  {
    key: answerBtnKey.error,
    name: "错题练习",
    list: [],
  },
  {
    key: answerBtnKey.collect,
    name: "收藏练习",
    list: [],
  },
];

const handleOpenDefail = (index: number): void => {
  const { key, list } = answerBtn[index];
  let url = Pages.answerDetail;
  if (key === answerBtnKey.order && startIndex > 0)
    url += `?index=${startIndex}`;
  uni.navigateTo({
    url,
  });
};
</script>

<style lang="scss" scoped>
.writtenExamination {
  display: flex;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  overflow: hidden scroll;
  -webkit-overflow-scrolling: touch;

  .answer {
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .startBtn {
      $h: 80rpx;
      width: 61.8%;
      height: $h;
      margin: 40rpx 0;
      line-height: $h;
      text-align: center;
      font-size: $i-font-size-lg;
      color: #fff;
      border-radius: 20rpx;

      &:nth-child(1) {
        background-color: #b24057;
      }

      &:nth-child(2) {
        background-color: #bf6074;
      }

      &:nth-child(3) {
        background-color: #cd5076;
      }

      &:nth-child(4) {
        background-color: #da738a;
      }

      &.hover {
        opacity: 0.5;
      }

      .sub {
        padding-left: 10rpx;
        font-size: $i-font-size-sm;
      }
    }
  }
}
</style>