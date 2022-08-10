<script setup lang="ts">
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
page {
  width: 100vw;
  min-height: 100vh;
}
.layout {
  &, view, uni-view {
    box-sizing: border-box;
  }
}
</style>
