(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(e,a,t){"use strict";t.r(a);var n=t("ln6h"),c=t.n(n),r=t("O40h"),s=t("q1tI"),l=t.n(s),i=t("pJ0N"),m=t("zgjP"),o=t.n(m),d=function(e){var a=e.precio,t=a.price,n=a.percent_change_1h,c=a.percent_change_7d,r=a.percent_change_24h;return l.a.createElement("div",{className:"card bg-success mb-3"},l.a.createElement("div",{className:"card-header bg-success"},"Precio del BitCoin"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Precio Actual $ ",t," USD"),l.a.createElement("div",{className:"d-md-flex justify-content-between"},l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"font-weight-bold"},"Última Hora: "),n," %"),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"font-weight-bold"},"Hace 24 hrs: "),c," %"),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"font-weight-bold"},"Hace 7d: "),r," %"))))},u=function(e){var a=e.noticia,t=a.urlToImage,n=a.url,c=a.title,r=a.description,s=a.source,i="";return i=""!==t?l.a.createElement("img",{src:t,alt:c,className:"card-img-top"}):l.a.createElement("p",{className:"text-cente my-5"},"Imagen no disponible"),l.a.createElement("div",{className:"col-md-6 col-12 mb-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-image"},i)),l.a.createElement("div",{className:"carbody"},l.a.createElement("h4",{className:"card-title"},c),l.a.createElement("p",{className:"card-text"},r),l.a.createElement("p",{className:"card-text"},s.name),l.a.createElement("a",{href:n,target:"_blank",className:"btn btn-primary btn-block"},"Leer Noticia")))},p=function(e){return l.a.createElement("div",{className:"row"},e.noticias.map(function(e){return l.a.createElement(u,{key:e.url,noticia:e})}))},E=t("pLtp"),N=t.n(E),v=function(e){var a=e.info,t=a.name,n=a.url,c=a.description,r=t.text;r&&r.lenght>150&&(console.log(r.lenght),r=r.substr(0,150)+" ...");var s=c.text;return s&&(s=s.substr(0,250)+" ..."),l.a.createElement("a",{href:n,target:"_blank",className:"list-group-item  mb-1"},l.a.createElement("h4",{className:"mb-3"},r),l.a.createElement("p",{className:"mb-1"},s))},f=function(e){var a=N()(e.eventos);return l.a.createElement("div",{className:"list-group"},a.map(function(a){return l.a.createElement(v,{key:a,info:e.eventos[a]})}))},h=function(e){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h2",null,"Precio del BitCoin"),l.a.createElement(d,{precio:e.precioBitcoin})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("h2",{className:"my-4"},"Noticias del BitCoin"),l.a.createElement(p,{noticias:e.noticias})),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h2",{className:"my-4"},"Próximos Eventos BitCoin"),l.a.createElement(f,{eventos:e.eventos}))))};h.getInitialProps=Object(r.default)(c.a.mark(function e(){var a,t,n,r,s,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()("https://api.coinmarketcap.com/v2/ticker/1/");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,o()("https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-05&sortBy=publishedAt&apiKey=7423d028d53940f8ac48a913a789c7f3&language=es");case 8:return n=e.sent,e.next=11,n.json();case 11:return r=e.sent,e.next=14,o()("https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=JF676QHAXPO6Y2DNNC4X");case 14:return s=e.sent,e.next=17,s.json();case 17:return l=e.sent,e.abrupt("return",{precioBitcoin:t.data.quotes.USD,noticias:r.articles,eventos:l.events});case 19:case"end":return e.stop()}},e)}));a.default=h},vlRD:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])},zgjP:function(e,a,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["vlRD","5d41","9da1"]]]);