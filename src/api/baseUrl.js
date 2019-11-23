let baseUrl = "/"; // 本地代理
// const mockUrl = 'ioc-server' //测试接口
//const mockUrl = '/' //真实接口不需要这个字段，打包时注掉

switch (process.env.NODE_ENV) {
  case "development":
    baseUrl = "http://117.158.91.120:18080/"; // 测试环境url
    break;
  case "production":
    baseUrl = "http://117.158.91.120:18080/"; // 生产环境url
    break;
}

export default baseUrl;
