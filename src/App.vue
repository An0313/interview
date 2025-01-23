<script setup lang="ts">
import {onLaunch, onShow, onHide} from "@dcloudio/uni-app";
// import {wxCloudEnvId} from "@/const/env";
// import {getProblem} from './servers/problem'
import {useGlobalStore} from '@/stores/problem'

const store = useGlobalStore()

// 获取面试题、笔试题数据
// const initData = async () => {
//   getProblem().then(res => {
//     const {answerList, problem, problemSort, problemTag, problemTagMenu, homeMenu} = res.data || {}
//
//     if (answerList && problem && problemSort && problemTag && problemTagMenu && homeMenu) {
//       store.$patch({
//         answerList,
//         problem,
//         problemSort,
//         problemTag,
//         homeMenu,
//         problemTagMenu
//       })
//     }
//   })
// }

// declare wx:(an)
onLaunch(() => {
  console.log("App Launch");

  // #ifdef MP-WEIXIN
  // (uni as any).cloud.init({env: wxCloudEnvId}).then(() => {
  //   console.log('初始化成功')
  // });
  // #endif

  // initData()
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
