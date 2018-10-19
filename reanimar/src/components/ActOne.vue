<template lang="pug">
.home
  text-screen(
    v-for='(frame, i) in text.actOne.frames'
    :key='i'
    :chapter='frame'
    ref='page'
  )

  back-button
</template>

<script>
import TextManager from './TextManager'
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import BackButton from './BackButton'

export default {
  name: 'ActOne',
  mixins: [TextManager],
  components: { TitleScreen, TextScreen, BackButton }
}
</script>
