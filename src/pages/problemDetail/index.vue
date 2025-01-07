<template>
  <DetailLayout
      :collectList="collectList"
      :index="currentIndex"
      :list="list"
      type="problem"
      @change="changeIndex"
  >
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
            v-for="(item, index) in problem?.answer.split('\n')"
            :key="index"
            class="row"
            user-select
        >{{ item }}
        </text
        >
      </view>
    </view>
  </DetailLayout>
</template>

<script lang="ts" setup>
import {ref, watchEffect, computed} from "vue";
import {onLoad, onShareAppMessage, onShareTimeline} from "@dcloudio/uni-app";
import DetailLayout from '@/components/DetailLayout/DetailLayout.vue'
import Page from "@/const/pages";
import {useGlobalStore} from '@/stores/problem'

const store = useGlobalStore();

const {problemListPageData, problemTagMenu, problem: allProblem} = store
// 面试题列表
const list = ref<IProblem.item[]>([]);
// 当前面试题
const problem = ref<IProblem.item | null>(null);
const collectList = computed(() => store.collectList);
// 当前查看面试题的index
const currentIndex = ref<number>(0);
// 当前面试题的标签
const tags = ref<string>("");

onLoad(({id, index}) => {
  // 分享
  if (id) {
    const _id = Number(id);
    const index = allProblem.findIndex((item) => item.id === _id);
    list.value = allProblem;
    currentIndex.value = index === -1 ? 0 : index;
  } else if (index) {
    currentIndex.value = Number(index);
    list.value = problemListPageData
  }
});

const changeIndex = (val: number) => {
  currentIndex.value = val;
  tags.value = list.value[val].tags
      .map((item) => problemTagMenu[item])
      .join(" ・ ");
};

watchEffect(() => {
  const index = currentIndex.value;
  const p = list.value[index];
  if (p) {
    problem.value = p;
    tags.value = p.tags.map((item) => problemTagMenu[item]).join(" ・ ");
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
</style>