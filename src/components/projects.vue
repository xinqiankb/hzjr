<template>
    <div class="projects-cont" v-bind:style="{ background: 'url('+projectsBg+')' }">
        <div class="projects-title">
            <img :src="projectsTitle" alt="">
            <p>精选项目</p>
        </div>
        <div class="projects-wrap">
            <div class="projects-bg" v-bind:style="{ background: 'url('+projectsImg+')' }"></div>
            <div class="projects-right"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['projectsTitle', 'projectsBg', 'projectsImg']
}
</script>

<style scoped>
.projects-cont {
    width: 100%;
    background-size: 100% auto;
    text-align: center;
    margin: 0 0 165px 0;
    background-repeat: no-repeat !important;
    background-position: center bottom !important;
}

.projects-title {
    width: 1240px;
    margin: 0 auto 70px auto;
    text-align: center;
}

img {
    border: none;
    outline: none;
}

.projects-title p {
    font-size: 18px;
    color: #666;
    margin: 30px 0 0 0;
}

.projects-wrap {
    width: 1240px;
    height: 600px;
    background: #FCFCFC;
    margin: 0 auto;
    text-align: left;
}

.projects-bg {
    display: inline-block;
    width: 630px;
    height: 600px;
    background-size: 100% auto;
    background-repeat: no-repeat !important;
    background-position: left top !important;
}

.projects-right {
    width: 600px;
    height: 600px;
    display: inline-block;
    position: absolute;
    text-align: center;
}
</style>