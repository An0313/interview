<template>
  <view class="tabbar">
    <view
      class="tabbarItem"
      v-for="(item, index) in props.tabbar"
      :key="item.name"
      @click="handleOpenPage(index)"
    >
      <image
        class="tabbarItemIcon"
        :src="index === props.selectIndex ? item.selectedIcon : item.icon"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
interface iTabbarItem {
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
      $iconSize: 60rpx;
      width: $iconSize;
      height: $iconSize;
      vertical-align: middle;
    }
  }
}
</style>