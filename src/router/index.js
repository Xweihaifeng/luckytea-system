import Vue from "vue";
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: "*",
        redirect: "/"
    }, {
        path: "/login",
        component: () => import("@/components/Login.vue")
    }, {
        path: "/",
        component: () => import("@/components/common/Home.vue"),
        meta: {
            title: "自述文件"
        },
        children: [{
            path: "/index",
            component: () => import("@/views/page/index.vue"),
            meta: {
                title: "热销"
            }
        }, {
            path: "/page1",
            component: () => import("@/views/page/page1.vue"),
            meta: {
                title: "泡沫之夏"
            }
        }, {
            path: "/page2",
            component: () => import("@/views/page/page2.vue"),
            meta: {
                title: "红颜如玉"
            }
        }, {
            path: "/page3",
            component: () => import("@/views/page/page3.vue"),
            meta: {
                title: "浮云多多"
            }
        }, {
            path: "/page4",
            component: () => import("@/views/page/page4.vue"),
            meta: {
                title: "红袍小鲜奶"
            }
        }]
    }],
    mode: "history", //去掉url中的#
    base: process.env.BASE_URL
});
