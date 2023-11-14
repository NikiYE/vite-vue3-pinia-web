import { defineStore } from 'pinia';

// 第一个参数是应用程序中 store 的唯一 id

//name：一个字符串，必传项，该store的唯一id。
export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    isCollapsed: false, // 导航栏是否收缩的状态
  }),
  actions: {
    toggleNavigation() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
});
