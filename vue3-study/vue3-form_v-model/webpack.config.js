//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

//export
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    // 확장자 생략작업
    alias: { //경로별칭
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  entry: './src/main.js',
  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          // 'vue-style-loader',
          // vue 확장자 내부에서 style 태그를 해석및 동작할수있게해주는 loader
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          'file-loader'
        ]
        // 이미지 불러오기
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    host: 'localhost'
  }
}