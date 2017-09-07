var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', './src/index.js'],
  externals: {
    'react': 'react',
    'prop-types': 'prop-types'
  },
  output: {
    path: './lib',
    filename: "index.js",
      library: 'react-youtube-modal',
      libraryTarget: 'umd',
      umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?includePaths[]=./node_modules'
      }
    ]
  }
};