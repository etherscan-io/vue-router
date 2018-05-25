(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{207:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("When building apps with a bundler, the JavaScript bundle can become quite large, and thus affect the page load time. It would be more efficient if we can split each route's components into a separate chunk, and only load them when the route is visited.")]),a("p",[t._v("Combining Vue's "),a("a",{attrs:{href:"https://vuejs.org/guide/components.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("async component feature"),a("OutboundLink")],1),t._v(" and webpack's "),a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting-async/",target:"_blank",rel:"noopener noreferrer"}},[t._v("code splitting feature"),a("OutboundLink")],1),t._v(", it's trivially easy to lazy-load route components.")]),a("p",[t._v("First, an async component can be defined as a factory function that returns a Promise (which should resolve to the component itself):")]),t._m(1),a("p",[t._v("Second, in webpack 2, we can use the "),a("a",{attrs:{href:"https://github.com/tc39/proposal-dynamic-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("dynamic import"),a("OutboundLink")],1),t._v(" syntax to indicate a code-split point:")]),t._m(2),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),a("p",[t._v("if you are using Babel, you will need to add the "),a("a",{attrs:{href:"https://babeljs.io/docs/plugins/syntax-dynamic-import/",target:"_blank",rel:"noopener noreferrer"}},[t._v("syntax-dynamic-import"),a("OutboundLink")],1),t._v(" plugin so that Babel can properly parse the syntax.")])]),a("p",[t._v("Combining the two, this is how to define an async component that will be automatically code-split by webpack:")]),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("Sometimes we may want to group all the components nested under the same route into the same async chunk. To achieve that we need to use "),a("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting-async/#chunk-names",target:"_blank",rel:"noopener noreferrer"}},[t._v("named chunks"),a("OutboundLink")],1),t._v(" by providing a chunk name using a special comment syntax (requires webpack > 2.4):")]),t._m(7),a("p",[t._v("webpack will group any async module with the same chunk name into the same async chunk.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"lazy-loading-routes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-loading-routes","aria-hidden":"true"}},[this._v("#")]),this._v(" Lazy Loading Routes")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Promise"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* component definition */")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("import")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token string"}},[this._v("'./Foo.vue'")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token comment"}},[this._v("// returns a Promise")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Nothing needs to change in the route config, just use "),s("code",[this._v("Foo")]),this._v(" as usual:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"grouping-components-in-the-same-chunk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grouping-components-in-the-same-chunk","aria-hidden":"true"}},[this._v("#")]),this._v(" Grouping Components in the Same Chunk")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Bar")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./Bar.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Baz")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token comment"}},[t._v('/* webpackChunkName: "group-foo" */')]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./Baz.vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);