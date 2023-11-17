<template>
  
  <header :style="{ left: headerLeft,padding: headerPadding }">
  <!-- <header> -->
    <div class="header-left">
      <div class="search-box" v-if="!hideSearch">
        <input class="search-header" type="text"
               v-model="searchQuery"
               :placeholder="placeholder || '请输入关键字进行搜索'"
               @keyup.enter="handleSearch">
        <svg class="icon" aria-hidden="true" @click="handleSearch">
          <use xlink:href="#icon-sousuoxiao"></use>
        </svg>
      </div>
      <slot name="left"></slot> 
    </div>
    <!-- 使用v-for和v-if来渲染按钮 -->
    
    <div class="header-right">
      <slot></slot>
      <!-- <zj-button
        v-for="button in buttons"
        :key="button.id"
        v-if="button.visible"
        @click="buttonClicked(button.id)"
      >
        {{ button.text }}
      </zj-button> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, computed } from 'vue'
import { useNavigationStore } from '../../store/navigationStore';
import { useRouter } from 'vue-router';
const router = useRouter()
const navigationStore = useNavigationStore();
const headerLeft = computed(() => { 
  return navigationStore.isCollapsed ? '70px':'249px'
})
const headerPadding = computed(() => { 
  return navigationStore.isCollapsed ? '0 87px 0 15px':'0 260px 0 15px'
})

const searchQuery = ref('')
const searchValue = ref<string>('')

// Props定义
const searchProps  = defineProps({
  searchLogic: Function, // 修改为 Function 类型
  placeholder: String,
  hideSearch: Boolean
});
// 搜索跳转
const handleSearch = () => {
  if (searchProps.searchLogic) {
    console.log("去搜书名")
    // 如果传入了自定义搜索逻辑，就使用自定义逻辑
    searchProps.searchLogic(searchQuery.value);
  } else {
    // 否则使用默认的搜索逻辑
    defaultSearchLogic(searchQuery.value);
  }
}
const defaultSearchLogic = (query) => {
  console.log(`Default searching for: ${query}`);
  
  // 你的原本搜索逻辑
  searchValue.value = query;
  
  if (searchValue.value === "") {
    ElMessage.warning("您还未输入关键词");
  } else {
    router.push({ name: "booksearch", params: { keyword: searchValue.value } });
  }
};


</script>

<style lang="scss" scoped>
.header-left,.header-right{
  display: flex;
  justify-content: center;
  align-content: center;
}
.search-box{
  position: relative;
  width: 450px;
  height: 40px;
  input{
    padding: 10px;
    outline: none;
    &:active,&:focus{
      border: 1px solid var(--color-light)
    }
  }

  .icon{
    position: absolute;
    right: 20px;
    top: 10px;
    color: var(--color-light);
    font-size:20px;
   }
  .search-header{
    width: 450px;
    height: 40px;
    line-height: 40px;
    background-color: var(--color-lightest);
    border: 1px solid var(--color-lighter);
    border-radius: 10px;
  }
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 249px;
  height: 65px;
  width: 100%;  
  z-index: 500;
  background: #fff;
  padding: 0 15px 0 15px;
  border-bottom: 1px solid var(--color-lighter);
  transition:  left 0.3s ease,padding 0.3s ease;
}
</style>