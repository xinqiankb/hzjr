// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Http from 'vue-resource'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Http);


global.API = 'http://hzry.youjiadv.com/frontend/web/index.php?r=index%2F';

store.dispatch('get_columns');
store.dispatch('get_logo');
store.dispatch('get_banner');
store.dispatch('get_aboutUs');
store.dispatch('get_news');
store.dispatch('get_forumColumns');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
