<template>
  <iframe
    :width="computedWidth"
    :height="computedHeight"
    :src="youtubeUrl"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'YoutubeVideo',
  props: ['id'],
  computed: {
    youtubeUrl () {
      return `https://www.youtube.com/embed/${this.id}`
    },
    computedWidth () {
      return window.innerWidth * 0.6
    },
    computedHeight () {
      return this.computedWidth * (9 / 16)
    }
  }
}
</script>
