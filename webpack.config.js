var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin'); 

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      { test: /\.vue$/, include: [path.resolve(__dirname, './src/')], exclude: /node_modules/, loader: 'vue-loader' },
      { test: /\.js$/, include: [path.resolve(__dirname, './src/')], exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
    }
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Intl Message Editor',
        template: path.resolve(__dirname, './index.html'),
      }),
      new VueLoaderPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    port: 9000,
    inline: true,
  }
};