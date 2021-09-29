<template>
  <div class="btn">
    <slot>Apple</slot>
    <!-- Apple => Fallback Contents -->
    <!-- 상위컴포넌트에서 넘어오는 contents가 없으면 대체되서 나오는 값. -->
  </div>
  <div class="btn">
    <slot name="icon"></slot>
    <slot name="text"></slot>
    </div>
</template>


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
  }
</style>