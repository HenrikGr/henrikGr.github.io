/*! For license information please see component---src-templates-article-page-template-js-294b453dd171938e00b3.js.LICENSE.txt */
(self.webpackChunkhgc_ab=self.webpackChunkhgc_ab||[]).push([[996],{5148:function(e,t,a){"use strict";var r=a(2122),i=a(1253),n=a(7294),l=a(5505),o=a(4621),c=["video","audio","picture","iframe","img"],s=n.forwardRef((function(e,t){var a=e.children,o=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,u=e.image,v=e.src,f=e.style,h=(0,i.Z)(e,["children","classes","className","component","image","src","style"]),Z=-1!==c.indexOf(m),p=!Z&&u?(0,r.Z)({backgroundImage:'url("'.concat(u,'")')},f):f;return n.createElement(m,(0,r.Z)({className:(0,l.Z)(o.root,s,Z&&o.media,-1!=="picture img".indexOf(m)&&o.img),ref:t,style:p,src:Z?u||v:void 0},h),a)}));t.Z=(0,o.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},5420:function(e,t,a){"use strict";var r=a(2122),i=a(1253),n=a(7294),l=a(5505),o=a(8063),c=a(4621),s=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.raised,d=void 0!==s&&s,m=(0,i.Z)(e,["classes","className","raised"]);return n.createElement(o.Z,(0,r.Z)({className:(0,l.Z)(a.root,c),elevation:d?8:1,ref:t},m))}));t.Z=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},2846:function(e,t,a){"use strict";var r=a(2122),i=a(1253),n=a(7294),l=a(5505),o=a(4621),c=a(7595),s=n.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,c=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,v=void 0!==u&&u,f=e.light,h=void 0!==f&&f,Z=e.orientation,p=void 0===Z?"horizontal":Z,g=e.role,b=void 0===g?"hr"!==m?"separator":void 0:g,E=e.variant,k=void 0===E?"fullWidth":E,x=(0,i.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(m,(0,r.Z)({className:(0,l.Z)(c.root,s,"fullWidth"!==k&&c[k],o&&c.absolute,v&&c.flexItem,h&&c.light,"vertical"===p&&c.vertical),role:b,ref:t},x))}));t.Z=(0,o.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,c.U1)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},8590:function(e,t,a){"use strict";var r=a(5318),i=a(862);t.Z=void 0;var n=i(a(7294)),l=(0,r(a(8786)).default)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=l},9745:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var r=a(7294),i=a(5444),n=a(9255),l=a(4129),o=a(3729),c=a(453),s=a(8590),d=a(4910),m=a(9859);var u=function(e){var t=e.children,a=(0,m.Z)({disableHysteresis:!0,threshold:0});return r.cloneElement(t,{elevation:a?4:0})};var v=function(e){var t=e.title,a=e.description,m=e.location,v=e.navigate,f=e.siteMeta,h=e.children,Z=m.state,p=void 0===Z?{}:Z,g=p&&p.referrer?p.referrer:(0,i.dq)("/");return r.createElement(r.Fragment,null,r.createElement(d.Z,{title:t,description:a,siteMeta:f}),r.createElement(u,null,r.createElement(n.Z,{color:"primary",position:"fixed"},r.createElement(l.Z,null,r.createElement(o.Z,{onClick:function(){return v(g)},edge:"start",color:"inherit","aria-label":"menu"},r.createElement(s.Z,null)),r.createElement(c.Z,{variant:"subtitle1",color:"inherit"},t)))),h)}},5626:function(e,t,a){"use strict";a.r(t);var r=a(7294),i=a(4129),n=a(8266),l=a(1293),o=a(5420),c=a(5148),s=a(2846),d=a(453),m=a(9995),u=a(4621),v=a(6725),f=a(9745),h=a(6395),Z=a(362),p=a(125);t.default=(0,u.Z)((function(e){return{cardMedia:{height:"210px"},date:{paddingTop:e.spacing(2),fontSize:14},author:{fontSize:14}}}))((function(e){var t=e.classes,a=e.data,u=e.location,g=e.navigate,b=(0,p.Z)(),E=a.markdownRemark,k=E.html,x=E.excerpt,y=E.frontmatter,M=y.title,w=y.date,N=y.publishedBy;return r.createElement(f.Z,{title:M,description:x,location:u,navigate:g,siteMeta:b},r.createElement(i.Z,{id:"back-to-top-anchor"}),r.createElement(n.Z,{clone:!0,pt:2,pb:2},r.createElement(l.Z,{maxWidth:"md"},r.createElement(o.Z,{elevation:1},r.createElement(c.Z,{className:t.cardMedia,image:"https://source.unsplash.com/random?spring"}),r.createElement(n.Z,{pt:2,pr:2,pb:2,pl:2},r.createElement("div",{dangerouslySetInnerHTML:{__html:k}}),r.createElement(n.Z,{pt:1,pb:1},r.createElement(s.Z,{variant:"fullWidth"})),r.createElement(d.Z,{variant:"subtitle2",color:"textSecondary"},"Published: ",w),r.createElement(d.Z,{variant:"subtitle2",color:"textSecondary"},"PublishedBy: ",N))))),r.createElement(Z.Z,{siteMeta:b}),r.createElement(h.Z,null,r.createElement(m.Z,{color:"secondary","aria-label":"scroll back to top"},r.createElement(v.Z,null))))}))}}]);
//# sourceMappingURL=component---src-templates-article-page-template-js-294b453dd171938e00b3.js.map