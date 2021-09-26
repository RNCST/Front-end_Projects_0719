<template>
  <h1>
    {{ count }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      count: 2,
    };
  },
  beforeCreate(){
    console.log("before create", this.count);
    //beforeCreate 같은경우 component가 생성되기 직전에 실행되는 lifecycle Hook이다.
  },
  created() {
    console.log("created",this.count);
    console.log(document.querySelector("h1"));
  },
  beforeMount(){
    console.log('before mount');
    console.log(document.querySelector("h1"));
    //beforeMount => component가 html에 연결되기전
  },
  mounted() {
    console.log("mounted");
    console.log(document.querySelector("h1"));
    // 현재 component가 html에 연결이 되어 있음 
    // https://v3.ko.vuejs.org/guide/instance.html#%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%91%E1%85%B3%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF-%E1%84%92%E1%85%AE%E1%86%A8
  },
};
</script>