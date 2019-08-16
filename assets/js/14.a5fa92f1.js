(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{351:function(s,t,a){"use strict";a.r(t);var n=a(24),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装最新版本的-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装最新版本的-nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装最新版本的 Nginx")]),s._v(" "),a("p",[s._v("首先是更新超级牛力：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])])]),a("p",[s._v("然而这样安装的 nginx 只是最新的稳定版本而已")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" gnupg2 ca-certificates lsb-release\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://nginx.org/packages/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(' nginx"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/nginx.list\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://nginx.org/packages/mainline/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(' nginx"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/nginx.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://nginx.org/keys/nginx_signing.key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])])]),a("h2",{attrs:{id:"查看版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看版本","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看版本")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("nginx -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx version: nginx/1.15.12")]),s._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);