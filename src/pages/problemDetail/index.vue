<template>
  <Layout>
    // #ifdef MP-WEIXIN
    <ad unit-id="adunit-9babcb790cec62f4"></ad>
    // #endif
    <view v-if="_problem === undefined"></view>
    <view v-else class="problem">
      <view class="title">{{ _problem?.title }}</view>
      <view class="tags">
        <view class="tagItem" v-for="tagItem in _problem?.tags" :key="tagItem">{{
          tagMnum[tagItem]
        }}</view>
      </view>
      <view class="answer">
        <view
          class="row"
          v-for="(item, index) in _problem?.answer"
          :key="index"
          >{{ item }}</view
        >
      </view>
    </view>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { onLoad } from "@dcloudio/uni-app";
import { iProblemItem } from "@/store/modules/problem";

const store = useStore();
const { problem, problemTagMnum: tagMnum } = store.state;
const _problem = ref<iProblemItem | undefined>(undefined);

onLoad(({ id }) => {
  const _id = Number(id);
  if (!Number.isInteger(_id)) {
    console.log("无效的id", id);
  } else {
    _problem.value = (problem as iProblemItem[]).find((item) => {
      return item.id === _id;
    });
    if (!_problem.value) console.log("无效的id", id);
  }
});
</script>

<style lang="scss" scoped>
.problem {
  padding: 30rpx;

  .title {
    font-size: 40rpx;
    font-weight: bold;
  }

  .tags {
    display: flex;
    padding: 10rpx 0;

    .tagItem {
      padding: 5rpx 10rpx;
      font-size: 24rpx;
      color: #777;
    }
  }

  .answer {
    $h: 60rpx;
    line-height: $h;
    font-size: 30rpx;
    color: #555;

    .row {
      width: 100%;
      min-height: $h;
    }
  }
}
</style>