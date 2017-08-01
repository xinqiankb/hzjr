<template>
  <div class="home">
    <Header-navbar></Header-navbar>
    <about></about>
    <dynamic></dynamic>
    <forum></forum>
    <footerBox></footerBox>
    <Webtips></Webtips>
  </div>
</template>

<script>
import HeaderNavbar from './../header'
import Webtips from './../webtips'
import about from './about'
import dynamic from './dynamic'
import forum from './forum'
import footerBox from './../footer'
export default {
  name: 'home',
  data() {
    return {}
  },
  components: { HeaderNavbar,about,dynamic,forum,footerBox ,Webtips}
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0
  }
</style>
