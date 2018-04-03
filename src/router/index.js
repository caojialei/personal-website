import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import about from '@/views/about/about'
import catalog from '@/views/catalog/catalog'
import article from '@/views/article/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'  // 进/ 就会跳转到/home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/catalog',
      component: catalog
    },
    {
      path: '/article/:articleId',
      component: article
    }
  ]
})
