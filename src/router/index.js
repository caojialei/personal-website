import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import about from '@/views/about/about'
import category from '@/views/category/category'
import tag from '@/views/tag/tag'
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
      path: '/category/:categoryId/:categoryName',
      component: category
    },
    {
      name: 'tag',
      path: '/tag/:tagId/:tagName',
      component: tag
    },
    {
      name: 'article',
      path: '/article/:articleId',
      component: article
    }
  ]
})
