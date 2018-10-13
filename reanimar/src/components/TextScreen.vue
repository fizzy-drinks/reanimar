<template lang='pug'>
section.screen(:style='customStyle')
  .centered
    h2 {{ chapter.title }}
    div(v-for='(section, i) in chapter.content' :key='i')
      img(
        v-if='section.picture'
        :alt='section.picture.alt'
        :src='section.picture.src'
      )
      p(v-if='section.text' v-html='md(section.text)')
      audio(v-if='section.audio' :src='section.audio' controls)
      youtube-video(v-if='section.video' :id='section.video')
      google-chart(
        v-if='section.chart'
        :type='section.chart.type'
        :data='section.chart.data'
        :options='section.chart.options'
      )
</template>

<script>
import { GChart as GoogleChart } from 'vue-google-charts'
import { markdown } from 'markdown'

import YoutubeVideo from './YoutubeVideo'

export default {
  name: 'TextScreen',
  components: { YoutubeVideo, GoogleChart },
  props: ['chapter'],
  data () {
    return {
      chartData: [
        ['Food', 'Temperature'],
        ['Burrito', 2000],
        ['Common dish', 30],
        ['Sushi', 10]
      ]
    }
  },
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
  },
  methods: {
    md (text) {
      return markdown.toHTML(text)
    }
  }
}
</script>
