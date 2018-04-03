// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import hljs from 'highlight'
// import marked from 'marked'
import '../theme/index.css'
import './assets/style/common.scss'
import './assets/fonts/iconfont.css'
import './assets/js/rem.js'

import App from './App'

Vue.use(ElementUI)

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
