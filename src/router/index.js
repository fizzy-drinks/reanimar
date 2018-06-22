import Vue from 'vue'
import Router from 'vue-router'
import VideoScreen from '@/components/VideoScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: VideoScreen
    }
  ]
})
