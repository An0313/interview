<template>
  <scroll-view class="layout" scroll-y>
    <NavTitle :title="props.title" />
    <view>
      <slot></slot>
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>

interface PropsType {
  title?: string
}
const props = defineProps<PropsType>()

</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
