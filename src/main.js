import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import jquery from './../static/js/jquery.js'
import Cddv from 'vue-cdd-validator';

// 表单验证
let cddv = new Cddv()
Vue.use(cddv);

Vue.config.productionTip = false

// 接口地址
global.API = 'http://www.rongyi-fund.com/frontend/web/index.php?r=index%2F';
// 补全图片路径
global.IMG_URL = 'http://www.rongyi-fund.com/backend/web/';

// 获取数据
store.dispatch('get_columns');
store.dispatch('get_logo');
store.dispatch('get_banner');
store.dispatch('get_aboutUs');
store.dispatch('get_news');
store.dispatch('get_forumColumns');
store.dispatch('get_footer');
store.dispatch('get_webtips');

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
