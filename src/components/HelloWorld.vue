<template>  
  <Header>
    <!-- 这里可以放置任何自定义内容 -->
    <template v-slot:left>
      <!-- 搜索框后 -->
    </template>
    <template #default>
      <!-- 右边按钮 -->
      <zj-button>按钮</zj-button>
    </template>
  </Header>
  <div style="padding: 30px;">
  <h1>{{ msg }}</h1>
  <h1>按钮</h1>
  <zj-button>primary </zj-button>
  <zj-button type="plain">plain</zj-button>
  <zj-button type="text">text</zj-button>
  <br>
  <zj-button size="small">primary small</zj-button>
  <zj-button type="primary">primary </zj-button>
  <zj-button size="large">primary small</zj-button>
  <br>
  <zj-button type="text" disabled>disabled</zj-button>
  <zj-button round>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shouye"></use>
    </svg>
  </zj-button>
  <zj-button circle>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shouye"></use>
    </svg>
  </zj-button>
<hr>
  <h1>标签</h1>
  <zj-tag>测试</zj-tag>
  <zj-tag type="primary">测试</zj-tag>
<hr>
  <h1>图标</h1>
  <svg class="icon icon-bg" aria-hidden="true">
    <use xlink:href="#icon-mofabi"></use>
  </svg>
  <svg class="icon icon-bg" aria-hidden="true">
    <use xlink:href="#icon-cloud-service-full"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-shouye"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-yunshangchuan_o"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon--tuichu"></use>
  </svg>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-bianji"></use>
  </svg>
  <h1>骨架屏</h1>
  <div class="item">
    <template v-if="content">{{ content }}</template>
    <Skeleton v-else />
  </div>
  <h1>富文本编辑器</h1>
  <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
      />
      <Editor
        style="height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
    </div>

  </div>

</template>
<script setup lang="ts">
import { ref, shallowRef, onMounted, onBeforeUnmount } from 'vue';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';


import { useLoading } from '~/utils/useLoading';

const fullScreenLoading = useLoading();
fullScreenLoading.show('自定义加载中...'); // 调用 show 方法并传入自定义文本

// fullScreenLoading.hide();

// 骨架屏
const data = {
  1:"hehe",
  2:"jaja"
}

const content = ref("")
setTimeout(() =>{
  content.value = "hello world"
},3000)
defineProps({
  msg: String,
})


// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref('<p>hello</p>');

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>';
  }, 1500);
});

const toolbarConfig = {};
const editorConfig = { placeholder: '请输入内容...' };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>
<style scoped>
.icon-bg{
  font-size: 3em;
  margin-right: 20px;
  font-family: SegoeUI-SemiBold,Helvetica,Arial,sans-serif;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: 0;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  background: #0860C7;
  background: var(--color-gradient);
  background-clip: border-box;
  -webkit-background-clip: border-box;
  -webkit-text-fill-color: transparent;
}
.item{
  font-size: 16px;
  height: 50px;
  width: 100%;
}

</style>
