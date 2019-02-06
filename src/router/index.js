import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cactuscereal from '@/components/cactuscereal'
import chimera from '@/components/chimera'
import dreamsofamonster from '@/components/dreamsofamonster'
import thelastkingbalthazar from '@/components/thelastkingbalthazar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/cactuscereal',
      name: 'cactuscereal',
      component: cactuscereal
    },
    {
      path: '/dreamsofamonster',
      name: 'dreamsofamonster',
      component: dreamsofamonster
    },
    {
      path: '/chimera',
      name: 'chimera',
      component: chimera
    },
    {
      path: '/thelastkingbalthazar',
      name: 'thelastkingbalthazar',
      component: thelastkingbalthazar
    }
  ]
})
