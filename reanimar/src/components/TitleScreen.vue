<template lang='pug'>
section.screen
  h2 {{ title }}
</template>

<script>
export default {
  name: 'TitleScreen',
  props: ['title']
}
</script>

<style lang='sass' scoped>
@import ../transform-center-mixin

.screen
  background-color: black
  text-shadow: 0 0 10px #ededed20

h2
  +transformCenter
  text-transform: uppercase
  font-weight: bold
  color: #dfdfdf

</style>
