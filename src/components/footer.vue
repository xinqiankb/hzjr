<template>
    <div class="footer-box">
        <div class="footer-wrap">
            <div class="footer-left">
                <p class="footer-left-title">
                    杭州融熠
                    <br> "ACF PRIVATE"
                </p>
                <img src="./../../static/img/footer-line.jpg" alt="" style="float:left">
                <div class="footer-left-cont">
                    <div class="footer-telMap-wrap">
                        <div class="footer-tel">
                            <img src="">
                            <span>
                                <b>您的财富全管家</b>
                                <br>财富热线：4006 796 169</span>
                        </div>
                        <a id="btn_ahowMap"></a>
                    </div>
                    <div class="footer-addr-warp">
                        <span>地址：</span>
                        <p>上海市黄浦区人民路300号外滩Soho广场D栋6楼</p>
                    </div>
                    <div class="footer-addr-warp">
                        <span>邮编：</span>
                        <p>200002</p>
                    </div>
                    <img src="" class="map">
                </div>
            </div>
            <ul>
                <li v-for="item in columns">
                    <h3>{{ item.name }}</h3>
                    <a href="" v-for="sub in subColumn ">{{ sub.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns: [
                {
                name: '关于融熠'
            }, {
                name: '投资管理'
            }, {
                name: '金融学院'
            }],
            subColumn: [
                {
                    name: '测试'
                },
                {
                    name: '测试'
                },
                {
                    name: '测试'
                }
            ]
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.footer-box {
    width: 100%;
    height: 390px;
    background-color: #F8F8F8;
    border-top: 2px solid #cd934f;
}

.footer-wrap {
    width: 1240px;
    height: 390px;
    margin: 0 auto;
    text-align: right;
    position: relative;
}

.footer-left {
    width: 300px;
    display: inline-block;
    float: left;
    position: relative;
}

.footer-left-title {
    font-size: 16px;
    background-color: #fff;
    color: #cd934f;
    padding: 20px;
    text-align: left;
    line-height: 22px;
}

img {
    border: none;
    outline: none;
}

.footer-left-cont {
    background-color: #cd934f;
    padding: 0 0 15px 0;
}

.footer-telMap-wrap {
    display: inline-block;
    width: 360px;
    margin: 20px 0 0 30px;
    text-align: left;
    position: relative;
}

.footer-tel {
    background-color: #fff;
    display: inline-block;
    width: 300px;
}

.footer-tel img {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 20px;
}

.footer-tel span {
    font-size: 14px;
    color: #cd934f;
    border-left: 1px solid #cd934f;
    padding: 0 0 0 15px;
    display: inline-block;
    text-align: left;
    position: absolute;
    margin: 28px 0 0 0;
}

.footer-tel span b {
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
    margin: 0 0 5px 0;
}

.footer-telMap-wrap a {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 90px;
    margin: 0 0 0 10px;
    background-color: #fff;
    background-image: url(./../../static/img/icon-position.png);
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
}

.footer-addr-warp {
    text-align: left;
    padding: 0 0 0 30px;
    color: #fff;
    font-size: 14px;
    margin: 10px 0 10px 0;
    line-height: 22px;
}

.footer-addr-warp span {
    display: inline-block;
    float: left;
    font-size: 14px;
}

.footer-addr-warp p {
    width: 170px;
    display: inline-block;
}

.footer-left-cont img.map {
    position: absolute;
    margin-left: 86px;
    top: 0;
    display: none;
    left: 300px;
}

.footer-wrap ul {
    display: inline-block;
    list-style: none;
    margin: 80px 0 0 0;
}

.footer-wrap ul li:first-child {
    border-left: none;
}

.footer-wrap ul li {
    display: inline-block;
    height: 210px;
    border-left: 1px solid #e5e5e5;
    padding: 0 60px;
    text-align: left;
    float: left;
}

.footer-wrap ul li h3 {
    color: #666;
    font-size: 18px;
    text-align: center;
    font-weight: normal;
    margin: 0 0 25px 0;
}

.footer-wrap ul li a {
    display: block;
    color: #999;
    font-size: 14px;
    text-decoration: none;
    margin: 0 0 20px 0;
    text-align: center;
}
</style>
