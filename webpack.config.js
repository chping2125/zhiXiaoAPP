var Et = require('extract-text-webpack-plugin');
var Webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry: {
		app:__dirname + "/src/scripts/app.js",
	},
  output: {
    path: __dirname + "/prd/",//打包后的文件存放的地方
    //filename: "[name]-[hash].js"//打包后输出文件的文件名并且版本控制
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module:{
    loaders:[
      {
        test:/\.css$/,
        loader:'style!css'
      },
      {
        test: /\.scss$/,
        loader: Et.extract('style','css!sass')//从js中抽离scss文件
        // loader:'style!css!sass'
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
        loader:'babel'
      },
      {
        test:/\.string$/,
        loader:'string'
      },
      {
        test:/\.vue$/,
        loader:'vue'
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-withimg-loader'
      // },
      {
　　　　　test: /\.(png|jpg|jpeg|gif)$/,
　　　　　loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'//图片打包限制，这个限制并不是说超过了就不能打包，而是指当图片大小小于限制时会自动转成 base64 码引用。上例中大于8192字节的图片正常打包，小于8192字节的图片以 base64 的方式引用。
　　　　}
    ]
  },
  plugins: [
    //new Webpack.optimize.UglifyJsPlugin(),//js文件压缩
    // new Et('[name]-[hash].css')//从js中抽离scss文件并且版本控制
    new Et('bundle.css')//从js中抽离scss文件
    // new HtmlWebpackPlugin({
    //   title: 'hellow webpack',
    //   filename: 'index.html',
    //   template: '../../index.html',
    //   inject:'body',
    //   minify:{    //压缩HTML文件
    //     removeComments:true,    //移除HTML中的注释
    //     collapseWhitespace:true    //删除空白符与换行符
    //   }
    // }),
    // new HtmlWebpackPlugin()
  ],
  //vue配置
  vue:{
    loaders:{
      js: 'babel',
      // css: Et.extract('vue-style-loader', 'css!sass'),
      sass: Et.extract('vue-style-loader', 'css!sass')
    }
  },
  devServer: {
    contentBase:  __dirname +'/prd',//本地服务器所加载的页面所在的目录
		port:80,
    colors: true,//终端中输出结果为彩色
    //historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    proxy:{
      '/zhixiao/*':{
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite:{
          '/^rest/':''
        }
      }
    }
  }
}
