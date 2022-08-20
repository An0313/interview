<template>
  <button class="shareBtn" :open-type="prosp.openType"></button>
</template>

<script lang="ts" setup>
interface iProps {
  openType?: 'share' | 'contact' | 'feedback';
}

const prosp = withDefaults(defineProps<iProps>(), {
  openType: 'share',
});
</script>

<style lang="scss" scoped>
.shareBtn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>