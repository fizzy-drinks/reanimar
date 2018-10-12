<template lang='pug'>
section.screen
  .centered
    h2 {{ title }}
    p(v-for='(t, i) in text' :key='i') {{ t }}
</template>

<script>
export default {
  name: 'TextScreen',
  props: ['title', 'text']
}
</script>
