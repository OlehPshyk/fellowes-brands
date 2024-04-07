const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin');

const dirApp = path.join(__dirname, 'src/js')
const dirShared = path.join(__dirname, 'src/static')
const dirStyles = path.join(__dirname, 'src/styles')
const dirNode = 'node_modules'

module.exports = {
  node: false,
  entry: [
      path.join(dirApp, 'app.js'),
      path.join(dirStyles, 'main.scss')
  ],
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    modules: [
        dirApp,
        dirShared,
        dirStyles,
        dirNode
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(pdf|gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/img/',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/fonts/',
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/static/', to: './static/'},
      ]
    }),
    // new webpack.ProvidePlugin({
    //   '$': 'jquery',
    //   'jQuery': 'jquery',
    //   'window.jQuery': 'jquery',
    //   'window.$': 'jquery',
    //   Popper: ['popper.js', 'default']
    // }),
    // ...generateHTMLPlugins(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
  externals: {
    jquery: 'jQuery'
  }
};
