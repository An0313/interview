<template>
  <DetailLayout
    type="answer"
    :list="list"
    :collectList="collectList"
    :index="currentIndex"
    @change="changeIndex"
  >
    <view class="content" v-if="problem">
      <view class="scroll">
        <view class="title">题目：{{ problem?.title }}</view>
        <mp-html :content="code" />
        <view class="option">
          <view
            class="item"
            v-for="(item, index) in problem.option"
            :class="{
              correct:
                (currentUserValue === problem.answer &&
                  index === currentUserValue) ||
                (currentUserValue !== problem.answer &&
                  currentUserValue !== undefined &&
                  index === problem.answer),
              wrong:
                currentUserValue === index &&
                currentUserValue !== undefined &&
                currentUserValue !== problem.answer,
            }"
            :key="index"
            @click="handleSelectAnswer(index)"
            >选项{{ index + 1 }}： {{ item }}</view
          >
        </view>
        <view class="explain" v-show="currentUserValue !== undefined">
          <view>解析：</view>
          <view
            class="row"
            v-for="(item, index) in problem.explain"
            :key="index"
            >{{ item }}</view
          >
        </view>
        <textarea
          v-if="isDev"
          name=""
          id=""
          cols="300"
          rows="100"
          maxlength="10000"
          @input="log"
        ></textarea>
      </view>

      <TitleList
        ref="titleListRef"
        :list="userValue"
        :index="currentIndex"
        @change="changeIndex"
      />
    </view>
  </DetailLayout>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import { onLoad, onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";
import TitleList from "./components/TitleList/index.vue";
import { useCounterStore } from "@/stores/problem";
import Pages from "@/const/pages";
import { isDev } from "@/const/env";
import { toast } from "@/utils";
import {
  RECORD_WRONG_KEY,
  RECORD_PRACTICE_KEY,
  addRecord,
  delRecord,
} from "./utils";

type iUserValue = number | undefined;

const store = useCounterStore();
// 全部笔试题列表
const answer = computed(() => store.answerList)
// 当前页面的题目列表
const list = ref<IProblem.answerList>(JSON.parse(JSON.stringify(store.answerListPageData)))
// list 的下标，也就是当前题目的下标
const currentIndex = ref<number>(0);
// 当前页面显示的面试题
const problem = ref<IProblem.answerListItem | null>(null);
// 当前笔试题的代码
const code = ref<string>("");
// 收藏的笔试题列表
const collectList = computed(() => store.collectAnswerList);
// 用户选择的答案list
const userValue = ref<Array<number | undefined>>(list.value.map(() => undefined));
// 当前题目选择的答案
const currentUserValue = ref<iUserValue>(undefined);
// 标题
const titleListRef = ref<any>(null);

onLoad(({ index, id }) => {
  // 分享
  if (id) {
    const _id = Number(id);
    const index = answer.value.findIndex((item) => item.id === _id);
    list.value = JSON.parse(JSON.stringify(answer));
    userValue.value = answer.value.map(() => undefined);
    currentIndex.value = index === -1 ? 0 : index;
  } else if (index) {
    currentIndex.value = Number(index);
  }
});

const handleSelectAnswer = (index: number): void => {
  const i = currentIndex.value;
  if (userValue.value[i] === undefined) {
    const { answer: _answer, id: _id } = problem.value as IProblem.answerListItem;

    userValue.value[i] = index;
    currentUserValue.value = index;

    // 添加到练习记录
    addRecord(RECORD_PRACTICE_KEY, _id);

    // 回答正确
    if (_answer === index) {
      // 如果在错题库中 从错题库中删除
      delRecord(RECORD_WRONG_KEY, _id);
    } else {
      // 回答错误
      // 放入错题库
      addRecord(RECORD_WRONG_KEY, _id);
    }

    if (!userValue.value.includes(undefined)) {
      toast("练习结束");
      titleListRef.value?.handleShowPopup();
    }
  }
};

// 切换题目
const changeIndex = (index: number) => {
  currentIndex.value = index;
  // 触发 watchEffect
};

const log = (e) => {
  console.log(JSON.stringify(e.detail.value.replace(/   */g, " ")));
};

watchEffect(() => {
  const i = currentIndex.value;
  const p = list.value[i] as IProblem.answerListItem;

  if (p) {
    problem.value = p;
    code.value = `<pre><code class="language-javascript">${p?.code}</code></pre>`;
    currentUserValue.value = userValue.value[i];
  }
});

// #ifdef MP-WEIXIN
onShareAppMessage(() => {
  return {
    title: problem.value?.title,
    path: `${Pages.answerDetail}?id=${problem.value?.id}`,
  };
});
onShareTimeline(() => {
  return {
    title: problem.value?.title,
    query: `id=${problem.value?.id}`,
  };
});
// #endif
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 30rpx;
  background-color: $i-bg-color-grey;
  overflow: hidden;
  position: relative;

  .scroll {
    height: 100%;
    overflow: hidden scroll;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .title {
    text-align: left;
    font-size: $i-font-size-lg;
    color: $i-text-color;
  }

  .option {
    $h: 80rpx;

    .item {
      width: 100%;
      height: $h;
      margin: 15rpx 0;
      padding: 0 30rpx;
      line-height: $h;
      font-size: $i-font-size-sm;
      color: $i-text-color-grey;
      border: 1rpx solid $i-border-color;
      border-radius: 10rpx;

      &.correct {
        color: #fff;
        background-color: #89916b;
        border-color: $i-bg-color-grey;
      }

      &.wrong {
        color: #fff;
        background-color: #8b6773;
        border-color: $i-bg-color-grey;
      }
    }
  }

  .explain {
    margin-top: 30rpx;
    font-size: $i-font-size-sm;
    color: $i-text-color-grey;

    .row {
      padding: 10rpx 0;
    }
  }
}
</style>