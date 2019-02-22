import Vue from 'vue'
import Router from 'vue-router'
import thelastaccident from '@/components/thelastaccident'
import hastemaker from '@/components/hastemaker'
import escape from '@/components/escape'
import suspensiontheory from '@/components/suspensiontheory'
import understandingthemachine from '@/components/understandingthemachine'
import blesstheangry from '@/components/blesstheangry'
import limitedtomorrow from '@/components/limitedtomorrow'
import indefiance from '@/components/indefiance'
import maybeitsyou from '@/components/maybeitsyou'
import endconvergence from '@/components/endconvergence'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/s1',
      name: 'thelastaccident',
      component: thelastaccident
    },
    {
      path: '/s2',
      name: 'hastemaker',
      component: hastemaker
    },
    {
      path: '/s3',
      name: 'escape',
      component: escape
    },
    {
      path: '/s4',
      name: 'suspensiontheory',
      component: suspensiontheory
    },
    {
      path: '/s5',
      name: 'understandingthemachine',
      component: understandingthemachine
    },
    {
      path: '/s6',
      name: 'blesstheangry',
      component: blesstheangry
    },
    {
      path: '/s7',
      name: 'limitedtomorrow',
      component: limitedtomorrow
    },
    {
      path: '/s8',
      name: 'indefiance',
      component: indefiance
    },
    {
      path: '/s9',
      name: 'maybeitsyou',
      component: maybeitsyou
    },
    {
      path: '/s10',
      name: 'endconvergence',
      component: endconvergence
    }
  ]
})
