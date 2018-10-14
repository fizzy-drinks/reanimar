import 'leaflet'
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App'
import router from './router'

import './main.sass'
import 'leaflet/dist/leaflet.css'
import 'leaflet.icon.glyph'

/* eslint-disable no-undef */
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

library.add(faAngleRight, faArrowLeft)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
