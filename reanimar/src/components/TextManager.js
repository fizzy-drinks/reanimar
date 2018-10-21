import Axios from 'axios'
import YAML from 'yaml'
import content from '../content.yaml'

const isProd = process.env.NODE_ENV !== 'development'
const RawYamlUrl = 'https://raw.githubusercontent.com/gabrielchiconi/reanimar/master/reanimar/src/content.yaml'

export default {
  data () {
    return {
      loadingFile: isProd,
      text: !isProd ? YAML.parse(content) : {}
    }
  },
  async mounted () {
    if (isProd) {
      const { data: yamlFile } = await Axios.get(RawYamlUrl)
      this.text = YAML.parse(yamlFile)
      this.loadingFile = false
    }
  }
}
