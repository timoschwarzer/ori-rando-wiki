(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{241:function(e,t,r){var content=r(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("63a2d54c",content,!0,{sourceMap:!1})},242:function(e,t,r){"use strict";r.r(t);var n={name:"search-bar",props:["initialQuery"],data:function(e){var t;return{searchQuery:null!==(t=e.initialQuery)&&void 0!==t?t:""}},methods:{search:function(){this.searchQuery&&this.$router.push({name:"search-query",params:{query:this.searchQuery}})}}},c=(r(243),r(43)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text"},domProps:{value:e.searchQuery},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.searchQuery?e._e():r("svg",{staticClass:"search-icon",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}})])])}),[],!1,null,"7a4ed7ce",null);t.default=component.exports},243:function(e,t,r){"use strict";r(241)},244:function(e,t,r){var n=r(51)(!1);n.push([e.i,".search-container[data-v-7a4ed7ce]{position:relative}.search-container .search-icon[data-v-7a4ed7ce]{position:absolute;left:1em;height:80%;margin:.4em 0;color:var(--color-secondary);transition:opacity .15s,transform .15s;pointer-events:none}.search-container .search-input[data-v-7a4ed7ce]{line-height:1;padding:.8em .7em .7em 1em;border-radius:2.5em;background-color:var(--color-background-light);border:none;color:var(--color-foreground);font-size:1.1em}.search-container .search-input[data-v-7a4ed7ce]:focus,.search-container .search-input[data-v-7a4ed7ce]:hover{outline:none;background-color:var(--color-background-lighter)}.search-container .search-input:focus+.search-icon[data-v-7a4ed7ce]{opacity:0;transform:translateX(10px)}",""]),e.exports=n},246:function(e,t,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("3638e039",content,!0,{sourceMap:!1})},251:function(e,t,r){"use strict";r(246)},252:function(e,t,r){var n=r(51)(!1);n.push([e.i,"header[data-v-6961aad5]{display:flex;align-items:center}header .title[data-v-6961aad5]{display:inline-block}.article-grid[data-v-6961aad5]{display:flex;grid-gap:2em;gap:2em}.article-grid aside[data-v-6961aad5]{min-width:20%;display:flex;flex-direction:column}.article-grid aside .button[data-v-6961aad5]{margin-bottom:.2em;padding:.4em .6em}",""]),e.exports=n},266:function(e,t,r){"use strict";r.r(t);r(36),r(8),r(20),r(34),r(13),r(38),r(21);var n=r(5),c=(r(29),r(42),r(53),r(121),r(26),r(37),r(242)),o=(r(40),r(39),r(56),r(30),r(57),r(25));r(35);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=function(article){return d(d({},article),{path:"_index"===article.slug?article.path.substr(0,article.path.length-6):article.path})};function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,c=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw c}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var y={components:{SearchBar:c.default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,path,article,c,o,l,d,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,n=e.params,path=n.pathMatch.replace(/\/$/,""),t.next=4,r(path).fetch();case 4:return article=t.sent,c=[],t.t0=h,t.next=9,r("/sidebar").fetch();case 9:t.t1=t.sent.sidebar,o=(0,t.t0)(t.t1),t.prev=11,o.s();case 13:if((l=o.n()).done){t.next=21;break}return d=l.value,t.next=17,r(d).fetch();case 17:v=t.sent,c.push(f(Array.isArray(v)?v.find((function(p){return"_index"===p.slug})):v));case 19:t.next=13;break;case 21:t.next=26;break;case 23:t.prev=23,t.t2=t.catch(11),o.e(t.t2);case 26:return t.prev=26,o.f(),t.finish(26);case 29:return t.abrupt("return",{article:Array.isArray(article)?article.find((function(p){return"_index"===p.slug})):article,sidebarArticles:c});case 30:case"end":return t.stop()}}),t,null,[[11,23,26,29]])})))()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:title",property:"og:title",content:this.article.title},{hid:"og:description",property:"og:description",content:this.article.description},{hid:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:this.article.title}]}}},m=(r(251),r(43)),component=Object(m.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("header",[r("h1",{staticClass:"title"},[e._v(e._s(e.article.title))]),e._v(" "),r("div",{staticClass:"spacer"}),e._v(" "),r("search-bar")],1),e._v(" "),r("div",{staticClass:"article-grid"},[r("article",[r("nuxt-content",{attrs:{document:e.article}})],1),e._v(" "),e.article.hideSidebar?e._e():r("aside",e._l(e.sidebarArticles,(function(article){return r("nuxt-link",{key:article.path,staticClass:"button",attrs:{to:article.path}},[e._v("\n        "+e._s(article.sidebarTitle||article.title)+"\n      ")])})),1)])])}),[],!1,null,"6961aad5",null);t.default=component.exports;installComponents(component,{SearchBar:r(242).default})}}]);