const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app:['babel-polyfill', './app.js'],
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  devServer: {
    hot: false,
    host: '127.0.0.1',
    contentBase: "./build", // 本地服务器所加载的页面所在的目录
    // colors: false, // 终端输出结果为彩色
    // historyApiFallback: true, // 不跳转
    // inline: true, // 实时刷新
    port: 9090,
    disableHostCheck: true,
  },
  plugins: [
    // 静态块儿插件
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ["vendors", "manifest"]
    // }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      scope: "redux",
      manifest: require("./manifest.json"),
    }),

    // 给输出文件添加注释头部
    new webpack.BannerPlugin({
      banner: "hash:[hash]"
    }), //在这个数组中new一个就可以了

    // postcss
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')()
        ]
      }
    }),

    // 分离css
    new ExtractTextPlugin('[name].css'),

    // 引入js并带hash
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true, //引入js并带有hash
    }),

    //热加载插件，production环境禁止使用
    // new webpack.HotModuleReplacementPlugin(),
  ]
}