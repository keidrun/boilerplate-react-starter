import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'
import FlowWebpackPlugin from 'flow-webpack-plugin'

export const outputPath = path.resolve(__dirname, '../build')

export default {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:8].js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
    }),
    new StylelintPlugin({
      files: 'src/**/*.css',
      fix: true,
    }),
    new FlowWebpackPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
}
