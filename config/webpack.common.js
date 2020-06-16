const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, '../src'),
    },
  },
  output: {
    filename: 'static/js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  serve: {
    content: path.resolve(__dirname, '../dist'),
    port: 3000,
  },
}
