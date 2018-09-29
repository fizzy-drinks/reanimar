<template lang="pug">
.home
  video-screen
  title-screen(:title='actOneTitle')
  title-screen(:title='actTwoTitle')
  title-screen(:title='actThreeTitle')

</template>

<script>
import VideoScreen from './VideoScreen'
import TitleScreen from './TitleScreen'
import PageScroller from './PageScroller'

export default {
  name: 'Home',
  components: { VideoScreen, TitleScreen },
  mixins: [PageScroller],
  created () {
    this.actOneTitle = 'Ato I: O Problema'
    this.actTwoTitle = 'Ato II: As Causas'
    this.actThreeTitle = 'Ato III: A Solução'
  },
  mounted () {
    window.addEventListener('keydown', event => {
      if (!event.key.match(/arrow/i)) return
      event.preventDefault()
      if (['ArrowDown', 'ArrowRight'].includes(event.key)) {
        this.scrollPage('down')
      } else {
        this.scrollPage('up')
      }
    })
  }
}
</script>
