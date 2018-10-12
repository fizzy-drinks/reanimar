export default {
  methods: {
    scrollPage (dir) {
      const screensTraveled = window.scrollY / window.innerHeight
      const maxScreens = (document.body.scrollHeight / window.innerHeight) - 1
      const currentScreen = Math.floor(screensTraveled)
      const dest =
        dir === 'up'
          ? Math.max(currentScreen - 1, 0)
          : Math.min(currentScreen + 1, maxScreens)
      window.scrollTo({
        top: dest * window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
