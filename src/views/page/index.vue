<template>
    <div id="Index">
        <article class="index-goods-box">
            <section class="index-search-box">
                <aside>
                    <input type="text" placeholder="请输入菜单名称" autocomplete="on" v-model="menuname" @keyup.enter="contentSearch" />
                    <span @click="contentSearch"><img src="../../assets/img/login/search-down.png" alt="" /></span>
                </aside>
            </section>
            <section class="index-goods-list">
                <ul>
                    <li v-for="(item, inde) in goodslist" :key="inde">
                        <div class="index-goods-img">
                            <img v-if="item.url" :src="set_img(item.url)" alt="" />
                            <img v-else src="../../assets/img/login/goods-def.png" alt="" />
                        </div>
                        <div class="index-goods-info">
                            <h6>{{ item.name }}</h6>
                            <em class="add" @click="shopNumSel(item)"></em>
                        </div>
                        <p class="index-goods-money">
                            <span>&yen; {{ item.price }}</span>
                        </p>
                    </li>
                </ul>
                <div class="jqsjjc-mod-1114">
                    <el-pagination
                        small
                        background
                        :pager-count="5"
                        :page-size="5"
                        layout="prev, pager, next, total, jumper"
                        :total="500"
                        popper-class="pagination"
                    ></el-pagination>
                </div>
            </section>
        </article>
        <article class="index-price-box">
            <section class="index-price-title">
                <h5>点餐</h5>
                <img src="../../assets/img/login/clear-def.png" alt="" @click="clearPriceList" />
            </section>
            <section class="index-price-num">
                <span>排号：</span>
                <span>032</span>
            </section>
            <section class="index-price-list">
                <ul v-for="(item, inde) in pricelist" :key="inde">
                    <li class="index-price-info">
                        <h6>{{ item.name }}</h6>
                        <aside class="index-flex">
                            <em class="del" @click="shopNumDel"></em>
                            <input type="text" class="index-price-unit" v-model="item.num" />
                            <em class="add" @click="shopNumAdd"></em>
                        </aside>
                    </li>
                    <li class="index-price-money">
                        <span>&yen; {{ item.price }}</span>
                    </li>
                    <li class="index-price-remark">
                        <p>备注：{{selType(1,item.gg)}} {{selType(2,item.wd)}} {{selType(3,item.td)}}</p>
                        <p>x 2</p>
                    </li>
                </ul>
            </section>
            <section class="index_price-account">
                <div class="index-price-sum">
                    <span>共{{shopNumSum}}件：</span>
                    <var>&yen; {{shopPriceSum}}</var>
                </div>
                <div class="index-price-pay"><button>立即支付</button></div>
            </section>
        </article>
        <article class="index-mask-popup" v-if="maskType.isMask">
            <div class="index-mask-box" @click.self="closeMask">
                <section class="index-password-popup" v-if="maskType.isPw">
                    <aside class="index-password-popup-title">
                        <h5>修改密码</h5>
                        <span @click="closeMask"></span>
                    </aside>
                    <ul>
                        <li>
                            <label for="">当前密码：</label>
                            <input type="password" v-model="passwordEdit.passwordOld" />
                        </li>
                        <li>
                            <label for="">新密码：</label>
                            <input type="password" v-model="passwordEdit.passwordNew1" />
                        </li>
                        <li>
                            <label for="">确认密码：</label>
                            <input type="password" v-model="passwordEdit.passwordNew2" />
                        </li>
                    </ul>
                    <p>
                        <button @click="closeMask">取消</button>
                        <button @click="submitMonifyPW">确认修改</button>
                    </p>
                </section>
                <section class="index-goods-popup" v-if="maskType.isSp">
                    <aside class="index-password-popup-title">
                        <h5>添加购物</h5>
                        <span @click="closeMask"></span>
                    </aside>
                    <ul>
                        <h5>{{joinShopcart.mingzi}}</h5>
                        <li>
                            <label for="">规格:</label>
                            <div><span v-for="(v,k) in specificate" :key="k" @click="specificateEvent(k)" :class="joinShopcart.guige==k?'sel':''">{{v.name}}</span></div>
                        </li>
                        <li>
                            <label for="">温度:</label>
                            <div><span v-for="(v,k) in temperature" :key="k" @click="temperatureEvent(k)" :class="joinShopcart.wendu==k?'sel':''">{{v.name}}</span></div>
                        </li>
                        <li>
                            <label for="">糖度:</label>
                            <div><span v-for="(v,k) in sugarcontent" :key="k" @click="sugarcontentEvent(k)" :class="joinShopcart.tangdu==k?'sel':''">{{v.name}}</span></div>
                        </li>
                        <li>
                            <label for="">价格:</label>
                            <div><var>&yen; {{joinShopcart.jiage}}</var></div>
                        </li>
                        <li>
                            <label for="">数量:</label>
                            <div class="index-flex">
                                <em class="del" @click="shopNumDel"></em>
                                <input type="text" class="index-price-unit" v-model="joinShopcart.shuliang" />
                                <em class="add" @click="shopNumAdd"></em>
                            </div>
                        </li>
                    </ul>
                    <p>
                        <button @click="joinShoppingCart">加入购物车</button>
                    </p>
                </section>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuname: null,
            goodslist: [
                { id: '1', name: '玉米大红袍1', url: '', price: 123.11 },
                { id: '2', name: '玉米大红袍2', url: '', price: 234.22 },
                { id: '3', name: '玉米大红袍3', url: '', price: 345.33 },
                { id: '4', name: '玉米大红袍4', url: '', price: 456.44 },
                { id: '5', name: '玉米大红袍5', url: '', price: 567.55 },
                { id: '6', name: '玉米大红袍6', url: '', price: 678.66 },
                { id: '7', name: '玉米大红袍7', url: '', price: 789.77 },
                { id: '8', name: '玉米大红袍8', url: '', price: 890.88 }
            ],
            pricelist: [],
            maskType: {
                isMask: false,
                isPw: false,
                isSp: false
            },
            joinShopcart: {
                id: null,
                mingzi: null,
                guige: 1,
                wendu: 1,
                tangdu: 1,
                unitPrice: 100,
                jiage: 0,
                shuliang: 0
            },
            passwordEdit: {
                passwordOld: '123',
                passwordNew1: '1234',
                passwordNew2: '1234'
            },
            specificate: [
                { id: 0, name: '大' },
                { id: 1, name: '小' }
            ],
            temperature: [
                { id: 0, name: '热常' },
                { id: 1, name: '温常' },
                { id: 2, name: '规冰' },
                { id: 3, name: '多冰' },
                { id: 4, name: '少冰' },
                { id: 5, name: '去冰' },
            ],
            sugarcontent: [
                { id: 0, name: '常规糖' },
                { id: 1, name: '不加糖' }
            ]
        };
    },
    created() {},
    mounted() {},
    computed: {
        // 商品规格
        selType() {
            return function(t,o) {
                var self = this;
                if(t == 1) {
                    return self.specificate.filter(v=>v.id==o)[0].name;
                } else if(t == 2) {
                    return self.temperature.filter(v=>v.id==o)[0].name;
                } else if(t == 3) {
                    return self.sugarcontent.filter(v=>v.id==o)[0].name;
                }
            }
        },
        // 订单总价格
        shopPriceSum() {
            var self = this;
            var arrX = self.pricelist.map(v=>v.price);
            return self.Sum(arrX);
        },
        // 订单总件数
        shopNumSum() {
            var self = this;
            var arrX = self.pricelist.map(v=>v.num);
            return self.Sum(arrX);
        },
        modifypassword() {
            return this.$store.state.modifyPW
        }
    },
    methods: {
        Sum(array) {
            if(array.length <= 0) return 0;
            var sum = array.map(Number).reduce((prev, cur, index, array) => prev + cur);
            return sum;
        },
        set_img: url => (url ? url : '../../assets/img/login/goods-def.png'),
        // 搜索商品
        contentSearch() {
            var self = this;
            if (!self.menuname) return false;
            console.log(self.menuname);
        },
        // 关闭弹窗
        closeMask() {
            var self = this;
            this.$store.state.modifyPW = false;
            self.maskType.isMask = self.maskType.isPw = self.maskType.isSp = false;
        },
        // 选择商品 - 加入购物车
        shopNumSel(o) {
            var self = this;
            self.joinShopcart.mingzi = o.name;
            self.joinShopcart.unitPrice = o.price;
            self.joinShopcart.id = o.id;
            self.maskType.isMask = self.maskType.isSp = true;
        },
        // 加入购物车 - 选择规格
        specificateEvent(o) {
            var self = this;
            self.joinShopcart.guige = o;
        },
        // 加入购物车 - 选择温度
        temperatureEvent(o) {
            var self = this;
            self.joinShopcart.wendu = o;
        },
        // 加入购物车 - 选择糖度
        sugarcontentEvent(o) {
            var self = this;
            self.joinShopcart.tangdu = o;
        },
        // 加入购物车 - 商品数量减少
        shopNumDel() {
            var self = this;
            var num = (self.joinShopcart.shuliang -= 1);
            if(num < 0) {
                self.joinShopcart.shuliang = 0;
                return false;
            } else {
                self.joinShopcart.jiage = self.joinShopcart.unitPrice * num;
            }
        },
        // 加入购物车 - 商品数量增加
        shopNumAdd() {
            var self = this;
            var num = (self.joinShopcart.shuliang += 1);
            self.joinShopcart.jiage = self.joinShopcart.unitPrice * num;
        },
        // 加入购物车
        joinShoppingCart() {
            var self = this;
            var params = {
                id: self.joinShopcart.id,
                name: self.joinShopcart.mingzi,
                price: self.joinShopcart.jiage,
                num: self.joinShopcart.shuliang,
                gg: self.joinShopcart.guige,
                wd: self.joinShopcart.wendu,
                td: self.joinShopcart.tangdu
            }
            self.pricelist.push(params);
            self.closeMask();
        },
        clearPriceList() {
            var self = this;
            self.pricelist = [];
        },
        // 提交修改密码
        submitMonifyPW() {
            var self = this;
            self.$message.success("密码修改成功！");
            self.closeMask();
        }
    },
    watch: {
        // 显示修改密码弹窗
        modifypassword(o) {
            var self = this;
            self.maskType.isMask = self.maskType.isPw = o;
        }
    }
};
</script>

<style scoped>
@import url('../../assets/css/index.css');
</style>
