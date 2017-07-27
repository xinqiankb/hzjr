<template>
    <div class="header">
        <div class="nav">
            <img :src="logo" alt="">
            <ul class="nav-bar">
                <li ref='li' @mousemove="activeClass(index,item.child.length)" @click="activeClass(index)" v-for="(item,index) in columns" :class="{'active':active==index,'no-active':active!=index}">
                    <router-link class="title" :to="{name:'home'}">{{ item.parents[0].name }}</router-link>
                    <div class="sub-column" v-show="active==index" v-bind:style="{ background:color, width:width+'px' }">
                        <div class="sub-title" v-for="subColumns in item.child">
                            <router-link :to="{name:subColumns.list_type,params:{id:subColumns.id}}">
                                {{ subColumns.name }}
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { mapState } from 'vuex'
export default {
    data() {
        return {
            active: '0',
            color: '',
            width: '',
            listImg: [{
                url:'./../../static/img/banner.jpg'
            }]
        }
    },
    mounted() {
        console.log('mounted', this)
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
            // logo
            logo: state => state.logo,
            // banner
            banner: state => state.banner,
            // 头部导航栏目
            columns: state => state.columns,
        }),
    },
    methods: {
        activeClass(i, len) {
            this.active = i;
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
        }
    }
}
</script>

<style scoped>
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

.sub-title {
    border-bottom: 1px solid #f2f2f2;
    padding-top: 5px;
    padding-bottom: 5px;
}

.sub-title a {
    text-decoration: none;
    color: #666;
}

.sub-title:hover {
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
</style>