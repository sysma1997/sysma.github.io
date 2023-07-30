"use strict";(self.webpackChunkporfolio_sysma1997=self.webpackChunkporfolio_sysma1997||[]).push([[826],{3354:(e,a,t)=>{var n=t(7294),i=t(745),l=t(982),s=t(9417),c=function(e){var a=e.language,t=e.setLanguage,i=e.spanish,c=e.english,o=(0,n.useState)(!1),r=o[0],m=o[1],d=function(){return m(!r)},p=function(e){"en"===e?t(c):"es"===e&&t(i)},u=function(){if(!(screen.width>1024)){var e=document.getElementById("items");d(),e.style.display="none"}};return n.createElement("nav",{id:"menu",className:"navbar is-light",role:"navigation","aria-label":"main navigation"},n.createElement("div",{className:"navbar-brand"},n.createElement("a",{id:"title",className:"navbar-item",href:"/"},"SYSMA"),n.createElement("a",{role:"button",className:"navbar-burger ".concat(r&&"is-active"),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:d},n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}))),n.createElement("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(r&&"is-active")},n.createElement("div",{className:"navbar-start"},n.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},n.createElement("a",{className:"navbar-link"},a.navbar.language),n.createElement("div",{className:"navbar-dropdown"},n.createElement("a",{className:"navbar-item",onClick:function(){return p("en")}},a.navbar.english),n.createElement("a",{className:"navbar-item",onClick:function(){return p("es")}},a.navbar.spanish)))),n.createElement("div",{className:"navbar-end"},n.createElement("a",{className:"navbar-item",href:"#about",onClick:u},n.createElement(l.G,{className:"navbarItemIcon",icon:s.ILF}),a.navbar.about),n.createElement("a",{className:"navbar-item",href:"#skills",onClick:u},n.createElement(l.G,{className:"navbarItemIcon",icon:s.Tab}),a.navbar.skills),n.createElement("a",{className:"navbar-item",href:"#projects",onClick:u},n.createElement(l.G,{className:"navbarItemIcon",icon:s.NkB}),a.navbar.projects),n.createElement("a",{className:"navbar-item",href:"#contact",onClick:u},n.createElement(l.G,{className:"navbarItemIcon",icon:s.wK3}),a.navbar.contacts))))},o=function(e){var a=e.language,t=(new Date).getFullYear();return n.createElement("div",{id:"about"},n.createElement("div",{className:"aboutContent"},n.createElement("label",{className:"title"},a.about.title),n.createElement("label",{className:"description"},a.about.me),n.createElement("label",{className:"description"},a.about.experience.replace("{{years}}",(t-2018).toString())),n.createElement("label",{className:"description"},a.about.interested)))},r=function(e){var a=e.language,t=(0,n.useState)([{icon:"skillIcon devicon-javascript-plain",text:"Javascript"},{icon:"skillIcon devicon-typescript-plain",text:"Typescript"},{icon:"skillIcon devicon-godot-plain",text:"GDScript"},{icon:"skillIcon devicon-csharp-plain",text:"C#"},{icon:"skillIcon devicon-php-plain",text:"Php"},{icon:"skillIcon devicon-java-plain",text:"Java"},{icon:"skillIcon devicon-kotlin-plain",text:"Kotlin"}])[0],i=(0,n.useState)([{icon:"skillIcon devicon-postgresql-plain",text:"Postgres SQL"},{icon:"skillIcon devicon-sqlite-plain",text:"SQLite"},{icon:"skillIcon devicon-mysql-plain",text:"MySQL"},{icon:"skillIcon devicon-microsoftsqlserver-plain",text:"Microsoft SQL Server"}])[0],l=(0,n.useState)([{icon:"skillIcon devicon-nodejs-plain",text:"Node JS"},{icon:"skillIcon devicon-webpack-plain",text:"Webpack"},{icon:"skillIcon devicon-react-plain",text:"React"},{icon:"skillIcon devicon-express-original",text:"Express JS"},{icon:"skillIcon devicon-jest-plain",text:"Jest"},{icon:"skillIcon devicon-dotnetcore-plain",text:".Net Core"},{icon:"skillIcon devicon-denojs-original",text:"Deno js"}])[0],s=(0,n.useState)([{icon:"skillIcon devicon-godot-plain",text:"Godot"},{icon:"skillIcon devicon-docker-plain",text:"Docker"},{icon:"skillIcon devicon-android-plain",text:"Android"},{icon:"skillIcon devicon-react-plain",text:"React Native"},{icon:"skillIcon devicon-git-plain",text:"Git"},{icon:"skillIcon devicon-bash-plain",text:"Bash"},{icon:"skillIcon devicon-linux-plain",text:"linux"}])[0],c=(0,n.useState)([{icon:"skillIcon devicon-cplusplus-plain",text:"C++"},{icon:"skillIcon devicon-cmake-plain",text:"CMake"},{icon:"skillIcon devicon-opengl-plain",text:"OpenGL"},{icon:"skillIcon",text:"ImGUI"},{icon:"skillIcon devicon-solidity-plain",text:"Solidity"},{icon:"skillIcon devicon-electron-original",text:"electron"},{icon:"skillIcon devicon-rust-plain",text:"Rust"}])[0];return n.createElement("div",{id:"skills"},n.createElement("div",{className:"skillsContent"},n.createElement("label",{className:"title"},a.skills.title),n.createElement("label",{className:"subtitle"},a.skills.language),n.createElement("div",{className:"skillsList"},t.map((function(e,a){return n.createElement("div",{key:a.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},a.skills.databases),n.createElement("div",{className:"skillsList"},i.map((function(e,a){return n.createElement("div",{key:a.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},a.skills.frameworks),n.createElement("div",{className:"skillsList"},l.map((function(e,a){return n.createElement("div",{key:a.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},a.skills.others),n.createElement("div",{className:"skillsList"},s.map((function(e,a){return n.createElement("div",{key:a.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},a.skills.interesting),n.createElement("div",{className:"skillsList"},c.map((function(e,a){return n.createElement("div",{key:a.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))})))))},m=function(e){var a=e.language;return n.createElement("div",{id:"projects"},n.createElement("div",{className:"projectsContent"},n.createElement("label",{className:"title"},a.projects.title),n.createElement("div",{className:"projectsList"},a.projects.list.map((function(e){return n.createElement("div",{key:e.name,className:"project"},n.createElement("div",{className:"content"},n.createElement("div",{className:"information"},n.createElement("label",{className:"title"},e.name),n.createElement("label",{className:"description"},e.description)),n.createElement("div",{className:"tags"},e.tags.map((function(e){return n.createElement("span",{key:e,className:"tag"},e)}))),e.links&&n.createElement("div",{className:"links"},e.links.map((function(e){return n.createElement("a",{key:e.text,className:"link",href:e.href,target:"_blank"},e.text)})))))})))))},d=t(3024),p=function(e){var a=e.language,t=(0,n.useState)([{icon:d.zhw,name:"GitHub",link:"https://github.com/sysma1997"},{icon:d.D9H,name:"LinkedIn",link:"https://www.linkedin.com/in/sebastian-moreno-acero-0a3138187"},{icon:s.FU$,name:"Email",link:"mailto: sysma1997@gmail.com"}]),i=t[0];return t[1],n.createElement("div",{id:"contact"},n.createElement("label",{className:"title"},a.contacts),n.createElement("div",{className:"contactList"},i.map((function(e){return n.createElement("a",{key:e.name,className:"contactItem",href:e.link,target:"_blank"},n.createElement(l.G,{className:"contactItemIcon",icon:e.icon}),e.name)}))))},u=function(e){var a=e.language;return n.createElement("footer",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:a.footer}}))};const g=t.p+"3d2cb2e5e5071ab500d7.jpg",b=JSON.parse('{"navbar":{"language":"Lenguaje","english":"Ingles","spanish":"Español","about":"Sobre mí","skills":"Mis habilidades","projects":"Proyectos","contacts":"Contactos"},"about":{"description":{"hi":"Hola!","myName":"Soy <b>SYSMA</b> un desarrollador de software","interested":"Muy interesado en el desarrollo de videojuegos."},"title":"Sobre me","me":"Hola! Mi nombre es Sebastian Moreno Acero, de Colombia y trabajo como desarrollador de software.","experience":"Tengo {{years}} de experiencia, el cual he desarrollado habilidades principalmente en Web API en .Net Core y Node js, construyendo páginas web estaticas y aplicaciones móviles.","interested":"Actualmente estoy muy interesado en el desarrollo de videojuegos and la tecnología blockchain."},"skills":{"title":"Mis habilidades","languages":"Lenguajes","databases":"Bases de datos","frameworks":"Frameworks","others":"Otros","interesting":"Intereses"},"projects":{"title":"Proyectos","list":[{"name":"Plantilla para webpack con react y multiples paginas","description":"Simple plantilla para usar con React que permite multiples paginas para servidores que solo permiten archivos estaticos.","tags":["NodeJS","Webpack","Babel","React","Typescript","Sass"],"links":[{"text":"Github","href":"https://github.com/sysma1997/template-webpack-react-multiple-page"}]},{"name":"Pong","description":"Pong es un videojuego con tematica de tenis de mesa, con graficos bidimensionales simple, fabricado por Atari y lanzado originalmente en 1972.","tags":["GDScript","Godot engine"],"links":[{"text":"Github","href":"https://github.com/sysma1997/Pong"},{"text":"Itch.io","href":"https://sysma51.itch.io/pong"}]},{"name":"PacMan","description":"PacMan es un videojuego arcade diseñado por Toru Iwatani de la empresa Namco y distribuido por Midway Games al mercado estadounidense a principios de la década de 1980.","tags":["GDScript","Godot engine"],"links":[{"text":"Github","href":"https://github.com/sysma1997/PacMan"},{"text":"Itch.io","href":"https://sysma51.itch.io/pacman"}]}]},"contacts":"Contactos","footer":"Creado por <b>SYSMA</b>"}'),v=JSON.parse('{"navbar":{"language":"Language","english":"English","spanish":"Spanish","about":"About","skills":"Skills","projects":"Projects","contacts":"Contacts"},"about":{"description":{"hi":"Hello!","myName":"I\'m <b>SYSMA</b> a software development","interested":"Very interested in game development."},"title":"About me","me":"Hi! My name is Sebastian Moreno Acero, I\'m from Colombia and I work as a software developer.","experience":"I have {{years}} years experience, which I have developed skills mostly in Web API in .Net Core and Node js, building static web pages and mobile apps.","interested":"I\'m currently very interested in development of video games and blockchain technology."},"skills":{"title":"My skills","languages":"Languages","databases":"Data bases","frameworks":"Frameworks","others":"Others","interesting":"Interesting"},"projects":{"title":"Projects","list":[{"name":"Template for webpack with react and multiple page","description":"Simple template to use React with multiple page for servers only static files.","tags":["NodeJS","Webpack","Babel","React","Typescript","Sass"],"links":[{"text":"Github","href":"https://github.com/sysma1997/template-webpack-react-multiple-page"}]},{"name":"Pong","description":"Pong is a table tennis–themed twitch arcade sports video game, featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972.","tags":["GDScript","Godot engine"],"links":[{"text":"Github","href":"https://github.com/sysma1997/Pong"},{"text":"Itch.io","href":"https://sysma51.itch.io/pong"}]},{"name":"PacMan","description":"PacMan is an arcade video game created by video game designer Toru Iwatani of the Namco company, and distributed by Midway Games to the American market in the early 1980s.","tags":["GDScript","Godot engine"],"links":[{"text":"Github","href":"https://github.com/sysma1997/PacMan"},{"text":"Itch.io","href":"https://sysma51.itch.io/pacman"}]}]},"contacts":"Contacts","footer":"Created by <b>SYSMA</b>"}');document.title="SYSMA";var k=navigator.language;try{k=k.split("-")[0]}catch(e){}i.createRoot(document.getElementById("root")).render(n.createElement((function(){var e=(0,n.useState)(v),a=e[0],t=e[1];return(0,n.useEffect)((function(){"en"===k?t(v):"es"===k&&t(b)}),[]),n.createElement(n.Fragment,null,a&&n.createElement(n.Fragment,null,n.createElement(c,{language:a,setLanguage:t,english:v,spanish:b}),n.createElement("div",{className:"content"},n.createElement("header",null,n.createElement("div",{className:"description"},n.createElement("label",{className:"hi"},a.about.description.hi),n.createElement("label",{className:"myName",dangerouslySetInnerHTML:{__html:a.about.description.myName}}),n.createElement("label",{className:"interested"},a.about.description.interested)),n.createElement("img",{className:"profile",src:g,alt:"profile"})),n.createElement(o,{language:a}),n.createElement(r,{language:a}),n.createElement(m,{language:a}),n.createElement(p,{language:a})),n.createElement("a",{id:"up",href:"#"},n.createElement(l.G,{icon:s.FPD})),n.createElement(u,{language:a})))}),null))}},e=>{e.O(0,[216],(()=>(3354,e(e.s=3354)))),e.O()}]);