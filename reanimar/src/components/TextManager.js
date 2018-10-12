import YAML from 'yaml'
import pt from '../pt.locale.yaml'

export default {
  data () {
    return {
      text: YAML.parse(pt)
    }
  }
}
