!function(){function e(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var n,r,a=[],o=!0,l=!1;try{for(i=i.call(e);!(o=(n=i.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(c){l=!0,r=c}finally{try{o||null==i.return||i.return()}finally{if(l)throw r}}return a}(e,i)||t(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var n=document.createElement("style");n.innerHTML='*,:before,:after{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type=button]{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-opacity: 1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.my-auto{margin-top:auto;margin-bottom:auto}.mt-3{margin-top:.75rem}.mt-5{margin-top:1.25rem}.mt-10{margin-top:2.5rem}.mt-52{margin-top:13rem}.mr-2{margin-right:.5rem}.mb-2{margin-bottom:.5rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.flex{display:flex}.table{display:table}.hidden{display:none}.h-5{height:1.25rem}.h-8{height:2rem}.h-32{height:8rem}.w-5{width:1.25rem}.w-8{width:2rem}.w-1\\/2{width:50%}.w-full{width:100%}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.animate-ping{-webkit-animation:ping 1s cubic-bezier(0,0,.2,1) infinite;animation:ping 1s cubic-bezier(0,0,.2,1) infinite}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-4{gap:1rem}.whitespace-pre-wrap{white-space:pre-wrap}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-dashed{border-style:dashed}.border-dotted{border-style:dotted}.bg-transparent{background-color:transparent}.bg-gray-700{--tw-bg-opacity: 1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.p-2{padding:.5rem}.p-5{padding:1.25rem}.pt-5{padding-top:1.25rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.font-semibold{font-weight:600}.text-gray-400{--tw-text-opacity: 1;color:rgba(156,163,175,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}.text-red-400{--tw-text-opacity: 1;color:rgba(248,113,113,var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgba(239,68,68,var(--tw-text-opacity))}.text-green-500{--tw-text-opacity: 1;color:rgba(16,185,129,var(--tw-text-opacity))}.text-blue-300{--tw-text-opacity: 1;color:rgba(147,197,253,var(--tw-text-opacity))}.text-blue-400{--tw-text-opacity: 1;color:rgba(96,165,250,var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity: 1;color:rgba(59,130,246,var(--tw-text-opacity))}*,:before,:after{--tw-shadow: 0 0 #0000}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}*,:before,:after{--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgba(59, 130, 246, .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000}*{box-sizing:border-box!important}:root{--roundness: 6px;--modeline-backdrop-color: rgba(25, 26, 34, 1)}body{margin:0}.sascii{color:#000;background:white;display:inline-block;white-space:pre;letter-spacing:0;line-height:1.4;font-family:"Consolas","BitstreamVeraSansMono","CourierNew",Courier,monospace;font-size:12px;border-width:1px;border-style:solid;border-color:#d3d3d3}.root-page-container{color:#efefef;background:rgb(93,97,247);background:linear-gradient(34deg,rgba(49,95,150,1) 0%,rgba(107,114,128,1) 100%);font-family:"JetBrains Mono","Courier New",Courier,monospace;font-weight:400;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}.terminal-outer-container{width:100%;max-width:3000px;position:absolute}.terminal-inner-container{background:#22212c;box-shadow:0 22px 70px 4px #00000075;width:100%;border-radius:var(--roundness)}.terminal-content-container{padding:30px;min-height:80vh;border-radius:var(--roundness) var(--roundness) 0px 0px}.terminal-title-bar{height:40px;background:#191a22;border-radius:var(--roundness) var(--roundness) 0px 0px;display:flex;align-items:center;padding:0 14px;position:relative}.terminal-title-actions{display:flex;align-items:center;position:absolute}.terminal-title-actions .title-btn{width:14px;height:14px;border-radius:50%}.terminal-title-bar .title-btn:not(:first-of-type){margin-left:8px}.title-btn__red{background:rgba(255,91,82,1)}.title-btn__yellow{background:rgba(230,192,41,1)}.title-btn__green{background:rgba(83,195,43,1)}.title-btn:hover{background:#22212c}.terminal-content-text{font-size:18px;font-weight:400;line-height:25px;width:100%;margin:0 auto}a{text-decoration:none;color:#1a720c}a:visited{color:#336dea}.terminal-content-text h1{margin:0 0 10px;font-size:32px;font-weight:500}.terminal-mode-line-container{display:flex;align-items:center;position:relative}.terminal-mode-indicator{color:#22212c;background:rgba(198,141,255,1);padding:5px 10px;border-radius:0px 0px 0px var(--roundness);font-weight:400}.mode-indicator-triangle{width:0;height:0;border-top:15.5px solid transparent;border-bottom:15.5px solid transparent;border-left:15.5px solid rgba(198,141,255,1);background:var(--modeline-backdrop-color);margin-left:-6px}.terminal-file-display{background:var(--modeline-backdrop-color);padding:5px 10px;width:100%;border-radius:0px 0px var(--roundness) 0px}@-webkit-keyframes animate-half{0%{height:100%}to{height:30%}}@keyframes animate-half{0%{height:100%}to{height:30%}}.backdrop-upper-half{box-shadow:0 22px 70px 4px #00000075;-webkit-animation:animate-half 3s cubic-bezier(.075,.82,.165,1);animation:animate-half 3s cubic-bezier(.075,.82,.165,1);will-change:height box-shadow;background:#191a22;height:30%;width:100%;position:absolute;top:0;z-index:0}.terminal-title-text{width:100%;text-align:center}strong{font-weight:bold}.blue{color:#64dff3}.yellow{color:#d4dd83}.yellow a:visited{color:#1a720c}a:visited{--tw-text-opacity: 1;color:rgba(107,114,128,var(--tw-text-opacity))}@media (min-width: 768px){.md\\:w-1\\/2{width:50%}.md\\:w-2\\/3{width:66.666667%}.md\\:p-20{padding:5rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}@media (min-width: 1024px){.lg\\:block{display:block}.lg\\:w-1\\/2{width:50%}}\n',document.head.appendChild(n),System.register(["./vendor-legacy.286fc356.js"],(function(t,i){"use strict";var n,r,a,o,l,c,s,d,m;return{setters:[function(e){n=e.j,r=e.u,a=e.R,o=e.r,l=e.B,c=e.a,s=e.b,d=e.c,m=e.d}],execute:function(){var h=t("a",n.exports.jsx),p=t("j",n.exports.jsxs),b=n.exports.Fragment,u=t("T",(function(e){var t=e.children,i=e.title,n=e.display;return p("div",{className:"root-page-container bg-gray-700",children:[h("div",{className:"backdrop-upper-half"}),h("div",{className:"terminal-outer-container p-5 md:p-20",children:p("div",{className:"terminal-inner-container",children:[p("div",{className:"terminal-title-bar",children:[p("div",{className:"terminal-title-actions",children:[h("div",{className:"title-btn title-btn__red"}),h("div",{className:"title-btn title-btn__yellow"}),h("div",{className:"title-btn title-btn__green"})]}),p("div",{className:"terminal-title-text",children:["RJ: ",h("span",{className:"blue",children:i})]})]}),h("div",{className:"terminal-content-container",children:h("div",{className:"terminal-content-text",children:t})}),p("div",{className:"terminal-mode-line-container",children:[h("div",{className:"terminal-mode-indicator",children:"production"}),h("div",{className:"mode-indicator-triangle"}),h("div",{className:"terminal-file-display",children:null!=n?n:"Portfolio"})]})]})})]})})),g=t("C",(function(t){var i=t.children,n=r(),l=e(a.useState(""),2),c=l[0],s=l[1],d=e(a.useState(""),2),m=d[0],u=d[1],g=e(a.useState(""),2),f=g[0],x=g[1],w=null;o.exports.useEffect((function(){return function(){null!==w&&clearTimeout(w)}}),[]);return p(b,{children:["$",""!==c?h("input",{autoFocus:!0,value:c,onChange:function(e){s(e.target.value),u(""),x("")},onKeyDown:function(e){"Enter"===e.key&&(c.includes("cd /home")||c.includes("command --available")||c.includes("--help")||c.includes("cd ~")?n("/"):c.includes("/var/log/shares.log")||c.includes("shares")?n("shares"):c.includes("cat ~/info/about.md")||c.includes("about")?n("about"):c.includes("linkedin")||c.includes("show linkedin")||c.includes("goto linkedin")?(w=setTimeout((function(){window.open("https://www.linkedin.com/in/rey-jhon-baquirin-810402182","_blank")}),2e3),x("opening linkedin profile in new tab.")):c.includes("github")||c.includes("show github")||c.includes("goto github")?(w=setTimeout((function(){window.open("https://github.com/yourjhay","_blank")}),2e3),x("opening github profile in new tab.")):u("Command not found."))},className:"bg-transparent ml-3 focus:outline-none md:w-1/2"}):p("span",{onClick:function(){return s(" ")},className:"ml-3",children:[i," ",h("span",{className:"animate-ping",children:"|"})]}),f&&h("p",{className:"text-blue-500",children:f}),m&&p("p",{className:"text-md",children:["/usr/system: ",m]})]})})),f=function(){return p(u,{title:"Shares",display:"Sharing",children:[p(g,{children:[h("strong",{children:"ls"}),p("span",{className:"ml-2 blue",children:[h("span",{className:"yellow",children:"-l"})," /var/log/shares.log"]})]}),h("p",{className:"blue text-xl md:text-2xl font-semibold my-5",children:"Anything I want to share."}),p("div",{className:"mt-5 w-full md:w-2/3 border border-dashed",children:[p("div",{className:"flex justify-between  border-b  border-dotted",children:[h("div",{className:"w-1/2 p-2",children:"Date"}),h("div",{className:"w-full border-l border-dotted p-2",children:"Title"}),h("div",{className:"w-full border-l border-dotted p-2",children:"Author"})]}),h("div",{className:"p-2",children:"There nothing here at the moment."})]}),h("div",{className:"mt-5",children:p("p",{children:["run ",h("span",{className:"text-blue-400",children:"command --help"})," to show available commands."]})})]})},x=h("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:h("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})}),w=h("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:h("path",{fillRule:"evenodd",d:"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",clipRule:"evenodd"})}),y=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:h("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})}),v=h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:h("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),k=function(){return h(u,{title:"About Me",children:p("div",{className:"flex gap-1",children:[p("div",{className:"md:w-1/2",children:[p(g,{children:[h("strong",{children:"cat"})," ",h("span",{className:"yellow",children:"~"}),h("span",{className:"blue",children:"/info/about.md"})]}),h("p",{className:"blue text-2xl md:text-4xl font-semibold my-5",children:"Rey Jhon Abarracoso Baquirin"}),h("span",{className:"yellow",children:"Web Application Developer"}),h("p",{className:"mt-3 mb-2",children:"@skills:"}),p("p",{className:"blue flex items-center",children:[" ",x," React.js"]}),p("p",{className:"text-blue-500 flex items-center",children:[" ",x," React Native"]}),p("p",{className:"text-red-500 flex items-center",children:[" ",x," Laravel"]}),p("p",{className:"text-red-400 flex items-center",children:[" ",x," Git"]}),p("p",{className:"text-blue-400 flex items-center",children:[" ",x," Php OOP"]}),p("p",{className:"yellow flex items-center",children:[" ",x," JavaScript"]}),p("p",{className:"text-green-500 flex items-center",children:[" ",x," C#"]}),p("p",{className:"text-blue-300 flex items-center",children:[" ",x," C++"]}),h("p",{className:"mt-5 mb-2",children:"@contact:"}),p("p",{className:"text-blue-300 flex items-center",children:[" ",h("span",{className:"mr-2",children:w})," reyjhonbaquirin@yahoo.com"]}),p("div",{className:"mt-5 flex gap-4 items-center",children:[p("div",{className:"text-gray-500 w-8 h-8",children:[h("a",{href:"https://github.com/yourjhay",rel:"noreferrer",target:"_blank",children:y})," "]}),h("div",{className:"text-gray-500 w-8 h-8",children:h("a",{href:"https://www.linkedin.com/in/rey-jhon-baquirin-810402182",rel:"noreferrer",target:"_blank",children:v})})]}),h("p",{className:"pt-5",children:"And oh! I don't use Microsoft Windows. 🙃"})]}),h("div",{className:"hidden lg:block lg:w-1/2 text-sm",children:p("span",{className:"whitespace-pre-wrap flex flex-col mt-10",children:[h("span",{children:"%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,"}),h("span",{children:"%@                                                        /@,"}),h("span",{children:"#@.                                                       /@."}),h("span",{children:"#@.                                                       /@."}),h("span",{children:"%@                              @@                        /@,"}),h("span",{children:"%@                     @@     .@@   @@                    /@, "}),h("span",{children:"#@.             .&@@@@&       #@,     &@@@@&              /@."}),h("span",{children:"#@.         @@@@%             @&            %@@@@         /@."}),h("span",{children:"%@           #@@@@&..        @@          .&@@@@#          /@,"}),h("span",{children:"%@                 &@@@@&   @@.     &@@@@%                /@, "}),h("span",{children:"%@                         ,@%                            /@,"}),h("span",{children:"#@.                        @@                             /@. "}),h("span",{children:"#@.                                                       /@."}),h("span",{children:"%@                                                        /@, "}),h("span",{children:"%@                                                        /@,"}),h("span",{children:",@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ "}),h("span",{children:"                         #@,     (@*                                  "}),h("span",{children:"                         (@,     (@,                                  "}),h("span",{children:"                @@@@@@@@@@@@@@@@@@@@@@@@@@@@&                         "})]})})]})})},N=o.exports.lazy((function(){return function(){return i.import("./Home-legacy.a7d6007d.js")}()})),z=function(){return h("div",{className:"text-gray-400 flex flex-col text-center items-center justify-center",children:h("div",{className:"my-auto h-32 mt-52",children:"LOADING"})})},C=function(){return h(l,{children:p(c,{children:[h(s,{path:"/",element:h(o.exports.Suspense,{fallback:h(z,{}),children:h(N,{})})}),h(s,{path:"shares",element:h(f,{})}),h(s,{path:"about",element:h(k,{})})]})})},j=d();if(document.getElementById("root")){var S=(/#!(\/.*)$/.exec(location.hash)||[])[1];S&&j.replace(S),m.render(h(a.StrictMode,{children:h(C,{})}),document.getElementById("root"))}}}}))}();
