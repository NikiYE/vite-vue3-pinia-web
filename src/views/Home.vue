<template>
  <div class="container">
    <Header />
    <SideBar />
    <div class="main">
      <div style="padding-top: 65px;">
        <router-view />
        <HelloWorld msg="props:组件" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
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
