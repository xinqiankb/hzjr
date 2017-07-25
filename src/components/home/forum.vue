<template>
  <div class="forum">
      <div class="forum-club-cont" v-for="item in forumColumns.content">
          <div>
              <img :src="item.imgUrl" alt="">
          </div>
          <div>
              <img :src="forumColumns.logo" alt="">
              <p>{{ item.name }}</p>
              <a :href="item.url">MORE ></a>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['forumColumns']
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
.forum-club-cont div:first-child + div {
    height: 300px;
    display: inline-block;
    position: absolute;
    margin: 0 0 0 45px;
}
.forum-club-cont div:first-child + div p {
    font-size: 18px;
    margin: 30px 0 0 0;
    color: #666;
}
.forum-club-cont div:first-child + div a {
    position: absolute;
    bottom: 0;
    width: 160px;
    height: 40px;
    padding: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
    color:#FFF;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    background-color: #CD934F;
    border-radius: 6px;
}
.forum-club-cont div:first-child + div a:hover{
    background: #b88446;
}
</style>