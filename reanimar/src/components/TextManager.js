import Axios from 'axios'
import YAML from 'yaml'
import content from '../content.yaml'

const isProd = process.env.NODE_ENV !== 'development'
const RawYamlUrl = '/reanimar/reanimar/src/content.yaml'

const textContent = (async () => {
  if (!isProd) return
  const { data: yamlFile } = await Axios.get(RawYamlUrl)
  this.text = YAML.parse(yamlFile)
  this.loadingFile = false
})()

export default {
  data () {
    return {
      loadingFile: isProd,
      text: !isProd ? YAML.parse(content) : {}
    }
  },
  async mounted () {
    if (isProd) {
      this.text = await textContent
    }
  }
}
