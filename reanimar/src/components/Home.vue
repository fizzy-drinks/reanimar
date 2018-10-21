<template lang="pug">
.home(v-if='!loadingFile')
  title-screen(
    :bg='require("../../static/title.jpg")'
    :title='text.appTitle'
    :caption='text.appCaption'
  )

  title-screen(
    :title='text.actOne.title'
    :caption='text.actOne.caption'
    :bg='require("../../static/act_i.jpg")'
    linkTo='/problema'
  )

  title-screen(:title='text.actTwo.title' :caption='text.actTwo.caption' linkTo='/causa')
  title-screen(:title='text.actThree.title' :caption='text.actThree.caption')
</template>

<script>
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import TextManager from './TextManager'

export default {
  name: 'Home',
  mixins: [TextManager],
  components: { TitleScreen, TextScreen }
}
</script>
