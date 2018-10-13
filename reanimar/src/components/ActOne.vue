<template lang="pug">
.home
  text-screen(
    v-for='(frame, i) in text.actOne.frames'
    :key='i'
    :chapter='frame'
  )
</template>

<script>
import TextManager from './TextManager'
import TextScreen from './TextScreen'

export default {
  name: 'ActOne',
  mixins: [TextManager],
  components: { TextScreen },
  mounted () {
    console.log(this.text.actOne)
  }
}
</script>
