<template>
  <div class="home">
    <Header-navbar :columns="columns" :logo="logo" :banner="banner"></Header-navbar>
    <about :aboutImg="aboutImg" :aboutUs="aboutUs"></about>
    <projects :projectsBg="projectsBg" :projectsImg="projectsImg" :projectsTitle="projectsTitle"></projects>
    <news :newsBg="newsBg" :news="news"></news>
    <club :clubBg="clubBg" :clubTitle="clubTitle"></club>
    <forum :forumClubBg="forumClubBg" :forumClubTitle="forumClubTitle"></forum>
    <footerBox></footerBox>
  </div>
</template>

<script>
import home from './../../utity/home/home.js'
export default {
  name: 'home',
  data() {
    return {
      logo: home.logo,
      banner: home.banner,
      aboutImg: home.aboutImg,
      aboutUs: home.aboutUs,
      projectsBg: home.projectsBg,
      projectsImg: home.projectsImg,
      projectsTitle: home.projectsTitle,
      newsBg: home.newsBg,
      clubBg: home.clubBg,
      clubTitle: home.clubTitle,
      forumClubBg: home.forumClubBg,
      forumClubTitle: home.forumClubTitle,
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
    HeaderNavbar:home.HeaderNavbar,
    about:home.about,
    projects:home.projects,
    news:home.news,
    club:home.club,
    forum:home.forum,
    footerBox: home.footerBox
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
