module.exports = {
  entry: './es6/main.js',
  output: {
    path: __dirname,
    filename: './build/main.bundle.js'
  },
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}
