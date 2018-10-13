<template lang='pug'>
.video
  title-screen(:bg='titleImage' :title='title' :caption='caption')

</template>

<script>
import TitleScreen from './TitleScreen'

export default {
  name: 'VideoScreen',
  components: { TitleScreen },
  created () {
    this.title = 'Reanimar'
    this.caption = 'Um ensaio sobre a vida marinha.'
    this.titleImage = require('../../static/title.jpg')
  }
}
</script>

<style scoped lang='sass'>
$videoMaxOpacity: .9
$videoTransitionSpeed: 600ms
$videoOverlayFontColor: #0A0A0A

.crop-height
  min-height: 100%
  width: 100%

.crop-width
  min-width: 100%
  height: 100vh

.video-bg
  height: 100vh

.video-bg
  position: absolute
  width: 100vw
  overflow: hidden
  background: #000

  video
    opacity: 0
    transition: $videoTransitionSpeed opacity 200ms

    &.show
      opacity: $videoMaxOpacity

.video-content
  z-index: 2
  text-shadow: 0 0 10px #edededff
  color: $videoOverlayFontColor
  font-weight: 600

</style>
