<template>
    <div class="header">
        <div class="nav">
            <img :src="logo" alt="">
            <ul class="nav-bar">
                <li ref='li' @mousemove="display(index,item.child.length)" @click="activeClass(index)" v-for="(item,index) in columns" :class="{'active':active==index,'no-active':active!=index}">
                    <router-link :class="{'default':index!=0}" class="title" :to="{name:'home'}">{{ item.parents[0].name }}</router-link>
                    <div class="sub-column" v-show="active==index" v-bind:style="{ background:color, width:width+'px' }">
                        <div class="sub-item" v-for="subColumns in item.child" @click="activeClass(index)">
                            <router-link :to="{name:subColumns.list_type,params:{id:subColumns.id}}" class="sub-name">
                                {{ subColumns.name }}
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                    <a :herf='str.url' class="swiper-slide" v-for="str in banner" :style="{ backgroundImage: 'url(' + 'http://hzry.youjiadv.com/backend/web/' + str.img + ')' }"></a>
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
            color: '',
            width: ''
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
        activeClass(i) {
            this.$store.state.active = i;
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

.default{
    cursor:default
}

@media only screen and (max-width: 414px) {
    .swiper-container{
        display: none;
    }
    .nav {
        width:100%;
        height: 60px;
        border-bottom: 1px solid #f1f1f1;
    }
    .nav img{
        width:50%;
        top: 0.8rem;
    }
    .nav-bar{
        display: none;
    }
}
</style>