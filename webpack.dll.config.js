const webpack = require('webpack');
const path = require('path');
const vendors = ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk'];

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "manifest.json"),
      name: '[name]',
      context: __dirname,
    }),
  ],
};