<template>
    <div class="header">
        <div class="nav">
            <img :src="log" alt="">
            <ul class="nav-bar">
                <li @click="activeClass(index)" v-for="(item,index) in columns" :class="{'active':active==index}">
                    <a href="#">{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class="banner">
            <img :src="banner" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: ['columns', 'log', 'banner'],
    data() {
        return {
            active: '0'
        }
    },
    methods: {
        activeClass(i) {
            this.active = i
        }
    }
}
</script>

<style scoped>
.nav {
    width: 1240px;
    height: 106px;
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
    top: 1.6rem;
}

.nav-bar li {
    display: inline-block;
    margin-left: 2rem;
    font-size: 14px;
    height: 18px;
    color: #666;
    height: 60px;
}

a {
    text-decoration: none;
    color: #666;
    display: inline-block;
    border-right: 1px solid #666;
    padding-right: 2rem;
    margin-left: 1.2rem;
}

.banner img {
    width: 100%;
    height: 680px;
}

.active {
    border-bottom: 4px solid #cd934f;
}

.nav-bar li:hover {
    border-bottom: 4px solid #cd934f;
}
</style>