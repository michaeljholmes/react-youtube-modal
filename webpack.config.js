var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: './lib',
    filename: "index.js"
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