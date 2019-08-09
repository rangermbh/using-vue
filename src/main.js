import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import store from './store'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss'
import './icons' // icon
import router from './router'
Vue.config.productionTip = false
Vue.use(Element)
var infiniteScroll = require('vue-infinite-scroll')
Vue.use(infiniteScroll)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
