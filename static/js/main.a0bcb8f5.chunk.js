(this.webpackJsonpdeadpool=this.webpackJsonpdeadpool||[]).push([[0],{32:function(n,e,a){"use strict";a.r(e);var i,c,l,t,s,d,r=a(1),o=a.n(r),p=a(14),h=a.n(p),x=a(3),u=[{name:"Andy",selections:[{name:"Ghislaine maxwell",age:60,handicaps:null},{name:"John cleese",age:81,handicaps:null},{name:"Dennis skinner",age:89,handicaps:null},{name:"Ronnie wood",age:74,handicaps:null},{name:"Harvey weinstein",age:69,handicaps:null},{name:"Shane macgowen",age:63,handicaps:null},{name:"Rupert merdock",age:90,handicaps:null},{name:"Don king",age:90,handicaps:null},{name:"Tekashi 69",age:25,handicaps:null,isJoker:!0},{name:"Jeremy Lee Lewis ",age:85,handicaps:null}]},{name:"Nick",selections:[{name:"George R R Martin",age:73,handicaps:[],isJoker:!0},{name:"David Attenborough",age:95,handicaps:null},{name:"James Earl Jones",age:90,handicaps:null},{name:"Jimmy Carter",age:96,handicaps:null},{name:"Joe Biden",age:72,handicaps:null},{name:"June Brown",age:94,handicaps:null},{name:"Maggie Smith",age:86,handicaps:null},{name:"Michael J Fox",age:60,handicaps:[{name:"Parkinsons",value:20}]},{name:"Roman Polanski",age:88,handicaps:null},{name:"William Shatner",age:90,handicaps:null}]},{name:"Woody",selections:[{name:"Val Kilmer",age:61,handicaps:null},{name:"Phil Collins",age:70,handicaps:null},{name:"Ringo Starr",age:80,handicaps:null},{name:"Vince Mcmahon",age:76,handicaps:null},{name:"Jack Osbourne ",age:35,isJoker:!0,handicaps:null},{name:"Sharon Stone",age:63,handicaps:null},{name:"Whoopi Goldber",age:65,handicaps:null},{name:"Chris Karmara",age:63,handicaps:null},{name:"Trevor McDonal",age:82,handicaps:null},{name:"Sue Nicholls",age:77,handicaps:null}]},{name:"Eddie",selections:[{name:"Ghislaine Maxwell",age:60,handicaps:null},{name:"Mel Brooks",age:95,handicaps:null},{name:"Ian Lavender",age:75,handicaps:null},{name:"Angela Lansbury",age:95,handicaps:null},{name:"Ron Jeremy ",age:68,handicaps:null,isJoker:!0},{name:"Jimmy Carter",age:96,handicaps:null},{name:"Joss Ackland",age:93,handicaps:null},{name:"Rolf Harris",age:91,handicaps:null},{name:"Stuart Hall",age:91,handicaps:null},{name:"Bill Cosby",age:84,handicaps:null}]}],j=a(20),b=a(4),m=a(15),g=a(16),O=a(9),f=a(0);function v(n){var e=n.selections,a=Object(r.useState)(!1),i=Object(j.a)(a,2),c=i[0],l=i[1];return Object(f.jsxs)(M,{children:[Object(f.jsxs)(B,{onClick:function(){l(!c)},children:["Selections ",Object(f.jsx)(g.a,{icon:c?O.b:O.a})]}),Object(f.jsxs)(T,{isOpened:c,children:[Object(f.jsxs)(P,{children:[Object(f.jsx)(R,{children:"Name"}),Object(f.jsx)(R,{children:"Age"}),Object(f.jsx)(R,{children:"handicap"}),Object(f.jsx)(R,{children:"Joker?"}),Object(f.jsx)(R,{children:"Total obtainable points"})]}),e.map((function(n){var e=n.name,a=n.age,i=n.isJoker,c=n.handicaps,l=c?c.reduce((function(n,e){return n+e.value}),0):0,t=100-a-l;return Object(f.jsxs)(P,{children:[Object(f.jsx)(A,{children:e}),Object(f.jsx)(A,{children:a}),Object(f.jsx)(A,{children:l}),Object(f.jsx)(A,{children:i?"true":"false"}),Object(f.jsx)(A,{children:i?2*t:t})]})}))]})]})}var y,k,w,J,S,C,D,L,M=b.a.table(i||(i=Object(x.a)(["\n  font-family: arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n\n  min-height: 20px;\n"]))),P=b.a.tr(c||(c=Object(x.a)(["\n  &:nth-child(even) {\n    background-color: #dddddd;\n  }\n"]))),R=b.a.th(l||(l=Object(x.a)(["\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 4px;\n"]))),A=b.a.td(t||(t=Object(x.a)(["\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 4px;\n"]))),T=Object(b.a)(m.Collapse)(s||(s=Object(x.a)([""]))),B=b.a.caption(d||(d=Object(x.a)(["\n  font-size: 15px;\n"])));function E(n){var e=n.player,a=e.selections.reduce((function(n,e){if(e.isDead){var a=e.handicaps?e.handicaps.reduce((function(n,e){return n+e.value}),0):0;return 100-e.age-a+n}return n}),0),i=e.selections.reduce((function(n,e){var a=e.handicaps?e.handicaps.reduce((function(n,e){return n+e.value}),0):0,i=100-e.age-a;return n+e.isJoker?2*i:i}));return Object(f.jsxs)(H,{children:[Object(f.jsxs)(I,{children:[Object(f.jsx)(N,{src:"".concat("/deadpool","/assets/").concat(e.name.toLowerCase(),".png")}),Object(f.jsx)(W,{children:e.name}),Object(f.jsxs)(z,{children:[Object(f.jsxs)(K,{children:[Object(f.jsx)(V,{children:"Total Points Earned"}),Object(f.jsx)(q,{children:a})]}),Object(f.jsxs)(K,{children:[Object(f.jsx)(V,{children:"Total Available Points"}),Object(f.jsx)(q,{children:i})]})]})]}),Object(f.jsx)(v,{selections:e.selections})]})}var F,G,H=b.a.div(y||(y=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  -webkit-box-shadow: 0px 10px 13px -7px #000000,\n    -4px 4px 7px -2px rgba(0, 0, 0, 0);\n  box-shadow: 0px 10px 13px -7px #000000, -4px 4px 7px -2px rgba(0, 0, 0, 0);\n  margin-bottom: 10px;\n  border-top: 1px grey;\n  border-radius: 5px;\n"]))),I=b.a.div(k||(k=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  margin-bottom: 5px;\n  padding-bottom: 5px;\n\n  border: 1px solid whitesmoke;\n"]))),N=b.a.img(w||(w=Object(x.a)(["\n  width: auto;\n  height: 70px;\n  border-radius: 35px;\n  -webkit-box-shadow: 0px 10px 13px -7px #000000,\n    -4px 4px 7px -2px rgba(0, 0, 0, 0);\n  box-shadow: 0px 10px 13px -7px #000000, -4px 4px 7px -2px rgba(0, 0, 0, 0);\n"]))),W=b.a.div(J||(J=Object(x.a)([""]))),z=b.a.div(S||(S=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),K=b.a.div(C||(C=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),V=b.a.div(D||(D=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-right: 10px;\n"]))),q=b.a.div(L||(L=Object(x.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  border: solid 2px black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));function Q(n){return n.players.map((function(n){return Object(f.jsx)(E,{player:n})}))}var U=b.a.div(F||(F=Object(x.a)(["\n  width: 100vw;\n"]))),X=b.a.header(G||(G=Object(x.a)(["\n  background-color: #282c34;\n  min-height: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n  width: 100%;\n"]))),Y=function(){return console.log(u),Object(f.jsxs)(U,{children:[Object(f.jsx)(X,{children:Object(f.jsx)("h1",{children:"DEADPOOL"})}),Object(f.jsx)(Q,{players:u})]})},Z=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(e){var a=e.getCLS,i=e.getFID,c=e.getFCP,l=e.getLCP,t=e.getTTFB;a(n),i(n),c(n),l(n),t(n)}))};h.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[32,1,2]]]);
//# sourceMappingURL=main.a0bcb8f5.chunk.js.map