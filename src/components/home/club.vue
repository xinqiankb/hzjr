<template>
    <div class="vip-cont" v-bind:style="{ background: 'url('+clubBg+')' }">
        <div class="vip-title">
            <img :src="clubTitle" alt="">
            <p>管家俱乐部</p>
        </div>
        <div class="vip-wrap">
            <div class="vip-txt">
                <ul>
                    <li>
                        <span></span>
                        <div>
                            <b>我们的目标始终如一：</b>
                            <h3>智慧理财，尊享人生</h3>
                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div>
                            <b>我们的经营理念：</b>
                            <h3>中立客观、贴合需求</h3>
                        </div>
                    </li>
                    <li>
                        <span></span>
                        <div>
                            <b>我们的重点始终是：</b>
                            <h3>协助客户早日实现财务自由</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['clubBg', 'clubTitle']
}
</script>

<style acoped>
.vip-cont {
    height: 800px;
    width: 100%;
    text-align: center;
    margin: 0 0 165px 0;
    background-size: auto 100%;
    color: #fff;
    background-repeat: no-repeat !important;
}

.vip-title {
    padding: 95px 0 90px 0;
}

img {
    border: none;
    outline: none;
}

.vip-title p {
    font-size: 18px;
    color: #fff;
    text-align: center;
    margin: 25px 0 0 0;
}

.vip-wrap {
    width: 1240px;
    height: 400px;
    margin: 0 auto;
    text-align: right;
}

.vip-txt {
    float: left;
    display: inline-block;
    width: 500px;
    height: 350px;
    text-align: left;
    margin: 30px 0 0 0;
}

.vip-txt ul {
    list-style: none;
}

.vip-txt ul li {
    margin: 0 0 60px 0;
    position: relative;
}

.vip-txt ul li span {
    display: inline-block;
    background: #cd934f;
    width: 10px;
    height: 50px;
    margin: 0 20px 0 0;
}

.vip-txt ul li div {
    position: absolute;
    display: inline-block;
    height: 50px;
    margin: 0 0 0 0;
}

.vip-txt ul li div b {
    display: block;
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 10px 0;
}

.vip-txt ul li div h3 {
    font-size: 24px;
    color: #cd934f;
}
</style>
