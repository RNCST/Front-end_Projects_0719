// https://v3.ko.vuejs.org/guide/template-syntax.html#%E1%84%87%E1%85%A9%E1%84%80%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8-interpolation

<template>
  <h1
    @[event]="add">
    {{ msg }}
  </h1>

  <h1>
    <span v-html="msg1">
    </span>
  </h1>

  <h1 :[attr]="'active'">
    {{ msg2 }}
  </h1>
</template>
// v-once => 데이터가 변경되어도 갱신이 되지 않는다 (최초 한번만.)
// v-html => {{}}가 아닌 실제 html구조의 string을 mount하기위한 문법
// v-bind => class나 id 속성을 설정하기 위한 문법인데 생략하고 :로만 표현가능하다.
// [] => html attribute 값을 속성이름으로 대체하여 []안에 넣어서 사용할 수 있다.

<script>
export default {
  data(){
    return {
      msg:'Hello world!',
      msg1:'<div style="color: red;">Hello!</div>',
      msg2: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    add() {
      this.msg +='!'
      this.msg1 +='!'
      this.msg2 +='!'
    }
    
  }
}
</script>


<style scoped>
  .active {
    color: royalblue;
  }
</style>