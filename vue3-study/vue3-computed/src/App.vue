<template>
  <Fruits />
  <button @click="add">
    Add
  </button>
  <h1 @click="changeMessage">
    {{ reverseMessage() }}
  </h1>
  <br />
  <!-- ==> 최적화 -->
  <h1>{{ reversedMessage }}</h1>

  <br />

  <h1
    :class="{ active: isActive}"
    @click="activate">
    Hello?!( {{ isActive }} )
  </h1>
  <!-- :class="{ className: boolean }" -->
  <!-- true이면 class를 선언하고 false이면 선언한내용이 빠진다. -->
  <!-- https://v3.ko.vuejs.org/guide/class-and-style.html#html-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%84%89%E1%85%B3-%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC -->


  <br /><br />

  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello Style
  </h1>
</template>


<script>
import Fruits from "~/components/Fruits";
export default {
  components: {
    Fruits,
  },
  data() {
    return {
      // Getter, Setter 읽기 쓰기 가능
      msg: "Hello Computed!",
      isActive: false,
      fontStyle: {
        color:'orange',
        fontSize: '30px',
      },
      backgroundStyle: {
        backgroundColor: 'black'
      }
    };
  },
  methods: {
    reverseMessage() {
      return this.msg.split('').reverse().join('');
    },
    add() {
      this.reversedMessage += '!?'
    },
    changeMessage() {
      this.msg = 'Good'
    },
    activate() {
      this.isActive = !this.isActive;
    },
    changeStyle() {
      this.fontStyle.color = 'red'
      this.fontStyle.fontSize = '100px'

    }
  },
  computed:{
    // 한번 연산한 이후 캐싱을 하기떄문에 캐싱된 값을 그대로 출력한다.
    // 반복사용하는데 있어서 부담이 덜하다.
    // 읽기전용 값을 얻어내는 전용이다 getter...
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join('');
      },
      set(newValue) {
        this.msg = newValue;
        // console.log(newValue);
        // 실제값을 변경할수도있고 단순히 log에서 변경값을 보며 활용할 수도 있다.
      }
    }
  },
  watch: {
    // 데이터들의 변경사항을 감시하는곳
    // data 뿐만아니라 computed의 이미 계산된 값도 볼수 있다.
    msg(newValue) {
      console.log('msg: ', this.msg);
      console.log('after msg: ', newValue);
    },
    reversedMessage() {
      console.log('reversedMessage: ', this.reversedMessage);
    }
  },
};
</script>

<style scoped>
  .active {
    color: red;
    font-weight: bold;
  }
  
</style>>
