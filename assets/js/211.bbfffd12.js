(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{774:function(e,s,a){"use strict";a.r(s);var t=a(11),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("安卓同学也想使用私服管理包，他们通过gradle打包，此时通过类似Java同学按maven的思路一样，通过在maven的setting文件中指定私服对应的group地址，然后定义好包对应的三要素即可上传，然而这个思路，在gradle这里似乎并不可行。")]),e._v(" "),a("p",[e._v("如果配置直连group的地址上传，会报如下错误：")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("Return code is: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("405")]),e._v(", ReasonPhrase: PUT.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这个时候，网上有不少说是因为地址搞错了什么的，但是我明明直接拷贝的地址呀，其实根本不是这个原因，在gradle中并不能通过group分发上传的包，而是要将地址指向对应的库才行。")]),e._v(" "),a("p",[e._v("想要上传"),a("code",[e._v("release")]),e._v("包，则上传到本地的release包的位置，想要上传"),a("code",[e._v("snapshot")]),e._v("包，就要配置连接快照包的配置。核心配置如图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d58716e00f724c54.jpg",alt:"image"}})]),e._v(" "),a("p",[e._v("创建hosted类型的仓库是指定不同的类型，上传的时候往不同类型的地址传即可。")]),e._v(" "),a("p",[e._v("如果快照包往release类型的仓库传，会报如下错误：")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Could not GET "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://nexus.wpt.la/repository/wpt-maven-local/com/eryajf/wpt/libs/wpt_util/1.0.0-SNAPSHOT/maven-metadata.xml'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" Received status code "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("400")]),e._v(" from server: Repository version policy: RELEASE does not allow metadata "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" path: com/eryajf/wpt/libs/wpt_util/1.0.0-SNAPSHOT/maven-metadata.xml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);