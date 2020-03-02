const { resolve } = require('path')

module.exports = {
  entry: ['@babel/polyfill', './app/index.js'],
  outpu: {
    path: resolve(__dirname, 'server/public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  devServer: {
    contentBase: resolve(__dirname, 'src'),
    port: 9000,
  },
}
