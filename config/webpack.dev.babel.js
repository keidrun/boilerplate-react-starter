import merge from 'webpack-merge';
import common, { outputPath } from './webpack.common.babel';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
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
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: outputPath,
    compress: true,
    hot: true,
    port: 3000,
  },
  devtool: 'eval-source-map',
});
