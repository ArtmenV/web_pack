const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const merge = require('webpack-merge');
// const pug = require('./webpack/pug')
//const webpack = require('webpack');
//
module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
   site: './js/index.js', 
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My site',
    template: './pug/index.pug'
  })],

//   devServer: {
//     port: 3001,
//     contentBase: path.resolve(__dirname, 'dist'),
// },
  watch: true,
  

 
};

