import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import Loading from './components/base/Loading'

// import VueLazyload from 'vue3-lazyload'

// 引入iconfont  图标
import "~/assets/iconfont/iconfont.js"

import "~/styles/index.scss";

const app = createApp(App)

console.log(' VITE_HELLO: ',  import.meta.env.VITE_HELLO);
console.log(' VITE_API_URL: ',  import.meta.env.VITE_API_URL);


// 注册全局组件
// import loadingImage from '/src/assets/img/loading.webp';
// import errorImage from '/src/assets/img/loading.webp';
// app.use(VueLazyload, {
//   // 这里可以设置一些默认配置，如加载占位图、错误占位图等
//   loading: loadingImage,  // 加载时的占位图
//   error: errorImage       // 加载失败时的占位图
// })

app.use(Loading);
app.use(router)
app.use(createPinia())
app.mount('#app')
