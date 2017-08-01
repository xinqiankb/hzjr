<template>
    <div class="header">
        <div v-show="overlayer" class="overlayer" @touchmove.prevent>
        </div>
        <div class="nav">
            <router-link to="/">
                <img :src="logo" alt="">
            </router-link>    
            <img class="menu" src="./../../static/img/menu.svg" alt="" @click="dropDownBtn">
            <ul class="nav-bar">
                <li>
                    <router-link class="title" to="/" @click="messageShow">首页</router-link>
                </li>
                <li ref='li' @mouseover="display(index,item.child.length)" @mouseleave="subHide" @click="activeClass(index)" v-for="(item,index) in columns" :class="{'active':active==index,'no-active':active!=index}" v-show="index!=0">
                    <router-link :class="{'default':index!=0}" class="title" to=''>{{ item.parents[0].name }}</router-link>
                    <div class="sub-column" v-show="active==index" v-bind:style="{ background:color, width:width+'px' }">
                        <div class="sub-item" v-for="subColumns in item.child" @click="activeClass(index)" v-on:click="parameter(subColumns.id)">
                            <router-link :to="{name:subColumns.list_type,params:{id:subColumns.id}}" class="sub-name">
                                {{ subColumns.name }}
                            </router-link>
                        </div>
                    </div>
                </li>
                <li>
                    <a class="default title" href="javascript:" @click="messageShow">在线留言</a>
                </li>
            </ul>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <a :herf='str.url' class="swiper-slide" v-for="str in banner" :style="{ backgroundImage: 'url(' + IMG_URL + str.img + ')' }"></a>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        <ul class="drop-down" v-show="dropDown">
            <li v-for="(item,index) in columns">
                <router-link :class="{'default':index!=0}" :to="{name:'home'}">{{ item.parents[0].name }}</router-link>
                <div v-for="subColumns in item.child">
                    <router-link :to="{name:subColumns.list_type,params:{id:subColumns.id}}" class="sub-name">
                        {{ subColumns.name }}
                    </router-link>
                </div>
            </li>
             <li>
                    <a class="default" href="#" @click="messageShow">在线留言</a>
            </li>
        </ul>
        <message v-show="message" v-on:message="messageHidden"></message>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { mapState } from 'vuex'
import message from './message'
export default {
    data() {
        return {
            color: '',
            width: '',
            dropDown: false,
            overlayer: false,
            message: false,
            subShow: false,
            IMG_URL
        }
    },
    updated() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            speed: 600,
            autoplay: 4000,
            onTouchEnd: function () {
                swiper.startAutoplay()
            }
        });
    },
    computed: {
        ...mapState({
            // active
            active: state => state.active,
            // logo
            logo: state => state.logo,
            // banner
            banner: state => state.banner,
            // 头部导航栏目
            columns: state => state.columns
        }),
    },
    methods: {
        display(i, len) {
            this.$store.state.active = i;
            // 根据子栏目个数来判断背景颜色
            if (len == 0) {
                this.color = 'transparent';
                //设置子栏目宽度
                this.width = this.$refs.li[i].clientWidth
            }
            else {
                this.color = '#FFF';
                this.width = this.$refs.li[i].clientWidth
            }
        },
        subHide() {
            this.$store.state.active = 0;
        },
        activeClass(i) {
            this.$store.state.active = i;
        },
        // 移动端是否显示下拉菜单
        dropDownBtn() {
            if (this.dropDown == false) {
                this.dropDown = true;
                this.overlayer = true;
            }
            else {
                this.dropDown = false;
                this.overlayer = false;
            }
        },
        // 显示在线留言
        messageShow() {
            this.message = true;
            this.overlayer = true;
        },
        // 关闭在线留言
        messageHidden(data) {
            this.message = data;
            this.overlayer = data;
        },
        // 传递路由参数
        parameter(id) {
            this.$store.state.parameterId = id
        }
    },
    components: {
        message
    }
}
</script>

<style scoped>
 /*遮罩层*/
.overlayer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: rgba(0, 0, 0, 0.5);
}
.menu {
    display: none;
}

.drop-down {
    display: none;
}

.nav {
    width: 1240px;
    height: 300px;
    overflow: hidden;
    position: relative;
    margin: 0 auto
}

.nav img {
    position: absolute;
    top: 1.2rem
}

.nav-bar {
    list-style: none;
    display: inline-block;
    position: absolute;
    right: 0rem;
    top: 3rem;
}

.nav-bar li {
    display: inline-block;
    font-size: 15px;
    color: #666;
    height: 54px;
}

.title {
    text-decoration: none;
    color: #666;
    display: inline-block;
    border-right: 1px solid #666;
    padding-right: 2rem;
    margin-left: 1.2rem;
    padding-left: 0.9rem;
}

.active {
    border-bottom: 4px solid #cd934f;
}

.no-active {
    position: relative;
}

.nav-bar li:hover {
    border-bottom: 4px solid #cd934f;
}

.sub-column {
    text-align: center;
    margin-top: 2.3rem;
    padding: 15px;
    padding-bottom: 20px;
    position: absolute;
    box-sizing: border-box;
}

.sub-item {
    border-bottom: 1px solid #f2f2f2;
    padding-top: 5px;
    padding-bottom: 5px;
}

.sub-item a {
    text-decoration: none;
    color: #666;
}

.sub-name:hover {
    color: #cd934f
}

.swiper-container {
    margin-top: -12.1rem;
    width: 100%;
    height: 600px;
    z-index: -1;
}

.swiper-wrapper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.swiper-pagination-bullet {
    width: 0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
}

.default {
    cursor: default
}

@media only screen and (max-width: 414px) {
    .swiper-container {
        display: none;
    }
    .nav {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #f1f1f1;
    }
    .nav img {
        width: 60%;
        top: 0.6rem;
    }
    .nav-bar {
        display: none;
    }
    .menu {
        display: block;
        width: 30px !important;
        right: 1.5rem;
        top: 1rem !important;
    }
    .drop-down {
        display: block;
        list-style: none;
        width: 280px;
        border-right: 1px solid #f1f1f1;
        position: absolute;
        z-index: 100;
        background: #FFF;
        right: 0;
    }
    .drop-down li {
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #f1f1f1;
        text-indent: 2rem;
    }
    .drop-down li a {
        text-decoration: none;
        color: #000;
    }
    .drop-down div {
        font-size: 13px;
        color: #666;
        padding-top: 5px;
        padding-bottom: 5px;
        text-indent: 4rem;
        margin-top: 5px;
    }
    .drop-down div a {
        text-decoration: none;
        color: #666;
    }
    /*遮罩层*/
    .overlayer {
        position: absolute;
        left: 0;
        top: 61px;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: rgba(0, 0, 0, 0.5);
    }
}
</style>