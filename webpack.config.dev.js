const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dirNode = 'node_modules'
const dirApp = path.join(__dirname, 'app')
const dirAssets = path.join(__dirname, 'app/assets')

const appHtmlTitle = 'React tutorial'

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    vendor: [
      'lodash',
    ],
    bundle: path.join(dirApp, 'src/index.js'),
  },
  resolve: {
    modules: [
      dirNode,
      dirApp,
      dirAssets,
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: process.env.NODE_ENV === 'dev',
    }),
    new webpack.ProvidePlugin({
      lodash: 'lodash',
      Promise: 'bluebird',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
      title: appHtmlTitle,
    }),

    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
          plugins: ['transform-class-properties'],
        },
      },
      // STYLES
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }, {
          loader: 'import-glob-loader',
        }],
      },

      // EJS
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },

      // IMAGES
      {
        test: /\.(jpe*g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js',
  },
}
