<template>
  <li>
    {{ name }}?!
  </li>
</template>

<script>
export default {
  props:{
    name: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
//scoped 다른 컴포넌트에는 영향을 끼치지않는다. 
  h1 {
    color:red !important;
  }
</style>