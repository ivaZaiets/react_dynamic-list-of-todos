(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),l=c(2),n=c(1),d=(c(10),c(11),c(3)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.isTodoSelected,s=e.setIsTodoSelected;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{className:i()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),"data-cy":"todo",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()("far",{"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id,"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id})})})})})]},e.id)}))})]})},j=function(e){var t=e.query,c=e.setQuery,s=e.select,a=e.setSelect;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){a(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(o.jsx)("button",{"aria-label":"button","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.isTodoSelected,c=e.setIsTodoSelected,s=void 0===c?function(){}:c,a=Object(n.useState)(null),d=Object(l.a)(a,2),r=d[0],j=d[1];return Object(n.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then(j)}),[t.userId]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),r?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{"data-cy":"modal-close",type:"button",className:"delete",onClick:function(){return s(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:i()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),children:null===r||void 0===r?void 0:r.name})]})]})]}):Object(o.jsx)(b,{})]})},m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),d=Object(l.a)(a,2),i=d[0],m=d[1],O=Object(n.useState)("all"),x=Object(l.a)(O,2),f=x[0],v=x[1],p=Object(n.useState)(null),N=Object(l.a)(p,2),y=N[0],g=N[1];Object(n.useEffect)((function(){u("/todos").then(s)}),[]);var S=i.toLowerCase().trim(),k=c.filter((function(e){return e.title.toLowerCase().includes(S)}));switch(f){case"all":k=k.filter((function(e){return e}));break;case"active":k=k.filter((function(e){return!1===e.completed}));break;case"completed":k=k.filter((function(e){return!0===e.completed}));break;default:return null}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{setQuery:m,query:i,select:f,setSelect:v})}),Object(o.jsx)("div",{className:"block",children:0===c.length?Object(o.jsx)(b,{}):Object(o.jsx)(r,{todos:k,isTodoSelected:y,setIsTodoSelected:g})})]})})}),y&&Object(o.jsx)(h,{isTodoSelected:y,setIsTodoSelected:g})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3e7440f9.chunk.js.map