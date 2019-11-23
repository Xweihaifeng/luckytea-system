import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import axios from "axios";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import i18n from "./i18n";
import "./plugins/element.js";

Vue.use(Element);
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
