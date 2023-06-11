<template>
  <view class="tabBar">
    <view
      class="tabBarItem"
      v-for="(item, index) in props.tabBar"
      :key="item.key"
      @click="handleOpenPage(index)"
    >
      <image
        class="tabBarItemIcon"
        :src="index === props.selectIndex ? item.selectedIcon : item.icon"
      />
      <text
        class="tabBarItemText"
        :class="{ active: index === props.selectIndex }"
        >{{ item.name }}</text
      >
    </view>
  </view>
</template>

<script lang="ts" setup>
export interface iTabBarItem {
  key: string;
  name: string;
  icon: string;
  selectedIcon: string;
  title: string;
}
interface iPropsType {
  selectIndex: number;
  tabBar: iTabBarItem[];
}

const props = withDefaults(defineProps<iPropsType>(), {});
const $emit = defineEmits(["update:selectIndex"]);

// 切换tabBar
const handleOpenPage = (index: number) => {
  const { selectIndex, tabBar } = props;
  if (index !== selectIndex && tabBar[index])
    $emit("update:selectIndex", index);
};
</script>

<style lang="scss" scoped>
.tabBar {
  $h: 100rpx;
  display: flex;
  width: 100%;
  height: $h;
  border-top: 1rpx solid #eee;

  .tabBarItem {
    flex: 1;
    line-height: $h;
    text-align: center;
    font-size: 0;

    .tabBarItemIcon {
      $iconSize: calc($h / 2);
      $m: calc($h / 2 - $iconSize / 2 - $i-font-size-sm / 2);
      display: block;
      width: $iconSize;
      height: $iconSize;
      margin: $m auto;
    }

    .tabBarItemText {
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