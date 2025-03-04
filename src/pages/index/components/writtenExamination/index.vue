<template>
  <view class="writtenExamination">
    <AdBanner :ad_id="AdId.writtenExamination_top_banner" />
    <view class="answer">
      <view
        class="startBtn"
        hover-class="hover"
        v-for="(item, index) in answerBtn"
        :key="item.key"
        @click="handleOpenDetail(index)"
      >
        <text>{{ item.name }}</text>
        <text class="sub" v-if="item.sub">{{ item.sub }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Pages from "@/const/pages";
import {AdId} from "@/const";
import AdBanner from "@/components/AdBanner/index.vue";
import { useGlobalStore } from '@/stores/problem';
import { toast } from "@/utils";
import {
  getRecord,
  RECORD_PRACTICE_KEY,
  RECORD_WRONG_KEY,
} from "@/pages/answerDetail/utils";

enum answerBtnKey {
  start,
  random,
  error,
  practice,
  collect,
}

interface iAnswerBtnItem {
  key: answerBtnKey;
  name: string;
  sub?: string;
}

const store = useGlobalStore();

const answer = computed<IProblem.answerList>(() => store.answerList)

const collectList = computed(() => store.collectAnswerList);
const answerBtn: iAnswerBtnItem[] = [
  {
    key: answerBtnKey.start,
    name: "顺序练习",
  },
  {
    key: answerBtnKey.random,
    name: "随机练习",
  },
  {
    key: answerBtnKey.practice,
    name: "未做练习",
  },
  {
    key: answerBtnKey.error,
    name: "错题练习",
  },
  {
    key: answerBtnKey.collect,
    name: "收藏练习",
  },
];

const handleOpenDetail = (index: number): void => {
  const { key } = answerBtn[index];
  let list;

  switch (key) {
    case answerBtnKey.collect:
      list = answer.value.filter((item) => collectList.value.includes(item.id));
      break;

    case answerBtnKey.random:
      list = answer.value.sort(() => Math.random() - 0.5);
      break;

    case answerBtnKey.error:
      list = answer.value.filter((item) =>
        getRecord(RECORD_WRONG_KEY).includes(item.id)
      );
      break;

    case answerBtnKey.practice:
      list = answer.value.filter((item) =>
        !getRecord(RECORD_PRACTICE_KEY).includes(item.id)
      );
      break;

    default:
      list = answer.value;
      break;
  }

  if (!list || list.length <= 0) toast("暂无习题");
  else {
    store.setAnswerListPageData(list)
    let url = Pages.answerDetail;

    uni.navigateTo({
      url,
    });
  }
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