var path = require('path');
var webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname+'/index.html',
  filename: 'index.html',
  inject: 'body',
});
var environment = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    table: [__dirname + "/app/js/app", 'webpack/hot/dev-server']
  },

  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
    publicPath: "/" //where index.html is
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: [/node_modules/]
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: 'babel-loader' //preset is better to be set in .babelrc, it will be easier to manage if there are more than one env
      },
      {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  stats: {
    colors: true
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: './'
  },
  resolve: {
    modulesDirectories: [ 'app/js', 'node_modules' ]
  },
  plugins: [HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(environment)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

//package.json
// --devtool eval 會顯示出發生錯誤的行數與檔案名稱
// --progress 會顯示出打包的過程
// --colors 會幫 webpack 顯示的訊息加入顏色
// --content-based build 指向專案最終輸出的資料夾
/*
export NODE_ENV=development --for linux&osx
set NODE_ENV=development --for windows
*/

