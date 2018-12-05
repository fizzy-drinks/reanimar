<template lang="pug">
.home(v-if='!loadingFile')
  text-screen(
    v-for='(frame, i) in text.actThree.frames'
    :key='i'
    :chapter='frame'
  )

  back-button
</template>

<script>
import TextManager from './TextManager'
import TextScreen from './TextScreen'
import BackButton from './BackButton'

export default {
  name: 'ActThree',
  mixins: [TextManager],
  components: { TextScreen, BackButton }
}
</script>
