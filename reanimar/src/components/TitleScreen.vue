<template lang='pug'>
section.screen(:style='image')
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
    caption: { default: '' }
  },
  computed: {
    image () {
      return `background-image: url(${this.bg})`
    }
  }
}
</script>
