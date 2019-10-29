import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'js-cookie'
import Element from 'element-ui'

import '@/styles/index.scss' // global css

import "bootstrap/dist/css/bootstrap.min.css"


import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import * as filters from './filters' // global filters

Vue.use(Element, {
    size: Cookies.get('size') || 'medium' // set element-ui default size
  })

  // register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false;

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
