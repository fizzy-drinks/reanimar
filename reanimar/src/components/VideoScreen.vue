<template lang='pug'>
.video-screen
  .video-bg
    video(
      src='https://res.cloudinary.com/dza7f8g2e/video/upload/v1529635341/beach02.mp4'
      autoplay loop muted ref='videoEmbed'
      :class='videoElementClassList' @loadeddata='videoFadeIn()'
    )

  .video-content
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
    this.detectWindowResizing()
  },

  methods: {
    videoFadeIn () {
      this.displayVideo = true
    },

    setVideoPlaybackRate () {
      this.$refs.videoEmbed.playbackRate = this.videoPlaybackRate
    },

    adjustVideoSize () {
      const video = this.$refs.videoEmbed
      const videoAspect = video.videoWidth / video.videoHeight
      const windowAspect = window.innerWidth / window.innerHeight

      const shouldCropWidth = videoAspect > windowAspect
      video.classList.add(shouldCropWidth ? 'crop-width' : 'crop-height')
      video.classList.remove(shouldCropWidth ? 'crop-height' : 'crop-width')
    },

    detectWindowResizing () {
      window.addEventListener('resize', this.adjustVideoSize)
    }
  },

  computed: {
    videoElementClassList () {
      return { show: this.displayVideo, 'crop-height': true }
    }
  }
}
</script>

<style scoped lang='sass'>
$videoMaxOpacity: .75
$videoTransitionSpeed: 600ms
$videoOverlayFontColor: #0A0A0A

=transformCenter
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.crop-height
  min-height: 100%
  width: 100%

.crop-width
  min-width: 100%
  height: 100%

.video-screen, .video-bg
  height: 100vh

.video-bg
  position: absolute
  top: 0
  width: 100vw
  overflow: hidden
  left: 0
  background: #000

  video
    +transformCenter
    opacity: 0
    transition: $videoTransitionSpeed opacity 200ms

    &.show
      opacity: $videoMaxOpacity

.video-content
  +transformCenter

  z-index: 2
  text-shadow: 0 0 10px #edededff
  color: $videoOverlayFontColor
  font-weight: 600

</style>
