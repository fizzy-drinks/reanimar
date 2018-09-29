export default {
  methods: {
    scrollPage (dir) {
      if (dir === 'down') {
        const scrollAmt = Math.min(window.scrollY + window.innerHeight, document.body.offsetHeight)
        console.log(scrollAmt)
        window.scroll({
          top: scrollAmt,
          left: 0,
          behavior: 'smooth'
        })
      } else if (dir === 'up') {
        const scrollAmt = Math.max(window.scrollY - window.innerHeight, 0)
        console.log(scrollAmt)
        window.scrollTo({
          top: scrollAmt,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  }
}
