<template>
  <view class="tabbar">
    <view
      class="tabbarItem"
      v-for="(item, index) in props.tabbar"
      :key="item.key"
      @click="handleOpenPage(index)"
    >
      <image
        class="tabbarItemIcon"
        :src="index === props.selectIndex ? item.selectedIcon : item.icon"
      />
      <text
        class="tabbarItemText"
        :class="{ active: index === props.selectIndex }"
        >{{ item.name }}</text
      >
    </view>
  </view>
</template>

<script lang="ts" setup>
interface iTabbarItem {
  key: string;
  name: string;
  icon: string;
  selectedIcon: string;
  title: string;
}
interface iPropsType {
  selectIndex: number;
  tabbar: iTabbarItem[];
}

const props = withDefaults(defineProps<iPropsType>(), {});
const $emit = defineEmits(["update:selectIndex"]);

// 切换tabbar
const handleOpenPage = (index: number) => {
  const { selectIndex, tabbar } = props;
  if (index !== selectIndex && tabbar[index])
    $emit("update:selectIndex", index);
};
</script>

<style lang="scss" scoped>
.tabbar {
  $h: 100rpx;
  display: flex;
  width: 100%;
  height: $h;
  border-top: 1rpx solid #eee;

  .tabbarItem {
    flex: 1;
    line-height: $h;
    text-align: center;
    font-size: 0;

    .tabbarItemIcon {
      $iconSize: calc($h / 2);
      $m: calc($h / 2 - $iconSize / 2 - $i-font-size-sm / 2);
      display: block;
      width: $iconSize;
      height: $iconSize;
      margin: $m auto;
    }

    .tabbarItemText {
      display: block;
      line-height: $i-font-size-sm;
      font-size: $i-font-size-sm;
      color: $i-text-color-grey;

      &.active {
        color: $i-text-color;
      }
    }
  }
}
</style>