<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { wxCloudEnvId } from "@/const/env";

// declare wx:(an)
onLaunch(() => {
  console.log("App Launch");

  // #ifdef MP-WEIXIN
  (uni as any).cloud.init({ env: wxCloudEnvId }).then(() => {
    console.log('初始化成功')
  });
  // #endif
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

view,
scroll-view,
label {
  box-sizing: border-box;
}
</style>
