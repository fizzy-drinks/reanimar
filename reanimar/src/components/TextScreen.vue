<template lang='pug'>
section.screen
  .centered
    h2 {{ title }}
    div(v-for='(section, i) in content' :key='i')
      audio(v-if='section.audio' :src='section.audio' controls)
      p(v-if='section.text' v-html='md(section.text)')
</template>

<script>
import { markdown } from 'markdown'

export default {
  name: 'TextScreen',
  props: ['title', 'content'],
  methods: {
    md (text) {
      return markdown.toHTML(text)
    }
  }
}
</script>
