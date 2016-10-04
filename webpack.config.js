module.exports = {
  entry: {
    path: './src/index.js'
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build'
  }
}
