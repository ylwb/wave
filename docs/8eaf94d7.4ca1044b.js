(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(299)),l={title:"Plot / Interval / Labels"},i={unversionedId:"examples/plot-interval-labels",id:"examples/plot-interval-labels",isDocsHomePage:!1,title:"Plot / Interval / Labels",description:"Make a column plot with labels on each bar.",source:"@site/docs/examples/plot-interval-labels.md",slug:"/examples/plot-interval-labels",permalink:"/wave/docs/examples/plot-interval-labels",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-interval-labels.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Interval / Groups / Transpose",permalink:"/wave/docs/examples/plot-interval-groups-transpose"},next:{title:"Plot / Interval / Range",permalink:"/wave/docs/examples/plot-interval-range"}},c=[],p={rightToc:c};function s(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a column plot with labels on each bar."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(406).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 20\nf = FakeCategoricalSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Label Customization',\n    data=data('product price', n),\n    plot=ui.plot([\n        ui.mark(type='interval', x='=product',\n                y='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}', y_min=0,\n                color='#333333',\n                label='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}',\n                label_offset=0, label_position='middle', label_rotation='-90', label_fill_color='#fff',\n                label_font_weight='bold')])\n))\nv.data = [(c, x) for c, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")))}s.isMDXComponent=!0},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},406:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-interval-labels-bc80dada33a6a5f1a61854ef21caf76e.png"}}]);