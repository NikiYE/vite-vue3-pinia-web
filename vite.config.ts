import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'
// 自动导入引用
import AutoImport from 'unplugin-auto-import/vite'
// 自动导入vue组件
import Components from 'unplugin-vue-components/vite'
// 开发面板支持
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // resolvers: [ElementPlusResolver()],
    }),
    Components({
      // resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '~': resolve('src')
    }
  },
  css: {
    postcss:{
      plugins:[postcssPresetEnv()]  // 自动补全+css变量等
    }
  },
  server: {
    // host: '0.0.0.0', // 允许局域网访问
    proxy: {
      // '/api': {
      //   target: 'http://192.168.1.9:9090/zjdsj',  //  java 7:后端电脑本地/9 这里是你的后端服务器地址
      //   changeOrigin: true,  // 为了使服务器认为请求是从受信任的源发出的，需要更改源
      //   rewrite: (path) => path.replace(/^\/api/, '')  // 这将移除 /api 前缀
      // },
    },
    hmr: true //热更新
  }
})
