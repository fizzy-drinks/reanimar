<template lang='pug'>
section.screen
  .centered
    h2 {{ title }}
    p(v-for='(t, i) in text' :key='i' v-html='md(t)')
</template>

<script>
import { markdown } from 'markdown'

export default {
  name: 'TextScreen',
  props: ['title', 'text'],
  methods: {
    md (text) {
      return markdown.toHTML(text)
    }
  }
}
</script>
