<template>
  <iframe
    width="560"
    height="315"
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
    }
  }
}
</script>
