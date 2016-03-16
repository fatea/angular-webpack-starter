var webpack = require('webpack');
module.exports = {
  //插件项
  plugins: [],
  //页面入口文件配置
  entry: {
    'babel-polyfill',
    index:'./app/main.js'
  },



  output: {
    filename: './app/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "app"),],
        exclude: /(node_modules|bower_components|components)/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: [
            'es2015',
            'stage-0'
          ]
        }
      }
    ]
  }
};