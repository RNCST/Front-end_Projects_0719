<template>
  <MyBtn />
  <MyBtn color="royalblue" />
  <MyBtn :color="color" /> 
  <!-- :를 붙이지않으면 color가 data가 아닌 string으로 그대로 들어간다. -->
  <MyBtn large />
  <MyBtn
    large
    color="royalblue" />
  <MyBtn text="Banana" />
  <button>Button</button>
  <br /><br />
  <MyBtn>
    <span style="color: red;">Apple-</span>
  </MyBtn>
  <MyBtn>
    Banana-
  </MyBtn>
  <MyBtn>
    Cheery-
  </MyBtn>

  <br />
  -------------------------------------------------------------------
  <br />
  <MyBtnI
    class="inheritance"
    style="color:red;"
    title="Hello inheritance">
    <!-- component의 최상위요소가 2개이상이면 class속성이 상속 되지 않는다. -->
    Banana
  </mybtni>
  <br />
  -------------------------------------------------------------------
  <br />
  <MyBtnEmit
    @AppMethod00="log"
    @change-msg="logMsg"> 
    <!-- html에서 속성을 작성할때는 camelcase 를 쓰지 않고 dashcase를 쓴다 그래야 vuejs에서 정상적으로 동작 -->
    Banana
  </MyBtnEmit>
  <br />
  -------------------------------------------------------------------
  <br />
  <MyBtnSlot>
    <!-- <template v-slot:icon>(B)</template> -->
    <template #icon>
      <span>(B)</span>
      </template>
    <!-- <template v-slot:text>Banana</template> -->
    <template #text>
      <span>Banana</span>
      </template>
    <span>Banana</span> 
    <!-- text -->
    <span>(B)</span>
    <!-- icon -->
  </MyBtnSlot>
  <br />
  -------------------------------------------------------------------
  <br />
  <!-- App(조상)=>Parent(부모)=>Child(자식) -->
  <!-- 조상에서 자식까지 내리는데 부모를 거치지 않고 빠르게 전달해주기위해 provide를 쓸수있다. -->
  <!-- <Parent :msg="message"/> -->
  <!-- Provide를통해 msg를 자동으로 하위컴포넌트로 제공해주고있다. -->
  <button @click="message = 'Good?'">click</button>
  <!-- Provide를 사용할떄는 반응성을 제공해줄수는없다. -->
  <h1> App: {{ message }}</h1>
  <!-- computed()를 사용해서  반응성을 제공해줄수 있다.-->
  <Parent />
<br />
  -------------------------------------------------------------------
  <br />
  <h1 id="hello">
    Hello ref!
  </h1>
  <h1 ref="hello">
    Hello ref!!!
  </h1>
  <Ref ref="refcompo"/>

</template>
// 부모=> 자식 간의 데이터 통신을 props기능으로 만들어낼 수 있다.
<script>
import MyBtn from'~/components/MyBtn'
import MyBtnI from'~/components/MyBtnI'
import MyBtnEmit from'~/components/MyBtnEmit'
import MyBtnSlot from'~/components/MyBtnSlot'
import Parent from '~/components/Parent'
import Child from '~/components/Child'
import Ref from '~/components/Ref'
import {computed} from 'vue'

export default {
  components: {
    MyBtn,
    MyBtnI,
    MyBtnEmit,
    MyBtnSlot,
    Parent,
    Child,
    Ref
  },
  mounted() {
    const h1El = document.querySelector('#hello')
    console.log(h1El);
    console.log('h1El',h1El.textContent)
    const refEl = this.$refs.hello
    console.log(refEl);
    console.log('refEl', refEl.textContent);
    
    const refcompoEl = this.$refs.refcompo.$el
    console.log('refcompoEl',refcompoEl);

    const refcompoEls = this.$refs.refcompo.$refs
    console.log('refcompoEls',refcompoEls);

    const refcompoEls_el1 = this.$refs.refcompo.$refs.el1
    const refcompoEls_el2 = this.$refs.refcompo.$refs.el2
    console.log('refcompoEls 1 2 ',refcompoEls_el1, refcompoEls_el2);
    
  },
  data() {
    return {
      color: '#000',
      message: 'Hello Provide,Injection'
    }
  },
  methods: {
    log(e){
      console.log("clicked");
      console.log(e);
    },
    logMsg(msg){
      console.log(msg);
    }
  },
  provide() {
    return {
      // msg: this.message,
      msg: computed(() => this.message)
    }
  }
}
</script>