<template lang='pug'>
.hello
  #video-bg
    video(
      src='/static/video/beach01.mp4'
      autoplay loop muted ref='videoEmbed'
      :class='videoElementClassList' @loadeddata='videoFadeIn()'
    )

  #video-content
    h1 {{ title }}
    p {{ caption }}

</template>

<script>
// @flow
import Component from 'vue-class-component'

@Component({ name: 'VideoScreen' })
export default class VideoScreen {
  title: string = 'Reanimar'
  caption = 'Um ensaio sobre a vida marítima.'
  displayVideo = false

  mounted () {
    this.setVideoPlaybackRate()
  }

  videoFadeIn () {
    this.displayVideo = true
  }

  setVideoPlaybackRate () {
    this.$refs.videoEmbed.playbackRate = 0.8
  }

  get videoElementClassList () {
    return { show: this.displayVideo }
  }
}
</script>

<style scoped lang='sass'>
$videoMaxOpacity: .75

=absoluteCenter
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

#video-bg
  position: absolute
  top: 0
  height: 100vh
  width: 100vw
  overflow: hidden
  left: 0
  background: #000

  video
    +absoluteCenter
    min-height: 100%
    width: 100%
    opacity: 0
    transition: 600ms opacity 200ms

    &.show
      opacity: $videoMaxOpacity

#video-content
  +absoluteCenter

  z-index: 2

  text-shadow: 0 0 10px #edededff
  color: #121212F9
  font-weight: 600

h1
  font-size: 3em

</style>
