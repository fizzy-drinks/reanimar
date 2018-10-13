<template lang="pug">
.home
  title-screen(
    :bg='require("../../static/title.jpg")'
    :title='text.appTitle'
    :caption='text.appCaption'
    ref='page1'
  )

  title-screen(
    :title='text.actOne.title'
    :caption='text.actOne.caption'
    :bg='require("../../static/act_i.jpg")'
    linkTo='/problema'
    ref='page2'
  )

  title-screen(:title='text.actTwo.title' ref='page3')
  title-screen(:title='text.actThree.title' ref='page4')

  div(v-if='command' style='position: fixed; top: 5vh; left: 0; width: 100%')
    input(style='display: block; margin: 0 auto; width: 15em' v-model='command')
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
      currentPage: 1,
      command: ''
    }
  },
  methods: {
    goToPage (num) {
      window.scrollTo({
        top: this.$refs[`page${num}`].$el.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    },
    processCommand (cmd) {
      if (cmd === 'prox') this.currentPage += 1
      if (cmd === 'ant') this.currentPage -= 1
    },
    cmdListener (event) {
      if (event.key === 'Enter') {
        const currentCommand = this.command
        this.processCommand(currentCommand)
        this.command = ''
      }
      if (!event.key.match(/^\w$/)) return
      this.command += event.key
    }
  },
  watch: {
    currentPage (value) {
      this.goToPage(value)
    }
  },
  mounted () {
    window.addEventListener('keydown', this.cmdListener)
  },
  destroyed () {
    window.removeEventListener('keydown', this.cmdListener)
  }
}
</script>
