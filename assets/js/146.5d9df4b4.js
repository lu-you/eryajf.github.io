(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{709:function(s,t,a){"use strict";a.r(t);var e=a(11),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-快速部署。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-快速部署。"}},[s._v("#")]),s._v(" 1，快速部署。")]),s._v(" "),a("p",[s._v("下载就不多说了，可以直接去 github 进行下载。")]),s._v(" "),a("p",[s._v("单机通过不同端口，部署一个简易集群。")]),s._v(" "),a("p",[a("code",[s._v("node-1.sh")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /mnt/etcd/node-1.sh\netcd --name infra1 --initial-advertise-peer-urls http://192.168.0.122:2381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --listen-peer-urls http://192.168.0.122:2381 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --listen-client-urls http://192.168.0.122:2379 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --advertise-client-urls http://192.168.0.122:2379 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster-token etcd-cluster-1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("infra1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2381,infra2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2382,infra3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2383 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster-state new "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" nohup1.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("node-2.sh")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /mnt/etcd/node-2.sh\netcd --name infra2 --initial-advertise-peer-urls http://192.168.0.122:2382 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --listen-peer-urls http://192.168.0.122:2382 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --listen-client-urls http://192.168.0.122:2378 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --advertise-client-urls http://192.168.0.122:2378 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster-token etcd-cluster-1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("infra1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2381,infra2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2382,infra3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2383 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster-state new "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" nohup2.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("node-3.sh")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /mnt/etcd/node-3.sh\netcd --name infra3 --initial-advertise-peer-urls http://192.168.0.122:2383 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --listen-peer-urls http://192.168.0.122:2383 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --listen-client-urls http://192.168.0.122:2377 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --advertise-client-urls http://192.168.0.122:2377 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster-token etcd-cluster-1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("infra1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2381,infra2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2382,infra3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2383 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --initial-cluster-state new "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" nohup3.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("逐一运行如上脚本，即可启动一个集群。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/c7ee7fa0ef52bd72.jpg",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_2-查看状态。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看状态。"}},[s._v("#")]),s._v(" 2，查看状态。")]),s._v(" "),a("p",[s._v("使用如下命令可以简单检查集群状态：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ etcdctl --write-out"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("table --endpoints"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.0.122:2379,http://192.168.0.122:2377,http://192.168.0.122:2378 endpoint status\n+---------------------------+------------------+---------+---------+-----------+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         ENDPOINT          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        ID        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" VERSION "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" DB SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IS LEADER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("TERM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" RAFT INDEX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------------------+------------------+---------+---------+-----------+-----------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://192.168.0.122:2379 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 13a3eecc5a072589 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".18 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" kB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://192.168.0.122:2377 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 2b3234939251977f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".18 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" kB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://192.168.0.122:2378 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ca4d20bca4cb0ff0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".18 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" kB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------------------+------------------+---------+---------+-----------+-----------+------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("各个信息很清晰可以看到。")]),s._v(" "),a("h2",{attrs:{id:"_3-简单使用。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-简单使用。"}},[s._v("#")]),s._v(" 3，简单使用。")]),s._v(" "),a("p",[s._v("通过如下命令，可以设置一条信息。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCD_CLUSTER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.0.122:2379,http://192.168.0.122:2377,http://192.168.0.122:2378"')]),s._v("\n$ etcdctl --endpoints"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ETCD_CLUSTER")]),s._v(" put eryajf "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\nNo "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" topic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'put'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("看到失败了，报错 "),a("code",[s._v("No help topic for 'put'")]),s._v("，解决方法是设置如下环境变量：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后再执行如上命令，发现就可以成功了。")]),s._v(" "),a("p",[s._v("获取如上信息：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ etcdctl --endpoints"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ETCD_CLUSTER")]),s._v(" get eryajf\neryajf\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);