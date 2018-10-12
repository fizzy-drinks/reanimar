<template lang='pug'>
section.screen(:style='image')
  .centered
    h2 {{ title }}
    p {{ caption }}
</template>

<script>
export default {
  name: 'TitleScreen',
  props: {
    title: { default: '' },
    bg: { default: '' },
    caption: { default: '' }
  },
  computed: {
    image () {
      return `background-image: url(${this.bg})`
    }
  }
}
</script>

<style lang='sass' scoped>
@import ../transform-center-mixin

.screen
  background-color: black
  background-position: center
  background-size: cover

.centered
  +transformCenter
  color: #dfdfdf
  text-shadow: 1px 1px 20px #0009
  width: 100%

  h2
    text-transform: uppercase
    font-weight: bold

</style>
