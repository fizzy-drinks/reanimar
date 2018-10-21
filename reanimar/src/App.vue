<template lang='pug'>
#app
  router-view(v-if='!loadingFile')
  .loader(:class='{ active: loading || loadingFile }')
    | Carregando...
    .pong

</template>

<script>
import TextManager from './components/TextManager'

export default {
  name: 'MainApp',
  mixins: [TextManager],
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true
      window.setTimeout(next, 400)
    })
    this.$router.afterEach((to, from) => {
      window.setTimeout(() => { this.loading = false }, 400)
    })
  }
}
</script>
