(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{49:function(e,t,a){e.exports=a(60)},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),l=a.n(c),r=(a(54),a(25)),i=a(89),u=a(90),m=a(9),s=a(28),d=a(33),E=a(36),g=a(91),f=a(92);function p(e){var t=e.data;return o.a.createElement("ul",null,Object.values(t).map((function(e){return o.a.createElement("li",null,e)})))}function v(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],l=a[1],r=Object(n.useState)(localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):{}),i=Object(E.a)(r,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){null!==localStorage.getItem("todo")?localStorage.setItem("todo",u):localStorage.setItem("todo",[])}),[]),Object(n.useEffect)((function(){console.log("running useEffect",u),localStorage.setItem("todo",JSON.stringify(u))}),[u]),console.log(localStorage.getItem("todo"),u),o.a.createElement("div",null,"To do App",o.a.createElement(g.a,{value:c,label:"Enter Item",onChange:function(e){return l(e.target.value)}}),o.a.createElement(f.a,{onClick:function(){var e=Object.keys(u).length;m(Object(d.a)(Object(d.a)({},u),{},Object(s.a)({},e,c)))}},"Add"),o.a.createElement(f.a,{onClick:function(){localStorage.setItem("todo",JSON.stringify({})),m({})}},"Clear List!"),o.a.createElement(p,{data:u}))}function h(e){return o.a.createElement("div",null,"Redux Advanced")}function b(e){return o.a.createElement("div",null,"HOME")}function O(e){return o.a.createElement(n.Fragment,null,o.a.createElement(i.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement("div",{style:{color:"white"}},o.a.createElement(r.b,{to:"/"},"MY APP")),o.a.createElement("div",{style:{marginLeft:24,color:"white"}},o.a.createElement(r.b,{to:"/todo"},"To do App")),o.a.createElement("div",{style:{marginLeft:24,color:"white"}},o.a.createElement(r.b,{to:"/redux"},"Redux Advanced App")))),o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:b}),o.a.createElement(m.a,{path:"/todo",component:v}),o.a.createElement(m.a,{path:"/redux",component:h})))}var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(r.a,null,o.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.3152b117.chunk.js.map