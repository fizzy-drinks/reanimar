webpackJsonp([1],{B7Qx:function(t,n){},EYnv:function(t,n){},IVIi:function(t,n){t.exports="standardStyles:\n  white: &style.white\n    bgColor: white\n  black: &style.black\n    bgColor: black\n    color: '#dfdfdf'\n\nstandardCoords:\n  Litoral: &coords.Litoral\n    lat: -24.2\n    lng: -46\n    zoom: 8\n  Cananéia: &coords.Cananéia [-25.0244, -47.9323]\n  IlhaComprida: &coords.IlhaComprida [-24.7462, -47.5507]\n  Iguape: &coords.Iguape [-24.7098, -47.5566]\n  Peruíbe: &coords.Peruíbe [-24.3173, -46.9956]\n  Itanhaém: &coords.Itanhaém [-24.1817, -46.785]\n  Mongaguá: &coords.Mongaguá [-24.1075, -46.6802]\n  PraiaGrande: &coords.PraiaGrande [-24.02, -46.45]\n  SãoVicente: &coords.SãoVicente [-23.963, -46.3918]\n  Santos: &coords.Santos [-23.9618, -46.3322]\n  Guarujá: &coords.Guarujá [-23.9948, -46.2569]\n  Bertioga: &coords.Bertioga [-23.8156, -46.0373]\n  SãoSebastião: &coords.SãoSebastião [-23.8064, -45.4017]\n  Ilhabela: &coords.Ilhabela [-23.779, -45.3557]\n  Caraguatatuba: &coords.Caraguatatuba [-23.6255, -45.4241]\n  Ubatuba: &coords.Ubatuba [-23.3714, -45.0187]\n\nappTitle: Reanimar\nappCaption: Um ensaio sobre a vida marinha.\n\nactOne:\n  title: 'I: Mortalidade e Impacto'\n  caption: O que acontece nas praias paulistas\n\n  frames:\n    -\n      style: *style.black\n      title: Mais de 4.500 animais marinhos\n      content:\n        - text: Esse é o número de animais que foram encontrados nas praias de São Paulo entre agosto de 2017 e agosto de 2018. Isso significa que, para cada humano que morre no mar, 6 animais marinhos morrem em terra entre Cananéia e Ubatuba.\n    -\n      title: Os animais encontrados\n      style: *style.white\n      content:\n        -\n          chart:\n            type: ColumnChart\n            options:\n              fontName: Roboto\n              height: 540\n              isStacked: true\n              title: Animais encontrados no litoral de São Paulo (Ago/2016-Ago/2017)\n              colors: ['#f88', '#8af']\n            data:\n              - [Classe, Mortos, Vivos]\n              - [\"Répteis (tartarugas)\", 1749, 157]\n              - [\"Aves (albatrozes e pinguins)\", 1294, 63]\n              - [\"Mamíferos (golfinhos, baleias e botos)\", 297, 1]\n    -\n      title: Os animais encontrados\n      style: *style.white\n      content:\n        -\n          chart:\n            type: BarChart\n            options:\n              fontName: Roboto\n              height: 540\n              isStacked: percent\n              title: Animais encontrados por quilômetro monitorado no Estado de São Paulo\n            data:\n              - [Classe, Vale do Paraíba, Baixada Santista, Litoral Sul]\n              - [\"Aves (albatrozes e pinguins)\", 0.00584, 0.01025, 0.01411]\n              - [\"Répteis (tartarugas)\", 0.01613, 0.02178, 0.01924]\n              - [\"Mamíferos (golfinhos, baleias e botos)\", 0.00118, 0.00153, 0.0022]\n    -\n      title: O monitoramento das praias\n      content:\n        -\n          text: Rodrigo Valle, coordenador do Instituto Biopesca, comenta o processo de monitoramento das praias\n          audio: none for now\n    - title: Volume de ocorrências por cidade\n      content:\n        -\n          text: Os círculos no mapa indicam o volume de ocorrências em cada município. Quanto maior o círculo, mais ocorrências na área.\n          map:\n            settings: *coords.Litoral\n            circles:\n              -\n                position: *coords.Cananéia\n                popupText: |\n                  **Cananéia**\n\n                  Ocorrências: 159\n                size: 159\n              -\n                position: *coords.IlhaComprida\n                popupText: |\n                  **IlhaComprida**\n\n                  Ocorrências: 688\n                size: 688\n              -\n                position: *coords.Iguape\n                popupText: |\n                  **Iguape**\n\n                  Ocorrências: 54\n                size: 54\n              -\n                position: *coords.Peruíbe\n                popupText: |\n                  **Peruíbe**\n\n                  Ocorrências: 434\n                size: 434\n              -\n                position: *coords.Itanhaém\n                popupText: |\n                  **Itanhaém**\n\n                  Ocorrências: 348\n                size: 348\n              -\n                position: *coords.Mongaguá\n                popupText: |\n                  **Mongaguá**\n\n                  Ocorrências: 347\n                size: 347\n              -\n                position: *coords.PraiaGrande\n                popupText: |\n                  **PraiaGrande**\n\n                  Ocorrências: 377\n                size: 377\n              -\n                position: *coords.SãoVicente\n                popupText: |\n                  **SãoVicente**\n\n                  Ocorrências: 101\n                size: 101\n              -\n                position: *coords.Santos\n                popupText: |\n                  **Santos**\n\n                  Ocorrências: 82\n                size: 82\n              -\n                position: *coords.Guarujá\n                popupText: |\n                  **Guarujá**\n\n                  Ocorrências: 351\n                size: 351\n              -\n                position: *coords.Bertioga\n                popupText: |\n                  **Bertioga**\n\n                  Ocorrências: 117\n                size: 117\n              -\n                position: *coords.SãoSebastião\n                popupText: |\n                  **SãoSebastião**\n\n                  Ocorrências: 182\n                size: 182\n              -\n                position: *coords.Ilhabela\n                popupText: |\n                  **Ilhabela**\n\n                  Ocorrências: 410\n                size: 410\n              -\n                position: *coords.Caraguatatuba\n                popupText: |\n                  **Caraguatatuba**\n\n                  Ocorrências: 293\n                size: 293\n              -\n                position: *coords.Ubatuba\n                popupText: |\n                  **Ubatuba**\n\n                  Ocorrências: 773\n                size: 773\n\nactTwo:\n  title: 'II: As Causas'\n\nactThree:\n  title: 'III: A Solução'\n"},MiPn:function(t,n,e){t.exports=e.p+"static/img/act_i.4fbc9d7.jpg"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("nrd6");var o=e("7+uW"),a=e("C/JF"),r=e("fhbW"),i=e("U0v6"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]},c=e("VU/8")({name:"MainApp"},s,!1,null,null,null).exports,l=e("/ocq"),p={name:"TitleScreen",props:["title","bg","caption","linkTo"],computed:{image:function(){return"background-image: url("+this.bg+")"}},methods:{go:function(){this.linkTo&&(this.$router.push(this.linkTo),window.scrollTo({top:0,left:0}))}}},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"screen",class:{clickable:!!t.linkTo},style:t.image,on:{click:t.go}},[e("div",{staticClass:"centered"},[e("h2",[t._v(t._s(t.title))]),e("p",{staticClass:"caption"},[t._v(t._s(t.caption))])]),t.linkTo?e("div",{staticClass:"righted"},[e("fa-icon",{attrs:{icon:"angle-right",size:"3x"}})],1):t._e()])},staticRenderFns:[]};var u=e("VU/8")(p,d,!1,function(t){e("vQs0")},"data-v-6ded90e8",null).exports,m=e("kXf/"),g={render:function(){var t=this.$createElement;return(this._self._c||t)("iframe",{attrs:{width:"560",height:"315",src:this.youtubeUrl,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})},staticRenderFns:[]},h=e("VU/8")({name:"YoutubeVideo",props:["id"],computed:{youtubeUrl:function(){return"https://www.youtube.com/embed/"+this.id}}},g,!1,null,null,null).exports,f=e("MdIv"),b=e("+sNg"),A={methods:{md:function(t){return b.markdown.toHTML(t)}}},x={name:"LeafletMap",mixins:[A],components:{LMap:f.LMap,LMarker:f.LMarker,LTileLayer:f.LTileLayer,LPopup:f.LPopup,LCircle:f.LCircle},props:["map"],data:function(){return{L:L,openMapUrl:"http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",openMapAttribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}}},k={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("l-map",{staticStyle:{height:"540px",width:"90vw"},attrs:{zoom:t.map.settings.zoom||5,center:t.L.latLng(t.map.settings.lat||0,t.map.settings.lng||0)}},[e("l-tile-layer",{attrs:{url:t.openMapUrl,attribution:t.openMapAttribution}}),t._l(t.map.markers||[],function(n,o){return e("l-marker",{key:o,attrs:{title:n.title,"lat-lng":t.L.latLng.apply(L,n.position)}},[e("l-popup",{attrs:{content:t.md(n.popupText)}})],1)}),t._l(t.map.circles||[],function(n,o){return e("l-circle",{key:o,attrs:{"lat-lng":t.L.latLng.apply(L,n.position),radius:10*n.size,color:n.color||"darkorange",fillColor:n.fill||"darkorange"}},[e("l-popup",{attrs:{content:t.md(n.popupText)}})],1)})],2)},staticRenderFns:[]},w=e("VU/8")(x,k,!1,null,null,null).exports,v={name:"TextScreen",mixins:[A],components:{YoutubeVideo:h,GoogleChart:m.GChart,LeafletMap:w},props:["chapter"],computed:{style:function(){return this.chapter.style||{}},customStyle:function(){return"\n        background-color: "+(this.style.bgColor||"transparent")+";\n        color: "+(this.style.color||"inherit")+"\n      "}}},C={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"screen",style:t.customStyle},[e("div",{staticClass:"centered"},[e("h2",[t._v(t._s(t.chapter.title))]),t._l(t.chapter.content,function(n,o){return e("div",{key:o},[n.picture?e("img",{attrs:{alt:n.picture.alt,src:n.picture.src}}):t._e(),n.text?e("p",{domProps:{innerHTML:t._s(t.md(n.text))}}):t._e(),n.audio?e("audio",{attrs:{src:n.audio,controls:"controls"}}):t._e(),n.video?e("youtube-video",{attrs:{id:n.video}}):t._e(),n.chart?e("google-chart",{attrs:{type:n.chart.type,data:n.chart.data,options:n.chart.options}}):t._e(),n.map?e("leaflet-map",{attrs:{map:n.map}}):t._e()],1)})],2)])},staticRenderFns:[]},y=e("VU/8")(v,C,!1,null,null,null).exports,T=e("5JMb"),z=e.n(T),M=e("IVIi"),S=e.n(M),E={data:function(){return{text:z.a.parse(S.a)}}},O={name:"Home",mixins:[E],components:{TitleScreen:u,TextScreen:y},data:function(){return{currentPage:1,command:""}},methods:{goToPage:function(t){window.scrollTo({top:this.$refs["page"+t].$el.offsetTop,left:0,behavior:"smooth"})},processCommand:function(t){"prox"===t&&(this.currentPage+=1),"ant"===t&&(this.currentPage-=1)},cmdListener:function(t){if("Enter"===t.key){var n=this.command;this.processCommand(n),this.command=""}t.key.match(/^\w$/)&&(this.command+=t.key)}},watch:{currentPage:function(t){this.goToPage(t)}},mounted:function(){window.addEventListener("keydown",this.cmdListener)},destroyed:function(){window.removeEventListener("keydown",this.cmdListener)}},U={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"home"},[o("title-screen",{ref:"page1",attrs:{bg:e("RzqU"),title:t.text.appTitle,caption:t.text.appCaption}}),o("title-screen",{ref:"page2",attrs:{title:t.text.actOne.title,caption:t.text.actOne.caption,bg:e("MiPn"),linkTo:"/problema"}}),o("title-screen",{ref:"page3",attrs:{title:t.text.actTwo.title}}),o("title-screen",{ref:"page4",attrs:{title:t.text.actThree.title}}),t.command?o("div",{staticStyle:{position:"fixed",top:"5vh",left:"0",width:"100%"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],staticStyle:{display:"block",margin:"0 auto",width:"15em"},domProps:{value:t.command},on:{input:function(n){n.target.composing||(t.command=n.target.value)}}})]):t._e()],1)},staticRenderFns:[]},B=e("VU/8")(O,U,!1,null,null,null).exports,N={name:"BackButton",methods:{goHome:function(){this.$router.push("/"),window.scrollTo({top:0,left:0})}}},I={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"back-button",on:{click:this.goHome}},[n("fa-icon",{attrs:{icon:"arrow-left",size:"xs"}})],1)},staticRenderFns:[]};var V={name:"ActOne",mixins:[E],components:{TextScreen:y,BackButton:e("VU/8")(N,I,!1,function(t){e("B7Qx")},"data-v-c61c08f6",null).exports},data:function(){return{currentPage:0,command:""}},methods:{goToPage:function(t){window.scrollTo({top:this.$refs.page[t].$el.offsetTop,left:0,behavior:"smooth"})},processCommand:function(t){"prox"===t&&this.currentPage<this.$refs.page.length-1&&(this.currentPage+=1),"ant"===t&&this.currentPage&&(this.currentPage-=1)},cmdListener:function(t){if("Enter"===t.key){var n=this.command;this.processCommand(n),this.command=""}t.key.match(/^\w$/)&&(this.command+=t.key)}},watch:{currentPage:function(t){this.goToPage(t)}},mounted:function(){window.addEventListener("keydown",this.cmdListener)},destroyed:function(){window.removeEventListener("keydown",this.cmdListener)}},R={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[t._l(t.text.actOne.frames,function(t,n){return e("text-screen",{key:n,ref:"page",refInFor:!0,attrs:{chapter:t}})}),t.command?e("div",{staticStyle:{position:"fixed",top:"5vh",left:"0",width:"100%"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],staticStyle:{display:"block",margin:"0 auto",width:"15em"},domProps:{value:t.command},on:{input:function(n){n.target.composing||(t.command=n.target.value)}}})]):t._e(),e("back-button")],2)},staticRenderFns:[]},J=e("VU/8")(V,R,!1,null,null,null).exports;o.a.use(l.a);var H=new l.a({routes:[{path:"/",name:"Home",component:B},{path:"/problema",name:"O Problema",component:J}]});e("yiVF"),e("EYnv"),e("sS50");delete L.Icon.Default.prototype._getIconUrl,L.Icon.Default.mergeOptions({iconRetinaUrl:e("qXhe"),iconUrl:e("TJ5S"),shadowUrl:e("wkq0")}),a.library.add(r.a,r.b),o.a.component("fa-icon",i.FontAwesomeIcon),o.a.config.productionTip=!1,new o.a({el:"#app",router:H,components:{App:c},template:"<App/>"})},RzqU:function(t,n,e){t.exports=e.p+"static/img/title.98cc853.jpg"},TJ5S:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="},qXhe:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcY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"},vQs0:function(t,n){},wkq0:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC"},yiVF:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.48ccfd53393d36c4ff07.js.map