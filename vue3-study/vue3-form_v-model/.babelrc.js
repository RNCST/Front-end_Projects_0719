module.exports = {
  presets: ["@babel/preset-env"],
  // => 따로 명시해야하는 js 기능을 한번에 지원
  plugins: [
    ["@babel/plugin-transform-runtime"],
    //비동기처리를 위해.
  ],
};
