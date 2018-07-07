const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import our plugin -> ADDED IN THIS STEP
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src/'), // source folder path ->    
  JS: path.resolve(__dirname, 'src/js'),
};
// Webpack configuration
module.exports = {
  entry: ['./src/index.js', 'react-hot-loader/patch'],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  mode: 'development',
  // Dev server configuration -> ADDED IN THIS STEP
  // Now it uses our "src" folder as a starting point
  devServer: {
    contentBase: paths.SRC,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join('public/', 'index.html'), 
      filename: './index.html' 
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
    new CheckerPlugin()
],
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'awesome-typescript-loader'
        ],
      },
      {
          test: /\.scss$/,                    // made scss
          use:[
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
      }  
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
  }
};