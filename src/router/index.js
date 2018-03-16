import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import pet from '@/views/pet/pet'
import articleDetail from '@/views/articleDetail/articleDetail'
import tools from '@/views/tools/tools'

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
      path: '/pet',
      component: pet
    },
    {
      path: '/articleDetail',
      component: articleDetail
    },
    {
      path: '/tools',
      component: tools
    }
  ]
})
