<template>
  <view class="tabbar">
    <view
      class="tabbarItem"
      v-for="(item, index) in tabbar"
      :key="item.name"
      @click="handleOpenPage(index)"
    >
      <image
        class="tabbarItemIcon"
        :src="item.name === select ? item.selectedIcon : item.icon"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore} from '@/store'
import { onLoad } from "@dcloudio/uni-app";
import homeIcon from "@/static/img/tabbar/home";
import homeFillIcon from "@/static/img/tabbar/home-fill";
import searchIcon from "@/static/img/tabbar/search";
import searchFillIcon from "@/static/img/tabbar/search-fill";
import companyIcon from "@/static/img/tabbar/company";
import companyFillIcon from "@/static/img/tabbar/company-fill";
import userIcon from "@/static/img/tabbar/user";
import userFillIcon from "@/static/img/tabbar/user-fill";

const store = useStore()
const Page = store.state.page

const tabbar = [
  {
    name: "home",
    page: Page.home,
    icon: homeIcon,
    selectedIcon: homeFillIcon,
  },
  {
    name: "search",
    page: Page.search,
    icon: searchIcon,
    selectedIcon: searchFillIcon,
  },
  {
    name: "company",
    page: Page.company,
    icon: companyIcon,
    selectedIcon: companyFillIcon,
  },
  {
    name: "user",
    page: Page.user,
    icon: userIcon,
    selectedIcon: userFillIcon,
  },
];

// 当前选择的
const select = ref<string>(tabbar[0].name);

onLoad(() => {
  const r = getCurrentPages();
  const path = r[r.length - 1].route;

  select.value = (tabbar.find((item) => item.page === `/${path}`) as any).name;
});

// 切换tabbar
const handleOpenPage = (index: number) => {
  const { name, page } = tabbar[index];
  if (name !== select.value) {
    uni.reLaunch({
      url: page,
    });
  }
};
</script>

<style lang="scss" scoped>
.tabbar {
  $h: 100rpx;
  display: flex;
  width: 100%;
  height: $h;
  border-top: 1rpx solid #eee;

  .tabbarItem {
    flex: 1;
    line-height: $h;
    text-align: center;
    font-size: 0;

    .tabbarItemIcon {
      $iconSize: 70rpx;
      width: $iconSize;
      height: $iconSize;
      vertical-align: middle;
    }
  }
}
</style>