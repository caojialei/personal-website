import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import about from '@/views/about/about'
import catalog from '@/views/catalog/catalog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'  // 进/ 就会跳转到/index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/catalog',
      component: catalog
    }
  ]
})
