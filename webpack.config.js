const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './start.js',    
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({template: path.resolve(__dirname, './index.html'),
                             inject: true})                            
                        
           ],
  module: {
    rules: [
      {test: /\.html$/,  use: [ {loader: "html-loader"}] },
      {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource'},
     // { test: /\.(png|svg|jpg|gif)$/i,  use: ['file-loader']},       
     // { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.s[ac]ss$/i, use: ["style-loader",MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]},
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"]},
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.m?js$/, exclude: /(node_modules|bower_components)/, use: {loader: 'babel-loader',  options: {
          presets: ['@babel/preset-env']} }},
         { test: /\.(woff|woff2|eot|ttf|otf)$/, type: 'asset/resource'}
         ]},
  output: {                     
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
devtool: 'inline-source-map',
mode: 'development',      
  }
