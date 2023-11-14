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
      '@': resolve('src')
    }
  },
  css: {
    postcss:{
      plugins:[postcssPresetEnv()]  // 自动补全+css变量等
    }
  }
})
