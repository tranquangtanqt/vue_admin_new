import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cookies from 'js-cookie'
import Element from 'element-ui'
// import filters from './filters' // global filters

import '@/styles/index.scss' // global css

import './icons' // icon
// import './permission' // permission control
import './utils/error-log' // error log
import * as filters from './filters' // global filters
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

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
