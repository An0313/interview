<template>
  <view class="layout" scroll-y :style="{ paddingBottom: `${bottomLift}px` }">
    <NavTitle :title="props.title" />
    <view class="content">
      <slot></slot>
    </view>
    <!-- <Tabbar v-if="props.showTabbar" /> -->
  </view>
</template>

<script lang="ts" setup>
import { bottomLift } from "@/const";

interface PropsType {
  title?: string;
  showTabbar?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  showTabbar: false,
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;

  .content {
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
