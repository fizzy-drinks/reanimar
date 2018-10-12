<template lang="pug">
.home
  video-screen
  title-screen(
    :title='text.actOne.title'
    :caption='text.actOne.caption'
    :bg='require("../../static/act_i.jpg")'
  )
  text-screen(:title='text.actOne.frames[0].title' :text='text.actOne.frames[0].text')

  title-screen(:title='text.actTwo.title')
  title-screen(:title='text.actThree.title')

</template>

<script>
import VideoScreen from './VideoScreen'
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import PageScroller from './PageScroller'
import TextManager from './TextManager'

export default {
  name: 'Home',
  components: { VideoScreen, TitleScreen, TextScreen },
  mixins: [PageScroller, TextManager],
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
