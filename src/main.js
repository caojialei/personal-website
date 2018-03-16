// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import {Button, Carousel, CarouselItem, Menu, MenuItem, Col, Row, Card} from 'element-ui'
import './assets/style/common.scss'
import './assets/js/rem.js'

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.use(Col)
Vue.use(Row)
Vue.use(Card)

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
