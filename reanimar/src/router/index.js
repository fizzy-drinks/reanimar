import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const ActOne = () => import('@/components/ActOne')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      name: 'Home',
      component: Home },
    { path: '/problema',
      name: 'O Problema',
      component: ActOne }
  ]
})
