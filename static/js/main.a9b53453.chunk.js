(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/aoVivoCCUFG_cortada.0c48c534.jpg"},17:function(e,t,a){e.exports=a.p+"static/media/capaApego.35a0488c.jpg"},18:function(e,t,a){e.exports=a.p+"static/media/lutreEpCapa_n.ff27f97d.jpg"},19:function(e,t,a){e.exports=a(48)},38:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),c=a(5),o=a(4),s=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r={apiKey:"AIzaSyC12mXkhZ9SSDZMRRRPg239CL-pVBE-Sgk",authDomain:"lutre-3c536.firebaseapp.com",databaseURL:"https://lutre-3c536.firebaseio.com",projectId:"lutre-3c536",storageBucket:"lutre-3c536.appspot.com",messagingSenderId:"289474420725"},l=a(10),u=a.n(l),m=a(1),p=a.n(m),d=a(15),b=a.n(d),f=a(11),h=a.n(f),E=(a(38),a(40),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"fp-bg App-header"},p.a.createElement("h2",null,"Voc\xea quis dizer: ",p.a.createElement("i",null,"lustre")," ?"))}}]),t}(m.Component)),v=(a(44),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{id:"bioSection"},p.a.createElement("div",{id:"bioText"},"\u201cUm plano dist\xf3pico e cinzento cheio de monstros ap\xe1ticos\u201d"),p.a.createElement("div",{id:"autor"},"Leon Carelli"))}}]),t}(p.a.Component)),O=a(9),j=a(16),k=a.n(j),g=a(17),C=a.n(g),y=a(18),w=a.n(y),L=(a(46),{URL_YOUTUBE_APEGO:"https://www.youtube.com/watch?v=GI4LNcsm59s",URL_YOUTUBE_CCUFG:"https://www.youtube.com/watch?v=1hBHt1KF8N0",URL_YOUTUBE_EP:"https://www.youtube.com/watch?v=q23XioubTIs",URL_SPOTIFY_APEGO:"https://open.spotify.com/album/5yqbFJmkoLe0d2HPz3Q2dT?si=HLpQYasTQkq8hFjaZTKzhg",URL_SPOTIFY_CCUFG:"https://open.spotify.com/album/6J95jkR9Sx8mFMysIX6YMj?si=gYNTH_3KSlKkpmsDl0ReVA"}),U=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).abreLink=e.abreLink.bind(Object(O.a)(Object(O.a)(e))),e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"abreLink",value:function(e){var t=e.target.className.indexOf("spotify")>0?"SPOTIFY":"YOUTUBE",a=e.target.parentElement.previousElementSibling.alt,n="URL_".concat(t,"_").concat(a);window.open(L[n],"_blank")}},{key:"render",value:function(){return p.a.createElement("div",{className:"albunsCapas"},p.a.createElement("div",{className:"slide"},p.a.createElement("img",{alt:"APEGO",className:"capas",id:"capaApego",src:C.a}),p.a.createElement("div",{id:"iconesRedesSociais"},p.a.createElement("i",{onClick:this.abreLink,class:"fab fa-spotify"}),p.a.createElement("i",{onClick:this.abreLink,class:"fab fa-youtube"}))),p.a.createElement("div",{className:"slide"},p.a.createElement("img",{alt:"CCUFG",className:"capas",id:"capaCcufg",src:k.a}),p.a.createElement("div",{id:"iconesRedesSociais"},p.a.createElement("i",{title:"\xc1lbum completo",onClick:this.abreLink,class:"fab fa-spotify"}),p.a.createElement("i",{title:"Apenas uma m\xfasica no Youtube. Completo no Spotify",onClick:this.abreLink,class:"fab fa-youtube"}))),p.a.createElement("div",{className:"slide"},p.a.createElement("img",{alt:"EP",className:"capas",id:"capaEp",src:w.a}),p.a.createElement("div",{id:"iconesRedesSociais"},p.a.createElement("i",{onClick:this.abreLink,class:"fab fa-youtube"}))))}}]),t}(p.a.Component),N=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(o.a)(t).call(this))).state={teste:null},e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.database().ref("geoLocations").on("value",function(t){e.setState({teste:t.val()})})}},{key:"render",value:function(){return p.a.createElement("div",null,this.state.teste)}}]),t}(p.a.Component);u.a.initializeApp(r);var S={parallax:!0,slidesNavigation:!0,controlArrows:!1},_=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return p.a.createElement(h.a,Object.assign({},S,{render:function(e){e.state,e.fullpageApi;return p.a.createElement(h.a.Wrapper,{className:"fp-auto-height-responsive"},p.a.createElement("div",{className:"section",id:"incioComponent"},p.a.createElement(E,null)),p.a.createElement("div",{className:"section",id:"bioComponent"},p.a.createElement(v,null)),p.a.createElement("div",{className:"section",id:"albunsComponent"},p.a.createElement(U,null)),p.a.createElement("div",{className:"section",id:"riderComponent"},p.a.createElement(N,null)))}}))}}]),t}(p.a.Component);b.a.render(p.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.a9b53453.chunk.js.map