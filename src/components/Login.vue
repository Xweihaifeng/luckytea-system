<template>
    <div class="Login" id="Login">
        <div class="login-box">
            <div class="login-title"><img src="../assets/img/login/logo.png" alt="" /></div>
            <el-form :model="params" ref="login" label-width="0px" class="login-form">
                <el-form-item prop="username" class="username-box">
                    <el-input v-model="params.username" placeholder="请输入用户名" class="username"><el-button slot="prepend" icon="el-icon-user"></el-button></el-input>
                </el-form-item>
                <el-form-item prop="password" class="password-box">
                    <el-input type="password" placeholder="请输入密码" class="password" v-model="params.password" @keyup.enter.native="submitForm()">
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-warn">{{ warnning }}</div>
                <div class="login-btn"><el-button type="primary" @click="submitForm()">登录</el-button></div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            params: {
                username: 'admin',
                password: 'Admin@123'
            },
            warnning: ''
        };
    },
    methods: {
        verificate(o) {
            var self = this;
            var a = /^[a-zA-Z0-9_-]{4,16}$/;
            var b = /^.*(?=.{6,18})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%_^&*? ]).*$/;
            if (a.test(o.username) == false) {
                self.warnning = '用户名规则：[4-16] [字母，数字，下划线，减号]';
                return false;
            }
            if (b.test(o.password) == false) {
                self.warnning = '密码规则：[6-18] [至少1个大写+小写+数字+特殊字符]';
                return false;
            }
            return true;
        },
        submitForm() {
            var self = this;
            if (self.verificate(self.params) == true) {
                self.$message.success('登录成功');
                localStorage.setItem('ms_username', self.params.username);
                self.$router.push('/');
            } else {
                self.$message.error(self.warnning);
                setTimeout(() => (self.warnning = ''), 1500);
                return false;
            }
        }
    }
};
</script>

<style scoped>
.Login {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login/login-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.login-title {
    width: 100%;
    display: flex;
    justify-content: center;
}
.login-title img {
    width: 126px;
}
.login-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 445px;
    margin: -190px 0 0 -175px;
    overflow: hidden;
}
.login-form {
    padding: 30px 30px;
}
.login-warn {
    width: 100%;
    display: flex;
    height: 30px;
    font-size: 14px;
    color: #ff3428;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 57%;
    height: 48px;
    border-radius: 26px;
    font-size: 18px;
    color: black;
    border: none;
    background: #ffc132;
}
.login-btn :hover {
    background: #f9b10b;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
.username-box {
    margin: 30px 0 24px;
}
.password-box {
    margin-bottom: 20px;
}
.username,
.password {
    font-size: 16px;
    height: 48px;
}
</style>
