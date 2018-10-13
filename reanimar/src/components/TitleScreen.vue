<template lang='pug'>
section.screen.clickable(:style='image' @click='go')
  .centered
    h2 {{ title }}
    p.caption {{ caption }}
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

<style lang='sass'>
.centered
  color: white
</style>
