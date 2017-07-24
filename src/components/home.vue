<template>
  <div class="home">
    <Header-navbar :columns="columns" :log="log" :banner="banner"></Header-navbar>
    <about :aboutImg="aboutImg" :aboutUs="aboutUs"></about>
    <projects :projectsBg="projectsBg" :projectsImg="projectsImg" :projectsTitle="projectsTitle"></projects>
    <news :newsBg="newsBg" :news="news"></news>
    <club :clubBg="clubBg" :clubTitle="clubTitle"></club>
    <forum :forumClubBg="forumClubBg" :forumClubTitle="forumClubTitle"></forum>
    <footerBox></footerBox>
  </div>
</template>

<script>
import HeaderNavbar from './header'
import about from './about'
import projects from './projects'
import news from './news'
import club from './club'
import forum from './forum'
import footerBox from './footer'
import log from './../../static/img/logo.jpg'
import banner from './../../static/img/banner.png'
import aboutImg from './../../static/img/about.png'
import aboutUs from './../../static/img/aboutUs.png'
import projectsBg from './../../static/img/projects.png'
import projectsImg from './../../static/img/projectsImg.png'
import projectsTitle from './../../static/img/projectsTitle.png'
import newsBg from './../../static/img/news-bg.png'
import clubBg from './../../static/img/club-bg.png'
import clubTitle from './../../static/img/clubTitle.png'
import forumClubBg from './../../static/img/forumClubBg.png'
import forumClubTitle from './../../static/img/forumClubTitle.png'
export default {
  name: 'home',
  data() {
    return {
      log: log,
      banner: banner,
      aboutImg: aboutImg,
      aboutUs: aboutUs,
      projectsBg: projectsBg,
      projectsImg: projectsImg,
      projectsTitle: projectsTitle,
      newsBg: newsBg,
      clubBg: clubBg,
      clubTitle: clubTitle,
      forumClubBg: forumClubBg,
      forumClubTitle: forumClubTitle,
      columns: [{
        name: '首页'
      },{
        name: '关于融熠'
      },{
        name: '精选项目'
      },{
        name: '资产配置管家'
      },{
        name: '财富大讲堂'
      },{
        name: '管家俱乐部'
      }],
      news: [{
        name: '景泉财富厦门分公司隆重开业',
        content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
      },{
        name: '景泉财富厦门分公司隆重开业',
        content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
      },{
        name: '景泉财富厦门分公司隆重开业',
        content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
      },{
        name: '景泉财富厦门分公司隆重开业',
        content: '2017年6月27日 星期二，景泉财富厦门分公司开业仪式于厦门市思明区展鸿路82号国际金融中心大厦25楼顺利举办，继深圳分公司开业后，景泉团队成功进驻我国美丽的“鹭岛”，标志着景泉财富全国区域市场战略的进一步加速，这是景泉财富发展蓝图中重要的一步。'
      }]
    }
  },
  components: {
    HeaderNavbar,
    about,
    projects,
    news,
    club,
    forum,
    footerBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0
  }
</style>
