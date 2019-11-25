<template>
    <div id="Index">
        <article class="index-goods-box">
            <section class="index-search-box">
                <aside>
                    <input type="text" placeholder="请输入菜单名称" autocomplete="on" v-model="menuname" @keyup.enter="contentSearch">
                    <span @click="contentSearch"><img src="../../assets/img/login/search-down.png" alt=""></span>
                </aside>
            </section>
            <section class="index-goods-list">
                <ul>
                    <li v-for="(item, inde) in goodslist" :key="inde">
                        <div class="index-goods-img">
                            <img v-if="item.url" :src="set_img(item.url)" alt="">
                            <img v-else src="../../assets/img/login/goods-def.png" alt="">
                        </div>
                        <div class="index-goods-info">
                            <h6>{{ item.name }}</h6>
                            <span><img src="../../assets/img/login/join-def.png" alt=""></span>
                        </div>
                        <p class="index-goods-money">
                            <span>&yen; {{ item.price }}</span>
                        </p>
                    </li>
                </ul>
                <div class="jqsjjc-mod-1114">
                    <el-pagination small background :pager-count="5" :page-size="5" layout="prev, pager, next, total, jumper" :total="500" popper-class="pagination"></el-pagination>
                </div>
            </section>
        </article>
        <article class="index-price-box">
            <section class="index-price-title">
                <h5>点餐</h5>
                <img src="../../assets/img/login/clear-def.png" alt="">
            </section>
            <section class="index-price-num">
                <span>排号：</span>
                <span>032</span>
            </section>
            <section class="index-price-list">
                <ul v-for="(item, inde) in goodslist" :key="inde">
                	<li class="index-price-info">
                        <h6>{{ item.name }}</h6>
                        <aside>
                            <span><img src="../../assets/img/login/subtract-down.png" alt=""></span>
                            <input type="text" class="index-price-unit" v-model="item.price">
                            <span><img src="../../assets/img/login/join-def.png" alt=""></span>
                        </aside>
                    </li>
                    <li class="index-price-money">
                        <span>&yen; {{ item.price }}</span>
                    </li>
                    <li class="index-price-remark">
                        <p>备注：多冰</p>
                        <p>x 2</p>
                    </li>
                </ul>
            </section>
            <section class="index_price-account">
                <div class="index-price-sum">
                    <span>共6件：</span>
                    <var>&yen; 123.44</var>
                </div>
                <div class="index-price-pay">
                    <button>立即支付</button>
                </div>
            </section>
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
                { id: '8', name: '玉米大红袍8', url: '', price: 890.88 },
            ],
            pricelist: [
                
            ]
        };
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        set_img: (url) => url ? url : '../../assets/img/login/goods-def.png',
        contentSearch() {
            var self = this;
            if(!self.menuname) return false;
            console.log(self.menuname);
        }
    }
};
</script>

<style scoped>
#Index {
    width: 100%;
    height: 100%;
    display: flex;
}
#Index .index-goods-box {
    position: relative;
    width: 1393px;
    height: 100%;
    margin-right: 20px;
    background: #fff;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 0 3px 0 #eee;
}
#Index .index-search-box {
    height: 38px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #e6e6e6;
}
#Index .index-search-box > aside {
    position: relative;
    width: 280px;
    display: flex;
    align-items: center;
}
#Index .index-search-box > aside > input {
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    text-indent: 20px;
    outline: none;
    border: 1px solid #e6e6e6;
    border-radius: 26px;
}
#Index .index-search-box > aside > span {
    position: absolute;
    right: 20px;
    transform: translateY(-50%);
    top: 56%;
    cursor: pointer;
}
#Index .index-search-box > aside > span > img {
    width: 20px;
    height: 20px;
}
#Index .index-goods-list {
    position: absolute;
    top: 68px;
    bottom: 0;
    padding: 17px 10px 87px;
    overflow-y: auto;
}
#Index .index-goods-list ul {
    display: flex;
    flex-wrap: wrap;
}
#Index .index-goods-list ul li {
    width: 323px;
    height: 336px;
    margin: 13px 10px;
    box-shadow: inset 0 0 0 1px #e6e6e6;
}
#Index .index-goods-img {
    width: 323px;
    height: 247px;
    overflow: hidden;
}
#Index .index-goods-img img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0.5s;
}
#Index .index-goods-img:hover img {
    transform: scale(1.1);
}
#Index .index-goods-info {
    padding: 13px 20px 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #222222;
}
#Index .index-goods-info h6 {
    cursor: pointer;
    font-size: 16px;
}
#Index .index-goods-info img {
    width: 28px;
    height: 28px;
}
#Index .index-goods-money {
    padding: 0 20px;
    font-size: 18px;
    color: #ff3428;
}


#Index .index-price-box {
    position: relative;
    width: 344px;
    height: 100%;
    flex: 1;
    background: #fff;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 0 3px 0 #eee;
}
#Index .index-price-title {
    position: relative;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    color: #222;
    font-size: 24px;
    border-bottom: 1px solid #E6E6E6;
}
#Index .index-price-title > h5 {
    text-align: center;
}
#Index .index-price-title > img {
    cursor: pointer;
    position: absolute;
    right: 20px;
}
#Index .index-price-num {
    position: relative;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    color: #222;
    font-size: 20px;
    border-bottom: 1px solid #E6E6E6;
}
#Index .index-price-list {
    position: absolute;
    width: 100%;
    top: 130px;
    bottom: 183px;
    overflow-y: auto;
}
#Index .index-price-list > ul {
    border-bottom: 1px solid #E6E6E6;
    background-color: #fafafa;
}
#Index .index-price-info {
    padding: 13px 20px 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #222;
}
#Index .index-price-info h6 {
    cursor: pointer;
    font-size: 16px;
}
#Index .index-price-info img {
    width: 28px;
    height: 28px;
}
#Index .index-price-unit {
    width: 61px;
    height: 28px;
    border: none;
    text-align: center;
    outline: none;
    font-size: 20px;
    color: #222;
}
#Index .index-price-money {
    padding: 0 20px;
    font-size: 16px;
    color: #222;
}
#Index .index-price-remark {
    line-height: 22px;
    padding: 5px 20px 10px;
    color: #999;
    font-size: 14px;
}
#Index .index_price-account {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 183px;
    box-shadow: -1px 0 8px 1px #eee;
    border-radius: 4px 4px 0 0;
}
#Index .index-price-sum {
    position: relative;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    color: #222;
    font-size: 16px;
    border-bottom: 1px solid #E6E6E6;
}
#Index .index-price-sum > var {
    font-size: 24px;
    color: #FF3428;
}
#Index .index-price-pay {
    height: 122px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#Index .index-price-pay > button {
    width: 244px;
    height: 48px;
    background: #FFC132;
    color: #222;
    font-size: 20px;
    border: none;
    outline: none;
}
#Index .index-price-pay > button:active {
    background-color: #F9B10B;
    cursor: pointer;
}
</style>
