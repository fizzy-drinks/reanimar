<template lang="pug">
.home
  text-screen(
    v-for='(frame, i) in text.actOne.frames'
    :key='i'
    :chapter='frame'
    ref='page'
  )

  div(v-if='command' style='position: fixed; top: 5vh; left: 0; width: 100%')
    input(style='display: block; margin: 0 auto; width: 15em' v-model='command')
</template>

<script>
import TextManager from './TextManager'
import TextScreen from './TextScreen'

export default {
  name: 'ActOne',
  mixins: [TextManager],
  components: { TextScreen },
  data () {
    return {
      currentPage: 0,
      command: ''
    }
  },
  methods: {
    goToPage (num) {
      window.scrollTo({
        top: this.$refs.page[num].$el.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    },
    processCommand (cmd) {
      if (cmd === 'prox' && this.currentPage < this.$refs.page.length - 1) {
        this.currentPage += 1
      }
      if (cmd === 'ant' && this.currentPage) this.currentPage -= 1
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
