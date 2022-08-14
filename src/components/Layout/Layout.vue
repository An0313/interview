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
import { onShareAppMessage } from "@dcloudio/uni-app";
import { useStore } from "@/store";
import { appName } from "@/const";
interface iShareMessage {
  title: string;
  path: string;
  imageUrl?: string;
}

interface PropsType {
  title?: string;
  showTabbar?: boolean;
  shareMessage?: iShareMessage;
}
const store = useStore();
const { bottomLift, page } = store.state;

const defaultShareMessage: iShareMessage = {
  title: appName,
  path: page.index,
};
const props = withDefaults(defineProps<PropsType>(), {
  showTabbar: false,
});

// uni.showShareMenu({})
onShareAppMessage(() => props.shareMessage || defaultShareMessage);
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
