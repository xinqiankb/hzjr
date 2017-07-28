<template>
  <div class="home">
    <Header-navbar></Header-navbar>
    <about></about>
    <dynamic></dynamic>
    <forum></forum>
    <footerBox></footerBox>
  </div>
</template>

<script>
import HeaderNavbar from './../header'
import about from './about'
import dynamic from './dynamic'
import forum from './forum'
import footerBox from './../footer'
export default {
  name: 'home',
  data() {
    return {}
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
