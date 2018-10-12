<template lang='pug'>
section.screen
  .centered
    h2 {{ title }}
    div(v-for='(section, i) in content' :key='i')
      img(
        v-if='section.picture'
        :alt='section.picture.alt'
        :src='section.picture.src'
      )
      p(v-if='section.text' v-html='md(section.text)')
      audio(v-if='section.audio' :src='section.audio' controls)
      youtube-video(v-if='section.video' :id='section.video')
</template>

<script>
import { markdown } from 'markdown'

import YoutubeVideo from './YoutubeVideo'

export default {
  name: 'TextScreen',
  components: { YoutubeVideo },
  props: ['title', 'content'],
  methods: {
    md (text) {
      return markdown.toHTML(text)
    }
  }
}
</script>
