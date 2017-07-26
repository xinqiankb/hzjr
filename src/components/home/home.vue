<template>
  <div class="home">
    <Header-navbar></Header-navbar>
    <about :aboutUs="aboutUs"></about>
    <dynamic :news="news"></dynamic>
    <forum :forumColumns="forumColumns"></forum>
    <footerBox></footerBox>
  </div>
</template>

<script>
import HeaderNavbar from './../header'
import about from './about'
import dynamic from './dynamic'
import forum from './forum'
import footerBox from './../footer'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data() {
    return {}
  },
  computed:{
    ...mapState({
      // 关于我们的数据
      aboutUs: state => state.aboutUs,
      // 最新动态的数据
      news: state => state.news,
      // footer上面的三个栏目
      forumColumns: state => state.forumColumns
    })
  },
  components: { HeaderNavbar,about,dynamic,forum,footerBox }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0
  }
</style>
