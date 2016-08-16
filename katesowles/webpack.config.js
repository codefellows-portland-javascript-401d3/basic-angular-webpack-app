const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './src/app.js',
  output : {
    path : './dist',
    filename : 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template : './app/index.html'
    })
  ],
  module : {
    preLoaders : [{
      test : /\.js$/,
      loader : 'eslint-loader',
      exclude : '/node_modules/'
    }],
    loaders : [{
      test : /\.js$/,
      loader : 'babel',
      exclude : /node_modules/,
      query : {
        presets : ['es2015']
      }
    }, {
      test : /\.css$/,
      loader : 'style!css?sourceMap'
    }]
  }
};
