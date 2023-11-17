<template>
  <div v-if="isShow" class="loading_container">
    <div class="loader">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g stroke="currentColor"><circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3"><animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"/><animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"/></circle><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
      <div class="loading">加载中</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isShow = ref<boolean>(false);
const show = () => (isShow.value = true);
const hide = () => (isShow.value = false);

defineExpose({
  show,
  hide,
  isShow,
});
</script>

<style scoped lang="scss">
.loading_container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.8);
  z-index: 1000;
}
.loader {
  text-align: center;
  position: relative;
  color: var(--color-deep);
}

</style>


