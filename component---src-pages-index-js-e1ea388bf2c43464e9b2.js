/*! For license information please see component---src-pages-index-js-e1ea388bf2c43464e9b2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1iKp":function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),c=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=c},E2gh:function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),c=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=c},Ie8z:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),c=n("iuhU"),i=n("H2TA"),l=["video","audio","picture","iframe","img"],s=o.forwardRef((function(e,t){var n=e.children,i=e.classes,s=e.className,u=e.component,d=void 0===u?"div":u,f=e.image,m=e.src,p=e.style,v=Object(r.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==l.indexOf(d),h=!g&&f?Object(a.a)({backgroundImage:'url("'.concat(f,'")')},p):p;return o.createElement(d,Object(a.a)({className:Object(c.default)(i.root,s,g&&i.media,-1!=="picture img".indexOf(d)&&i.img),ref:t,style:h,src:g?f||m:void 0},v),n)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("hlFM"),c=n("lO0E"),i=n("XX3T"),l=n("Cekx"),s=n.n(l),u=n("aDnJ"),d=n("Ji2X"),f=n("tRbT"),m=n("wb2y"),p=n("OMrn"),v=n("kKAo"),g=n("ofer"),h=n("H2TA"),b=n("X4R9"),x=n("Wbzz");var E=Object(h.a)((function(e){var t;return{root:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginTop:e.spacing(1),marginBottom:e.spacing(1),backgroundImage:"url(https://source.unsplash.com/daily?spring)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},headline:{paddingLeft:e.spacing(2)},content:(t={position:"relative",padding:e.spacing(3)},t[e.breakpoints.up("md")]={padding:e.spacing(6),paddingRight:0},t)}}))((function(e){var t=e.classes,n=Object(x.c)("2129964892").allMarkdownRemark.edges[0].node,a=n.excerpt,o=n.timeToRead,c=n.fields.slug,i=n.frontmatter,l=i.title,s=i.date;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:t.headline,variant:"caption"},"Latest article"),r.a.createElement(b.b,{variant:"subtitle1",color:"inherit",to:c},r.a.createElement(v.a,{className:t.root},r.a.createElement("div",{className:t.overlay}),r.a.createElement(f.a,{container:!0},r.a.createElement(f.a,{item:!0,md:6},r.a.createElement("div",{className:t.content},r.a.createElement(g.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},l),r.a.createElement(g.a,{component:"div",variant:"caption",color:"inherit"},s),r.a.createElement(g.a,{component:"div",variant:"caption",color:"inherit",gutterBottom:!0},o+" minutes"),r.a.createElement(g.a,{variant:"h5",color:"inherit",paragraph:!0},a)))))))})),y=n("lFIR"),w=n("30+C"),O=n("oa/T"),j=n("wx14"),k=n("Ff2n"),C=n("17x9"),N=n.n(C),I=(n("E9XD"),n("A+CX")),D=n("2mql"),S=n.n(D),M=n("tr08"),R=n("LEIi"),T=n("aXM8");function U(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(T.a)(),r=Object(I.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var o="function"==typeof e?e(n):e;o=o.replace(/^@media( ?)/m,"");var c="undefined"!=typeof window&&void 0!==window.matchMedia,i=Object(j.a)({},r,t),l=i.defaultMatches,s=void 0!==l&&l,u=i.matchMedia,d=void 0===u?c?window.matchMedia:null:u,f=i.noSsr,m=void 0!==f&&f,p=i.ssrMatchMedia,v=void 0===p?null:p,g=a.useState((function(){return m&&c?d(o).matches:v?v(o).matches:s})),h=g[0],b=g[1];return a.useEffect((function(){var e=!0;if(c){var t=d(o),n=function(){e&&b(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[o,d,c]),h}var A=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?R.b.indexOf(e)<=R.b.indexOf(t):R.b.indexOf(e)<R.b.indexOf(t)},F=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?R.b.indexOf(t)<=R.b.indexOf(e):R.b.indexOf(t)<R.b.indexOf(e)},W="undefined"==typeof window?a.useEffect:a.useLayoutEffect,L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,r=void 0!==n&&n,o=e.noSSR,c=void 0!==o&&o,i=e.initialWidth;function l(e){var n=Object(M.a)(),o=e.theme||n,l=Object(I.a)({theme:o,name:"MuiWithWidth",props:Object(j.a)({},e)}),s=l.initialWidth,u=l.width,d=Object(k.a)(l,["initialWidth","width"]),f=a.useState(!1),m=f[0],p=f[1];W((function(){p(!0)}),[]);var v=o.breakpoints.keys.slice().reverse().reduce((function(e,t){var n=U(o.breakpoints.up(t));return!e&&n?t:e}),null),g=Object(j.a)({width:u||(m||c?v:void 0)||s||i},r?{theme:o}:{},d);return void 0===g.width?null:a.createElement(t,g)}return S()(l,t),l}};function P(e){var t=e.children,n=e.only,a=e.width,r=Object(M.a)(),o=!0;if(n)if(Array.isArray(n))for(var c=0;c<n.length;c+=1){if(a===n[c]){o=!1;break}}else n&&a===n&&(o=!1);if(o)for(var i=0;i<r.breakpoints.keys.length;i+=1){var l=r.breakpoints.keys[i],s=e["".concat(l,"Up")],u=e["".concat(l,"Down")];if(s&&A(l,a)||u&&F(l,a)){o=!1;break}}return o?t:null}P.propTypes={children:N.a.node,className:N.a.string,implementation:N.a.oneOf(["js","css"]),initialWidth:N.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:N.a.bool,lgUp:N.a.bool,mdDown:N.a.bool,mdUp:N.a.bool,only:N.a.oneOfType([N.a.oneOf(["xs","sm","md","lg","xl"]),N.a.arrayOf(N.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:N.a.bool,smUp:N.a.bool,width:N.a.string.isRequired,xlDown:N.a.bool,xlUp:N.a.bool,xsDown:N.a.bool,xsUp:N.a.bool};var K=L()(P),H=n("rePB"),z=n("NqtD");var B=Object(h.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(n,a){return n["only".concat(Object(z.a)(a))]=Object(H.a)({},e.breakpoints.only(a),t),n["".concat(a,"Up")]=Object(H.a)({},e.breakpoints.up(a),t),n["".concat(a,"Down")]=Object(H.a)({},e.breakpoints.down(a),t),n}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,n=e.classes,r=e.className,o=e.only,c=(Object(k.a)(e,["children","classes","className","only"]),Object(M.a)()),i=[];r&&i.push(r);for(var l=0;l<c.breakpoints.keys.length;l+=1){var s=c.breakpoints.keys[l],u=e["".concat(s,"Up")],d=e["".concat(s,"Down")];u&&i.push(n["".concat(s,"Up")]),d&&i.push(n["".concat(s,"Down")])}return o&&(Array.isArray(o)?o:[o]).forEach((function(e){i.push(n["only".concat(Object(z.a)(e))])})),a.createElement("div",{className:i.join(" ")},t)}));var $=function(e){var t=e.implementation,n=void 0===t?"js":t,r=e.lgDown,o=void 0!==r&&r,c=e.lgUp,i=void 0!==c&&c,l=e.mdDown,s=void 0!==l&&l,u=e.mdUp,d=void 0!==u&&u,f=e.smDown,m=void 0!==f&&f,p=e.smUp,v=void 0!==p&&p,g=e.xlDown,h=void 0!==g&&g,b=e.xlUp,x=void 0!==b&&b,E=e.xsDown,y=void 0!==E&&E,w=e.xsUp,O=void 0!==w&&w,C=Object(k.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===n?a.createElement(K,Object(j.a)({lgDown:o,lgUp:i,mdDown:s,mdUp:d,smDown:m,smUp:v,xlDown:h,xlUp:x,xsDown:y,xsUp:O},C)):a.createElement(B,Object(j.a)({lgDown:o,lgUp:i,mdDown:s,mdUp:d,smDown:m,smUp:v,xlDown:h,xlUp:x,xsDown:y,xsUp:O},C))},q=n("Ie8z");var X=Object(h.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}})((function(e){var t=e.classes,n=Object(x.c)("325919885").allMarkdownRemark.edges[0].node,a=n.excerpt,o=n.timeToRead,c=n.fields.slug,i=n.frontmatter,l=i.title,s=i.date;return r.a.createElement(y.a,{component:b.b,to:c},r.a.createElement(w.a,{className:t.card},r.a.createElement("div",{className:t.cardDetails},r.a.createElement(O.a,null,r.a.createElement(g.a,{variant:"caption"},"Latest project"),r.a.createElement(g.a,{component:"h2",variant:"h5",color:"inherit"},l),r.a.createElement(g.a,{component:"div",variant:"caption",color:"textSecondary"},s),r.a.createElement(g.a,{component:"div",variant:"caption",color:"textSecondary",gutterBottom:!0},o+" minutes"),r.a.createElement(g.a,{variant:"subtitle2",paragraph:!0},a),r.a.createElement(g.a,{variant:"subtitle2",color:"secondary"},"Continue reading..."))),r.a.createElement($,{xsDown:!0},r.a.createElement(q.a,{className:t.cardMedia,image:"https://source.unsplash.com/weekly?spring",title:"Image title"}))))})),G=n("ODXe"),J=n("iuhU"),V=n("yCxk");var _=a.createContext({});var Q=function(e,t,n){for(var a=t;a<e.length;a+=1)if(n===e[a])return a;return-1},Y=[],Z=[],ee=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,c=e.defaultCollapseIcon,i=e.defaultEndIcon,l=e.defaultExpanded,s=void 0===l?Y:l,u=e.defaultExpandIcon,d=e.defaultParentIcon,f=e.defaultSelected,m=void 0===f?Z:f,p=e.disableSelection,v=void 0!==p&&p,g=e.multiSelect,h=void 0!==g&&g,b=e.expanded,x=e.onNodeSelect,E=e.onNodeToggle,y=e.selected,w=Object(k.a)(e,["children","classes","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disableSelection","multiSelect","expanded","onNodeSelect","onNodeToggle","selected"]),O=a.useState(null),C=O[0],N=O[1],I=a.useState(null),D=I[0],S=I[1],M=a.useRef({}),R=a.useRef({}),T=a.useRef([]),U=Object(V.a)({controlled:b,default:s,name:"TreeView",state:"expanded"}),A=Object(G.a)(U,2),F=A[0],W=A[1],L=Object(V.a)({controlled:y,default:m,name:"TreeView",state:"selected"}),P=Object(G.a)(L,2),K=P[0],H=P[1],z=a.useCallback((function(e){return!!Array.isArray(F)&&-1!==F.indexOf(e)}),[F]),B=a.useCallback((function(e){return Array.isArray(K)?-1!==K.indexOf(e):K===e}),[K]),$=function(e){var t=T.current.indexOf(e);return-1!==t&&t+1<T.current.length?T.current[t+1]:null},q=function(e){var t=T.current.indexOf(e);return-1!==t&&t-1>=0?T.current[t-1]:null},X=function(){return T.current[T.current.length-1]},ee=function(){return T.current[0]},te=function(e){e&&(N(e),S(e))},ne=a.useRef(null),ae=a.useRef(!1),re=a.useRef([]),oe=function(e,t){var n=K,a=t.start,r=t.next,o=t.current;r&&o&&(-1===re.current.indexOf(o)&&(re.current=[]),ae.current?-1!==re.current.indexOf(r)?(n=n.filter((function(e){return e===a||e!==o})),re.current=re.current.filter((function(e){return e===a||e!==o}))):(n.push(r),re.current.push(r)):(n.push(r),re.current.push(o,r)),x&&x(e,n),H(n))},ce=function(e,t){var n=K,a=t.start,r=t.end;ae.current&&(n=K.filter((function(e){return-1===re.current.indexOf(e)})));var o=function(e,t){var n=T.current.indexOf(e),a=T.current.indexOf(t),r=Math.min(n,a),o=Math.max(n,a);return T.current.slice(r,o+1)}(a,r);re.current=o;var c=n.concat(o);c=c.filter((function(e,t){return c.indexOf(e)===t})),x&&x(e,c),H(c)},ie=function(e,t){var n=[];n=-1!==K.indexOf(t)?K.filter((function(e){return e!==t})):[t].concat(K),x&&x(e,n),H(n)},le=function(e,t){var n=h?[t]:t;x&&x(e,n),H(n)},se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=t.start,r=void 0===a?ne.current:a,o=t.end,c=t.current;return n?oe(e,{start:r,next:o,current:c}):ce(e,{start:r,end:o}),ae.current=!0,!0},ue=a.useCallback((function(e){var t=M.current[e],n=[];return t&&(n.push(e),t.children&&(n.concat(t.children),t.children.forEach((function(e){n.concat(ue(e))})))),n}),[]),de=a.useCallback((function(e){var t=Object(j.a)({},R.current);e.forEach((function(e){t[e]&&delete t[e]})),R.current=t}),[]),fe=a.useCallback((function(e){var t=ue(e);de(t);var n=Object(j.a)({},M.current);t.forEach((function(e){var t=n[e];if(t){if(t.parent){var a=n[t.parent];if(a&&a.children){var r=a.children.filter((function(t){return t!==e}));n[t.parent]=Object(j.a)({},a,{children:r})}}delete n[e]}})),M.current=n,S((function(t){return t===e?null:t}))}),[ue,de]),me=a.useRef([]),pe=a.useState(!1),ve=pe[0],ge=pe[1];a.useEffect((function(){var e=[];a.Children.forEach(n,(function(t){a.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),function(e,t){if(e.length!==t.length)return!0;for(var n=0;n<e.length;n+=1)if(e[n]!==t[n])return!0;return!1}(me.current,e)&&(M.current[-1]={parent:null,children:e},e.forEach((function(e,t){0===t&&N(e)})),T.current=M.current[-1].children,me.current=e,ge(!0))}),[n]),a.useEffect((function(){ve&&(T.current=function e(t){for(var n=[],a=0;a<t.length;a+=1){var r=t[a];n.push(r);var o=M.current[r].children;z(r)&&o&&(n=n.concat(e(o)))}return n}(M.current[-1].children))}),[F,ve,z,n]);var he=function(){return!1};return a.createElement(_.Provider,{value:{icons:{defaultCollapseIcon:c,defaultExpandIcon:u,defaultParentIcon:d,defaultEndIcon:i},focus:te,focusFirstNode:function(){return te(ee())},focusLastNode:function(){return te(X())},focusNextNode:function(e){return te($(e))},focusPreviousNode:function(e){return te(q(e))},focusByFirstCharacter:function(e,t){var n,a,r=t.toLowerCase(),o=[],c=[];Object.keys(R.current).forEach((function(e){var t=R.current[e],n=M.current[e];(!n.parent||z(n.parent))&&(o.push(e),c.push(t))})),(n=o.indexOf(e)+1)===M.current.length&&(n=0),-1===(a=Q(c,n,r))&&(a=Q(c,0,r)),a>-1&&te(o[a])},expandAllSiblings:function(e,t){var n,a=M.current[t],r=M.current[a.parent];r?n=r.children.filter((function(e){return!z(e)})):n=M.current[-1].children.filter((function(e){return!z(e)}));var o=F.concat(n);n.length>0&&(W(o),E&&E(e,o))},toggleExpansion:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;-1!==F.indexOf(n)?(t=F.filter((function(e){return e!==n})),N((function(e){var t=M.current[e];return e&&(t&&t.parent?t.parent.id:null)===n?n:e}))):t=[n].concat(F),E&&E(e,t),W(t)},isExpanded:z,isFocused:function(e){return D===e},isSelected:B,selectNode:v?he:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!!t&&(n?ie(e,t):le(e,t),ne.current=t,ae.current=!1,re.current=[],!0)},selectRange:v?he:se,selectNextNode:v?he:function(e,t){return se(e,{end:$(t),current:t},!0)},selectPreviousNode:v?he:function(e,t){return se(e,{end:q(t),current:t},!0)},rangeSelectToFirst:v?he:function(e,t){ne.current||(ne.current=t);var n=ae.current?ne.current:t;return se(e,{start:n,end:ee()})},rangeSelectToLast:v?he:function(e,t){ne.current||(ne.current=t);var n=ae.current?ne.current:t;return se(e,{start:n,end:X()})},selectAllNodes:v?he:function(e){return se(e,{start:ee(),end:X()})},isTabbable:function(e){return C===e},multiSelect:h,getParent:function(e){return M.current[e].parent},mapFirstChar:function(e,t){R.current[e]=t},addNodeToNodeMap:function(e,t){var n=M.current[e];M.current[e]=Object(j.a)({},n,{children:t,id:e}),t.forEach((function(t){var n=M.current[t];M.current[t]=Object(j.a)({},n,{parent:e,id:t})}))},removeNodeFromNodeMap:fe}},a.createElement("ul",Object(j.a)({role:"tree","aria-multiselectable":h,className:Object(J.default)(r.root,o),ref:t},w),n))})),te=Object(h.a)({root:{padding:0,margin:0,listStyle:"none"}},{name:"MuiTreeView"})(ee),ne=n("dRu9"),ae=n("wpWl"),re=n("4Hym"),oe=n("bfFb"),ce=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,c=e.collapsedHeight,i=void 0===c?"0px":c,l=e.component,s=void 0===l?"div":l,u=e.disableStrictModeCompat,d=void 0!==u&&u,f=e.in,m=e.onEnter,p=e.onEntered,v=e.onEntering,g=e.onExit,h=e.onExited,b=e.onExiting,x=e.style,E=e.timeout,y=void 0===E?ae.b.standard:E,w=e.TransitionComponent,O=void 0===w?ne.a:w,C=Object(k.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),N=Object(M.a)(),I=a.useRef(),D=a.useRef(null),S=a.useRef(),R="number"==typeof i?"".concat(i,"px"):i;a.useEffect((function(){return function(){clearTimeout(I.current)}}),[]);var T=N.unstable_strictMode&&!d,U=a.useRef(null),A=Object(oe.a)(t,T?U:void 0),F=function(e){return function(t,n){if(e){var a=T?[U.current,t]:[t,n],r=Object(G.a)(a,2),o=r[0],c=r[1];void 0===c?e(o):e(o,c)}}},W=F((function(e,t){e.style.height=R,m&&m(e,t)})),L=F((function(e,t){var n=D.current?D.current.clientHeight:0,a=Object(re.a)({style:x,timeout:y},{mode:"enter"}).duration;if("auto"===y){var r=N.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(r,"ms"),S.current=r}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),v&&v(e,t)})),P=F((function(e,t){e.style.height="auto",p&&p(e,t)})),K=F((function(e){var t=D.current?D.current.clientHeight:0;e.style.height="".concat(t,"px"),g&&g(e)})),H=F(h),z=F((function(e){var t=D.current?D.current.clientHeight:0,n=Object(re.a)({style:x,timeout:y},{mode:"exit"}).duration;if("auto"===y){var a=N.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),S.current=a}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=R,b&&b(e)}));return a.createElement(O,Object(j.a)({in:f,onEnter:W,onEntered:P,onEntering:L,onExit:K,onExited:H,onExiting:z,addEndListener:function(e,t){var n=T?e:t;"auto"===y&&(I.current=setTimeout(n,S.current||0))},nodeRef:T?U:void 0,timeout:"auto"===y?null:y},C),(function(e,t){return a.createElement(s,Object(j.a)({className:Object(J.default)(r.container,o,{entered:r.entered,exited:!f&&"0px"===R&&r.hidden}[e]),style:Object(j.a)({minHeight:R},x),ref:A},t),a.createElement("div",{className:r.wrapper,ref:D},a.createElement("div",{className:r.wrapperInner},n)))}))}));ce.muiSupportAuto=!0;var ie=Object(h.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(ce),le=n("ye/S"),se=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,c=e.collapseIcon,i=e.endIcon,l=e.expandIcon,s=e.icon,u=e.label,d=e.nodeId,f=e.onClick,m=e.onLabelClick,p=e.onIconClick,v=e.onFocus,h=e.onKeyDown,b=e.onMouseDown,x=e.TransitionComponent,E=void 0===x?ie:x,y=e.TransitionProps,w=Object(k.a)(e,["children","classes","className","collapseIcon","endIcon","expandIcon","icon","label","nodeId","onClick","onLabelClick","onIconClick","onFocus","onKeyDown","onMouseDown","TransitionComponent","TransitionProps"]),O=a.useContext(_),C=O.icons,N=O.focus,I=O.focusFirstNode,D=O.focusLastNode,S=O.focusNextNode,R=O.focusPreviousNode,T=O.focusByFirstCharacter,U=O.selectNode,A=O.selectRange,F=O.selectNextNode,W=O.selectPreviousNode,L=O.rangeSelectToFirst,P=O.rangeSelectToLast,K=O.selectAllNodes,H=O.expandAllSiblings,z=O.toggleExpansion,B=O.isExpanded,$=O.isFocused,q=O.isSelected,X=O.isTabbable,G=O.multiSelect,V=O.getParent,Q=O.mapFirstChar,Y=O.addNodeToNodeMap,Z=O.removeNodeFromNodeMap,ee=a.useRef(null),te=a.useRef(null),ne=Object(oe.a)(ee,t),ae=s,re=Boolean(Array.isArray(n)?n.length:n),ce=!!B&&B(d),le=!!$&&$(d),se=!!X&&X(d),ue=!!q&&q(d),de=C||{},fe=Object(M.a)();ae||(re?(ae=ce?c||de.defaultCollapseIcon:l||de.defaultExpandIcon)||(ae=de.defaultParentIcon):ae=i||de.defaultEndIcon);var me,pe=function(e){return re&&(ce?S(d):z(e)),!0},ve=function(e){if(ce)return z(e,d),!0;var t=V(d);return!!t&&(N(t),!0)};return a.useEffect((function(){if(Y){var e=[];a.Children.forEach(n,(function(t){a.isValidElement(t)&&t.props.nodeId&&e.push(t.props.nodeId)})),Y(d,e)}}),[n,d,Y]),a.useEffect((function(){if(Z)return function(){Z(d)}}),[d,Z]),a.useEffect((function(){Q&&u&&Q(d,te.current.textContent.substring(0,1).toLowerCase())}),[Q,d,u]),a.useEffect((function(){le&&ee.current.focus()}),[le]),G?me=ue:ue&&(me=!0),a.createElement("li",Object(j.a)({className:Object(J.default)(r.root,o,ce&&r.expanded,ue&&r.selected),role:"treeitem",onKeyDown:function(e){var t=!1,n=e.key;if(!e.altKey&&e.currentTarget===e.target){var a,r=e.ctrlKey||e.metaKey;switch(n){case" ":ee.current===e.currentTarget&&(t=G&&e.shiftKey?A(e,{end:d}):G?U(e,d,!0):U(e,d)),e.stopPropagation();break;case"Enter":ee.current===e.currentTarget&&re&&(z(e),t=!0),e.stopPropagation();break;case"ArrowDown":G&&e.shiftKey&&F(e,d),S(d),t=!0;break;case"ArrowUp":G&&e.shiftKey&&W(e,d),R(d),t=!0;break;case"ArrowRight":t="rtl"===fe.direction?ve(e):pe(e);break;case"ArrowLeft":t="rtl"===fe.direction?pe(e):ve(e);break;case"Home":G&&r&&e.shiftKey&&L(e,d),I(),t=!0;break;case"End":G&&r&&e.shiftKey&&P(e,d),D(),t=!0;break;default:"*"===n?(H(e,d),t=!0):G&&r&&"a"===n.toLowerCase()?t=K(e):!r&&!e.shiftKey&&((a=n)&&1===a.length&&a.match(/\S/))&&(T(d,n),t=!0)}t&&(e.preventDefault(),e.stopPropagation()),h&&h(e)}},onFocus:function(e){le||e.currentTarget!==e.target||N(d),v&&v(e)},"aria-expanded":re?ce:null,"aria-selected":me,ref:ne,tabIndex:se?0:-1},w),a.createElement("div",{className:r.content,onClick:function(e){le||N(d);var t=G&&(e.shiftKey||e.ctrlKey||e.metaKey);!re||e.defaultPrevented||t&&B(d)||z(e,d),t?e.shiftKey?A(e,{end:d}):U(e,d,!0):U(e,d),f&&f(e)},onMouseDown:function(e){(e.shiftKey||e.ctrlKey||e.metaKey)&&e.preventDefault(),b&&b(e)},ref:te},a.createElement("div",{onClick:p,className:r.iconContainer},ae),a.createElement(g.a,{onClick:m,component:"div",className:r.label},u)),n&&a.createElement(E,Object(j.a)({unmountOnExit:!0,className:r.group,in:ce,component:"ul",role:"group"},y),n))})),ue=Object(h.a)((function(e){return{root:{listStyle:"none",margin:0,padding:0,outline:0,WebkitTapHighlightColor:"transparent","&:focus > $content $label":{backgroundColor:e.palette.action.hover},"&$selected > $content $label":{backgroundColor:Object(le.b)(e.palette.primary.main,e.palette.action.selectedOpacity)},"&$selected > $content $label:hover, &$selected:focus > $content $label":{backgroundColor:Object(le.b)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},expanded:{},selected:{},group:{margin:0,padding:0,marginLeft:17},content:{width:"100%",display:"flex",alignItems:"center",cursor:"pointer"},iconContainer:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},label:{width:"100%",paddingLeft:4,position:"relative","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}}}),{name:"MuiTreeItem"})(se),de=n("1iKp"),fe=n.n(de),me=n("E2gh"),pe=n.n(me);function ve(){return function(e){return e.reduce((function(e,t){var n=t.node.frontmatter.date;return e[n]||(e[n]=[]),e[n].push(Object.assign({},t.node.fields,t.node.frontmatter)),e}),{})}(Object(x.c)("1764030998").allMarkdownRemark.edges)}var ge=Object(h.a)({root:{flexGrow:1,maxWidth:400}})((function(e){var t=e.classes,n=e.navigate,a=ve();return r.a.createElement(o.a,{clone:!0,p:1},r.a.createElement(v.a,{elevation:1},r.a.createElement(g.a,{component:"div",variant:"caption",gutterBottom:!0},"Articles by months"),r.a.createElement(te,{className:t.root,defaultCollapseIcon:r.a.createElement(fe.a,null),defaultExpandIcon:r.a.createElement(pe.a,null)},Object.keys(a).map((function(e,t){var o=a[e];return r.a.createElement(ue,{key:t,nodeId:e,label:e},o.map((function(e){var t=e.title,a=e.slug;return r.a.createElement(ue,{key:a,nodeId:a,label:t,onClick:function(){return n(a)}})})))})))))}));var he=function(e){var t=e.navigate;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(p.a,null),r.a.createElement(o.a,{pt:1,pb:1},r.a.createElement(m.a,{variant:"fullWidth"})),r.a.createElement(E,null),r.a.createElement(o.a,{pt:1,pb:1},r.a.createElement(m.a,{variant:"fullWidth"})),r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12,md:8},r.a.createElement(X,null)),r.a.createElement(f.a,{item:!0,xs:12,md:4},r.a.createElement(ge,{navigate:t})))))},be=n("FCJB"),xe=n("CN8t"),Ee=n("IAH9");t.default=function(e){var t=e.location,n=e.navigate,a=Object(Ee.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:"Home",siteMeta:a,location:t,navigate:n}),r.a.createElement(c.a,{id:"back-to-top-anchor"}),r.a.createElement(o.a,{pt:8,pb:2},r.a.createElement(he,{navigate:n})),r.a.createElement(xe.a,{siteMeta:a}),r.a.createElement(be.a,null,r.a.createElement(i.a,{color:"secondary","aria-label":"scroll back to top"},r.a.createElement(s.a,null))))}},tRbT:function(e,t,n){"use strict";n("E9XD");var a=n("Ff2n"),r=n("wx14"),o=n("q1tI"),c=n("iuhU"),i=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=o.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,u=e.classes,d=e.className,f=e.component,m=void 0===f?"div":f,p=e.container,v=void 0!==p&&p,g=e.direction,h=void 0===g?"row":g,b=e.item,x=void 0!==b&&b,E=e.justify,y=void 0===E?"flex-start":E,w=e.lg,O=void 0!==w&&w,j=e.md,k=void 0!==j&&j,C=e.sm,N=void 0!==C&&C,I=e.spacing,D=void 0===I?0:I,S=e.wrap,M=void 0===S?"wrap":S,R=e.xl,T=void 0!==R&&R,U=e.xs,A=void 0!==U&&U,F=e.zeroMinWidth,W=void 0!==F&&F,L=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(c.default)(u.root,d,v&&[u.container,0!==D&&u["spacing-xs-".concat(String(D))]],x&&u.item,W&&u.zeroMinWidth,"row"!==h&&u["direction-xs-".concat(String(h))],"wrap"!==M&&u["wrap-xs-".concat(String(M))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==i&&u["align-content-xs-".concat(String(i))],"flex-start"!==y&&u["justify-xs-".concat(String(y))],!1!==A&&u["grid-xs-".concat(String(A))],!1!==N&&u["grid-sm-".concat(String(N))],!1!==k&&u["grid-md-".concat(String(k))],!1!==O&&u["grid-lg-".concat(String(O))],!1!==T&&u["grid-xl-".concat(String(T))]);return o.createElement(m,Object(r.a)({className:P,ref:t},L))})),f=Object(i.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-e1ea388bf2c43464e9b2.js.map