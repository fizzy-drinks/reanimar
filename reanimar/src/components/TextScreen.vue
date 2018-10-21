<template lang='pug'>
section.screen(:style='customStyle')
  .centered
    h2 {{ chapter.title }}
    div(v-for='(section, i) in chapter.content' :key='i')
      .flex(v-if='section.iconText')
        .icon(:style='{ backgroundColor: section.iconText.iconBgColor || "white" }')
          img(:src='section.iconText.icon')
        p(v-html='md(section.iconText.text)')
      .container
        figure.nudge-right(v-if='section.picture')
          img(
            :alt='section.picture.alt'
            :src='section.picture.src'
          )
          legend {{ section.picture.legend }}
        p(v-if='section.text' v-html='md(section.text)')
      audio(v-if='section.audio' :src='section.audio' controls)
      youtube-video(v-if='section.video' :id='section.video')
      google-chart(
        v-if='section.chart'
        :type='section.chart.type'
        :data='section.chart.data'
        :options='section.chart.options'
      )
      leaflet-map(v-if='section.map' :map='section.map')
</template>

<script>
import { GChart as GoogleChart } from 'vue-google-charts'

import YoutubeVideo from './YoutubeVideo'
import LeafletMap from './LeafletMap'
import MarkdownParser from './MarkdownParser'

export default {
  name: 'TextScreen',
  mixins: [MarkdownParser],
  components: { YoutubeVideo, GoogleChart, LeafletMap },
  props: ['chapter'],
  computed: {
    style () {
      return this.chapter.style || {}
    },
    customStyle () {
      return `
        background-color: ${this.style.bgColor || 'transparent'};
        color: ${this.style.color || 'inherit'}
      `
    }
  }
}
</script>
