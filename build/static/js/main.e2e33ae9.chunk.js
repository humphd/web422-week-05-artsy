(this.webpackJsonpartsy=this.webpackJsonpartsy||[]).push([[0],{121:function(t,e,n){},123:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(16),i=n.n(c),s=(n(46),n(19)),u=n(136),l=n(133),o=n(134),j=n(18),d=n.n(j),h=n(26),b=n(36),f=Object(b.throttle)(function(){var t=Object(h.a)(d.a.mark((function t(e){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.artic.edu/api/v1".concat(e),t.next=3,fetch(n);case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("error loading ".concat(e," (").concat(r.status,")"));case 6:return t.abrupt("return",r.json());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),200),O=function(){var t=Object(h.a)(d.a.mark((function t(e){var n,r,a,c,i=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n="/artworks/search?q=".concat(e,"&limit=25"),r=i.length,a=new Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=i[c];return a.length&&(n+="&fields="+a.join(",")),t.abrupt("return",f(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:843;return"https://www.artic.edu/iiif/2/".concat(t,"/full/").concat(e,",/0/default.jpg")},p=n(135),v=n(6);var g=function(t){var e=t.query,n=t.onChange;return Object(v.jsx)(p.a,{placeholder:"Enter search term, for example: cats",width:"100%",autoFocus:!0,value:e,onChange:n})},m=n(130),w=n(131),y=n(132),k=n(137);var N=function(t){var e=t.results;return t.loading?Object(v.jsx)(m.a,{children:Object(v.jsx)(w.a,{className:"mx-auto",animation:"border",role:"status",children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})})}):e&&e.length?Object(v.jsx)(m.a,{children:e.map((function(t){var e;return Object(v.jsx)(y.a,{xs:12,md:4,lg:3,children:Object(v.jsxs)(k.a,{children:[Object(v.jsx)(k.a.Img,{variant:"top",src:x(t.image_id,250),alt:null===(e=t.thumbnail)||void 0===e?void 0:e.alt_text}),Object(v.jsx)(k.a.Body,{children:Object(v.jsx)(k.a.Title,{children:t.title})})]})},t.id)}))}):null};n(120),n(121);var S=function(){var t=Object(r.useState)(null),e=Object(s.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),j=i[0],d=i[1],h=Object(r.useState)(!1),b=Object(s.a)(h,2),f=b[0],x=b[1],p=Object(r.useState)(null),m=Object(s.a)(p,2),w=m[0],y=m[1];return Object(r.useEffect)((function(){j||j.length?j.length<3||(x(!0),O(j,"id","title","image_id","thumbnail").then((function(t){t&&t.data&&a(t.data)})).catch((function(t){return y(t)})).finally((function(){return x(!1)}))):a(null)}),[j]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("header",{children:[Object(v.jsx)(u.a,{bg:"dark",variant:"dark",children:Object(v.jsx)(u.a.Brand,{children:"Atrsy"})}),Object(v.jsx)(l.a,{fluid:!0,className:"painting-background",children:Object(v.jsxs)(o.a,{className:"text-center",children:[Object(v.jsx)("h1",{children:"Find Art You Love"}),Object(v.jsx)(g,{query:j,onChange:function(t){return d(t.target.value)}})]})})]}),Object(v.jsx)("main",{children:Object(v.jsx)(o.a,{fluid:!0,children:w?Object(v.jsx)("p",{children:"Unable to retrieve results."}):Object(v.jsx)(N,{results:n,loading:f})})})]})};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root"))},46:function(t,e,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.e2e33ae9.chunk.js.map