webpackJsonp([0],{MiPn:function(e,t,i){e.exports=i.p+"static/img/act_i.c7894b2.jpg"},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"MainApp"},o,!1,function(e){i("yhzv")},null,null).exports,a=i("/ocq"),r={name:"VideoScreen",created:function(){this.title="Reanimar",this.caption="Um ensaio sobre a vida marinha.",this.videoPlaybackRate=.5},data:function(){return{displayVideo:!1}},mounted:function(){this.setVideoPlaybackRate(),this.detectWindowResizing()},methods:{videoFadeIn:function(){this.displayVideo=!0},setVideoPlaybackRate:function(){this.$refs.videoEmbed.playbackRate=this.videoPlaybackRate},adjustVideoSize:function(){var e=this.$refs.videoEmbed,t=e.videoWidth/e.videoHeight>window.innerWidth/window.innerHeight;e.classList.add(t?"crop-width":"crop-height"),e.classList.remove(t?"crop-height":"crop-width")},detectWindowResizing:function(){window.addEventListener("resize",this.adjustVideoSize)}},computed:{videoElementClassList:function(){return{show:this.displayVideo,"crop-height":!0}}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"video screen"},[i("div",{staticClass:"video-bg"},[i("video",{ref:"videoEmbed",class:e.videoElementClassList,attrs:{src:"https://res.cloudinary.com/dza7f8g2e/video/upload/v1529635341/beach02.mp4",autoplay:"autoplay",loop:"loop",muted:"muted"},domProps:{muted:!0},on:{loadeddata:function(t){e.videoFadeIn()}}})]),i("div",{staticClass:"video-content"},[i("h1",[e._v(e._s(e.title))]),i("p",[e._v(e._s(e.caption))])])])},staticRenderFns:[]};var d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"screen"},[this.bg?t("div",{staticClass:"video-bg"},[t("img",{attrs:{src:this.bg}})]):this._e(),t("h2",[this._v(this._s(this.title))])])},staticRenderFns:[]};var l={name:"Home",components:{VideoScreen:i("VU/8")(r,c,!1,function(e){i("yXta")},"data-v-72dbc46e",null).exports,TitleScreen:i("VU/8")({name:"TitleScreen",props:["title","bg"]},d,!1,function(e){i("asSu")},"data-v-4b74d7b1",null).exports},mixins:[{methods:{scrollPage:function(e){if("down"===e){var t=Math.min(window.scrollY+window.innerHeight,document.body.offsetHeight);console.log(t),window.scroll({top:t,left:0,behavior:"smooth"})}else if("up"===e){var i=Math.max(window.scrollY-window.innerHeight,0);console.log(i),window.scrollTo({top:i,left:0,behavior:"smooth"})}}}}],created:function(){this.actOneTitle="I: Mortalidade e impacto",this.actTwoTitle="As Causas",this.actThreeTitle="A Solução"},mounted:function(){var e=this;window.addEventListener("keydown",function(t){t.key.match(/arrow/i)&&(t.preventDefault(),["ArrowDown","ArrowRight"].includes(t.key)?e.scrollPage("down"):e.scrollPage("up"))})}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("video-screen"),t("title-screen",{attrs:{title:this.actOneTitle,bg:i("MiPn")}}),t("title-screen",{attrs:{title:this.actTwoTitle}}),t("title-screen",{attrs:{title:this.actThreeTitle}})],1)},staticRenderFns:[]},h=i("VU/8")(l,u,!1,null,null,null).exports;n.a.use(a.a);var p=new a.a({routes:[{path:"/",name:"Home",component:h}]});i("yiVF");n.a.config.productionTip=!1,new n.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},asSu:function(e,t){},yXta:function(e,t){},yhzv:function(e,t){},yiVF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.df5d122aaca4dd217ded.js.map