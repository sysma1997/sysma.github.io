"use strict";(self.webpackChunkporfolio_sysma1997=self.webpackChunkporfolio_sysma1997||[]).push([[57],{8873:(e,t,a)=>{var n=a(6540),i=a(5338),s=a(982),l=a(6188);const c=a.p+"aa62110346028a099fdd.png";var o=function(e){var t=e.language,a=e.setLanguage,i=e.spanish,o=e.english,r=(0,n.useState)(!1),m=r[0],d=r[1],p=function(){return d(!m)},g=function(e){"en"===e?a(o):"es"===e&&a(i)},u=function(){screen.width>1024||p()};return n.createElement("nav",{id:"menu",className:"navbar",role:"navigation","aria-label":"main navigation"},n.createElement("div",{className:"navbar-brand"},n.createElement("a",{id:"title",className:"navbar-item",href:"/"},n.createElement("img",{src:c,alt:"SYSMA"})),n.createElement("a",{role:"button",className:"navbar-burger ".concat(m&&"is-active"),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:p},n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}),n.createElement("span",{"aria-hidden":"true"}))),n.createElement("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(m&&"is-active")},n.createElement("div",{className:"navbar-start"},n.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},n.createElement("a",{className:"navbar-link"},t.navbar.language),n.createElement("div",{className:"navbar-dropdown"},n.createElement("a",{className:"navbar-item",onClick:function(){return g("en")}},t.navbar.english),n.createElement("a",{className:"navbar-item",onClick:function(){return g("es")}},t.navbar.spanish)))),n.createElement("div",{className:"navbar-end"},n.createElement("a",{className:"navbar-item",href:"#about",onClick:u},n.createElement(s.g,{className:"navbarItemIcon",icon:l.X46}),t.navbar.about),n.createElement("a",{className:"navbar-item",href:"#skills",onClick:u},n.createElement(s.g,{className:"navbarItemIcon",icon:l.yy}),t.navbar.skills),n.createElement("a",{className:"navbar-item",href:"#projects",onClick:u},n.createElement(s.g,{className:"navbarItemIcon",icon:l.kwR}),t.navbar.projects),n.createElement("a",{className:"navbar-item",href:"#contact",onClick:u},n.createElement(s.g,{className:"navbarItemIcon",icon:l.Up0}),t.navbar.contacts))))},r=function(e){var t=e.language,a=(new Date).getFullYear();return n.createElement("div",{id:"about"},n.createElement("div",{className:"aboutContent"},n.createElement("label",{className:"title"},t.about.title),n.createElement("label",{className:"description"},t.about.me),n.createElement("label",{className:"description"},t.about.experience.replace("{{years}}",(a-2018).toString())),n.createElement("label",{className:"description"},t.about.interested)))},m=function(e){var t=e.language,a=(0,n.useState)([{icon:"skillIcon devicon-javascript-plain",text:"Javascript"},{icon:"skillIcon devicon-typescript-plain",text:"Typescript"},{icon:"skillIcon devicon-cplusplus-plain",text:"C++"},{icon:"skillIcon devicon-godot-plain",text:"GDScript"},{icon:"skillIcon devicon-csharp-plain",text:"C#"},{icon:"skillIcon devicon-php-plain",text:"Php"},{icon:"skillIcon devicon-java-plain",text:"Java"},{icon:"skillIcon devicon-kotlin-plain",text:"Kotlin"}])[0],i=(0,n.useState)([{icon:"skillIcon devicon-postgresql-plain",text:"Postgres SQL"},{icon:"skillIcon devicon-sqlite-plain",text:"SQLite"},{icon:"skillIcon devicon-microsoftsqlserver-plain",text:"Microsoft SQL Server"},{icon:"skillIcon devicon-mysql-plain",text:"MySQL"}])[0],s=(0,n.useState)([{icon:"skillIcon devicon-nodejs-plain",text:"Node JS"},{icon:"skillIcon devicon-webpack-plain",text:"Webpack"},{icon:"skillIcon devicon-react-plain",text:"React"},{icon:"skillIcon devicon-express-original",text:"Express JS"},{icon:"skillIcon devicon-dotnetcore-plain",text:".Net Core"},{icon:"skillIcon devicon-denojs-original",text:"Deno js"}])[0],l=(0,n.useState)([{icon:"skillIcon devicon-godot-plain",text:"Godot"},{icon:"skillIcon devicon-android-plain",text:"Android"},{icon:"skillIcon devicon-git-plain",text:"Git"},{icon:"skillIcon devicon-opengl-plain",text:"OpenGL"},{icon:"skillIcon devicon-react-plain",text:"React Native"},{icon:"skillIcon devicon-bash-plain",text:"Bash"},{icon:"skillIcon devicon-linux-plain",text:"linux"},{icon:"skillIcon devicon-docker-plain",text:"Docker"}])[0],c=(0,n.useState)([{icon:"skillIcon devicon-unrealengine-original",text:"Unreal Engine"},{icon:"skillIcon devicon-python-plain",text:"Python"},{icon:"skillIcon devicon-rust-plain",text:"Rust"},{icon:"skillIcon devicon-c-plain",text:"C"}])[0];return n.createElement("div",{id:"skills"},n.createElement("div",{className:"skillsContent"},n.createElement("label",{className:"title"},t.skills.title),n.createElement("label",{className:"subtitle"},t.skills.languages),n.createElement("div",{className:"skillsList"},a.map((function(e,t){return n.createElement("div",{key:t.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},t.skills.databases),n.createElement("div",{className:"skillsList"},i.map((function(e,t){return n.createElement("div",{key:t.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},t.skills.frameworks),n.createElement("div",{className:"skillsList"},s.map((function(e,t){return n.createElement("div",{key:t.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},t.skills.others),n.createElement("div",{className:"skillsList"},l.map((function(e,t){return n.createElement("div",{key:t.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))}))),n.createElement("label",{className:"subtitle"},t.skills.interesting),n.createElement("div",{className:"skillsList"},c.map((function(e,t){return n.createElement("div",{key:t.toString(),className:"skillItem"},n.createElement("i",{className:e.icon}),n.createElement("label",{className:"skillLanguage"},e.text))})))))},d=function(e){var t=e.language;return n.createElement("div",{id:"projects"},n.createElement("div",{className:"projectsContent"},n.createElement("label",{className:"title"},t.projects.title),n.createElement("div",{className:"projectsList"},t.projects.list.map((function(e){return n.createElement("div",{key:e.name,className:"project"},n.createElement("div",{className:"title"},n.createElement("label",null,e.name)),n.createElement("div",{className:"content"},n.createElement("div",{className:"information"},n.createElement("label",{className:"description"},e.description)),n.createElement("div",{className:"tags"},e.tags.map((function(e,t){return n.createElement("span",{key:t,className:"tag"},n.createElement("i",{className:e.icon}),e.text)}))),e.links&&n.createElement("div",{className:"links"},e.links.map((function(e,t){return n.createElement("a",{key:t,className:"link",href:e.href,target:"_blank"},e.icon&&n.createElement("i",{className:e.icon}),e.image&&n.createElement("img",{src:e.image,alt:e.text}),e.text)})))))})))))},p=a(7875),g=function(e){var t=e.language,a=e.showTitle,i=e.styleList,c=(0,n.useState)([{icon:p.Vz1,name:"GitHub",link:"https://github.com/sysma1997"},{icon:p.IAJ,name:"LinkedIn",link:"https://www.linkedin.com/in/sebastian-moreno-acero-0a3138187"},{icon:l.y_8,name:"Email",link:"mailto: sysma1997@gmail.com"}]),o=c[0];return c[1],n.createElement("div",{id:null==a||!0===a?"contact":"_contact"},(null==a||!0===a)&&n.createElement("label",{className:"title"},t.contacts),n.createElement("div",{className:null==i||!0===i?"contactList":"contactList2"},o.map((function(e){return n.createElement("a",{key:e.name,className:"contactItem",href:e.link,target:"_blank"},n.createElement(s.g,{className:"contactItemIcon",icon:e.icon}),e.name)}))))},u=function(e){var t=e.language;return n.createElement("footer",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:t.footer}}))};const b=JSON.parse('{"navbar":{"language":"Lenguaje","english":"Ingles","spanish":"Español","about":"Sobre mí","skills":"Mis habilidades","projects":"Proyectos","contacts":"Contactos"},"about":{"description":{"hi":"Hola!","myName":"Soy <b>SYSMA</b> un desarrollador de software","interested":"Muy interesado en el desarrollo de motores de videojuegos."},"title":"Sobre me","me":"Hola! Mi nombre es Sebastian Moreno Acero, de Colombia y trabajo como desarrollador de software.","experience":"Tengo {{years}} años de experiencia, el cual he desarrollado habilidades principalmente en Web API en .Net Core y Node js, construyendo páginas web estaticas y aplicaciones móviles.","interested":"Actualmente estoy muy interesado en el desarrollo de motores con C++, OpenGL, Vulkan, DirectX y videojuegos."},"skills":{"title":"Mis habilidades","languages":"Lenguajes","databases":"Bases de datos","frameworks":"Frameworks","others":"Otros","interesting":"Intereses"},"projects":{"title":"Proyectos","list":[{"name":"Library","description":"Simple proyecto de WPF con C#, libreria donde puede llevar un registro de los libros, clientes y prestamos.","tags":[{"icon":"devicon-dotnetcore-plain","text":".Net Core"},{"icon":"devicon-csharp-plain","text":"C#"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/LibraryApp"}]},{"name":"Sysma Notes","description":"Simple proyecto de Web API con inicio de sesión, registro con confirmacion de correo, actualizacion de perfil, creación de notas, edisión y eliminación.","tags":[{"icon":"devicon-dotnetcore-plain","text":".Net Core"},{"icon":"devicon-csharp-plain","text":"C#"},{"icon":"devicon-react-plain","text":"React"},{"icon":"devicon-typescript-plain","text":"Typescript"},{"icon":"devicon-sass-original","text":"Sass"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/Sysma-Notes"}]},{"name":"Plantilla para webpack con react y multiples paginas","description":"Simple plantilla para usar con React que permite multiples paginas para servidores que solo permiten archivos estaticos.","tags":[{"icon":"devicon-nodejs-plain","text":"NodeJS"},{"icon":"devicon-webpack-plain","text":"Webpack"},{"icon":"devicon-babel-plain","text":"Babel"},{"icon":"devicon-react-plain","text":"React"},{"icon":"devicon-typescript-plain","text":"Typescript"},{"icon":"devicon-sass-original","text":"Sass"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/template-webpack-react-multiple-page"}]},{"name":"Pong","description":"Pong es un videojuego con tematica de tenis de mesa, con graficos bidimensionales simple, fabricado por Atari y lanzado originalmente en 1972.","tags":[{"icon":"devicon-godot-plain","text":"GDScript"},{"icon":"devicon-godot-plain","text":"Godot engine"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/Pong"},{"image":"/assets/images/itch-io.png","text":"Itch.io","href":"https://sysma51.itch.io/pong"}]},{"name":"PacMan","description":"PacMan es un videojuego arcade diseñado por Toru Iwatani de la empresa Namco y distribuido por Midway Games al mercado estadounidense a principios de la década de 1980.","tags":[{"icon":"devicon-godot-plain","text":"GDScript"},{"icon":"devicon-godot-plain","text":"Godot engine"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/PacMan"},{"image":"/assets/images/itch-io.png","text":"Itch.io","href":"https://sysma51.itch.io/pacman"}]}]},"contacts":"Contactos","footer":"Creado por <b>SYSMA</b>"}'),v=JSON.parse('{"navbar":{"language":"Language","english":"English","spanish":"Spanish","about":"About","skills":"Skills","projects":"Projects","contacts":"Contacts"},"about":{"description":{"hi":"Hello!","myName":"I\'m <b>SYSMA</b> a software development","interested":"Very interested in game development engines."},"title":"About me","me":"Hi! My name is Sebastian Moreno Acero, I\'m from Colombia and I work as a software developer.","experience":"I have {{years}} years experience, which I have developed skills mostly in Web API in .Net Core and Node js, building static web pages and mobile apps.","interested":"I\'m currently very interested in development of engines with C++, OpenGL, Vulkan, DirectX and video games."},"skills":{"title":"My skills","languages":"Languages","databases":"Data bases","frameworks":"Frameworks","others":"Others","interesting":"Interesting"},"projects":{"title":"Projects","list":[{"name":"Library","description":"Simple WPF project with C#, library where you can keep track of books, clients and loans.","tags":[{"icon":"devicon-dotnetcore-plain","text":".Net Core"},{"icon":"devicon-csharp-plain","text":"C#"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/LibraryApp"}]},{"name":"Sysma Notes","description":"Simple Web API project with login, registration with email confirmation, profile update, note creation, editing and deletion.","tags":[{"icon":"devicon-dotnetcore-plain","text":".Net Core"},{"icon":"devicon-csharp-plain","text":"C#"},{"icon":"devicon-react-plain","text":"React"},{"icon":"devicon-typescript-plain","text":"Typescript"},{"icon":"devicon-sass-original","text":"Sass"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/Sysma-Notes"}]},{"name":"Template for webpack with react and multiple page","description":"Simple template to use React with multiple page for servers only static files.","tags":[{"icon":"devicon-nodejs-plain","text":"NodeJS"},{"icon":"devicon-webpack-plain","text":"Webpack"},{"icon":"devicon-babel-plain","text":"Babel"},{"icon":"devicon-react-plain","text":"React"},{"icon":"devicon-typescript-plain","text":"Typescript"},{"icon":"devicon-sass-original","text":"Sass"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/template-webpack-react-multiple-page"}]},{"name":"Pong","description":"Pong is a table tennis–themed twitch arcade sports video game, featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972.","tags":[{"icon":"devicon-godot-plain","text":"GDScript"},{"icon":"devicon-godot-plain","text":"Godot engine"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/Pong"},{"image":"/assets/images/itch-io.png","text":"Itch.io","href":"https://sysma51.itch.io/pong"}]},{"name":"PacMan","description":"PacMan is an arcade video game created by video game designer Toru Iwatani of the Namco company, and distributed by Midway Games to the American market in the early 1980s.","tags":[{"icon":"devicon-godot-plain","text":"GDScript"},{"icon":"devicon-godot-plain","text":"Godot engine"}],"links":[{"icon":"devicon-github-original","text":"Github","href":"https://github.com/sysma1997/PacMan"},{"image":"/assets/images/itch-io.png","text":"Itch.io","href":"https://sysma51.itch.io/pacman"}]}]},"contacts":"Contacts","footer":"Created by <b>SYSMA</b>"}');document.title="SYSMA";var h=navigator.language;try{h=h.split("-")[0]}catch(e){}i.createRoot(document.getElementById("root")).render(n.createElement((function(){var e=(0,n.useState)(v),t=e[0],a=e[1];return(0,n.useEffect)((function(){"en"===h?a(v):"es"===h&&a(b)}),[]),n.createElement(n.Fragment,null,t&&n.createElement(n.Fragment,null,n.createElement(o,{language:t,setLanguage:a,english:v,spanish:b}),n.createElement("div",{className:"content"},n.createElement("header",null,n.createElement("div",{className:"description"},n.createElement("label",{className:"hi"},t.about.description.hi),n.createElement("label",{className:"myName",dangerouslySetInnerHTML:{__html:t.about.description.myName}}),n.createElement("label",{className:"interested"},t.about.description.interested),n.createElement(g,{language:t,showTitle:!1,styleList:!1}))),n.createElement(r,{language:t}),n.createElement(m,{language:t}),n.createElement(d,{language:t}),n.createElement(g,{language:t})),n.createElement("a",{id:"up",href:"#"},n.createElement(s.g,{icon:l.INu})),n.createElement(u,{language:t})))}),null))}},e=>{e.O(0,[96],(()=>(8873,e(e.s=8873)))),e.O()}]);