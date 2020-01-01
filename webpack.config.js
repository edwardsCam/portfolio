var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 3,
              sourceMap: true,
            },
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ]
  },
  plugins: process.env.ANALYZE_BUNDLE === '1' ? [
    new BundleAnalyzerPlugin(),
  ] : [],
  devtool: 'eval-source-map',
  stats: {
    colors: true
  },
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/dist/',
    historyApiFallback: true,
  },
};
