(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"50B7":function(e,t,a){"use strict";var r=a("k1TG"),i=a("aXB2"),n=a("q1tI"),o=a.n(n),s=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("ofer"),d=o.a.forwardRef((function(e,t){var a=e.action,n=e.avatar,l=e.classes,d=e.className,p=e.component,u=void 0===p?"div":p,m=e.disableTypography,h=void 0!==m&&m,f=e.subheader,b=e.subheaderTypographyProps,v=e.title,y=e.titleTypographyProps,g=Object(i.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=v;null==w||w.type===c.a||h||(w=o.a.createElement(c.a,Object(r.a)({variant:n?"body2":"h5",className:l.title,component:"span",display:"block"},y),w));var x=f;return null==x||x.type===c.a||h||(x=o.a.createElement(c.a,Object(r.a)({variant:n?"body2":"body1",className:l.subheader,color:"textSecondary",component:"span",display:"block"},b),x)),o.a.createElement(u,Object(r.a)({className:Object(s.default)(l.root,d),ref:t},g),n&&o.a.createElement("div",{className:l.avatar},n),o.a.createElement("div",{className:l.content},w,x),a&&o.a.createElement("div",{className:l.action},a))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(d)},hk7L:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("hlFM"),o=a("lO0E"),s=a("XX3T"),l=a("Cekx"),c=a.n(l),d=a("aDnJ"),p=a("Ji2X"),u=a("Z3vd"),m=a("30+C"),h=a("50B7"),f=a("o4QW"),b=a("oa/T"),v=a("ofer"),y=a("H2TA"),g=a("lFIR"),w=a("X4R9");function x(e){void 0===e&&(e=10);for(var t=[],a=1;a<=e;a++){var r=a/e;t.push(r)}return t.push(0),t}var R=Object(y.a)({card:{height:"100%",margin:"8px"},actions:{justifyContent:"space-between"},cardMedia:{height:"150px"},titleText:{textAlign:"center"}})((function(e){var t=e.classes,a=e.title,o=e.subtitle,s=e.excerpt,l=e.publishedDate,c=e.timeToRead,d=e.path,p=e.referrer,y=Object(r.useRef)(null),R=Object(r.useState)({}),k=R[0],j=R[1];function T(e){e.forEach((function(e){e.isIntersecting&&j(e)}))}return Object(r.useEffect)((function(){var e=new IntersectionObserver(T,{root:null,rootMargin:"0px",threshold:x()});return y.current&&e.observe(y.current),function(){return e.disconnect()}}),[y]),i.a.createElement(g.a,{ref:y,component:w.b,state:{referrer:p},to:d,style:{opacity:k&&k.intersectionRatio}},i.a.createElement(m.a,{raised:k&&1===k.intersectionRatio,className:t.card},i.a.createElement(h.a,{disableTypography:!0,title:i.a.createElement(v.a,{variant:"h6",color:"primary"},a),subheader:i.a.createElement(v.a,{variant:"body2"},o)}),i.a.createElement(b.a,null,i.a.createElement(v.a,{variant:"body2"},s)),i.a.createElement(f.a,{disableSpacing:!0,className:t.actions},i.a.createElement(n.a,{component:"div"},i.a.createElement(v.a,{component:"div",variant:"caption"},"Date: "+l),i.a.createElement(v.a,{component:"div",variant:"caption"},"Time to read: "+c+" min")),i.a.createElement(n.a,{component:"div"},i.a.createElement(u.a,{size:"small",color:"secondary"},"Read more ...")))))}));function k(e){var t=e.edges,a=e.location;return i.a.createElement(p.a,{maxWidth:"md"},t.map((function(e){var t=e.node,r=t.excerpt,n=t.timeToRead,o=t.fields.slug,s=t.frontmatter,l=s.title,c=s.subtitle,d=s.date,p=s.publishedBy;return i.a.createElement(R,{key:o,title:l,subtitle:c,excerpt:r,publishedDate:d,publishedBy:p,timeToRead:n,path:o,referrer:a.pathname})})))}var j=a("FCJB"),T=a("CN8t"),S=a("vfhJ");t.default=function(e){var t=e.location,a=e.navigate,r=S.data.allMarkdownRemark.edges;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:"All article collections",location:t,navigate:a}),i.a.createElement(o.a,{id:"back-to-top-anchor"}),i.a.createElement(n.a,{pt:8,pr:2,pb:2,pl:2},i.a.createElement(k,{edges:r,location:t})),i.a.createElement(T.a,null),i.a.createElement(j.a,null,i.a.createElement(s.a,{color:"secondary","aria-label":"scroll back to top"},i.a.createElement(c.a,null))))}},o4QW:function(e,t,a){"use strict";var r=a("k1TG"),i=a("aXB2"),n=a("q1tI"),o=a.n(n),s=(a("17x9"),a("iuhU")),l=a("H2TA"),c=o.a.forwardRef((function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,l=e.classes,c=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return o.a.createElement("div",Object(r.a)({className:Object(s.default)(l.root,c,!n&&l.spacing),ref:t},d))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(c)},vfhJ:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"As a web developer we knows how important it is to provide good UX for the users of your application. \\nA big part of that is the ability to take different…","timeToRead":6,"fields":{"slug":"/articles/react-intersection-api/"},"frontmatter":{"title":"Intersection API in React","subtitle":"Use intersection API to animate components","date":"2019-12-09","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"One of the reasons why React is so popular is the declarative way you build apps in React. React is built from components\\nand as a developer it\'s your…","timeToRead":4,"fields":{"slug":"/articles/react-refs-introduction/"},"frontmatter":{"title":"Using refs in React","subtitle":"Use refs in react to keep rack of the dom element","date":"2019-12-05","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"When I tested React for the first time, think it was year 20015, I started with simple applications that did not use \\nremote data - instead I created data…","timeToRead":8,"fields":{"slug":"/articles/react-fetch-data-basics/"},"frontmatter":{"title":"Fetch data in React","subtitle":"Fetching data in React","date":"2019-12-03","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"Object Oriented Programming, OOP, refers to using self-contained pieces of code to develop applications. We call these \\nself-contained pieces of code objects…","timeToRead":13,"fields":{"slug":"/articles/js-oop-explained/"},"frontmatter":{"title":"JavaScript OOP","subtitle":"Encapsulation and inheritance in JavaScript","date":"2019-11-29","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"CSS-in-JS has been one of the biggest developments of the past few years in the CSS world. Just like preprocessors \\nbypassed CSS to introduce their own set of…","timeToRead":3,"fields":{"slug":"/articles/react-styling-solutions-jss/"},"frontmatter":{"title":"CSS-in-JS for your React app","subtitle":"Article about JSS based styling solutions for your React app","date":"2019-11-22","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"In this article series, I will highlight and explain common different styling solutions for you React based front \\nend application. The first part will cover…","timeToRead":6,"fields":{"slug":"/articles/react-styling-solutions/"},"frontmatter":{"title":"Styling your React app","subtitle":"Article about styling solutions for your React app","date":"2019-11-20","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"In this article I will describe a practical example of when I created a tree view component for this web site - using\\nGraphQL to query data from Gatsby…","timeToRead":4,"fields":{"slug":"/articles/react-treeview-practical-example/"},"frontmatter":{"title":"TreeView component - a practical example","subtitle":"Article about creating a tree view component","date":"2019-11-18","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"In this article I will go through JavaScript’s variable scope and hoisting and some of the peculiarities of both of them. \\nIt is important to understand how…","timeToRead":8,"fields":{"slug":"/articles/js-scope-hoisting-explained/"},"frontmatter":{"title":"Scope and hoisting in JavaScript","subtitle":"An article about variable scopes and hoisting","date":"2019-11-15","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"Worker Threads are available in the Node.js module. Before we dive into my example use of Worker threads in Node.js, \\nwe will see what are worker threads and…","timeToRead":6,"fields":{"slug":"/articles/nodejs-worker-threads/"},"frontmatter":{"title":"Node.js worker threads","subtitle":"Article about worker threads in Node.js","date":"2019-11-14","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"One of Reacts latest cool new features are the Hooks API\'s and they really shine when creating function components. One \\nof the Hooks is called useContext and…","timeToRead":2,"fields":{"slug":"/articles/react-how-to-use-context-part2/"},"frontmatter":{"title":"How to use context in React - 2","subtitle":"Article about useContext in React","date":"2019-11-13","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"Managing state is arguably on of the hardest part of any application and It\'s why there are so many state management \\nlibraries available. Search NPM and you…","timeToRead":4,"fields":{"slug":"/articles/react-how-to-use-context-part1/"},"frontmatter":{"title":"How to use context in React - 1","subtitle":"Article about why, how and when to use context api","date":"2019-11-12","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"Prototype is a fundamental concept that every JavaScript developer must understand, and this article aims to explain \\nJavaScript’s prototype in plain, detailed…","timeToRead":9,"fields":{"slug":"/articles/js-prototype-explained/"},"frontmatter":{"title":"JavaScript prototype","subtitle":"JavaScript prototype in more details","date":"2019-11-11","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"JavaScript’s core and most often used and most fundamental data type is the Object data type. JavaScript has one \\ncomplex data type, the Object data type, and…","timeToRead":10,"fields":{"slug":"/articles/js-object-explained/"},"frontmatter":{"title":"JavaScript Objects","subtitle":"An article about JavaScript objects","date":"2019-11-10","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"As a software developer it is very important that we choose our tools, platforms and methodologies, etc right. We need \\nto decide what is the actual value we…","timeToRead":12,"fields":{"slug":"/articles/nodejs-architecture-details/"},"frontmatter":{"title":"Node.js architecture - details","subtitle":"Article about the event loop in Node.js","date":"2018-01-20","publishedBy":"Henrik Grönvall"}}},{"node":{"excerpt":"As per Wiki :\\n  Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. \\n  Historically, JavaScript…","timeToRead":3,"fields":{"slug":"/articles/nodejs-architecture-overview/"},"frontmatter":{"title":"Node.js architecture - overview","subtitle":"Article about Node.js architecture - overview","date":"2018-01-18","publishedBy":"Henrik Grönvall"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-articles-js-cba0f9960c5670b2745a.js.map