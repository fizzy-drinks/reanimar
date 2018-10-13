<template lang='pug'>
#app
  router-view

</template>

<script>
import PageScroller from './components/PageScroller'

export default {
  name: 'MainApp',
  mixins: [PageScroller],
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

<style lang='sass'>
#app
  font-size: 1.8em
  text-align: center

</style>
