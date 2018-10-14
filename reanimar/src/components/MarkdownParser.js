import { markdown } from 'markdown'

export default {
  methods: {
    md (text) {
      return markdown.toHTML(text)
    }
  }
}
