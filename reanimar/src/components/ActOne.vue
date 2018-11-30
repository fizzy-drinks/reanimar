<template lang="pug">
.home(v-if='!loadingFile')
  text-screen(
    v-for='(frame, i) in text.actOne.frames'
    :key='i'
    :chapter='frame'
    ref='page'
  )

  title-screen(
    :title='text.actTwo.title'
    :caption='text.actTwo.caption'
    :bg='require("../../static/act_ii.jpg")'
    linkTo='/causa'
  )

  back-button
</template>

<script>
import TextManager from './TextManager'
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import BackButton from './BackButton'

export default {
  name: 'ActOne',
  mixins: [TextManager],
  components: { TitleScreen, TextScreen, BackButton }
}
</script>
