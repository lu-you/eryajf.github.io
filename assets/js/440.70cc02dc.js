(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1002:function(s,t,a){"use strict";a.r(t);var e=a(11),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("博客迁移之后一直心心念念的老博客功能，莫过于首页右侧边栏的访问地球了，只是Vuepress似乎并不支持在边栏添加script，于是一直搁置了下来。")]),s._v(" "),a("p",[s._v("晚上在浏览主题官方文档的时候，无意看到一个定义html广告模块儿的姿势，于是乎开启了一段折腾之旅，这里赶忙做下记录。")]),s._v(" "),a("h2",{attrs:{id:"_1-效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-效果"}},[s._v("#")]),s._v(" 1，效果")]),s._v(" "),a("p",[s._v("讲解配置过程之前，先看下配置完成之后的最终效果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/53b0c6319e7f4bd7.jpg",alt:"image-20210705230645552"}})]),s._v(" "),a("h2",{attrs:{id:"_2-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[s._v("#")]),s._v(" 2，配置")]),s._v(" "),a("p",[s._v("通过网站"),a("a",{attrs:{href:"https://www.revolvermaps.com/?target=setup2d&type=html",target:"_blank",rel:"noopener noreferrer"}},[s._v("REVLVERMAPS"),a("OutboundLink")],1),s._v("可以自定义我们想要的地图样式：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6cc2708f17eb8db8.jpg",alt:"image-20210705231110942"}})]),s._v(" "),a("p",[s._v("配置过程中，下边的方框中会自动生成对应的代码，我们可以拷贝对应的代码，一会儿用得到。")]),s._v(" "),a("p",[s._v("然后创建js文件 "),a("code",[s._v("docs/.vuepress/config/htmlModules.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 官方文档：https://doc.xugaoyi.com/pages/a20ce8/#%E8%87%AA%E5%AE%9A%E4%B9%89html%E6%A8%A1%E5%9D%97")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 利用广告模块儿,添加访问地球🌎")]),s._v("\n  homeSidebarB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('<div style="width:100%;height:122px;color:#fff;background: #eee;"><a href="https://www.revolvermaps.com/livestats/5srkcv15atq/"><img src="//rf.revolvermaps.com/h/m/a/0/ff0000/128/10/5srkcv15atq.png" width="256" height="128" alt="Map" style="border:0;"></a></div>')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后在 "),a("code",[s._v("docs/.vuepress/config/themeConfig.js")]),s._v("中引用即可：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" htmlModules "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./htmlModules.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 主题配置")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处定义了访问地球功能")]),s._v("\n  htmlModules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("然后运行起来，就可以看到对应的访问地图了。")])])}),[],!1,null,null,null);t.default=n.exports}}]);