<template>
<h1>{{ msg }}</h1>
method handler(e) <br>
  <input type="text" 
  :value="msg"
  @input="handler"/>
  <!-- <input type="text" v-bind:value="msg"/> -->
<!-- 단방향 데이터 바인딩 -->
<br><br>
$event.target.value <br>
  <input type="text" 
  :value="msg"
  @input="msg = $event.target.value"/>
  <!-- methods설정할 필요가 없음.. -->
<br><br>
v-model <br>
<input type="text" 
  v-model="msg"/>
<br><br>
<input 
  type="checkbox"
  v-model="checked"/>
  {{checked}}
  <!-- v-model이라는 derective를 통해 데이터를 손쉽게 조작할 수 있다. -->
  <!-- v-model을 통해 한글을 쓸때는 한박자 늦게 동작한다 -->
  <!-- 자음,모음이 합쳐져서 한글자가 완성이 되어야 그때 데이터조작이 넘어가짐.. -->
  <!-- 떄문에 한글을 사용할떄는 $event.target.value를 써야바로바로 넘어가짐. -->
<br><br>
<h1>{{msg2}}</h1>
$event.target.value<br>
<input type="text"
:value="msg2"
@change="msg2 = $event.target.value"><br>
v-model.lazy<br>
<input type="text"
v-model.lazy="msg2">
<!-- 값이 바뀌고나서 적용 -->
<h1>{{msg3}}</h1>
v-model.number<br>
<input type="text"
v-model.number="msg3"><br>
  <!-- string이 아닌 number타이븡ㄹ 받기위함 -->
v-model.trim<br>
<input type="text"
v-model.trim="msg"/>

</template>


<script>
export default {
  data() {
    return {
      msg: 'Hello msg!',
      msg2: 'Hello v-model!',
      msg3: 123,
      checked: false
    }
  },
  methods : {
    handler(e) {
      console.log(e);
      console.log(e.target);
      console.log("value",e.target.value);
      this.msg=e.target.value;
      console.log("this.msg" , this.msg);
      // 양방향 데이터 바인딩
    }
  },
  watch : {
    msg3() {
      console.log(typeof this.msg3);
    },
    msg(){
      console.log(this.msg); 
    }
  }
}
</script>