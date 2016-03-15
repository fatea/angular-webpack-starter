var webpack = require('webpack');
module.exports = {
  //插件项
  plugins: [],
  //页面入口文件配置
  entry: {
    index:'./app/main.js'
  },
  output: {
    filename: './app/bundle.js'
  }
};