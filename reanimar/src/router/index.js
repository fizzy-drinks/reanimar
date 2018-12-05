import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const ActOne = () => import('@/components/ActOne')
const ActTwo = () => import('@/components/ActTwo')
const ActThree = () => import('@/components/ActThree')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      name: 'Home',
      component: Home },
    { path: '/problema',
      name: 'O Problema',
      component: ActOne },
    { path: '/causa',
      name: 'A Causa',
      component: ActTwo },
    { path: '/solucao',
      name: 'A Solução',
      component: ActThree }
  ]
})
