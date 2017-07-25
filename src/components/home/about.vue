<template>
    <div class="about">
        <div class="pic" v-bind:style="{ background: 'url('+aboutUs.imgUrl+')' }"></div>
        <div class="aboutUs-wrap">
            <img :src="aboutUs.logo" alt="">
            <p class="p-title">关于我们</p>
            <p class="p-content">{{ aboutUs.content }}</p>
            <ul>
                <li v-for="tag in aboutUs.tags">
                    <span></span>
                    {{ tag.title }}
                </li>
            </ul>
        </div>
        <a :href="aboutUs.url" class="button">MORE ></a>
    </div>
</template>

<script>
export default {
    props: ['aboutUs'],
    data() {
        return {}
    }
}
</script>

<style scoped>
.about {
    background: #FCFCFC;
    width: 1240px;
    position: relative;
    margin: -50px auto 145px auto;
}

.pic {
    display: inline-block;
    width: 600px;
    height: 440px;
    margin: 30px;
    background-size: 100% auto;
}

.aboutUs-wrap {
    display: inline-block;
    width: 500px;
    margin: 40px 0 0 15px;
    text-align: left;
    position: absolute;
}

.p-title {
    line-height: 25px;
    margin: 20px 0;
    text-indent: 0 !important;
    font-size: 18px !important;
    color: #666 !important;
}

.p-content {
    font-size: 14px;
    color: #999;
    line-height: 25px;
    text-indent: 20px;
    margin: 20px 0;
}

ul {
    list-style-type: none;
    color: #666;
    font-size: 14px;
    line-height: 25px;
}

li {
    list-style-type: none;
    color: #666;
    font-size: 14px;
    line-height: 25px;
}

li span {
    display: inline-block;
    background-color: #666;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    margin: 0 6px 0 0;
}

.button {
    width: 80px;
    height: 40px;
    padding: 0;
    background: #cd934f;
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-block;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: #FFF;
    text-align: center;
    line-height: 40px;
}

.button:hover {
    background: #b88446;
}
</style>
