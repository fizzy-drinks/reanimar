<template lang="pug">
.home(v-if='!loadingFile')
  text-screen(
    v-for='(frame, i) in text.actTwo.frames'
    :key='i'
    :chapter='frame'
  )

  title-screen(
    :title='text.actThree.title'
    :caption='text.actThree.caption'
    :bg='require("../../static/act_iii.jpg")'
    linkTo='/solução'
  )

  back-button
</template>

<script>
import TextManager from './TextManager'
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import BackButton from './BackButton'

export default {
  name: 'ActTwo',
  mixins: [TextManager],
  components: { TitleScreen, TextScreen, BackButton }
}
</script>
