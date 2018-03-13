import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/index'
import GridLayout from '@/gridLayout'
import HolyGrailLayout from '@/holyGrailLayout'
import FluidLayout from '@/fluidLayout'
import DiceLayout from '@/diceLayout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/diceLayout',
      name: 'diceLayout',
      component: DiceLayout
    },
    {
      path: '/fluidLayout',
      name: 'fluidLayout',
      component: FluidLayout
    },
    {
      path: '/holyGrailLayout',
      name: 'holyGrailLayout',
      component: HolyGrailLayout
    },
    {
      path: '/gridLayout',
      name: 'gridLayout',
      component: GridLayout
    },
  ]
})
