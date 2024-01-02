import type { App, VNode } from 'vue'
import Loading from './index.vue'
import { createVNode, render } from 'vue';

export default {
  install(app: App) {
    const Vnode: VNode = createVNode(Loading);
    render(Vnode, document.body);
    app.config.globalProperties._loading = {
      show: (text?: string) => {
        if (text && Vnode.component?.exposed?.show) {
          Vnode.component.exposed.show(text); // 传递自定义文本到 show 方法
        } else {
          Vnode.component?.exposed?.show();
        }
      },
      hide: Vnode.component?.exposed?.hide,
    };
  },
};
