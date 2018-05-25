// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './assets/scripts/router'
import {AlertPlugin, ToastPlugin} from 'vux'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './assets/scripts/store/store'
const FastClick = require('fastclick')

Vue.config.productionTip = false

// 解决click300毫秒延迟
FastClick.attach(document.body)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
