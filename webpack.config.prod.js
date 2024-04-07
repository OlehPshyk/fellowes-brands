
const glob = require('glob');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const common = require('./webpack.config.common');

const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map((dir) => new HTMLWebpackPlugin({
  filename: path.basename(dir), // Output
  template: dir, // Input
  inject: false,
}));

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 1 }]
          ],
        },
      },
    }),
    new NodePolyfillPlugin(),
    ...generateHTMLPlugins(),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
            {
                loader: ImageMinimizerPlugin.loader,
                options: {
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminMinify,
                        options: {
                            plugins: [
                                "imagemin-gifsicle",
                                "imagemin-mozjpeg",
                                "imagemin-pngquant",
                            ],
                        },
                    },
                },
            },
        ],
      },
    ],
  },
});
