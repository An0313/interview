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
import { computed } from "vue";
import { answer, iAnswerListItem } from "@/const/answer";
import Pages from "@/const/pages";
import { useStore } from "@/store";
import { json } from "stream/consumers";

enum answerBtnKey {
  start,
  order,
  random,
  error,
  collect,
}

interface iAnswerBtnItem {
  key: answerBtnKey;
  name: string;
  sub?: string;
  // list: iAnswerListItem[];
}

const store = useStore();
const startIndex = 0;

const collectList = computed(() => store.state.collectAnswerList);
const answerBtn: iAnswerBtnItem[] = [
  // {
  //   key: answerBtnKey.order,
  //   name: "顺序练习",
  //   sub: `(0/${answer.length})`,
  //   list: answer,
  // },
  // {
  //   key: answerBtnKey.random,
  //   name: "随机练习",
  //   list: answer.sort(() => Math.random() - 0.5),
  // },
  // {
  //   key: answerBtnKey.random,
  //   name: "未做练习",
  //   list: answer,
  // },
  // {
  //   key: answerBtnKey.error,
  //   name: "错题练习",
  //   list: answer,
  // },
  {
    key: answerBtnKey.start,
    name: "开始练习",
    // list: answer,
  },
  {
    key: answerBtnKey.collect,
    name: "收藏练习",
    // list: computed(() =>
    //   answer.filter((item) => store.state.collectAnswerList.includes(item.id))
    // ).value,
  },
];

const handleOpenDefail = (index: number): void => {
  const { key } = answerBtn[index];
  let list;

  switch (key) {
    case answerBtnKey.start:
      list = answer;
      break;
    case answerBtnKey.collect:
      list = answer.filter((item) => collectList.value.includes(item.id));
      break;

    default:
      break;
  }
  store.dispatch("setState", { answerList: list });
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
      margin: 35rpx 0;
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

      &:nth-child(5) {
        background-color: #cb7888;
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