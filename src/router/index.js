import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", //去掉url中的#
  routes: [
    {
      path: "/",
      component: () => import("@/components/common/Home.vue"),
      meta: {
        title: "自述文件"
      },
      children: [
        {
          path: "/index",
          component: () => import("@/views/Home.vue"),
          meta: {
            title: "系统首页"
          }
        },
        {
          path: "/index1",
          component: () => import("@/views/Home.vue"),
          meta: {
            title: "系统首页1"
          }
        },
        {
          path: "/index2",
          component: () => import("@/views/Home.vue"),
          meta: {
            title: "系统首页2"
          }
        },
        {
          path: "/index3",
          component: () => import("@/views/Home.vue"),
          meta: {
            title: "系统首页3"
          }
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/components/Login.vue")
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  base: process.env.BASE_URL
});
