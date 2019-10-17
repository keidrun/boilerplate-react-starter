import merge from 'webpack-merge'
import base from './webpack.base.babel'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

export default merge(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
})
