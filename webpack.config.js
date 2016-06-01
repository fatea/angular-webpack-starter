var webpack = require('webpack');
var path = require('path');
//since I write standard angular inject, i don't need ngAnnotatePlugin.
//You can add this back if you want it.
// var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

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
    filename: './bundle.js',
    publicPath: './'
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
    //add the following lines back if you use ngAnnotate Plugin
    // new ngAnnotatePlugin({
    //   add: true,
    //   // other ng-annotate options here
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    //add the following lines back if you want a minified bundle.js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {comments: false},
      //I use the source-map for debugging so I don't need the except here
       mangle: {
       except: ['$super', '$', 'exports', 'require']
       }
    })
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
      },

      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },

      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
