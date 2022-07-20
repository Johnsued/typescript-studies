const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'app', 'app.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'app'),
        
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'app')
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app', 'index.html')
  })],
  resolve: {
    extensions: ['.js','.ts'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};