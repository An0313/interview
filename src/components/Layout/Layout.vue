<template>
  <scroll-view class="layout" scroll-y>
    <NavTitle />
    <view>
      <slot></slot>
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
