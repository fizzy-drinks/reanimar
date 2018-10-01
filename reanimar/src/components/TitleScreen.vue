<template lang='pug'>
section.screen
  .video-bg(v-if='bg')
    img(:src='bg')
  h2 {{ title }}
</template>

<script>
export default {
  name: 'TitleScreen',
  props: ['title', 'bg']
}
</script>

<style lang='sass' scoped>
@import ../transform-center-mixin

.screen
  background-color: black
  text-shadow: 0 0 10px #ededed20

  img
    +transformCenter
    filter: grayscale(50%)

h2
  +transformCenter
  text-transform: uppercase
  font-weight: bold
  color: #dfdfdf
  text-shadow: 1px 1px 20px #0009

</style>
