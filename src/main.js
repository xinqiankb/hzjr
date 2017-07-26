// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

global.ApiUrl = '';
store.dispatch('get_columns');
store.dispatch('get_subColumn');
store.dispatch('get_logo');
store.dispatch('get_banner');
store.dispatch('get_aboutUs');
store.dispatch('get_news');
store.dispatch('get_forumColumns');
store.dispatch('test');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
