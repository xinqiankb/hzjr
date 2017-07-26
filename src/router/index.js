import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import article from '@/components/article/index'
import list from '@/components/list/list'
import news from '@/components/news/news'
import single from '@/components/single/single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: article
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },    
    {
      path: '/news',
      name: 'news',
      component: news
    },    
    {
      path: '/single',
      name: 'single',
      component: single
    }
  ]
})
