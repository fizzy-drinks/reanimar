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

h2
  +transformCenter

</style>
