const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: {
    index : './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      // title: 'Shape Tracker',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
    filename: 'iss.html',
    template: './src/iss.html',
    inject: true,
    chunks: ['index']
  }),new HtmlWebpackPlugin({
    filename: 'rover.html',
    template: './src/rover.html',
    inject: true,
    chunks: ['index']
  }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
     
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ]
  }
};
