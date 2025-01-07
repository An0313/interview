<template>
  <view class="probleList">
    <view class="list" v-if="prosp.list?.length">
      <view
        class="listItem"
        hover-class="listItem-hover"
        v-for="(item, index) in prosp.list"
        :key="item.id"
        @click="handleClick(index)"
      >
        {{ index + 1 }}、{{ item.title }}
      </view>
    </view>
    <Nodata v-else />
  </view>
</template>

<script lang="ts" setup>
interface iProps {
  list: IProblem.item[];
}

const prosp = withDefaults(defineProps<iProps>(), {});
const $emit = defineEmits(["clickItem"]);

const handleClick = (index: number): void => {
  $emit("clickItem", index);
};
</script>

<style lang="scss" scoped>
.list {
  .listItem {
    padding: 30rpx;
    font-size: $i-font-size-base;
    color: $i-text-color;

    &:nth-child(odd) {
      background-color: $i-bg-color-grey;
    }

    &.listItem-hover {
      opacity: 0.5;
    }
  }
}
</style>