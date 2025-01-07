<template>
  <Layout :title="pageTitle">
    <view v-if="!props.list[props.index]" class="err">出错了～</view>
    <view v-else class="problem">
      <slot></slot>
      <view class="footer">
        <view
            class="btn"
            hover-class="btn-hover"
            :class="{ disabled: props.index === 0 }"
            @click="handleChangeProblem(props.index - 1)"
        >上一题
        </view
        >

        <view
            class="btn"
            hover-class="btn-hover"
            @click="handleCollect"
            :class="{ collect: isCollect }"
        >
          {{ `${isCollect ? "已" : ""}收藏` }}
        </view>
        // #ifdef MP-WEIXIN
        <view class="btn share">
          分享
          <OpenBtn/>
        </view>
        <view class="btn feedback">
          纠错
          <OpenBtn openType="contact"/>
        </view>
        // #endif
        <view
            class="btn"
            :class="{ disabled: props.index === props.list.length - 1 }"
            @click="handleChangeProblem(props.index + 1)"
        >下一题
        </view
        >
      </view>
    </view>
  </Layout>
</template>

<script lang="ts" setup>
import {ref, watchEffect} from "vue";
import {useGlobalStore} from "@/stores/problem";

enum defaultType {
  problem = "problem",
  answer = "answer",
}

interface PropsType {
  list: IProblem.item[];
  type: string;
  index?: number;
  collectList: number[]
}

const props = withDefaults(defineProps<PropsType>(), {
  index: 0,
});

const $emit = defineEmits(["change"]);

const store = useGlobalStore();


// 当前查看的面试题是否收藏
const isCollect = ref<boolean>(false);
// 收藏面试题
const handleCollect = async () => {
  const cl = [...props.collectList];
  const {id} = props.list[props.index];
  const _isCollect = isCollect.value;

  _isCollect ? cl.splice(cl.indexOf(id), 1) : cl.push(id);
  store[
      props.type === defaultType.problem
          ? "setCollectList"
          : "setCollectAnswerList"](cl)
  isCollect.value = !_isCollect;
};



// 切换面试题
const handleChangeProblem = (val: number) => {
  if (props.list[val]) $emit("change", val);
};



// 页面标题（当前面试题的title）
const pageTitle = ref<string>("加载中");

watchEffect(() => {
  const index = props.index;
  const p = props.list[index];
  if (p) {
    pageTitle.value = `第${index + 1}题`;
    isCollect.value = props.collectList.includes(p.id);
  }
});
</script>

<style lang="scss" scoped>
.problem {
  display: flex;
  height: 100%;
  flex-direction: column;

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

      &.collect {
        color: $i-color-warning;
      }
    }
  }
}
</style>