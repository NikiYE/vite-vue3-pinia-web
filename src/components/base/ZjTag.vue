<template>
  <button :class="['tag', 
  typeClass, 
  ]">    
    <!-- 条件渲染图标 -->
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// const props = defineProps({
//   // ...定义你的 props
// });
// const { emit } = defineEmits(['someEvent']);

// Props
const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  disabled: Boolean,
  round: Boolean,
  circle: Boolean,
  icon: String,
});

// Computed class based on type
const typeClass = computed(() => ({
  'is-primary': props.type === 'primary',
  'is-text': props.type === 'text',
}));


</script>

<style lang="scss" scoped>
.tag{
  padding: 0 15px;
  height: 20px;
  line-height: 18px;
  border-radius: 10px;
  background-color: var(--color-light);
  border: 1px solid var(--color-light);
  font-size: 12px;
  color: #fff;
  & + .tag {
    margin-left: 5px; /* 左边距，为第一个按钮之后的每个按钮添加 */
  }
}
.is-primary{
  border: 1px solid var(--color-lighter);
  background-color: var(--color-lighter);
  color: var(--color-deep);
}

</style>