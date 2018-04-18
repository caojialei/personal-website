import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import about from '@/views/about/about'
import category from '@/views/category/category'
import article from '@/views/article/article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'  // 进/ 就会跳转到/home
    },
    {
      name: 'home',
      path: '/home',
      component: home
    },
    {
      name: 'about',
      path: '/about',
      component: about
    },
    {
      name: 'category',
      path: '/category/:categoryId',
      component: category
    },
    {
      name: 'article',
      path: '/article/:articleId',
      component: article
    }
  ]
})
