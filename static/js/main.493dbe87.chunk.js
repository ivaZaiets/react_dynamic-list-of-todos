(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(3)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.isTodoSelected,s=e.onTodoSelect;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{className:o()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),"data-cy":"todo",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id,"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id})})})})})]},e.id)}))})]})};!function(e){e.all="all",e.active="active",e.completed="completed"}(s||(s={}));var u=function(e){var t=e.query,c=e.onQueryChange,a=e.select,n=e.onSelectChange;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){n(e.target.value)},children:[Object(r.jsx)("option",{value:s.all,children:"All"}),Object(r.jsx)("option",{value:s.active,children:"Active"}),Object(r.jsx)("option",{value:s.completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"aria-label":"button","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},b=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.isTodoSelected,c=e.onTodoSelect,s=void 0===c?function(){}:c,a=Object(i.useState)(null),n=Object(l.a)(a,2),d=n[0],j=n[1];return Object(i.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then(j)}),[t.userId]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),d?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{"data-cy":"modal-close",type:"button",className:"delete",onClick:function(){return s(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:o()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===d||void 0===d?void 0:d.email),children:null===d||void 0===d?void 0:d.name})]})]})]}):Object(r.jsx)(b,{})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(""),d=Object(l.a)(n,2),o=d[0],O=d[1],x=Object(i.useState)("all"),f=Object(l.a)(x,2),v=f[0],p=f[1],N=Object(i.useState)(null),y=Object(l.a)(N,2),g=y[0],S=y[1];Object(i.useEffect)((function(){h("/todos").then(a).catch((function(e){return e}))}),[]);var k=o.toLowerCase().trim(),C=c.filter((function(e){return e.title.toLowerCase().includes(k)}));switch(v){case s.all:C=C.filter((function(e){return e}));break;case s.active:C=C.filter((function(e){return!1===e.completed}));break;case s.completed:C=C.filter((function(e){return!0===e.completed}));break;default:return null}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{onQueryChange:O,query:o,select:v,onSelectChange:p})}),Object(r.jsx)("div",{className:"block",children:0===c.length?Object(r.jsx)(b,{}):Object(r.jsx)(j,{todos:C,isTodoSelected:g,onTodoSelect:S})})]})})}),g&&Object(r.jsx)(m,{isTodoSelected:g,onTodoSelect:S})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.493dbe87.chunk.js.map