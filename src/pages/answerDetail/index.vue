<template>
  <DetailLayout
    type="answer"
    :list="list"
    :collectList="collectList"
    :index="currentIndex"
    @change="changeIndex"
  >
    <view class="content" v-if="problem">
      <view class="title">题目：{{ problem?.title }}</view>
      <mp-html :content="code" />
      <view class="option">
        <view
          class="item"
          v-for="(item, index) in problem.option"
          :class="{
            correct:
              currentUserValue === problem.answer && index === currentUserValue,
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
      <view
        class="explain"
        v-if="
          currentUserValue !== undefined && currentUserValue !== problem.answer
        "
      >
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
  </DetailLayout>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import { onLoad, onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";
import { useStore } from "@/store";
import { answer, iAnswerListItem } from "@/const/answer";
import Pages from "@/const/pages";
import { isDev } from "@/const/env";
import { toast } from "@/util";

const store = useStore();
const list = ref<iAnswerListItem[]>(store.state.answerList);
const collectList = computed(() => store.state.collectAnswerList);
const currentIndex = ref<number>(0);
const problem = ref<iAnswerListItem | null>(null);
const code = ref<string>("");
const userValue: number[] = [];
const currentUserValue = ref<number | undefined>(undefined);

onLoad(({ index, id }) => {
  // 分享
  if (id) {
    const _id = Number(id);
    const index = answer.findIndex((item) => item.id === _id);
    list.value = answer;
    currentIndex.value = index === -1 ? 0 : index;
  } else if (index) {
    currentIndex.value = Number(index);
  }
});

const handleSelectAnswer = (index: number): void => {
  if (userValue[currentIndex.value] === undefined) {
    const { answer } = problem.value as iAnswerListItem;

    userValue[currentIndex.value] = index;
    currentUserValue.value = index;
    if (answer === index) {
      console.log("回答正确");
      toast("练习结束", () => {
        uni.navigateBack();
      });
      // 下一题
      // 最后一题进入结果页
    } else {
      console.log("回答错误");
      // 放入错题库
      // 显示解析
    }
  }
};

const changeIndex = (index: number) => {
  currentIndex.value = index;
};

const log = (e) => {
  console.log(JSON.stringify(e.detail.value));
};

watchEffect(() => {
  const i = currentIndex.value;
  const p = list.value[i] as iAnswerListItem;

  if (p) {
    problem.value = p;
    code.value = `<pre><code class="language-javascript">${p?.code}</code></pre>`;
    currentUserValue.value = userValue[i];
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
  overflow: hidden scroll;
  -webkit-overflow-scrolling: touch;

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