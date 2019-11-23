module.exports = {
  publicPath: "/",
  assetsDir: "static",
  productionSourceMap: false,
  // devServer: {
  //     proxy: {
  //         '/api':{
  //             target:'http://jsonplaceholder.typicode.com',
  //             changeOrigin:true,
  //             pathRewrite:{
  //                 '/api':''
  //             }
  //         }
  //     }
  // }
  devServer: {
    open: true, //---------------------------------------浏览器自动打开页面
    host: "localhost", //--------------------------------如果是真机测试，就使用这个IP
    port: 9999, //---------------------------------------代理端口
    https: false,
    hotOnly: false, //-----------------------------------热更新（webpack已实现了，这里false即可）
    proxy: {
      //------------------------------------------配置跨域
      "/api": {
        //-------------------------------------代理api
        target: "http://60.191.72.104:11505", //-----代理服务器api地址
        //target: "http://10.16.93.129:22000",
        //ws: true, //-------------------------------proxy启用websockets
        changOrigin: true, //------------------------是否跨域
        pathRewrite: {
          //----------------------------重写路径
          "^/api": "/"
        }
      }
    }
  }
};
