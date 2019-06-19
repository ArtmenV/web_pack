const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");///
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
    filename: 'js/[name].js'
  },
    module: {
        rules: [ 
          { 
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
            pretty: true
            }
        },

        ]
    },
  plugins:  [
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
        template: './pug/index.pug',
        title: 'Знакомство с Webpack'
    }),

],
  devServer: {
    port: 7001,
    contentBase: path.resolve(__dirname, 'dist'),
    overlay: true,
},
  watch: true,
  
};
// plugins: [new HtmlWebpackPlugin({
//   title: 'My site',
//   template: './pug/index.pug'
// })],
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'vendor'
    // }),
          //   { 
      //     test: /\.scss$/,
      //     use: ExtractTextPlugin.extract({
      //         use: ['css-loader', 'sass-loader'],
      //         fallback: 'style-loader'
      //     })
      // },
       