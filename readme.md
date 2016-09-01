###repos :github.com/nothingneed/react-starter-kit.git

#项目目的
- 使用react + redux 架构搭建的实际生产项目框架
- 特别用于后端服务器非nodejs时，可以方便的开发和调试
- 各个功能模块都使用目前社区较为推荐的最佳实践 

#使用说明 

##启动方式
- npm start：node server提供首页入口及模拟api server，webpack dev server提供静态文件
- npm run devserver: 启动webpack - HotDevServer
- npm run biuld: 生成生产文件

##feature：
1： react + redux + router + cssModule
2： webpack配置动态生成
3： 静态资源加hash，入口使用模板html动态生成
4： 开发时react-hot-loader + 运行时sourceMap调试
