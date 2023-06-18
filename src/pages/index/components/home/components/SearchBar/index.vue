<template>
  <view class="searchBar">
    <label class="laber">
      <input
        class="input"
        type="text"
        maxlength="10"
        confirm-type="search"
        placeholder="请输入搜索内容"
        @input="search"
        @confirm="handleSubmit"
      />
      <text class="result">共 {{ result.length }} 条</text>
    </label>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { iProblemItem } from "@/const/problem";
import { debounce, toast } from "@/utils";

interface iProps {
  list: iProblemItem[];
}

const props = defineProps<iProps>();
const $emit = defineEmits(["search"]);

const result = ref<iProblemItem[]>(props.list);

const search = debounce((e: any) => {
  const v = (e.detail.value || "").trim();
  result.value = props.list.filter((item) => item.title.includes(v));
}, 200);

const handleSubmit = () => {
  if (result.value.length) {
    $emit("search", result.value);
  } else {
    toast("暂无结果～");
  }
};
</script>

<style lang="scss" scoped>
.searchBar {
  $h: 120rpx;
  $label-h: 80rpx;
  $p: calc(($h - $label-h) / 2);
  width: 100%;
  height: $h;
  padding: $p 30rpx 0;
  background-color: $i-bg-color;

  .laber {
    display: flex;
    width: 100%;
    height: $label-h;
    padding: 0 50rpx;
    align-items: center;
    font-size: $i-font-size-base;
    color: $i-text-color;
    background-color: $i-bg-color-grey;
    border-radius: calc($label-h / 2);

    .input {
      flex: 1;
    }

    .result {
      width: 7em;
      text-align: center;
      overflow: hidden;
    }
  }
}
</style>