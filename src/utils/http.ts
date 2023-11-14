import axios from 'axios';
import router from './../router';
import { useAuthStore } from './../store/index'; 

// 请求拦截
axios.interceptors.request.use((config:any) => {
  const authStore = useAuthStore();
  const currentPath = authStore.currentPath;
  // console.log("进入拦截了，朋友") 
  // 检查URL，如果是登录或注册的URL，则不添加token
  if (!config.url.includes('/api/user/login') && !config.url.includes('/api/user/register')) {
    // console.log("不是登陆注册页,我们拦截一下加个token")
      if(localStorage.token){
          config.headers.Authorization = 'Bearer ' + localStorage.token;
      } else {
        authStore.lastVisitedRoute = currentPath;  // 记录最后访问的页面
        console.log("最后访问页面",authStore.lastVisitedRoute)
        // console.log("没有token,重定向到登录页面");
        router.push("/login");
      }
  } else {
    console.log("进入登陆页,不加token")
  }
    return config;
},(error) => {
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    return response;
},(error) => {
    const {status} = error.response

    if(status === 401){
        localStorage.removeItem("token")

        router.push("/login")
    }
    return Promise.reject(error)
})
export default axios;