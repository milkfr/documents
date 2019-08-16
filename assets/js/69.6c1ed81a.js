(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{322:function(a,t,s){"use strict";s.r(t);var e=s(24),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"忽略规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#忽略规则","aria-hidden":"true"}},[a._v("#")]),a._v(" 忽略规则")]),a._v(" "),s("blockquote",[s("p",[a._v("首先你需要在项目根目录下新建一个 "),s("code",[a._v(".gitignore")]),a._v(" 文件")])]),a._v(" "),s("ul",[s("li",[a._v("空格不匹配任何文件，可以作为分隔符号；")]),a._v(" "),s("li",[a._v("以 "),s("code",[a._v("#")]),a._v(" 开始的为注释；")]),a._v(" "),s("li",[s("code",[a._v("\\")]),a._v(" 表示转义符；")]),a._v(" "),s("li",[s("code",[a._v("!")]),a._v(" 开始的表示否定，也就是开启跟踪；")]),a._v(" "),s("li",[s("code",[a._v("/")]),a._v(" 开始的表示项目根目录；")]),a._v(" "),s("li",[s("code",[a._v("/")]),a._v(" 结尾的表示某个文件夹，但是不匹配该文件；")]),a._v(" "),s("li",[s("code",[a._v("**")]),a._v(" 表示多级，其位置可在开始，中间，结束；")]),a._v(" "),s("li",[s("code",[a._v("?")]),a._v(" 表示单个字符；")]),a._v(" "),s("li",[s("code",[a._v("[]")]),a._v(" 表示单个字符列表；")])]),a._v(" "),s("h2",{attrs:{id:"忽略示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#忽略示例","aria-hidden":"true"}},[a._v("#")]),a._v(" 忽略示例")]),a._v(" "),s("h3",{attrs:{id:"_1-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略 所有 a.txt 文件")]),a._v("\na.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 仅忽略根目录下的 a.txt 文件")]),a._v("\n/a.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略 config 目录下的 secret.json")]),a._v("\nconfig/secret.json\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略 所有的 .env 结尾的文件")]),a._v("\n*.env\n")])])]),s("h3",{attrs:{id:"_2-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 目录")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略 node_modules 目录")]),a._v("\nnode_modules/\n")])])]),s("h3",{attrs:{id:"_3-取反"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-取反","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 取反")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 跟踪 public 目录下的 .env 文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("public/.env\n")])])]),s("h3",{attrs:{id:"_4-组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-组合","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 组合")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略 docs 下的所有 .md 文件")]),a._v("\ndocs/*.md "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这是错误的，因为不能忽略 `docs/git/` 目录下的文件")]),a._v("\ndocs/**/*.md "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 正确结果")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略以 .a 、.b 或 .c 结尾的文件")]),a._v("\n*."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("abc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 正确")]),a._v("\n*."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("a-c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 也正确")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略 docs 下的除 secret 命名的所有文件")]),a._v("\ndocs/\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("docs/secret.*\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 忽略 src 下的所有 index.js 文件")]),a._v("\nsrc/**/index.js\n")])])]),s("h2",{attrs:{id:"规则不生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则不生效","aria-hidden":"true"}},[a._v("#")]),a._v(" 规则不生效")]),a._v(" "),s("p",[s("code",[a._v(".gitignore")]),a._v(" 指定的是未跟踪文件，已经跟踪的（tracked）不受影响。")]),a._v(" "),s("p",[a._v("解决方法就是清除本地缓存再提交：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" --cached\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例 -- 取消某个文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" --cached a.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例 -- 取消某个文件夹")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -r --cached a/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例 -- 取消所有文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -r --cached "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);