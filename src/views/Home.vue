<template>
<div class="container">
  <SideBar />
  <div class="main">
    <div style="padding-top: 65px;">
      <router-view />
  <div v-loading="isLoading">
    <!-- 这里是你的表格或者其他内容 --><HelloWorld msg="This is HelloWorld" />
  </div>
      
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

// 你可以根据需要更改isLoading的值来控制Loading效果的显示与隐藏
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
  display: flex;
}
.main{
  width: 100%;
  overflow: auto;
  position: relative;
}
</style> 