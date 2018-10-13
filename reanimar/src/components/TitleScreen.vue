<template lang='pug'>
section.screen(:style='image' :class='{ clickable: !!linkTo }' @click='go')
  .centered
    h2 {{ title }}
    p.caption {{ caption }}
  .righted(v-if='linkTo')
    fa-icon(icon='angle-right' size='3x')
</template>

<script>
export default {
  name: 'TitleScreen',
  props: ['title', 'bg', 'caption', 'linkTo'],
  computed: {
    image () {
      return `background-image: url(${this.bg})`
    }
  },
  methods: {
    go () {
      this.$router.push(this.linkTo)
      window.scrollTo({ top: 0, left: 0 })
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
