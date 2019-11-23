import api from "./baseAjax.js";
import baseUrl from "./baseUrl";
const mockUrl = "ioc-server"; //测试接口
const header = {};

// 查询事件总量
export const eventnumber = params =>
  api.get(
    baseUrl + mockUrl + "/ioc/portal/government/governmentservice/eventnumber",
    params,
    header
  );
