import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import article from '@/components/article/index'
import list from '@/components/list/list'
import news from '@/components/news/news'
import single from '@/components/single/single'
import message from '@/components/message'

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
      name: '0',
      component: article
    },
    {
      path: '/list/:id',
      name: '1',
      component: list
    },    
    {
      path: '/news/:id',
      name: '3',
      component: news
    },    
    {
      path: '/single/:id',
      name: 'single',
      component: single
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
