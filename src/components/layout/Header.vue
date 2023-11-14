<template>
  <div class="header" :style="{ padding: headerPadding }">
    <div class="search_box">
      <input class="search_header" type="text">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuoxiao"></use>
      </svg>
    </div>
    <div>
      <zj-button>primary</zj-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNavigationStore } from '../../store/navigationStore';

const navigationStore = useNavigationStore();

const headerPadding = computed(() => { 
  return navigationStore.isCollapsed ? '0 15px 0 80px':'0 15px 0 315px'
})

</script>

<style lang="scss" scoped>
.search_box{
  position: relative;
  input{
    padding: 10px;
    outline: none;
    &:active,&:focus{
      border: 1px solid var(--color)
    }
  }
  .icon{
    position: absolute;
    right: 20px;
    top: 10px;
    color: var(--color-light);
    font-size:20px;
  }
}
.search_header{
  width: 450px;
  height: 40px;
  line-height: 40px;
  background-color: var(--color-lightest);
  border: 1px solid var(--color-lighter);
  border-radius: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  height: 65px;
  width: 100%;  
  z-index: 500;
  background: #fff;
  padding: 0 15px 0 315px;
  border-bottom: 1px solid var(--color-lighter);
  transition: var(--transition-padding) ;
}
</style>