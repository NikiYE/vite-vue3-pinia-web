<template>
  <div class="login svg_bg">
    <div class="login_box">
      <div class="logo_box"><img  class="logo" src="./../../assets/img/read.svg" alt=""></div>
      <section class="form-container">
        <div class="manage-tip">
          <span class="title">欢迎登录</span>
          <form
            ref="ruleFormRef"
            class="loginForm"
            labwidth="0"
          >
            <form-item prop="name">
              <input
              size="large"
                v-model="loginUser.name"
                placeholder="请输入用户名"
              />
            </form-item>
            <form-item prop="password">
              <input
              size="large"
                v-model="loginUser.password"
                placeholder="请输入密码"
                type="password"
              />
            </form-item>

            <form-item>
              <button color="#526F95"
              size="large" @click="handleSubmit(ruleFormRef)" class="submit-btn"
                >登录</button
              >
            </form-item>

            <!-- <div class="tiparea">
              <p>
                还没有账号? 现在<router-link to="/register">注册</router-link>
              </p>
            </div> -->
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
// import { FormInstance, ElLoading } from "element-plus";
import { registerType, registerRulesType, userType } from "../../utils/types";
// import axios from "../../utils/http";
import { useRouter } from "vue-router";
// import jwt_decode from "jwt-decode";
import { useAuthStore } from "../../store";
// // import { SHA256 } from "crypto-js";   // 64位
// import { MD5 } from "crypto-js"; // 32位

// 登录store pinia
const authStore = useAuthStore();


const store = useAuthStore();

const loginUser = ref<registerType>({
  name: "",
  password: "",
});
</script>

<style lang="scss" scoped>
@media (max-width: 1000px) {
  .logo_box{
    display: none;
  }
  .login .form-container{
    width: 80%!important;
  }
}
.login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box{
    overflow: hidden;
    max-width: 888px;
    min-width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,1);
    border-radius: 20px;
  }
  &.svg_bg{
    background-color: #F0F8FE;
    background-color: linear-gradient(45deg, #b896ff -13.08%, #87dbff 82.12%);;
    background-size: cover;
  }
  :deep(.form){
    max-width: 300px;  
    margin: 35px auto;
  }
  :deep(.input__wrapper){
    box-shadow: none;
    background-color: rgba(255,255,255,0);
    border-radius: 0;
    border-bottom: 1px solid #c0c4cc;
  }
  :deep(.form-item.is-error .input__wrapper){
    box-shadow: none;
    border-bottom: 1px solid #a30303;
  }
  :deep(.input__wrapper:hover){
    border-radius: 0;
    border-bottom: 1px solid #9ca2ac;
    
  }
  :deep(.input__wrapper:focus){
    border-radius: 0;
    border-bottom: 1px solid #23262b;
    
  }
  .logo_box{
    width: 50%;
    margin-right: 1%;
    img{
      
      max-width: 100%;
    }
  }
  .submit-btn{
    margin-top: 20px;
    span{
      color: #fff;
    }
  }
  .form-container{
    width: 50%;
    top: 23%;
    left: 51%;
  }
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
.title{
  color: #526F95;
  margin-bottom: 20px;
}
</style>