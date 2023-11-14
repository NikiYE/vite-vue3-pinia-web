<template>
  <button :class="['btn', 
  typeClass, sizeClass ,
  { 
    'is-disabled': disabled,
    'is-round': round,
    'is-circle': circle,
  }
  ]" @click="clickHandler">    
    <!-- 条件渲染图标 -->
    
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// const props = defineProps({
//   // ...定义你的 props
// });
// const { emit } = defineEmits(['someEvent']);

// Props
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
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
  'is-plain': props.type === 'plain',
}));
const sizeClass = computed(() => ({
  'is-small': props.size === 'small',
  'is-large': props.size === 'large',
}));

// Methods
const clickHandler = () => {
  if (!props.disabled) {
    console.log('Button clicked!');
  }
};
</script>

<style lang="scss" scoped>
.btn{
  padding: 0 35px;
  height: 35px;
  line-height: 34px;
  border-radius: 10px;
  background-color: #fff;
  color: var(--color-deep);
  border: 1px solid #fff;
  cursor: pointer;
  & + .btn {
    margin-left: 15px; /* 左边距，为第一个按钮之后的每个按钮添加 */
  }
  &.is-round{ border-radius: 20px;}
  &.is-circle{ 
    border-radius: 20px;
    padding: 0px;
    width: 35px;
  }
}
.is-primary{
  border: 1px solid var(--color-light);
  background-color: var(--color-lighter);
  &:hover {
    background-color: var(--color-lightest);
  }
}
.is-text{
  background-color: #fff;
  &:hover {
    background-color: var(--color-lightest);
    border: 1px solid var(--color-lightest);
  }
}
.is-plain{
  border: 1px solid var(--color-light);
  background-color: #fff;
  &:hover {
    background-color: var(--color-lightest);
  }
}
.is-disabled{
  background-color: var(--color-lightest);
  border: 1px solid var(--color-lightest);
  color: #ccc;
  cursor: not-allowed;
  &:hover {
    background-color: none;
  }
}


.is-small{
  padding: 0 25px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  ::v-deep(.icon){
    width: 0.7em;
    height: 0.7em;
    padding: 5px;
  }
  .icon{
    width: 28px;
    height: 28px;
  }
  &.is-circle{ 
    width: 30px;
  }
}
.is-large{
  padding: 0 40px;
  height: 45px;
  font-size: 18px;
  line-height: 45px;
}
</style>