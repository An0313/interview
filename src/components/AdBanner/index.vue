<template>
  // #ifdef MP-WEIXIN
  <view v-if="props.ad_id && showBanner" :style="{height: bannerHeight}" class="banner">
    <ad :unit-id="props.ad_id" @error="adError"/>
  </view>
  // #endif
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {onLoad} from "@dcloudio/uni-app";

interface IProps {
  ad_id: string,
  height?: string
}

const props = withDefaults(defineProps<IProps>(), {height: '32vw'})

// 是否显示 banner
const showBanner = ref<boolean>(false)
// banner 高度
const bannerHeight = ref<string>(props.height)

onLoad(() => {
  if (!!props.ad_id) {
    bannerHeight.value = 'auto'
    showBanner.value = true
  }
})

// 广告错误处理
const adError = (e: any) => {
  console.error('error', e)
  showBanner.value = false
}
</script>


<style lang="scss" scoped>
.banner {
  overflow: hidden;
}
</style>