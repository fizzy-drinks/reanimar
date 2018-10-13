<template lang='pug'>
section.screen.clickable(:style='image' @click='go')
  .centered
    h2 {{ title }}
    p.caption {{ caption }}
  .righted
    fa-icon(icon='angle-right' size='3x')
</template>

<script>
export default {
  name: 'TitleScreen',
  props: {
    title: { default: '' },
    bg: { default: '' },
    caption: { default: '' },
    linkTo: { default: '/' }
  },
  computed: {
    image () {
      return `background-image: url(${this.bg})`
    }
  },
  methods: {
    go () {
      this.$router.push('/problema')
    }
  }
}
</script>

<style lang='sass' scoped>
.screen
  color: white

@keyframes point
  0%
    padding-right: 0
  50%
    padding-right: .25em
  100%
    padding-right: 0

.righted
  animation: point .5s linear infinite
</style>
