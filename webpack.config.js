var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var server = require('./server/server');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [path.resolve(__dirname, './src/')],
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, './src/')],
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './src/')],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [path.resolve(__dirname, './src/')],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: [path.resolve(__dirname, './src/')],
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
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
    before(app) {
      app.use(server)
    },
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    port: 9000,
    inline: true,
  }
};