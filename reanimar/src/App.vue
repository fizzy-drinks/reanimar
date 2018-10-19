<template lang='pug'>
#app
  router-view
  .loader(:class='{ active: loading }')
    | Carregando...
    .pong

</template>

<script>
export default {
  name: 'MainApp',
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
