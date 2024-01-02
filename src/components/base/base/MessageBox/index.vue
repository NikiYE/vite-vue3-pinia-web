<template>
  <div class="message-box" :class="{ fade: fade }">
    <div class="wrapper">
      <div class="header">
        <svg class="icon icon-bg" aria-hidden="true">
          <use :href='"#icon-message-box-"+ icon'></use>
        </svg>
        <!-- message-box-edit    笔   
             message-box-tip     对话框
             message-box-alert   感叹号
             message-box-book    书
             message-box-fire    火
             message-box-user    用户爱心
        -->
        <div class="close" @click="cancelCallback()">
          <svg class="icon icon-bg" aria-hidden="true">
            <use xlink:href="#icon-qingchu"></use>
          </svg>
        </div>
      </div>
      <div class="body">
        <i class="iconfont icon-warning"></i>
        <h3 v-show="title">{{ title }}</h3>
        <span>{{ text }}</span>
        <input v-show="props.showInput" type="text" v-model="inputValue" class="confirm-input">
      </div>
      <div class="footer">
        <zj-button @click="cancelCallback()" size="mini" type="gray">取消</zj-button>
        <zj-button @click="submitCallback(inputValue)" size="mini" type="primary">确认</zj-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// 当前组件不是在APP下进行渲染，无法使用APP下的环境（全局组件，全局指令，原型属性函数）
import { onMounted, ref ,defineProps} from 'vue'

// 如何使用此messagebox
// import MessageBox from '~/components/base/MessageBox'
// MessageBox({
//   // title:'测试',
//    icon:'edit',
//    showInput: true,
//     text: `text部分` })
//   .then((value) => {
//     ElMessage.success( value )
//   })
//   .catch(() => {
//     // 点击取消按钮触发
//     ElMessage.warning( '取消' )
//   })

const inputValue = ref('')
const props = defineProps({
  title: {
    type: String,
    default: '温馨提示'
  },
  text: {
    type: String,
    default: ''
  },
  inputValue: String,
  icon: {
    type: String,
    default: 'alert'
  },
  showInput: {
    type: Boolean,
    default: false
  },
  submitCallback: Function,
  cancelCallback: Function
})


const fade = ref(false)
onMounted(() => {
  // 当元素渲染完毕立即过渡的动画不会触发
  setTimeout(() => {
    fade.value = true
  }, 100)
})


</script>
<style scoped lang="scss">
.message-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    overflow: hidden;
    width: 450px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 1;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .header {
      background: var(--color-lighter);
      height: 200px;
      width: 450px;
      padding: 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-content: center;
      .icon{
        width: 100%;
        height: 100%;
      }
      .close{
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        .icon{
          color: var(--color-deep);
          width: 2em;
          height: 2em;
        }
      }
    }
    .body {
      padding: 20px 35px;
      font-size: 16px;
      .icon-warning {
        color: orange;
        margin-right: 3px;
        font-size: 16px;
      }
    }
    .confirm-input{
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 10px;
      font-size: 16px;
      margin-top: 15px;
    }
    .footer {
      text-align: right;
      padding: 20px 35px 35px;
      .xtx-button {
        margin-left: 20px;
      }
    }
  }
}
</style>
