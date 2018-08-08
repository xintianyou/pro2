import Vue from 'vue'
import Router from 'vue-router'
import Indexs from '../pages/index'
import Content from '../pages/content'
import Mine from '../pages/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Indexs
    },
    {
      path: '/pages/content',
      name: 'content',
      component: Content
    },
    {
      path: '/pages/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
