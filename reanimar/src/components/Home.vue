<template lang="pug">
.home
  video-screen
  title-screen(:title='actOneTitle' :bg='require("../../static/act_i.jpg")' :caption='actOneCaption')
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
    this.actOneTitle = 'I: Mortalidade e impacto'
    this.actOneCaption = 'O que acontece nas praias paulistas'
    this.actTwoTitle = 'II: As Causas'
    this.actThreeTitle = 'III: A Solução'
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
