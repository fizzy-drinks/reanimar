<template lang="pug">
l-map(
  :zoom='map.settings.zoom || 5'
  :center='L.latLng(map.settings.lat || 0, map.settings.lng || 0)'
  style='height: 80vh; width: 90vw'
)
  l-tile-layer(
    :url='openMapUrl'
    :attribution='openMapAttribution'
  )
  l-marker(
    v-for='(marker, i) in (map.markers || [])'
    :key='i'
    :title='marker.title'
    :lat-lng='L.latLng(...marker.position)'
  )
    l-popup(:content='md(marker.popupText)')
  l-circle(
    v-for='(circle, i) in (map.circles || [])'
    :key='i'
    :lat-lng='L.latLng(...circle.position)'
    :radius='circle.size * 12'
    :color='circle.color || "darkorange"'
    :fillColor='circle.fill || "darkorange"'
  )
    l-popup(:content='md(circle.popupText)')
</template>

<script>
import 'leaflet'
import { LMap, LMarker, LTileLayer, LPopup, LCircle } from 'vue2-leaflet'

import MarkdownParser from './MarkdownParser'

export default {
  name: 'LeafletMap',
  mixins: [MarkdownParser],
  components: { LMap, LMarker, LTileLayer, LPopup, LCircle },
  props: ['map'],
  data () {
    return {
      /* eslint-disable no-undef */
      L,
      openMapUrl: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      openMapAttribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>
