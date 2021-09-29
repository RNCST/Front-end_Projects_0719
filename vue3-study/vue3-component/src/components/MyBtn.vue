<template>
  <!-- 속성과 값의 이름이 같으면 생략가능.. 
  large: large -->
  <div 
    :class="{ large}" 
    :style="{ backgroundColor: color}"
    class="btn">
    <slot>
    </slot>
    <!-- component를 열고닫히는 태그로 쓰고 그 안의 내용을 쓰고자할떄 slot을 사용하다. -->
    {{ text }}
  </div>  
</template>

<script>
export default {
  // props 컴포넌트가 실행될떄 속성처럼 외부에서 받아내는 내용들을 받을수 있다.
  props:{
    color: {
      type: String,
      default: 'gray',
    },
    large: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: 'Apple',
    }
  }
}
</script>

<style scoped lang="scss">
  .btn {
    display: inline-block;
    margin: 4px;
    padding: 6px 12px;
    border-radius: 4px;
    border-radius: 4px;
    background-color: gray;
    color: white;
    cursor:pointer;
      &.large{
        font-size: 20px;
        padding: 10px 20px
    }
  }
</style>