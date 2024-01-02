<template>
  <span :class="['tag', 
  typeClass, 
  ]">    
    <slot></slot>
  </span>
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
  }
});

// Computed class based on type
const typeClass = computed(() => ({
  'is-primary': props.type === 'primary',
  'is-text': props.type === 'text',
  'is-info': props.type === 'info',
  'is-success': props.type === 'success',
  'is-danger': props.type === 'danger',
  'is-warning': props.type === 'warning',
}));


</script>

<style lang="scss" scoped>
.tag{
  padding: 0 8px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  background-color: var(--color-light);
  font-size: 12px;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  & + .tag {
    margin-left: 5px; /* 左边距，为第一个按钮之后的每个按钮添加 */
  }
  .icon{ color: #fff}
}
.is-primary{ background-color: var(--color-lighter);color: var(--color-deep);}
.is-success{ background-color: rgb(123, 163, 64);}
.is-warning{ background-color: rgb(255, 170, 68);}
.is-danger{ background-color:  rgb(165, 3, 3);}
.is-info{ background-color:  rgb(179, 179, 179);}

</style>