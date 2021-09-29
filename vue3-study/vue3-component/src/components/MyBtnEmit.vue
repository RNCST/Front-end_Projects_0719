<template>
  <div 
    class="btn">
    <slot></slot>
  </div>  

  <h1 @click="$emit('AppMethod00', $event)">
    Hello Emit
  </h1>
  <h1 @dblclick="$emit('AppMethod00', $event)">
    <!-- emit이라는 메소드르 받아낼떄 event를 확인하려면 인수로 넣어서 확인해줘야한다. -->
    Hello Emit2
  </h1>
  <input
    type="text"
    v-model="
      msg" />
</template>

<script>
export default {
  emits: [
    'AppMethod00',
    // 상속받은 이벤트를 emits에 연결을 해서 $emit이라는 메소드를 통해 전달해서 실행할수있다.
    'changeMsg'
    
  ],
  data() {
    return {
      msg : ''
    }
  },
  watch: {
    msg() {
      this.$emit('changeMsg', this.msg)
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
  }
</style>