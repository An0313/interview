<template>
  <Layout :title="pageTitle">
    <view v-if="problem === undefined" class="err">出错了～</view>
    <view v-else class="problem">
      <view class="content">
        <view class="title">{{ problem?.title }}</view>
        <view class="tags">
          {{ tags }}
        </view>
        // #ifdef MP-WEIXIN
        <ad unit-id="adunit-9babcb790cec62f4"></ad>
        // #endif
        <view class="answer">
          <text
            class="row"
            user-select
            v-for="(item, index) in problem?.answer"
            :key="index"
            >{{ item }}</text
          >
        </view>
      </view>
      <view class="footer">
        <view
          class="btn"
          hover-class="btn-hover"
          :class="{ disabled: currentIndex === 0 }"
          @click="handleChangeProble(currentIndex - 1)"
          >上一题</view
        >
        // #ifdef MP-WEIXIN
        <view class="btn share">
          分享
          <OpenBtn />
        </view>
        <view class="btn feedback">
          纠错
          <OpenBtn openType="contact" />
        </view>
        // #endif
        <view
          class="btn"
          :class="{ disabled: currentIndex === list.length - 1 }"
          @click="handleChangeProble(currentIndex + 1)"
          >下一题</view
        >
      </view>
    </view>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { onLoad, onShareAppMessage, onShareTimeline } from "@dcloudio/uni-app";
import { iProblemItem, problem as allProblem } from "@/const/problem";
import { problemTagMnum } from "@/const/problemTag";
import Page from "@/const/pages";
import { getCurrentinstance } from "@/util";

const list = ref<iProblemItem[]>([]);
const currentIndex = ref<number>(0);
const pageTitle = ref<string>("加载中");
const problem = ref<iProblemItem | null>(null);
const tags = ref<string>("");

onLoad(({ id }) => {
  // 分享
  if (id) {
    const _id = Number(id);
    const index = allProblem.findIndex((item) => item.id === _id);
    list.value = allProblem;
    currentIndex.value = index === -1 ? 0 : index;
  } else {
    const eventChannel = getCurrentinstance().getOpenerEventChannel();
    eventChannel.on("getListData", (data: any) => {
      list.value = data.list;
      currentIndex.value = data.index;
    });
  }
});

// 切换面试题
const handleChangeProble = (val: number) => {
  if (list.value[val]) currentIndex.value = val;
};

watchEffect(() => {
  const p = list.value[currentIndex.value];
  if (p) {
    problem.value = p;
    pageTitle.value = `第${currentIndex.value + 1}题`;
    tags.value = p.tags.map((item) => problemTagMnum[item]).join(" ・ ");
  }
});

// #ifdef MP-WEIXIN
onShareAppMessage(() => {
  return {
    title: problem.value?.title,
    path: `${Page.problemDetail}?id=${problem.value?.id}`,
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
.problem {
  display: flex;
  height: 100%;
  flex-direction: column;

  .content {
    flex: 1;
    padding: 30rpx;
    background-color: $i-bg-color-grey;
    overflow: hidden scroll;
    -webkit-overflow-scrolling: touch;

    .title {
      text-align: center;
      font-size: $i-font-size-lg;
      font-weight: bold;
    }

    .tags {
      display: flex;
      padding: 10rpx 0;
      justify-content: center;
      font-size: 24rpx;
      color: #777;
    }

    .answer {
      $h: 60rpx;
      padding-top: 30rpx;
      line-height: $h;
      font-size: 30rpx;
      color: #555;

      .row {
        display: block;
        width: 100%;
        min-height: $h;
      }
    }
  }

  .footer {
    $h: 80rpx;
    display: flex;
    width: 100%;
    height: $h;
    border-top: 1rpx solid $i-border-color;

    .btn {
      flex: 1;
      line-height: $h;
      text-align: center;
      font-size: $i-font-size-base;
      color: $i-text-color;

      &.disabled {
        color: $i-text-color-disable;
      }

      &.share,
      &.feedback {
        position: relative;
      }

      &.btn-hover {
        opacity: 0.5;
      }
    }
  }
}
</style>