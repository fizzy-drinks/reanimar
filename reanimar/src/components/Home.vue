<template lang="pug">
.home
  video-screen
  title-screen(
    :title='text.actOne.title'
    :caption='text.actOne.caption'
    :bg='require("../../static/act_i.jpg")'
    linkTo='/problema'
  )

  title-screen(:title='text.actTwo.title')
  title-screen(:title='text.actThree.title')

</template>

<script>
import VideoScreen from './VideoScreen'
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import TextManager from './TextManager'

export default {
  name: 'Home',
  mixins: [TextManager],
  components: { VideoScreen, TitleScreen, TextScreen }
}
</script>
