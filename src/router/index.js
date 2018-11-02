import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Research from '@/pages/Research'
import Accommodation from '@/pages/Accommodation'
import Life from '@/pages/Life'
import Foods from '@/pages/Foods'
import Travel from '@/pages/Travel'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/research',
      name: 'Research',
      component: Research
    },
    {
      path: '/accommodation',
      name: 'Accommodation',
      component: Accommodation
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
