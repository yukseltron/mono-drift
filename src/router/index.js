import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import fiction from '@/components/fiction'
import contact from '@/components/contact'
import rambles from '@/components/rambles'
import poetry from '@/components/poetry'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/fiction',
      name: 'fiction',
      component: fiction
    },
    {
      path: '/rambles',
      name: 'rambles',
      component: rambles
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: poetry
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
