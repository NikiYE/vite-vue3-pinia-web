<template>
  <div class="info-container">
    <el-row type="flex" class="content" justify="center">
      <el-col :span="8">
        <div class="user">
          <img
            v-if="store.user.avatar"
            :src="store.user.avatar"
            class="avatar"
            alt="用户头像"
          />
          <el-avatar v-else :size="60" :src="userAvatarUrl" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="userinfo">
          <div class="user-item">
            <i class="fa fa-user"></i>
            <span>{{ userData.name }} 用户名</span>
          </div>
          <div class="user-item">
            <i class="fa fa-cog"></i>
            <!-- <span>{{
              store.user.identity === "manager" ? "管理员" : "普通用户"
            }}</span> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from "../../store";
// import axios from "~/utils/http";

const store: any = useAuthStore();
// console.log("store: ", store.user)
const userAvatarUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
interface userData  {
  name : string
}

const userData =  reactive<userData>({
  name: store.user.sub
})


</script>

<style scoped>
.info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding: 16px; */
}
.content {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  height: 100%;
  background-color: rgba(255,255,255,0.5);
}
.user-item {
  position: relative;
  padding: 26px;
  font-size: 28px;
  color: #333;
}
</style>