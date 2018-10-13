<template lang="pug">
.home
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

  title-screen(:title='text.actTwo.title')
  title-screen(:title='text.actThree.title')

</template>

<script>
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import TextManager from './TextManager'

export default {
  name: 'Home',
  mixins: [TextManager],
  components: { TitleScreen, TextScreen },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    scrollPage (dir) {
      const maxScreens = (document.body.scrollHeight / window.innerHeight) - 1
      const currentScreen = this.currentScreen
      const dest =
        dir === 'up'
          ? Math.max(currentScreen - 1, 0)
          : Math.min(currentScreen + 1, maxScreens)
      this.currentScreen = dest
      window.scrollTo({
        top: dest * window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
