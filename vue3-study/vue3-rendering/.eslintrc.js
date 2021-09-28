
module.exports = {
  env: {
    browser: true,
    node: true
  },
  //code 검사는 browser nodejs 환경에서 모두 하도록
  extends: [
    //vue
    // 'plugin:vue/vue3-essential', lv1
    'plugin:vue/vue3-strongly-recommended', //lv2
    // 'plugin:vue/vue3-recommended', lv3 제일 엄격 
    //js
    'eslint:recommended'
  ],
  //code 검사를 할 기본적인 규칙
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    //https://eslint.vuejs.org/rules/html-closing-bracket-newline.html#vue-html-closing-bracket-newline
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always", //<img />
        "normal": "never", //<div><</div>
        "component": "always" //<component> , <HelloWorld />
      },
      "svg": "always",
      "math": "always"
    }]
    // extends vue 기본 규칙을 쓰게되면 기부분은 크게 필요없다
  }
}