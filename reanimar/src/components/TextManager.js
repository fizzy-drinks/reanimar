import YAML from 'yaml'
import content from '../content.yaml'

export default {
  data () {
    return {
      text: YAML.parse(content)
    }
  }
}
