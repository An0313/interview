<template>
  <view class="navTitle">
    NavTitle
  </view>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex'

const store = useStore()
const {systemInfo, navInfo} = store.state
console.log(systemInfo)
console.log(navInfo)
</script>

<style lang="scss" scoped>
.navTitle {

}
</style>
