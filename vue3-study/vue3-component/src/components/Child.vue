<template>
  <div>
    Child : {{ msg }}
  </div>
</template>

<script>
export default {
  // props: {
  //   msg: {
  //     type: String,
  //     default: ''
  //   }
  // },
  inject:[
    'msg'
  ]
  // provide로 상위에서 던져준값을 inject 배열에 넣어서 data 형식으로 슬 수 있다.
  
}
</script>