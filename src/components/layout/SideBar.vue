<template>
  <div class="sidebar" :class="{ 'is-collapsed': isCollapsed }">
    <div>
      <div class="logo_wrap">
        <img src="../../assets/logo.svg" alt="">
      </div>
      <span @click="toggleCollapse" class="toggle_btn">
        <svg class="icon" :class="{'rotate': isCollapsed}" aria-hidden="true">
          <use :href="`#icon-jiantouyou`"></use>
        </svg>
      </span>
      <div class="menu_wrap">
        <div v-for="item in menuItems" 
        :key="item.text" 
        class="menu_item"
        @click="linkTo(item.link)"
        >
            <svg class="icon" aria-hidden="true">
              <use :href="`#${item.icon}`"></use>
            </svg>
            <span class="text">{{ item.text }}</span>
        </div>
      </div>    
    </div>
    <div class="user_box">
      <router-link to="/login" v-if="store.user == null || store.user == ''">
        <span index="0">登录</span>
      </router-link>
      <div v-else>
        <div class="flex" >
          <el-avatar :size="60" :src="userAvatarUrl" />
          <div class="name_box">
            <p class="name">{{ userName || "用户" }}</p>
            <span>{{ userId || "没有id" }}</span>
          </div>
        </div>
        <div class="flex name_opr">
          <zj-button size="small">后台管理</zj-button>
          <!-- <zj-button size="small" circle @click="logout">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon--tuichu"></use>
            </svg>
          </zj-button> -->
          <zj-button size="small" class="short" icon="-tuichu" @click="logout">
          </zj-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from "../../store";
import { useNavigationStore } from '../../store/navigationStore';

const router = useRouter();
const store: any = useAuthStore();
const navigationStore = useNavigationStore();
const isCollapsed = ref(false);

const menuItems = [
  { icon: 'icon-shujia', text: '志鉴书库',link:'/book/booklist' },
  { icon: 'icon-shouye', text: '工作台' ,link:'/'},
  { icon: 'icon-mofabi', text: '智能助手' ,link:'/'},
  // 更多菜单项...
];
const linkTo = (link) =>{
  router.push(link)
}
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
  navigationStore.toggleNavigation()
  console.log("store",navigationStore.isCollapsed,isCollapsed.value)
};


// 在组件的created或mounted钩子中
if (!store.user && localStorage.getItem('userName')) {
  store.setUser(localStorage.getItem('userName'));
}
const userName = store.user.sub || localStorage.getItem('userName')
const userId = store.user.id || localStorage.getItem('userId')

const state = reactive({
  userAvatarUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

const { userAvatarUrl } = toRefs(state)


const clickout = (key: string, keyPath: string[]) => {
  console.log(key == '1-1', keyPath)
  if (key == '1-1') {
    console.log("去个人信息页")
    router.push("/userinfo")
  }
}

const logout = () => {
  localStorage.removeItem("token");

  store.setAuth(false);
  store.setUser(null);

  router.push("/login");
};

</script>

<style lang="scss" scoped>
// .btn + .btn{
//   margin-left: 5px;
// }
.btn.short{
  padding: 0;
}
.user_box{
  width: 220px;
  height: 150px;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  border-radius: 10px;
  margin: 0 auto;
  padding: 24px;
  margin-bottom: 40px;
  transition: var(--transition);
  .name_box{
    transition: var(--transition);
    margin-left: 15px;
    color: #bababa;
  }
  .name_opr{
    transition: var(--transition);
    margin-top: 15px;  
    word-break: keep-all;
  }
  .name{
    line-height: 22px;
    margin-top: 10px;
    font-size: 18px;
    color: var(--color-deeper)
  }
}
.logo_wrap{
  height: 65px;
  width: 301px;
  background: #fff;
  border-bottom: 1px solid var(--color-lighter);
  padding: 10px 30px 10px 42px;
  transition: var(--transition);
  overflow: hidden;
  img{
    width: 150px;
    max-width: 150px;
  }
}
.sidebar {  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: left;
  background-color: #fff;
  z-index: 500;
  position: relative;
  height: 100%;
  width: 300px;
  transition: var(--transition);
  border-right: var(--color-lighter) 1px solid ;
}

.is-collapsed {
  width: 70px;
}

.menu_item {
  display: flex;
  align-items: center;
  padding: 15px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    .icon{
      color: #fff;
      background: #0860C7;
      background: var(--color-gradient);
      background-clip: border-box;
      -webkit-background-clip: border-box;
      -webkit-text-fill-color: transparent;
      box-shadow: 0px 10px 20px #8a7ad773;
    }

    .text{
      background: var(--color-gradient);
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bolder;
    }
  }
}
.icon {
  display: block;
  text-align: center;
  padding: 8px;
  border-radius: 10px;
  font-size: 40px;
}
.menu_wrap{
  padding: 10px 25px;
  transition: var(--transition-padding); /* 添加宽度变化的过渡效果 */
}
.text {
  transition: var(--transition); 
  white-space: nowrap;
  overflow: hidden; /* 防止文本溢出 */
  width: 170px; /* 文本的初始宽度 */
  font-size: 18px;
  margin-left: 15px;
}

.is-collapsed {
  .text {
    width: 0;
    margin-left: 0;
  }
  .menu_wrap{
    padding: 10px 0;
  }
  .logo_wrap{
    width: 69px;
    padding: 5px 18px;
    border-bottom: 1px solid #fff;
  }
  .user_box{
    width: 60px;
    height: 60px;
    padding: 10px;
    box-shadow: none;
    .el-avatar{
      --el-avatar-size: 40px!important;
    }
    .name_opr,.name_box{ display: none; width: 0;}
  }
}
.toggle_btn {
  display: block;
  background: #ffffff;
  border: 1px solid var(--color-lighter);
  width: 20px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  padding: 5px 0;
  right: -8px;
  top: 48%;
  z-index: 500;
  border-radius: 10px;
  .icon{
    padding: 0;
    width: 20px;
    fill: var(--color-light);
    transform: rotate(180deg);
  }
  .icon.rotate {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }
}

.toggle_btn:hover {
  box-shadow: var(--shadow)
}
</style>
