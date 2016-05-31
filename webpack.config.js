var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  //插件项
  plugins: [],

  //I comment the entry config out because it is configured in Gulpfile.js instead
  //If you don't use Gulp, add them back
  //页面入口文件配置
  // entry: [
  //   'babel-polyfill',
  //   './app/test.js'
  // ],

  output: {
    filename: './bundle.js'
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
