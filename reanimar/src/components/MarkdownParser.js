import Markdown from 'markdown-it'

export default {
  methods: {
    md (text) {
      return Markdown({
        typographer: true,
        html: true,
        quotes: '“”‘’'
      }).render(text)
    }
  }
}
