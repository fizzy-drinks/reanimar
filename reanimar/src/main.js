import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App'
import router from './router'

import './main.sass'

library.add(faAngleRight)
library.add(faArrowLeft)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
