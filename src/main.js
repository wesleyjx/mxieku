import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './assets/js/router.js'
import './assets/css/cssreset.css'
import $ from 'n-zepto'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(vueRouter)



import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);


new Vue({
  el: '#app',
  render: h => h(App),
  router:router

})
