const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    preloaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css?sourceMap'
    }]
  }
};
