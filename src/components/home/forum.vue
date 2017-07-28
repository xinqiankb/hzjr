<template>
    <div class="forum">
        <div class="forum-club-cont" v-for="item in forumColumns">
            <div>
                <img :src="IMG_URL+item.bgimage" alt="">
            </div>
            <div>
                <p>{{ item.name }}</p>
                <hr>
                <router-link :to="{name:item.list_type,params:{id:item.id}}">MORE ></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            IMG_URL
        }
    },
    computed: {
        ...mapState({
            // footer上面的三个栏目
            forumColumns: state => state.forumColumns
        })
    },
}
</script>

<style scoped>
.forum-club-cont {
    position: relative;
    width: 1240px;
    height: 300px;
    margin: 0 auto 100px auto;
}

.forum-club-cont div:first-child {
    width: 800px;
    height: 300px;
    display: inline-block;
}

img {
    border: none;
    outline: none;
}

.forum-club-cont div:first-child+div {
    height: 300px;
    display: inline-block;
    position: absolute;
    margin: 0 0 0 45px;
}

.forum-club-cont div:first-child+div p {
    font-size: 2rem;
    color: #666;
}

.forum-club-cont div:first-child+div a {
    position: absolute;
    bottom: 0;
    width: 160px;
    height: 40px;
    padding: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
    color: #FFF;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    background-color: #CD934F;
    border-radius: 6px;
}

.forum-club-cont div:first-child+div a:hover {
    background: #b88446;
}

hr {
    margin-top: 15px;
    margin-bottom: 30px;
    width: 50px;
    height: 1px;
    background: #666;
}

@media only screen and (max-width: 414px) {
    .forum-club-cont {
        width: 100%;
        height: 160px;
    }
    .forum-club-cont div:first-child {
        width: 100%;
    }
    img {
        width: 100% !important;
    }
    .forum-club-cont div:first-child+div a {
        right: 0;
    }
    .forum-club-cont div:first-child+div a {
        top: 5px;
    }
    .forum-club-cont div:first-child+div p {
        font-size: 1rem;
    }
    .forum-club-cont div:first-child+div a {
        width: 65px;
        font-size: 10px;
        height: 35px;
        line-height: 35px;
    }
}
</style>