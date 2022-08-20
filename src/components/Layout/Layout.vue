<template>
  <view class="layout" scroll-y :style="{ paddingBottom: `${bottomLift}px` }">
    <NavTitle v-if="props.showNavBar" :title="props.title" />
    <view class="content">
      <slot></slot>
    </view>
    <slot name="footer"></slot>
  </view>
</template>

<script lang="ts" setup>
import { bottomLift } from "@/const";

interface PropsType {
  title?: string;
  showNavBar?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  showNavBar: true,
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

    > :deep(view) {
      height: 100%;
    }
  }
}
</style>
