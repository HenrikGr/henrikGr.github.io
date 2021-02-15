/*! For license information please see component---src-pages-articles-js-7d8e281c37239da99a97.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"50B7":function(e,a,t){"use strict";var r=t("wx14"),n=t("Ff2n"),c=t("q1tI"),l=t("iuhU"),o=t("H2TA"),i=t("ofer"),s=c.forwardRef((function(e,a){var t=e.action,o=e.avatar,s=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,u=e.disableTypography,b=void 0!==u&&u,f=e.subheader,v=e.subheaderTypographyProps,h=e.title,y=e.titleTypographyProps,E=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),g=h;null==g||g.type===i.a||b||(g=c.createElement(i.a,Object(r.a)({variant:o?"body2":"h5",className:s.title,component:"span",display:"block"},y),g));var x=f;return null==x||x.type===i.a||b||(x=c.createElement(i.a,Object(r.a)({variant:o?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},v),x)),c.createElement(p,Object(r.a)({className:Object(l.default)(s.root,d),ref:a},E),o&&c.createElement("div",{className:s.avatar},o),c.createElement("div",{className:s.content},g,x),t&&c.createElement("div",{className:s.action},t))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},hk7L:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=t("hlFM"),l=t("lO0E"),o=t("XX3T"),i=t("Cekx"),s=t.n(i),d=t("aDnJ"),m=t("rP3T"),p=t("FCJB"),u=t("CN8t"),b=t("Wbzz");var f=t("OMrn"),v=t("wb2y"),h=t("IAH9");a.default=function(e){var a=e.location,t=e.navigate,r=Object(h.a)(),i=Object(b.c)("1051713958").allMarkdownRemark.edges;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{title:"Articles",siteMeta:r,location:a,navigate:t}),n.a.createElement(l.a,{id:"back-to-top-anchor"}),n.a.createElement(c.a,{pt:8,pr:1,pb:2,pl:1},n.a.createElement(f.a,null),n.a.createElement(c.a,{pt:1,pb:1},n.a.createElement(v.a,{variant:"fullWidth"})),n.a.createElement(m.a,{edges:i,location:a})),n.a.createElement(u.a,{siteMeta:r}),n.a.createElement(p.a,null,n.a.createElement(o.a,{color:"secondary","aria-label":"scroll back to top"},n.a.createElement(s.a,null))))}},o4QW:function(e,a,t){"use strict";var r=t("wx14"),n=t("Ff2n"),c=t("q1tI"),l=t("iuhU"),o=t("H2TA"),i=c.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,d=Object(n.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(r.a)({className:Object(l.default)(i.root,s,!o&&i.spacing),ref:a},d))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(i)},rP3T:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));var r=t("q1tI"),n=t.n(r),c=t("Ji2X"),l=t("hlFM"),o=t("Z3vd"),i=t("30+C"),s=t("50B7"),d=t("o4QW"),m=t("oa/T"),p=t("ofer"),u=t("H2TA"),b=t("lFIR"),f=t("X4R9");function v(e){void 0===e&&(e=10);for(var a=[],t=1;t<=e;t++){var r=t/e;a.push(r)}return a.push(0),a}var h=Object(u.a)({card:{height:"100%"},actions:{justifyContent:"space-between"},cardMedia:{height:"150px"},titleText:{textAlign:"center"}})((function(e){var a=e.classes,t=e.title,c=e.subtitle,u=e.excerpt,h=e.publishedDate,y=e.timeToRead,E=e.path,g=e.referrer,x=Object(r.useRef)(null),T=Object(r.useState)({}),O=T[0],j=T[1];function w(e){e.forEach((function(e){e.isIntersecting&&j(e)}))}return Object(r.useEffect)((function(){var e=new IntersectionObserver(w,{root:null,rootMargin:"0px",threshold:v()});return x.current&&e.observe(x.current),function(){return e.disconnect()}}),[x]),n.a.createElement(b.a,{ref:x,component:f.b,state:{referrer:g},to:E,style:{opacity:O&&O.intersectionRatio,marginBottom:"8px"}},n.a.createElement(i.a,{raised:O&&1===O.intersectionRatio,className:a.card},n.a.createElement(s.a,{disableTypography:!0,title:n.a.createElement(p.a,{variant:"h6",color:"textPrimary"},t),subheader:n.a.createElement(p.a,{variant:"body2",color:"textSecondary"},c)}),n.a.createElement(m.a,null,n.a.createElement(p.a,{variant:"body2"},u)),n.a.createElement(d.a,{disableSpacing:!0,className:a.actions},n.a.createElement(l.a,{component:"div"},n.a.createElement(p.a,{component:"div",variant:"caption"},"Date: "+h),n.a.createElement(p.a,{component:"div",variant:"caption"},"Time to read: "+y+" min")),n.a.createElement(l.a,{component:"div"},n.a.createElement(o.a,{size:"small",color:"secondary"},"Read more ...")))))}));function y(e){var a=e.edges,t=e.location;return n.a.createElement(c.a,{maxWidth:"md",disableGutters:!1},a.map((function(e){var a=e.node,r=a.excerpt,c=a.timeToRead,l=a.fields.slug,o=a.frontmatter,i=o.title,s=o.subtitle,d=o.date,m=o.publishedBy;return n.a.createElement(h,{key:l,title:i,subtitle:s,excerpt:r,publishedDate:d,publishedBy:m,timeToRead:c,path:l,referrer:t.pathname})})))}}}]);
//# sourceMappingURL=component---src-pages-articles-js-7d8e281c37239da99a97.js.map