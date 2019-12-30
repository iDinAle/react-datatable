(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){e.exports=a(316)},184:function(e,t,a){},316:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(37),c=a.n(r),o=a(50),i=a.n(o),s=a(20),u=(a(184),a(332)),m=a(317),g=function(){var e;return i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},p=a(73),f=a(146),d=a(109),b=a(40),S=a.n(b),h=a(331),E=a(328),O=a(329),y=a(326),v=a(327),j=[{key:2,value:2,text:"2 phones per page"},{key:3,value:3,text:"3 phones per page"},{key:5,value:5,text:"5 phones per page"},{key:10,value:10,text:"10 phones per page"},{key:20,value:20,text:"20 phones per page"}],I=function(e){var t=e.onChangeItemsPerPage,a=e.onSearchItems,n=e.inputValue,r=e.selectValue;return l.a.createElement("div",{className:"table-options"},l.a.createElement(y.a,{placeholder:"Select phones per page",options:j,onChange:t,value:r}),l.a.createElement(v.a,{icon:"search",placeholder:"Search...",iconPosition:"left",type:"search",onChange:a,value:n}))},C=a(330),w=a(39),N=function(e){var t=e.firstTableItem,a=e.lastTableItem,n=e.entries,r=e.onSwitchPage,c=e.pagesAmount,o=e.activePage,i=a>n?n:a;return l.a.createElement("div",{className:"table-options"},l.a.createElement("div",null,"Showing ".concat(t," to ").concat(i," of ").concat(n," entries")),l.a.createElement(C.a,{activePage:o,boundaryRange:0,ellipsisItem:null,firstItem:{content:l.a.createElement(w.a,{name:"angle double left"}),icon:!0},lastItem:{content:l.a.createElement(w.a,{name:"angle double right"}),icon:!0},prevItem:{content:l.a.createElement(w.a,{name:"angle left"}),icon:!0},nextItem:{content:l.a.createElement(w.a,{name:"angle right"}),icon:!0},pointing:!0,secondary:!0,totalPages:c,onPageChange:r}))},k=JSON.parse(localStorage.getItem("page")),J=JSON.parse(localStorage.getItem("itemsPerPage")),x=JSON.parse(localStorage.getItem("searchValue")),P=JSON.parse(localStorage.getItem("highlightedValue")),T=JSON.parse(localStorage.getItem("activeColumn")),V=JSON.parse(localStorage.getItem("direction")),A=JSON.parse(localStorage.getItem("sortType")),D=JSON.parse(localStorage.getItem("selectedItems")),L=function(e){var t=e.items,a=e.columnConfig,r=e.onEdit,c=Object(n.useState)(k||1),o=Object(s.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)(J||5),g=Object(s.a)(m,2),b=g[0],y=g[1],v=Object(n.useState)(x||""),j=Object(s.a)(v,2),C=j[0],w=j[1],L=Object(n.useState)(P||""),R=Object(s.a)(L,2),B=R[0],H=R[1],K=Object(n.useState)(T||null),F=Object(s.a)(K,2),M=F[0],U=F[1],q=Object(n.useState)(V||null),z=Object(s.a)(q,2),G=z[0],Q=z[1],W=Object(n.useState)(A||""),X=Object(s.a)(W,2),Y=X[0],Z=X[1],$=Object(n.useState)(D||[]),_=Object(s.a)($,2),ee=_[0],te=_[1],ae=Object(n.useState)(0),ne=Object(s.a)(ae,2),le=ne[0],re=ne[1],ce=Object(n.useState)(""),oe=Object(s.a)(ce,2),ie=oe[0],se=oe[1],ue=Object(n.useState)(""),me=Object(s.a)(ue,2),ge=me[0],pe=me[1],fe=S.a.debounce(function(e){w(e)},500),de=function(e){return B&&""!==e?e.split(new RegExp("(".concat(B,")"),"gi")).map(function(e,t){return l.a.createElement(n.Fragment,{key:"".concat(e+t)},e.toLowerCase()===B.toLowerCase()?l.a.createElement("span",{style:{backgroundColor:"green"}},e):e)}):e},be=function(e){if(ee.includes(e))te(Object(d.a)(ee).filter(function(t){return t!==e}));else{var t=Object(d.a)(ee);t.push(e),te(t)}},Se=function(e,t){re(e.id),pe(t),S.a.keys(e).forEach(function(a){e[a]===t&&se(a)})},he=function(e,t){pe(t.value)},Ee=function(){var e=t.find(function(e){return e.id===le});if(be(e),ge!==e[ie]){var a=Object(f.a)({},e,Object(p.a)({},ie,ge));r(a)}re(0)},Oe=function(){Ee()},ye=function(e){"Enter"===e.key&&Ee(),"Escape"===e.key&&re(0)};Object(n.useEffect)(function(){localStorage.setItem("originalItems",JSON.stringify(t)),localStorage.setItem("page",JSON.stringify(i)),localStorage.setItem("itemsPerPage",JSON.stringify(b)),localStorage.setItem("searchValue",JSON.stringify(C)),localStorage.setItem("highlightedValue",JSON.stringify(B)),localStorage.setItem("activeColumn",JSON.stringify(M)),localStorage.setItem("direction",JSON.stringify(G)),localStorage.setItem("sortType",JSON.stringify(Y)),localStorage.setItem("selectedItems",JSON.stringify(ee))});var ve=C.toLowerCase(),je=t.filter(function(e){return S.a.keys(a).filter(function(e){return a[e].isSearchable}).some(function(t){return e[t].toLowerCase().includes(ve)})}),Ie={string:function(e,t){return e[M].localeCompare(t[M])},number:function(e,t){return e[M]-t[M]}}[Y]||function(){return 0},Ce=je.sort(Ie);"descending"===G&&S.a.reverse(Ce);var we=Ce.length,Ne=Math.ceil(we/b),ke=(i-1)*b+1,Je=i*b,xe=Ce.slice(ke-1,Je);return l.a.createElement("div",{className:"table-wrapper"},l.a.createElement(I,{onChangeItemsPerPage:function(e,t){y(t.value),u(1)},onSearchItems:function(e,t){var a=t.value.toLowerCase().slice(0,37);u(1),H(a),fe(a)},inputValue:B,selectValue:b}),l.a.createElement(h.a,{striped:!0,sortable:!0,selectable:!0,celled:!0},l.a.createElement(h.a.Header,null,l.a.createElement(h.a.Row,null,l.a.createElement(h.a.HeaderCell,null,l.a.createElement(E.a,{toggle:!0,onChange:function(){t.length!==ee.length?te(t.map(function(e){return e.id})):te([])},checked:t.every(function(e){return ee.includes(e.id)})})),S.a.map(a,function(e,t){return l.a.createElement(h.a.HeaderCell,{style:{textAlign:"center"},key:e.title,sorted:M===e?G:null,onClick:function(){return a=t,void((n=e.sortType)&&(Z(n),M!==a?(U(a),Q("ascending")):Q("ascending"===G?"descending":"ascending")));var a,n}},e.title)}))),l.a.createElement(h.a.Body,null,S.a.map(xe,function(e){return l.a.createElement(h.a.Row,{key:e.imageUrl},l.a.createElement(h.a.Cell,null,l.a.createElement(E.a,{toggle:!0,checked:ee.includes(e.id),onChange:function(){return be(e.id)}})),le===e.id&&e[ie]===e.name?l.a.createElement(h.a.Cell,{style:{padding:0}},l.a.createElement(O.a,null,l.a.createElement(O.a.TextArea,{defaultValue:e.name,onChange:he,onKeyDown:ye,onBlur:Oe}))):l.a.createElement(h.a.Cell,{onDoubleClick:function(){return Se(e,e.name)}},de(e.name)),le===e.id&&e[ie]===e.age?l.a.createElement(h.a.Cell,{style:{padding:0}},l.a.createElement(O.a,null,l.a.createElement(O.a.TextArea,{defaultValue:e.age,onChange:he,onKeyDown:ye,onBlur:Oe}))):l.a.createElement(h.a.Cell,{onDoubleClick:function(){return Se(e,e.age)}},e.age),le===e.id&&e[ie]===e.snippet?l.a.createElement(h.a.Cell,{style:{padding:0}},l.a.createElement(O.a,null,l.a.createElement(O.a.TextArea,{defaultValue:e.snippet,onChange:he,onKeyDown:ye,onBlur:Oe}))):l.a.createElement(h.a.Cell,{onDoubleClick:function(){return Se(e,e.snippet)}},de(e.snippet)))}))),l.a.createElement(N,{firstTableItem:ke,lastTableItem:Je,entries:we,onSwitchPage:function(e,t){u(t.activePage)},pagesAmount:Ne,activePage:i}))},R={name:{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",sortType:"string",isSearchable:!0},age:{title:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",sortType:"number"},snippet:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",isSearchable:!0}},B=JSON.parse(localStorage.getItem("originalItems")),H=function(){var e=Object(n.useState)(B||[]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),p=o[0],f=o[1],d=Object(n.useState)(!1),b=Object(s.a)(d,2),S=b[0],h=b[1];Object(n.useEffect)(function(){!function(){var e;i.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return h(!1),f(!0),t.prev=2,t.next=5,i.a.awrap(g());case 5:e=t.sent,B||r(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),h(!0);case 12:f(!1);case 13:case"end":return t.stop()}},null,null,[[2,9]])}()},[]);return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"table-container"},l.a.createElement("h1",{className:"main-title"},"React Datatable"),S&&l.a.createElement("div",{className:"message"},"Something went wrong ..."),p?l.a.createElement("div",{className:"message"},"Loading ..."):l.a.createElement(L,{items:a,columnConfig:R,onEdit:function(e){var t=a.map(function(t){return t.id===e.id?Object.keys(R).every(function(t){return""===e[t]})?"empty":e:t});t.includes("empty")&&t.splice(t.indexOf("empty"),1),r(t)}})),B&&l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("p",null,"The data was restored from your local storage")),l.a.createElement(m.a,{onClick:function(){localStorage.clear(),window.location.reload()}},"Reset to default")))};c.a.render(l.a.createElement(H,null),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.57c9a2f1.chunk.js.map