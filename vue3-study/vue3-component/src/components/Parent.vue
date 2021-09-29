<template>

  <!-- <Child :msg="msg"/> -->
  <!-- Provide를통해 msg를 자동으로 하위컴포넌트로 제공해주고있다. -->
  Parent: {{ msg }}
  <Child />
  

</template>

<script>
import Child from '~/components/Child'

export default {
  components: {
    Child
  },

  // props: {
  //   msg: {
  //     type: String,
  //     default: ''
  //   }
  // },
  inject:[
    'msg'
  ]
}
</script>