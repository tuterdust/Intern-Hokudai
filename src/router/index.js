import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Component1 from '@/pages/Content1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/content1',
      name: 'Content1',
      component: Component1
    }
  ]
})
