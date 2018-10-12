<template lang='pug'>
section.screen(:style='image')
  h2 {{ title }}
</template>

<script>
export default {
  name: 'TitleScreen',
  props: ['title', 'bg'],
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

h2
  +transformCenter
  text-transform: uppercase
  font-weight: bold
  color: #dfdfdf
  text-shadow: 1px 1px 20px #0009
  width: 100%

</style>
