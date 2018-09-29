<template lang="pug">
.home
  video-screen

</template>

<script>
import VideoScreen from './VideoScreen'
import PageScroller from './PageScroller'

export default {
  name: 'Home',
  components: { VideoScreen },
  mixins: [PageScroller],
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
