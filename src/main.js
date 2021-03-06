// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css'
import hljs from 'highlight'
import '../theme/index.css'
import './assets/style/common.scss'
import './assets/fonts/iconfont.css'
import './assets/js/rem.js'
import App from './App'
import axios from './axios'

Vue.use(ElementUI)

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false

export const bus = new Vue()

// 将axios挂载到Vue实例中的$http上，在项目任何地方可通过this.$http来使用
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
