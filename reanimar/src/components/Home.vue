<template lang="pug">
.home(v-if='!loadingFile')
  title-screen(
    :bg='require("../../static/title.jpg")'
    :title='text.appTitle'
    :caption='text.appCaption'
  )

  title-screen(
    :title='text.actOne.title'
    :caption='text.actOne.caption'
    :bg='require("../../static/act_i.jpg")'
    linkTo='/problema'
  )

  title-screen(
    :title='text.actTwo.title'
    :caption='text.actTwo.caption'
    :bg='require("../../static/act_ii.jpg")'
    linkTo='/causa'
  )

  title-screen(
    :title='text.actThree.title'
    :caption='text.actThree.caption'
    :bg='require("../../static/act_iii.jpg")'
    linkTo='/solucao'
  )

  text-screen(:chapter='copyrightComponentData')
</template>

<script>
import TitleScreen from './TitleScreen'
import TextScreen from './TextScreen'
import TextManager from './TextManager'

export default {
  name: 'Home',
  mixins: [TextManager],
  components: { TitleScreen, TextScreen },
  data () {
    return {
      copyrightComponentData: {
        title: '',
        content: [
          {
            text: (
              '<small>' +
              'Copyright &copy; 2018 Gabriel Chiconi, Nathália Affonso.' +
              '\n\n' +
              'Este conteúdo é distribuído sob a licença' +
              ' [Creative Commons](https://creativecommons.org/licenses/by-sa/2.0/br/): ' +
              'você pode compartilhá-lo e editá-lo para qualquer propósito, ' +
              'mas é necessário atribuir os autores originais. ' +
              '[Ver licença](LICENSE)' +
              '</small>'
            )
          }
        ]
      }
    }
  }
}
</script>
