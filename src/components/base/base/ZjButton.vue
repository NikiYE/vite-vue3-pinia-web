<template>
  <button type="button" :class="['btn', 
  typeClass, sizeClass ,
  { 
    'is-disabled': disabled,
    'is-round': round,
    'is-circle': circle,
  }
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
  'is-success': props.type === 'success',
  'is-warning': props.type === 'warning',
  'is-danger': props.type === 'danger',
  'is-text': props.type === 'text',
  'is-plain': props.type === 'plain',
  'is-noborder': props.type === 'noborder',
}));
const sizeClass = computed(() => ({
  'is-xsmall': props.size === 'xsmall',
  'is-small': props.size === 'small',
  'is-large': props.size === 'large',
}));

// Methods
// const clickHandler = () => {
//   if (!props.disabled) {
//     console.log('Button clicked!');
//   }
// };
</script>

<style lang="scss" scoped>

.btn-group{
  justify-content: space-around;
  .btn{
    flex: 1 1 auto;
  }
}
.btn{
  padding: 0 35px;
  height: 35px;
  font-size: 16px;
  line-height: 34px;
  border-radius: 10px;
  background-color: #fff;
  color: var(--color-deep);
  border: 1px solid #fff;
  text-align: center;
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
.is-noborder{
  border: 1px solid var(--color-lighter);
  background-color: var(--color-lighter);
  &:hover {
    background-color: var(--color-lightest);
  }
}
.is-text{
  background-color: rgba(255,255,255,0);
  border: 1px solid rgba(255,255,255,0);
  &:hover {
    background-color: var(--color-lightest);
    border: 1px solid var(--color-lightest);
  }
}
.is-plain{
  border: 1px solid var(--color-light);
  background-color: rgba(255,255,255,0);
  &:hover {
    background-color: var(--color-lightest);
  }
}
.is-warning{
  border: 1px solid rgb(255, 170, 68);
  color: #fff;
  background-color: rgb(255, 170, 68);
  &:hover {
    background-color:  rgba(255, 170, 68,0.8);
  }
}
.is-danger{
  border: 1px solid rgb(165, 3, 3);
  color: #fff;
  background-color: rgb(165, 3, 3);
  &:hover {
    background-color:  rgba(165, 3, 3,0.8);
  }
}
.is-success{
  border: 1px solid rgb(123, 163, 64);
  color: #fff;
  background-color: rgb(123, 163, 64);
  &:hover {
    background-color:  rgba(123, 163, 64 ,0.8);
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
.is-xsmall{
  padding: 0 10px;
  height: 22px;
  line-height: 22px;
  border-radius: 5px;
  font-size: 12px;
  &.is-circle{ 
    width: 22px;
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
  &.is-circle{
    width: 45px;
  }
}
</style>