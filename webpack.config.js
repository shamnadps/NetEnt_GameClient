module.exports = {
  entry: {
    'build/main.bundle': './es6/main',
    'build/main.spec.bundle': './test/main.spec'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: "umd",
    library: "Game"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      }
    }]
  }
};
