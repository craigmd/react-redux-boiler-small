'user-strict'

var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV;

var config = {
  entry: {
    path: path.resolve(__dirname, 'src', 'index.js')
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (env === 'development') {
  config.devtool = 'eval-source-map';
  config.output = {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
} else if (env === 'production') {
  config.devtool = 'cheap-source-map'
  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

module.exports = config
