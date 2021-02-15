/*! For license information please see component---src-templates-project-page-template-js-5f0c1e34937f66560870.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"30+C":function(e,t,a){"use strict";var r=a("wx14"),i=a("Ff2n"),n=a("q1tI"),l=a("iuhU"),o=a("kKAo"),c=a("H2TA"),s=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.raised,d=void 0!==s&&s,u=Object(i.a)(e,["classes","className","raised"]);return n.createElement(o.a,Object(r.a)({className:Object(l.default)(a.root,c),elevation:d?8:1,ref:t},u))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},"7DE8":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=(a("VxdY"),a("lO0E")),l=a("hlFM"),o=a("ofer"),c=a("30+C"),s=a("Ji2X"),d=a("Ie8z"),u=a("wb2y"),m=a("XX3T"),f=a("Cekx"),b=a.n(f),v=a("H2TA"),h=a("b0HY"),p=a("FCJB"),g=a("CN8t"),E=a("IAH9");t.default=Object(v.a)((function(e){return{cardMedia:{height:"210px"},date:{paddingTop:e.spacing(2),fontSize:14},author:{fontSize:14}}}))((function(e){var t=e.classes,a=e.data,r=e.location,f=e.navigate,v=Object(E.a)(),O=a.markdownRemark,j=O.html,w=O.excerpt,y=O.frontmatter,k=y.title,x=y.date,I=y.publishedBy;return i.a.createElement(h.a,{title:k,description:w,location:r,navigate:f,siteMeta:v},i.a.createElement(n.a,{id:"back-to-top-anchor"}),i.a.createElement(l.a,{clone:!0,pt:2,pb:2},i.a.createElement(s.a,{maxWidth:"md"},i.a.createElement(c.a,{elevation:1},i.a.createElement(d.a,{className:t.cardMedia,image:"https://source.unsplash.com/weekly?holiday"}),i.a.createElement(l.a,{pt:2,pr:2,pb:2,pl:2},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:j}}),i.a.createElement(l.a,{pt:1,pb:1},i.a.createElement(u.a,{variant:"fullWidth"})),i.a.createElement(o.a,{variant:"subtitle2",color:"textSecondary"},"Published: ",x),i.a.createElement(o.a,{variant:"subtitle2",color:"textSecondary"},"PublishedBy: ",I))))),i.a.createElement(g.a,{siteMeta:v}),i.a.createElement(p.a,null,i.a.createElement(m.a,{color:"secondary","aria-label":"scroll back to top"},i.a.createElement(b.a,null))))}))},Ie8z:function(e,t,a){"use strict";var r=a("wx14"),i=a("Ff2n"),n=a("q1tI"),l=a("iuhU"),o=a("H2TA"),c=["video","audio","picture","iframe","img"],s=n.forwardRef((function(e,t){var a=e.children,o=e.classes,s=e.className,d=e.component,u=void 0===d?"div":d,m=e.image,f=e.src,b=e.style,v=Object(i.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==c.indexOf(u),p=!h&&m?Object(r.a)({backgroundImage:'url("'.concat(m,'")')},b):b;return n.createElement(u,Object(r.a)({className:Object(l.default)(o.root,s,h&&o.media,-1!=="picture img".indexOf(u)&&o.img),ref:t,style:p,src:h?m||f:void 0},v),a)}));t.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},VxdY:function(e,t,a){},b0HY:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("ivWS"),o=a.n(l),c=a("lO0E"),s=a("PsDL"),d=a("ytJY"),u=a.n(d),m=a("ofer"),f=a("/4kY"),b=a("9NZZ");var v=function(e){var t=e.children,a=Object(b.a)({disableHysteresis:!0,threshold:0});return i.a.cloneElement(t,{elevation:a?4:0})};t.a=function(e){var t=e.title,a=e.description,r=e.location,l=e.navigate,d=e.siteMeta,b=e.children,h=r.state,p=void 0===h?{}:h,g=p&&p.referrer?p.referrer:Object(n.d)("/");return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{title:t,description:a,siteMeta:d}),i.a.createElement(v,null,i.a.createElement(o.a,{color:"primary",position:"fixed"},i.a.createElement(c.a,null,i.a.createElement(s.a,{onClick:function(){return l(g)},edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(u.a,null)),i.a.createElement(m.a,{variant:"subtitle1",color:"inherit"},t)))),b)}},wb2y:function(e,t,a){"use strict";var r=a("wx14"),i=a("Ff2n"),n=a("q1tI"),l=a("iuhU"),o=a("H2TA"),c=a("ye/S"),s=n.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,c=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,f=void 0!==m&&m,b=e.light,v=void 0!==b&&b,h=e.orientation,p=void 0===h?"horizontal":h,g=e.role,E=void 0===g?"hr"!==u?"separator":void 0:g,O=e.variant,j=void 0===O?"fullWidth":O,w=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(r.a)({className:Object(l.default)(c.root,s,"fullWidth"!==j&&c[j],o&&c.absolute,f&&c.flexItem,v&&c.light,"vertical"===p&&c.vertical),role:E,ref:t},w))}));t.a=Object(o.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},ytJY:function(e,t,a){"use strict";var r=a("TqRt"),i=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("q1tI")),l=(0,r(a("8/g6")).default)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=l}}]);
//# sourceMappingURL=component---src-templates-project-page-template-js-5f0c1e34937f66560870.js.map