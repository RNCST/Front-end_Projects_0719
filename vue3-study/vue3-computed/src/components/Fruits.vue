<template>
  <!-- <section v-if="fruits.length > 0"> -->
  <section v-if="hasFruits">
    <h1>Fruits</h1>
    <ul>
      <li
        v-for="fruit in fruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
  <br />
  <section>
    <h1>Reverse Fruits</h1>
    <ul>
      <li
        v-for="fruit in reverseFruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
  <br />
</template>


<script>
export default {
  data() {
    return{
      fruits: [
        "Apple","Banana","Cherry"
      ]
    }
  },
  computed: {
    hasFruits() {
      return this.fruits.length>0
    },
    reverseFruits() {
      return this.fruits.map(fruit => {
        //'Apple' => [A,p,p,l,e] => [e.l.p.p.A] => 'elppA'
        return fruit.split('').reverse().join('')
      })
    }
  }
}
</script>