<template>
    <div class="Sidebar" id="Sidebar">
        <div class="sidebar-logo"><img src="../../assets/img/login/logo.png" alt="" /></div>
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            background-color="#222222"
            text-color="#bfcbd9"
            active-text-color="#ffc132"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">
                                    {{ subItem.title }}
                                </template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i v-if="item.icon" :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    index: '/index',
                    title: '热销'
                },
                {
                    index: 'page1',
                    title: '泡沫之夏'
                },
                {
                    index: 'page2',
                    title: '红颜如玉'
                },
                {
                    index: 'page3',
                    title: '浮云朵朵'
                },
                {
                    index: 'page4',
                    title: '红袍小鲜奶'
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            var self = this;
            return self.$route.path.replace('/index', '');
        }
    },
    created() {}
};
</script>

<style scoped>
#Sidebar {
    position: fixed;
    width: 123px;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    background-color: #222222;
}
#Sidebar .sidebar-logo {
    position: fixed;
    width: 123px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #171717;
    z-index: 100;
}
#Sidebar .sidebar-el-menu:not(.el-menu--collapse) {
    width: 123px;
}
#Sidebar > ul {
    border: none !important;
    padding-top: 80px;
    min-height: calc(100% - 80px);
    background-color: transparent !important;
}
#Sidebar > ul li {
    text-align: left;
    background-color: transparent !important;
}
#Sidebar > ul li.is-active,
#Sidebar > ul li:hover {
    color: #ffc132 !important;
    background-color: #2e2e2e !important;
}
</style>
