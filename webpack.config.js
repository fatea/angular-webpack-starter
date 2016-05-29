var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  //插件项
  plugins: [],
  //页面入口文件配置
  entry: [
    'babel-polyfill',
    './app/test.js'
  ],

  output: {
    filename: './app/bundle.js'
  },

  resolve: {
    modulesDirectories: ["node_modules", "bower_components"]
  },
  plugins: [
    new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
    }),

    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    ),

    new ngAnnotatePlugin({
      add: true,
      // other ng-annotate options here 
    }),
    //add the following lines back if you want a minified bundle.js
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   // mangle: {
    //   // except: ['$super', '$', 'exports', 'require']
    //   // }
    // })
  ],
  module: {
    loaders: [
      {
      test: /\.js$/,
      include: [path.resolve(__dirname, "app"), ],
      exclude: /(node_modules|bower_components|components)/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: [
          'es2015',
          'stage-0'
        ]
      }
      },
      {
        test: /jquery.js$/,
            loader: 'expose?jQuery'
      }
    ]
  }
};