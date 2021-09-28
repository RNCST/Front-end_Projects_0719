<template>
  <!-- <button @click="count +=1"> -->
  <button @click="plus">
    <!-- js라면 plus()여야하지만 vue에서는 ()를 생략가능. -->
    <!-- v-on @click 과 같은 곳에 로직을 직접적으로 보관하는것을 좋지 않다. -->
    click 1
  </button>
  <button @click="plus2('hi')">
    <!-- 임의의 인수를 넣어 조작할 수 있다. -->
    click 2
  </button>
  <button @click="plus3('hi', $event)">
    <!-- 임의의 인수를 넣어 조작할 수 있다. -->
    click 3
  </button>
  <button @click="plus($event), plus2('methods')">
    <!-- 여러메소드를 넣을수 있는데 이경우에는 무조건 ()를 넣어야한다. -->
    click 4
  </button>
  <p>{{ count }}</p>

  <br />
  <a
    href="http://naver.com"
    target="_blank"
    @click.once.prevent="open">naver</a>
  <!-- .prevent ==> event.preventDefault(); -->
  <!-- .once ==> 특정이벤트에 해당하는 메소드를 한번만 실행해준다. -->
  <!-- 그 이후에는 defaultEvent만 실행.. -->
  <!-- .once.prevent 처럼 메소드체이닝형식으로 사용할 수 있다. -->

  <div
    class="parent"
    @click="methodA">
    <div
      class="child"
      @click="methodB"></div>
      <!-- Event Bubbling, child를 클릭하면 event bubblign이 일어나면서 그 상위 요소 event도 실행이된다. -->
      <!-- @click.stop="methodB"></div> -->
      <!-- .stop ==> event.stopPropagation() -->

      <!-- Event Capturing, 부모요소에서 자식요소로 내려감. -->
      <!-- 아무런 메서드가 없으면 methodB가 실행되고 그이후 methodA가 실행이된다.  -->
      <!-- @click.capture="methodA"> ==> .capture 부모요소가 먼저 클릭이 되도록한다. -->

      <!-- 자식요소를 클릭한 이후부모요소가 실행이 먼저되고 부모요소만 실해되도록하려면 -->
      <!-- @click.capture.stop="methodA" -->
  </div>
  <br /><br />
  
  <div
    class="parent"
    @click.self="methodA">
    <div
      class="child"></div>
  </div>
  <!-- .self ==> 해당하는 요소의 독단적인 영역에만 동작하게 만들어준다. -->

  <div
    class="parent2"
    @wheel.passive="methodC"
    @click="methodC">
    <!-- @wheel.passive => 스크롤이 될때마다 로직의 처리와 화면의 스크롤움직임을 동시에 수행하는데
    이 것들을 서로 독립적으로 처리하여 화면의 움직임에 버벅거림을 방지한다. -->
    <div class="child2"></div>
  </div>


  <input
    type="text"
    @keydown="handlerI" />
    <!-- @keydown.enter="handlerI"  => Enter가 입력되었을때.-->
    <!-- @keydown.a="handlerI"  => a가 입력되었을때.-->
    <!-- @keydown.crtl.a="handlerI"  => ctrl+a가 입력되었을때.-->
</template>

<script>
export default {
  data() {
    return {
      count : 0
    }
  },
  methods: {
    plus(e) {
      console.log("");
      console.log("plus1");
      console.log(e);
      console.log(e.target);
      this.count += 1;
    },
    plus2(msg){
      console.log("");
      console.log("plus2");
      console.log(msg);
    },
    plus3(msg,e){
      console.log("");
      console.log("plus3");
      console.log(msg);
      console.log(e);
    },
    open(){
      // e.preventDefault();
      console.log('abcd');
    },
    methodA(e) {
      console.log(e.target);
      console.log(e.currentTarget);
      // target 실제로 클릭이 된 요소 
      // currentTarget 실행된 함수에 연동이 되어진 이벤트에 해당하는 요소
      console.log('parent');
    },
    methodB(){
    // methodB(e) {
      // e.stopPropagation();
      // eventbubbling 방지
      console.log('child');
    },
    methodC(e) {
      for(let i=0;i<10000; i++){
        console.log(e);
      }
    },
    handlerI(e) {
      console.log(e);
      console.log(e.key);
      if(e.key==='Enter'){
        console.log(e.key,'!!');
      }
    }


    
  }
}
</script>

<style lang="scss" scoped>
  .parent {
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    .child {
      width: 100px;
      height: 100px;
      background-color: orange;
    }
  }
  .parent2 {
    width:200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    .child2 {
      width: 100px;
      height:2000px;
      background-color: orange;
    }
  }
</style>