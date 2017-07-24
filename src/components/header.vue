<template>
    <div class="header">
        <div class="nav">
            <img :src="logo" alt="">
            <ul class="nav-bar">
                <li @mousemove="activeClass(index)" @click="activeClass(index)" v-for="(item,index) in columns" :class="{'active':active==index,'no-active':active!=index}" v-bind:style="{ top:top+'px' }">
                    <router-link :to="{name:'article',params:{id:index}}">{{ item.name }}</router-link>
                    <div class="sub-column" v-show="active==index" v-bind:style="{ background:color }">
                        <div class="sub-title" v-for="sub in subColumn">{{ sub.name }}</div>
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
export default {
    props: ['columns', 'logo', 'banner'],
    data() {
        return {
            active: '0',
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
    },
    computed: {
        top: function () {
            if (this.subColumn.length != 0) {
                return -(this.subColumn.length * 35 + 35)
            }
        },
        color: function () {
            if (this.subColumn.length ==0) {
                return 'transparent'
            }
            else {
                return '#FFF'
            }
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