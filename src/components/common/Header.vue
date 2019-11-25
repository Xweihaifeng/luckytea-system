<template>
    <div class="Header" id="Header">
        <div class="header-title">小确茶点餐系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="header-btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom" class="header-msg"><i class="el-icon-rank"></i></el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="header-btn-bell">
                    <el-tooltip effect="dark" :content="message ? `有${message}条未读消息` : `消息中心`" placement="bottom" class="header-msg">
                        <router-link to="/tabs"><i class="el-icon-message-solid"></i></router-link>
                    </el-tooltip>
                    <span class="header-btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="header-user-avator"><img src="../../assets/img/login/avatar-def.jpg" /></div>
                <!-- 用户名下拉菜单 -->
                <div class="header-user-name" trigger="click" @click="handleCommand">
                    <span>
                        {{ username }}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <ul slot="dropdown" class="header-more" v-if="headermore">
                        <li @click="modifyPW"><img src="../../assets/img/login/password.png" alt="">修改密码</li>
                        <li @click="loginout" class="loginout"><img src="../../assets/img/login/signout.png" alt="">退出登录</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            collapse: false,
            fullscreen: false,
            username: localStorage.getItem('ms_username') || '管理员',
            message: 2,
            headermore: false
        };
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand() {
            var self = this;
            self.headermore = !self.headermore;
        },
        // 注销登录
        loginout() {
            var self = this;
            localStorage.removeItem('ms_username');
            self.$router.push('/login');
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
            } else {
                if (element.requestFullscreen) element.requestFullscreen();
                else if (element.webkitRequestFullScreen) element.webkitRequestFullScreen();
                else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
                else if (element.msRequestFullscreen) element.msRequestFullscreen();
            }
            this.fullscreen = !this.fullscreen;
        },
        // 修改密码
        modifyPW() {
            var self = this;
            this.$emit("activePassword", true);
        }
    },
    mounted() {}
};
</script>

<style scoped>
.Header {
    position: relative;
    width: calc(100% - 123px);
    height: 80px;
    left: 123px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 40px 0 20px;
    font-size: 22px;
}
.Header .header-title {
    line-height: 80px;
    color: #222222;
    font-size: 24px;
}
.header-user-con {
    display: flex;
    height: 80px;
    align-items: center;
}
.header-btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.header-btn-bell,
.header-btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.header-btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.header-btn-bell {
    color: #fff;
}
.header-user-avator {
    margin-left: 20px;
}
.header-user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.header-msg {
    color: #a9a9a9;
}
.header-user-name {
    margin-left: 10px;
    cursor: context-menu;
    font-size: 16px;
    line-height: 35px;
}
.header-more {
    position: absolute;
    width: 136px;
    right: 40px;
    top: 56px;
    background-color: #FFFFFF;
    color: #222222;
    border-radius: 2px;
    box-shadow: 0px 1px 4px 0px #ccc;
    z-index: 1000;
}
.header-more li {
    height: 52px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15px;
    font-size: 16px;
}
.header-more li:hover {
    cursor: pointer;
    background-color: #f2f2f2;
}
.header-more li.loginout {
    background-color: #ffc231;
}
.header-more li img {
    margin: 0 6px;
}
</style>
