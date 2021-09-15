<template>
  <h1>
    {{message}}
    <HelloWorld />
  </h1>
</template>

<script>
import HelloWorld from '~/Components/HelloWorld'

export default {
  componenets: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue!!!'
    }
  }
}
</script>