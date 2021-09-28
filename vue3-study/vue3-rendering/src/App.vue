<template>
  <template
    v-if="true"
    id="if-rendering">
    <button @click="handler">
      Click here
    </button>
    <h1 v-if="isShow">
      Hello
    </h1>
    <h1 v-else-if="count>3">
      Count, {{ count }}
    </h1>
    <h1 v-else>
      Vue
    </h1>

    <br />
  
    <template v-if="isShow">
      <!-- div 대신 template을 쓰도록하면 false시 개발자코드에서 하위태그로 감싸는 과정을 없애준다.. -->
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>


    <h1 v-if="isShow">
      Hello
    </h1>
    <!-- false시에 Rendering 자체를 하지않는다. -->
    <h1 v-show="isShow">
      Hello
    </h1>
  <!-- true false에 상관없이 Rendering 자체는 하지만 display none을 한다 -->
  <!-- 
    v-show는 항상 렌더링이 되어 DOM에 남아 있다. template에 사용할 수 없다.
    v-if는 실제 조건부 렌더링이며, lazy(게으르다)이며 조건이 거짓이면 아무 작업도 하지 않고
    true가 될때까지 렌더링되지 않는다.
    v-show는 구조적으로는 렌더링이 되고 시작을 하고 CSS 조작으로 안보이게 된다.

    V-IF는 전환비용이 높으나 V-SHOW는 초기 렌더링 비용이 높다.

    자주 전환이되는것이라면 V-SHOW를 사용하는 것이 좋고 런타임시 조건이 변경되지않는다면
    V-IF를 사용하는것이 낫다.
   -->
  </template>
  <template
    v-if="true"
    id="list for-rendering">
    <br /><br /><br /><br />
    <ul>
      <li
        v-for="(f, i) in fruits"
        :key="f">
        {{ f }}-{{ i+1 }}
      </li>
      <br />
      <li
        v-for="f in newFruits"
        :key="f.id">
        {{ f.name }} - {{ f.id +1 }}
      </li>
    </ul>
    <br />
    <button @click="handler2">
      CLick here - for
    </button>
    <ul>
      <li
        v-for="{id , name} in newFruits"
        :key="id">
        {{ name }} - {{ id }}
      </li>
    </ul>
  </template>
</template>

<script>
import shortid from 'shortid'

export default {
  data() {
    return {
      isShow: true,
      count: 0.5,
      fruits: ['Apple','Banana','Cherry'],
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 0.5;
    },
    handler2() {
      this.fruits.push('Orange')
    }
    // https://v3.ko.vuejs.org/guide/list.html#%E1%84%87%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%AF-%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC-%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%B5
    // 배열 반응 감시 .. push pop shift unshift splice sort reverse
  },
  computed: {
    newFruits() {
      return this.fruits.map((f) => {
        return{
        // id: i,
        id: shortid.generate(),
        name: f
        }
      })
    },

  }
}
</script>