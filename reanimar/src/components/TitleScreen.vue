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
