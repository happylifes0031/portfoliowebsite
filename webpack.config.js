const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import our plugin -> ADDED IN THIS STEP
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production'
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src/'), // source folder path ->    
  JS: path.resolve(__dirname, 'src/js'),
};
// Webpack configuration
module.exports = {
  entry: ['./src/index.js'],
  devtool: 'inline-source-map',
  output: {
    path: paths.DIST,
    filename: '[name].[hash].js',
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
      template: 'public/index.html', 
      filename: 'index.html' 
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    }), 
    new CopyWebpackPlugin([
      {from:'src/images',to:'images'}
  ]), 
],
  module: {
    rules: [
      {
        test:  /\.(js|jsx|tsx|ts)$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:[
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
            loader: 'file-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  }
};