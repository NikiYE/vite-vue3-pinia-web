import { createVNode, render } from 'vue'
import MessageBox from './index.vue'

const div = document.createElement('div')
div.setAttribute('class', 'message-box')
document.body.appendChild(div)

export default ({ icon, title, inputValue='' ,showInput=false,text }) => {
  return new Promise((resolve) => {
    // 点击确定按钮
    const submitCallback = (inputValue) => {
      console.log("点击确认",icon, title, inputValue ,showInput,text)
      render(null, div)
      resolve(inputValue);
    }
    // 点击取消按钮
    const cancelCallback = () => {
      render(null, div)
      // reject(new Error('点击取消'))
      // reject(console.log("取消"))
    }
    // 1. 渲染组件
    // 2. 点击确认按钮，触发resolve同时销毁组件
    // 3. 点击取消按钮，触发reject同时销毁组件
    const vnode = createVNode(MessageBox, { title,icon, inputValue ,showInput,text, submitCallback, cancelCallback })
    render(vnode, div)
  })
}
