(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(15),s=c.n(r),n=(c(21),c(14)),i=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,species:e.species,origin:e.origin.name,episode:e.episode.length,status:e.status}}))}))},l=c.p+"static/media/logo.de13d484.png",j=c(7),d=c(0),o=function(e){return Object(d.jsx)("article",{className:"card",children:Object(d.jsxs)(j.b,{to:"/character/".concat(e.character.id),children:[Object(d.jsx)("img",{className:"card-image",src:e.character.image,alt:"Foto de ".concat(e.character.name)}),Object(d.jsxs)("h3",{className:"card-title",children:[" ",e.character.name]}),Object(d.jsx)("p",{className:"card-text",children:e.character.species})]})})},h=function(e){var t=e.character.map((function(e){return Object(d.jsx)(o,{character:e},e.id)}));return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"cards",children:t})})},u=function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},m=function(e,t){localStorage.setItem(e,JSON.stringify(t))},b=function(e){return Object(d.jsx)("input",{className:"form",type:"text",onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})},value:e.name})},x=function(e){return Object(d.jsx)("form",{children:Object(d.jsx)(b,{handleFilter:e.handleFilter,name:e.name})})},O=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)(j.b,{className:"card-details-link",to:"/",children:[" ","Volver"]}),Object(d.jsxs)("div",{className:"card-details",children:[Object(d.jsx)("img",{className:"card-details--image",src:e.character.image,alt:"Foto de ".concat(e.character.name)}),Object(d.jsxs)("section",{className:"card-details--text",children:[Object(d.jsxs)("h3",{className:"card-details--text-title",children:[" ",e.character.name]}),Object(d.jsxs)("ul",{className:"card-details--text-text",children:[Object(d.jsxs)("li",{children:["Status:",e.character.status]}),Object(d.jsxs)("li",{children:["Species: ",e.character.species]}),Object(d.jsxs)("li",{children:["Origin: ",e.character.origin]}),Object(d.jsxs)("li",{children:["Episodes: ",e.character.episode]}),Object(d.jsx)("li",{children:"unknown"===e.character.status?Object(d.jsxs)("li",{children:["Status: ",e.character.status,"\u2754 "]}):"Dead"===e.character.status?Object(d.jsxs)("li",{children:["Status: ",e.character.status," \ud83d\udc80"]}):"Alive"===e.character.status?Object(d.jsxs)("li",{children:["Status: ",e.character.status," \ud83d\udc4c\ud83c\udffc "]}):void 0})]})]})]})]})})},f=c.p+"static/media/pagNot.5e259699.gif";var p=function(){return Object(d.jsxs)("div",{className:"pagNot",children:[Object(d.jsx)("h1",{className:"pagNot-title",children:"P\xe1gina no encontrada "}),Object(d.jsxs)("p",{className:"pagNot-text",children:["Vuelve a inicio haciendo click",Object(d.jsx)(j.b,{className:"pagNot-link",to:"/",children:"AQUI"})]}),Object(d.jsx)("img",{className:"pagNot-gif",src:f,alt:"Gif RickandMorty"})]})},g=c.p+"static/media/CharacterNot.a950499d.gif",N=function(e){return Object(d.jsxs)("div",{className:"characterNot",children:[Object(d.jsx)("h2",{className:"characterNot-title",children:"Personaje no encontrado "}),Object(d.jsx)("img",{className:"characterNot-gif",src:g,alt:"Gif RickandMorty"})]})},v=c(2),k=(c(31),function(){var e=u("character",[]),t=Object(a.useState)(e),c=Object(n.a)(t,2),r=c[0],s=c[1],j=Object(a.useState)(u("FilterName","")),o=Object(n.a)(j,2),b=o[0],f=o[1];Object(a.useEffect)((function(){0===r.length&&i().then((function(e){s(e)}))}),[]),Object(a.useEffect)((function(){m("character",r)}),[r]);var g=r.filter((function(e){return e.name.toLowerCase().includes(b)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:Object(d.jsx)("img",{className:"title",src:l,alt:"Ricky and Morty"})}),Object(d.jsxs)(v.c,{children:[Object(d.jsxs)(v.a,{exact:!0,path:"/",children:[Object(d.jsx)(x,{handleFilter:function(e){"name"===e.key&&f(e.value)},name:b}),g.length>0?Object(d.jsx)(h,{character:g}):Object(d.jsx)(N,{})]}),Object(d.jsx)(v.a,{exact:!0,path:"/character/:id",component:function(e){var t=e.match.params.id,c=r.find((function(e){return e.id===parseInt(t)}));return void 0===c?Object(d.jsx)(p,{}):Object(d.jsx)(O,{character:c})}}),Object(d.jsx)(v.a,{component:p})]})]})})});s.a.render(Object(d.jsx)(j.a,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.fbad9b14.chunk.js.map