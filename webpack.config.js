const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 配置环境
  mode: 'development',

  devtool: 'source-map',

  // 配置入口
  entry: {
    'js/app': './src/app.js'
  },

  target: 'web',

  // 配置出口
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.art$/,
        use: {
          loader: 'art-template-loader',
          options: {
            escape: false
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  // 配置插件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: true
    }),

    new CopyPlugin({
      patterns: [
        {
          from: './public/favicon.ico',
          // to: path.join(__dirname, './dist/favicon.ico'),
          to: './'
        },
        {
          from: './public/libs',
          // to: path.join(__dirname, './dist/libs'),
          to: './libs'
        }
      ]
    }),

    new CleanWebpackPlugin()
  ],

  // 配置server
  devServer: {
    // host: '10.9.72.224',
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9000,
  }
}