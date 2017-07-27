<template>
    <div class="header">
        <div class="nav">
            <img :src="logo" alt="">
            <ul class="nav-bar">
                <li ref='li' @mousemove="activeClass(index,item.child.length)" @click="activeClass(index)" v-for="(item,index) in columns" :class="{'active':active==index,'no-active':active!=index}">
                    <router-link :to="{name:'article',params:{id:index}}">{{ item.parents[0].name }}</router-link>
                    <div class="sub-column" v-show="active==index" v-bind:style="{ background:color, width:width+'px' }">
                        <div class="sub-title" v-for="subColumns in item.child">{{ subColumns.name }}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="banner">
            <img :src="banner" alt="">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            active: '0',
            color: '',
            width: ''
        }
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

a {
    text-decoration: none;
    color: #666;
    display: inline-block;
    border-right: 1px solid #666;
    padding-right: 2rem;
    margin-left: 1.2rem;
    padding-left: 0.9rem;
}

.banner {
    margin-top: -12.1rem;
}

.banner img {
    width: 100%;
    height: 680px;
}

.active {
    border-bottom: 4px solid #cd934f;
    /* position: relative;
    top: 0.2rem; */
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
    box-sizing:border-box;
}

.sub-title {
    border-bottom: 1px solid #f2f2f2;
    padding-top: 5px;
    padding-bottom: 5px;
}

.sub-title:hover {
    color: #cd934f
}
</style>