/*! For license information please see component---src-templates-article-page-template-js-0b5db7cfda3f1e4c832f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"30+C":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),i=a("iuhU"),l=a("kKAo"),c=a("H2TA"),s=o.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.raised,d=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return o.createElement(l.a,Object(n.a)({className:Object(i.default)(a.root,c),elevation:d?8:1,ref:t},u))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},CN8t:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("hlFM"),i=a("ofer"),l=a("H2TA");a("X4R9");var c=function(e){var t=e.company;return r.a.createElement(r.a.Fragment,null,"Copyright © ",(new Date).getFullYear()," ",t)},s=a("PsDL"),d=a("hlie"),u=a("RwSH"),m=a.n(u);var p=function(e){var t=e.url;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{"aria-label":"github",size:"small",component:d.a,href:t,target:"_blank",rel:"noopener noreferrer",disableTouchRipple:!0},r.a.createElement(m.a,{fontSize:"inherit"})))},b=a("y9eO"),f=a.n(b);var h=function(e){var t="mailto:"+e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{"aria-label":"email",size:"small",component:d.a,href:t,target:"_blank",rel:"noopener noreferrer",disableTouchRipple:!0},r.a.createElement(f.a,{fontSize:"inherit"})))},v=a("IAH9");t.a=Object(l.a)((function(e){return{root:{color:e.palette.common.white,backgroundColor:e.palette.primary.main,marginTop:e.spacing(8),padding:e.spacing(6,2)}}}))((function(e){var t=e.classes,a=Object(v.a)(),n=a.siteUrl,l=a.company,s=a.gitHubUrl,d=a.contact,u=d.name,m=d.email;return r.a.createElement(o.a,{className:t.root},r.a.createElement(i.a,{variant:"subtitle2",gutterBottom:!0},u),r.a.createElement(o.a,null,"test",r.a.createElement(p,{url:s}),r.a.createElement(h,{email:m})),r.a.createElement(i.a,{variant:"subtitle2",align:"right"},r.a.createElement(c,{company:l,siteUrl:n,email:m})))}))},Ie8z:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),i=a("iuhU"),l=a("H2TA"),c=["video","audio","picture","iframe","img"],s=o.forwardRef((function(e,t){var a=e.children,l=e.classes,s=e.className,d=e.component,u=void 0===d?"div":d,m=e.image,p=e.src,b=e.style,f=Object(r.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==c.indexOf(u),v=!h&&m?Object(n.a)({backgroundImage:'url("'.concat(m,'")')},b):b;return o.createElement(u,Object(n.a)({className:Object(i.default)(l.root,s,h&&l.media,-1!=="picture img".indexOf(u)&&l.img),ref:t,style:v,src:h?m||p:void 0},f),a)}));t.a=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},RwSH:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),i=(0,n(a("8/g6")).default)(o.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=i},SBC1:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=(a("VxdY"),a("lO0E")),i=a("hlFM"),l=a("ofer"),c=a("30+C"),s=a("Ji2X"),d=a("Ie8z"),u=a("wb2y"),m=a("XX3T"),p=a("Cekx"),b=a.n(p),f=a("H2TA"),h=a("b0HY"),v=a("FCJB"),g=a("CN8t");t.default=Object(f.a)((function(e){return{cardMedia:{height:"210px"},date:{paddingTop:e.spacing(2),fontSize:14},author:{fontSize:14}}}))((function(e){var t=e.classes,a=e.data,n=e.location,p=e.navigate,f=a.markdownRemark,E=f.html,x=f.excerpt,y=f.timeToRead,O=f.frontmatter,j=O.title,w=O.subtitle,k=O.date,C=O.publishedBy;return r.a.createElement(h.a,{title:j,subtitle:w,date:k,PublishedBy:C,timeToRead:y,description:x,location:n,navigate:p},r.a.createElement(o.a,{id:"back-to-top-anchor"}),r.a.createElement(i.a,{clone:!0,pt:2,pb:2},r.a.createElement(s.a,{maxWidth:"md"},r.a.createElement(c.a,{elevation:1},r.a.createElement(d.a,{className:t.cardMedia,image:"https://source.unsplash.com/random?summer"}),r.a.createElement(i.a,{pt:2,pr:2,pb:2,pl:2},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:E}}),r.a.createElement(i.a,{pt:1,pb:1},r.a.createElement(u.a,{variant:"fullWidth"})),r.a.createElement(l.a,{variant:"subtitle2",color:"textSecondary"},"Published: ",k),r.a.createElement(l.a,{variant:"subtitle2",color:"textSecondary"},"PublishedBy: ",C))))),r.a.createElement(v.a,null,r.a.createElement(m.a,{color:"secondary","aria-label":"scroll back to top"},r.a.createElement(b.a,null))),r.a.createElement(g.a,null))}))},VxdY:function(e,t,a){},X4R9:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("hlie"),l=a("Ff2n"),c=a("rePB"),s=a("wx14"),d=a("iuhU"),u=a("H2TA"),m=a("VD++"),p=a("NqtD"),b=n.forwardRef((function(e,t){var a=e.classes,r=e.className,o=e.disabled,i=void 0!==o&&o,c=e.disableFocusRipple,u=void 0!==c&&c,b=e.fullWidth,f=e.icon,h=e.indicator,v=e.label,g=e.onChange,E=e.onClick,x=e.onFocus,y=e.selected,O=e.selectionFollowsFocus,j=e.textColor,w=void 0===j?"inherit":j,k=e.value,C=e.wrapped,F=void 0!==C&&C,I=Object(l.a)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return n.createElement(m.a,Object(s.a)({focusRipple:!u,className:Object(d.default)(a.root,a["textColor".concat(Object(p.a)(w))],r,i&&a.disabled,y&&a.selected,v&&f&&a.labelIcon,b&&a.fullWidth,F&&a.wrapped),ref:t,role:"tab","aria-selected":y,disabled:i,onClick:function(e){g&&g(e,k),E&&E(e)},onFocus:function(e){O&&!y&&g&&g(e,k),x&&x(e)},tabIndex:y?0:-1},I),n.createElement("span",{className:a.wrapper},f,v),h)})),f=Object(u.a)((function(e){var t;return{root:Object(s.a)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},Object(c.a)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),Object(c.a)(t,"overflow","hidden"),Object(c.a)(t,"whiteSpace","normal"),Object(c.a)(t,"textAlign","center"),Object(c.a)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(b),h=r.a.forwardRef((function(e,t){return r.a.createElement(i.a,Object.assign({component:o.a,ref:t,underline:"none"},e))})),v=r.a.forwardRef((function(e,t){return r.a.createElement(f,Object.assign({component:o.a,ref:t},e))}));t.b=h},b0HY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("ivWS"),l=a.n(i),c=a("lO0E"),s=a("PsDL"),d=a("ytJY"),u=a.n(d),m=a("ofer"),p=a("/4kY"),b=a("9NZZ");var f=function(e){var t=e.children,a=Object(b.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(t,{elevation:a?4:0})},h=a("IAH9");t.a=function(e){var t=e.title,a=e.description,n=e.location,i=e.navigate,d=e.children,b=Object(h.a)(),v=n.state,g=void 0===v?{}:v,E=g&&g.referrer?g.referrer:Object(o.d)("/");return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{title:t,description:a,siteMeta:b}),r.a.createElement(f,null,r.a.createElement(l.a,{color:"primary",position:"fixed"},r.a.createElement(c.a,null,r.a.createElement(s.a,{onClick:function(){return i(E)},edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(u.a,null)),r.a.createElement(m.a,{variant:"subtitle1",color:"inherit"},t)))),d)}},hlie:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),i=a("iuhU"),l=a("NqtD"),c=a("H2TA"),s=a("G7As"),d=a("bfFb"),u=a("ofer"),m=o.forwardRef((function(e,t){var a=e.classes,c=e.className,m=e.color,p=void 0===m?"primary":m,b=e.component,f=void 0===b?"a":b,h=e.onBlur,v=e.onFocus,g=e.TypographyClasses,E=e.underline,x=void 0===E?"hover":E,y=e.variant,O=void 0===y?"inherit":y,j=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=Object(s.a)(),k=w.isFocusVisible,C=w.onBlurVisible,F=w.ref,I=o.useState(!1),R=I[0],N=I[1],S=Object(d.a)(t,F);return o.createElement(u.a,Object(n.a)({className:Object(i.default)(a.root,a["underline".concat(Object(l.a)(x))],c,R&&a.focusVisible,"button"===f&&a.button),classes:g,color:p,component:f,onBlur:function(e){R&&(C(),N(!1)),h&&h(e)},onFocus:function(e){k(e)&&N(!0),v&&v(e)},ref:S,variant:O},j))}));t.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},wb2y:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),i=a("iuhU"),l=a("H2TA"),c=a("ye/S"),s=o.forwardRef((function(e,t){var a=e.absolute,l=void 0!==a&&a,c=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,b=e.light,f=void 0!==b&&b,h=e.orientation,v=void 0===h?"horizontal":h,g=e.role,E=void 0===g?"hr"!==u?"separator":void 0:g,x=e.variant,y=void 0===x?"fullWidth":x,O=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(u,Object(n.a)({className:Object(i.default)(c.root,s,"fullWidth"!==y&&c[y],l&&c.absolute,p&&c.flexItem,f&&c.light,"vertical"===v&&c.vertical),role:E,ref:t},O))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},y9eO:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),i=(0,n(a("8/g6")).default)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.default=i},ytJY:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),i=(0,n(a("8/g6")).default)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.default=i}}]);
//# sourceMappingURL=component---src-templates-article-page-template-js-0b5db7cfda3f1e4c832f.js.map