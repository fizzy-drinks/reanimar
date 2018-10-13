import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ActOne from '@/components/ActOne'

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
