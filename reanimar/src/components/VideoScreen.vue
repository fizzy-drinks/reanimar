<template lang='pug'>
.hello
  #video-bg
    video(
      src='https://res.cloudinary.com/dza7f8g2e/video/upload/v1529635341/beach02.mp4'
      autoplay loop muted ref='videoEmbed'
      :class='videoElementClassList' @loadeddata='videoFadeIn()'
    )

  #video-content
    h1 {{ title }}
    p {{ caption }}

</template>

<script>
export default {
  name: 'VideoScreen',

  created () {
    this.title = 'Reanimar'
    this.caption = 'Um ensaio sobre a vida marinha.'
    this.videoPlaybackRate = 0.5
  },

  data () {
    return {
      displayVideo: false
    }
  },

  mounted () {
    this.setVideoPlaybackRate()
  },

  methods: {
    videoFadeIn () {
      this.displayVideo = true
    },

    setVideoPlaybackRate () {
      this.$refs.videoEmbed.playbackRate = this.videoPlaybackRate
    }
  },

  computed: {
    videoElementClassList () {
      return { show: this.displayVideo }
    }
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
