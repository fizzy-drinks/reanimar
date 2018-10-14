<template lang='pug'>
.back-button(@click='goHome')
  fa-icon(icon='arrow-left' size='xs')
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang='sass' scoped>
.back-button
  position: fixed
  top: 1vh
  left: 1vw

  width: 32px
  height: 32px

  display: flex
  align-items: center
  justify-content: center

  color: #dfdfdf
  border-radius: 5%
  border: transparent 2px solid
  cursor: pointer

  opacity: .5

  transition: all 300ms ease

  &:hover
    width: 36px
    height: 36px
    opacity: 1
    border-radius: 50%
    border-color: #dfdfdf
</style>
