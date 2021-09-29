<template>
  <div class="btn"> 
    <!-- MyBtnI의 최상위요소-1 -->
    <slot></slot>
  </div>
  <div>inheritance not working</div>
  
  <h1
    :class="$attrs.class"
    :style="$attrs.style"
    v-bind="$attrs">
    <!-- 
      $attrs에 상속받은 속성들이 저장이 되는데  
      각각 :class, :style 처럼 쓰고싶은것만 쓸수도있고 
      v-bind="$attrs"로 통채로 상속을 받을수도 있다.
      -->
    {{ $attrs.title }}
  </h1>
  <!-- MyBtnI의 최상위요소-2 -->
</template>

<script>
export default {
  // 속성을 기본상속을 받지 않는다.
  created() {
    // component가 생성된 직후 lifecycle
    console.log(this.$attrs);
    //Proxy {class: 'inheritance', style: {…}, __vInternal: 1}
    // [[Handler]]: Object
    // [[Target]]: Object
      // class: "inheritance"
      // style: {color: 'red'} $attrs에 상속받은 속성들이 저장되어 내려온다 

  }
}
</script>

<style scoped>
  .btn {
    display:inline-block;
    margin: 4px;
    padding: 6px 10px;
    border-radius: 4px;
    background-color: gray;
    color:white;
    cursor:pointer;
  }
</style>