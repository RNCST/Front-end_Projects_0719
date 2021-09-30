<template>
  <h1 @click="increase"> 
    {{count}} / {{doubleCount}}
  </h1>
  <h1 @click="changeMessage">
    {{message}} / {{reversedMessage}}
  </h1>
</template>


<script>
import { ref, computed, watch, onMounted } from 'vue'
export default {
  setup() {
    // let count = 0;
    // 반응성이 없다. => data는 변경이되지만 화면의 갱신을 보장해주지않는다. 
    const count = ref(0)
    // ref 를 쓰게되면 반응성을 줄수 있지만 ref 의 반환값은 하나의 객체데이터가 반환이되어서
    //데이터로 직접 사용할 수 없다.
    const doubleCount = computed(() => count.value*2)
    function increase() {
      count.value +=1
      // count는 그냥 데이터가아닌 객체데이터이기 때문에 .value로 값을 조작한다.
    }

    const message = ref('Hello world!')
    const reversedMessage = computed(() => message.value.split('').reverse().join(''))
    function changeMessage() {
      message.value = message.value.split('').reverse().join('')
    }
    watch(message, (newValue) =>console.log(newValue))
    
    onMounted(() => console.log(count.value))

    console.log(count.value)
    //setup은 beforeCreate created 라이클 사이클 훅 사이에 실행되는 시점이기때문에 
    //created를 명시적으로 정의할 필요가 없다 이 두개의 훅에서 작성되는 코드는 setup 펑션
    //내부에 직접 작성하면 된다.

    return {
      count,
      doubleCount,
      increase,
      message,
      reversedMessage,
      changeMessage
    }
  }

}
</script>
