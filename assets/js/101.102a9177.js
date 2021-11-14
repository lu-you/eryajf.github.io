(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{667:function(t,s,e){"use strict";e.r(s);var a=e(11),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-前言"}},[t._v("#")]),t._v(" 1，前言")]),t._v(" "),e("p",[t._v("直到现在，我甚至都没有真正地去实际操作过抓包这个事儿，可能对一个运维工作者来说，这是不可想象的，然而事实就是这样。")]),t._v(" "),e("p",[t._v("我从来没打算逃避自己不会抓包这事儿，这一点在同事们经常脱口而出抓 A 抓 B，而我往往都默不作声即可验证。当然，另一方面，我也从来没打算完全放弃学习抓包，当工作内容越往网络与协议等的深入，我就越觉得这是一个不可回避的事情了。")]),t._v(" "),e("p",[t._v("前几天一个同事分享了《wireshark 网络分析的艺术》这本书给我，让我一下子燃起了对抓包以及网络分析的热情，于是就有了这篇文章。")]),t._v(" "),e("p",[t._v("TCP 协议的相关内容非常多非常深，不过面试时三次握手四次挥手则是经常出现的问题，工作中我们在面对以及处理一些 TCP 相关问题时，也都需要用到这些知识，我始终都不敢说自己掌握的多么熟练，今天，借助于第一次抓包的经历，来分享一下 TCP 的三次握手以及四次挥手。")]),t._v(" "),e("h2",{attrs:{id:"_2-抓包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-抓包"}},[t._v("#")]),t._v(" 2，抓包")]),t._v(" "),e("p",[t._v("通过在主机上使用"),e("code",[t._v("tcpdump")]),t._v("进行抓包，将抓包内容保存到文件中，然后再用"),e("code",[t._v("wireshark")]),t._v("进行分析。")]),t._v(" "),e("p",[t._v("localhost —-> http://eryajf.net/1040.html")]),t._v(" "),e("p",[t._v("以本地作为客户端，然后请求远程网站。")]),t._v(" "),e("p",[t._v("先在本机起一个监听程序：")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("tcpdump -i ens33 -s "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -n -S "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" eryajf.net -w eryajf.cap\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("然后在本机请求远程主机：")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://eryajf.net/1040.html\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("接着停掉抓包程序，将抓包文件 down 下来，使用 wireshark 打开。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3bbc6d887b1652a6.jpg",alt:"img"}})]),t._v(" "),e("p",[t._v("图中凭借着个人目前对 TCP 知识的理解，用红框划分了三个阶段，这三个阶段展示了完整的 TCP 请求的流程。")]),t._v(" "),e("p",[t._v("1–3：是建联时的 TCP 三次握手。")]),t._v(" "),e("p",[t._v("4–7：进入到 HTTP 请求与响应的数据交互过程。")]),t._v(" "),e("p",[t._v("8–11：是结束连接的四次挥手流程。")]),t._v(" "),e("h2",{attrs:{id:"_3-见图知意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-见图知意"}},[t._v("#")]),t._v(" 3，见图知意")]),t._v(" "),e("p",[t._v("接下来用大白话浅显的针对每条数据包进行一下简单分析，分析内容中将会依据如上三个阶段进行讲解，并且，因为在这整个过程中，TCP 的状态是在不断变化的，往常我们碰到主机 TIME_WAIT 或者 CLOSE_WAIT 过多的时候，经常头疼于这些名词的含义，因此争取在这次讲解当中也能够将 TCP 的状态对应上，以帮助我们理解那些名词。")]),t._v(" "),e("p",[t._v("讲解之前，先引用两张超级厉害的动图来进行一下概括，首先说明，图来自于 https://blog.csdn.net/qzcsu/article/details/72861891 ，人家已经画的足够好，自己就不必在这上头浪费精力了。")]),t._v(" "),e("p",[e("code",[t._v("三次握手：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/6c9c1864123d4882.gif",alt:"img"}})]),t._v(" "),e("p",[t._v("通过三次握手成功建立连接，两端进入数据传输过程。")]),t._v(" "),e("p",[e("code",[t._v("四次挥手：")])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/7e19799dc0c1757d.gif",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"_4-流程浅析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-流程浅析"}},[t._v("#")]),t._v(" 4，流程浅析")]),t._v(" "),e("p",[t._v("详细说明如下，为了便于对比抓包数据，再次把 wireshark 的图搬过来：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3bbc6d887b1652a6.jpg",alt:"img"}})]),t._v(" "),e("p",[t._v("本文基于个人目前对 TCP 相关知识的理解而写，可能会有错漏的地方，如果有人发现，欢迎指出交流。")]),t._v(" "),e("h2",{attrs:{id:"_5-思维扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-思维扩展"}},[t._v("#")]),t._v(" 5，思维扩展")]),t._v(" "),e("p",[t._v("关于上边内容的与实际工作的关联，我能想到的大概有如下几点。")]),t._v(" "),e("h3",{attrs:{id:"_1-端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-端口"}},[t._v("#")]),t._v(" 1，端口")]),t._v(" "),e("p",[t._v("以往对这块儿的理解不够深入，以为"),e("code",[t._v("server")]),t._v("就启动一个"),e("code",[t._v("80")]),t._v("的服务，然后 client 直接请求 server 的这个端口就好了，没想过本机也要启动一个端口。不过话说回来，在理解了之后，就想到端对端通信肯定是要基于两个端口来的，不可能对方起一个 80 端口，自己就硬生生去请求数据了。")]),t._v(" "),e("p",[t._v("基于此，再扩展一下来看，我们可以通过如下命令查看到 CentOS 中默认情况下的临时端口分配范围：")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@eryajf ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cat")]),t._v(" /proc/sys/net/ipv4/ip_local_port_range\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60999")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("可以看到默认给出的范围是"),e("code",[t._v("32768-60999")]),t._v("，而面对一些实际生产环境，这个范围的端口可能是不够用的，如果不够用，那么超过这个范围的请求就会受到影响。于是，我们可以通过调整内核参数来进行修改：")]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加如下配置")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net.ipv4.ip_local_port_range=10240 65000"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/sysctl.conf\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重载生效")]),t._v("\nsysctl -p\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("正是基于如上知识的了解以及理解，这里才能够体会此处"),e("code",[t._v("内核参数调优")]),t._v("（特意把这个标红，是为了把这个高大上的词汇平凡化）的意义所在。")]),t._v(" "),e("h3",{attrs:{id:"_2-关注-tcp-状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-关注-tcp-状态"}},[t._v("#")]),t._v(" 2，关注 TCP 状态")]),t._v(" "),e("p",[t._v("正如前边提到的，以往在我听到"),e("code",[t._v("TIME_WAIT")]),t._v("之类的词汇，常常是有一些迷糊的，并不能准确的定位这个状态是发生在整个请求流程的哪一步了，包括"),e("code",[t._v("CLOST_WAIT")]),t._v("，"),e("code",[t._v("ESTABLISHED")]),t._v("等名词。于是，这次在整理本文时，我特地将各个状态在整个流程中标明，以帮助理解。")]),t._v(" "),e("p",[t._v("基于如上理解，也可以扩展一下，实际生产业务当中，有哪些状态是需要我们重点关注的呢？这些状态的数值究竟达到多少才是我们应该去处理的呢？处理的时候应该怎样操作配置才能对症下药呢？")]),t._v(" "),e("p",[t._v("事实上在过去半年多的工作当中，我们曾多次以"),e("code",[t._v("TCP")]),t._v("在"),e("code",[t._v("Prometheus")]),t._v("中的对应状态的波动，来倒推开发回头审视自己的代码中的 bug 的，以及我们自己对一些配置项的合理度。")]),t._v(" "),e("p",[t._v("这里举几个实际生产中的例子来进行说明，某一天，在进行监控巡检的时候，忽的看到有机器的 TCP 状态如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/9029482a07c44b46.jpg",alt:"img"}})]),t._v(" "),e("p",[t._v("最开始看到的是当前的数值相当大，接着把时间跨度拉大，发现这一现象是从某一刻开始的，而并非一直这么大，后来开发一查代码，果然是在调用连接池的时候，忘记关闭了，如此一来，连接数自然就会越堆越多了。")]),t._v(" "),e("p",[t._v("还有一个例子是我针对一组服务器的 TIME_WAIT 状态过多地探析与研究，具体可以参考一下 "),e("a",{attrs:{href:"https://wiki.eryajf.net/pages/4147.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS 系统里 TCP 状态中 TIME_WAIT 超过 3 万的分析与建议"),e("OutboundLink")],1),t._v("这篇文章。")]),t._v(" "),e("p",[t._v("再有一次就是某组 web 服务的机器"),e("code",[t._v("ESTABLISHED")]),t._v("状态相当的多，高峰时几乎接近"),e("code",[t._v("四万")]),t._v("，如果不进行处理，如果某一天突然一大波流量进来，可能直接就占满了，从而系统无法处理超出的连接。")]),t._v(" "),e("p",[t._v("其实连接数过多无非也就那么几种情况，要么是真实连接的确多，要么是没有及时将连接关闭导致，因为是 web 服务，极有可能配置在 NGINX 那里控制着，果不其然，我看到了配置中的 "),e("code",[t._v("keepalive_timeout")]),t._v("定义的是"),e("code",[t._v("300")]),t._v("(5 分钟)，尽管这可能不算很长，但是针对请求量本身就很大的主机来说，显然也是不合理的。")]),t._v(" "),e("p",[t._v("于是我将这个情况与开发进行沟通，表明这个数值需要调小，是否会影响对应的实际业务 (针对一些特殊长链的场景，如果猛然调小超时时间，可能会带来其他不可知问题)，得到的回应是不会影响，于是果断将超时时间改为"),e("code",[t._v("60")]),t._v("(1 分钟)，没过多久，就在监控中看到了相应的效果。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ccea7ee13cc35fbd.jpg",alt:"img"}})]),t._v(" "),e("p",[t._v("很多内容是在我们不经意之间串联着的，当我们一直奔忙在实际工作的任务时，可能有时候反而容易忽略一些简单的东西。")]),t._v(" "),e("p",[t._v("好了，这篇文字东扯葫芦西扯瓢地已经说了不少，该去做点饭填补一下空虚的肚皮了。")]),t._v(" "),e("h2",{attrs:{id:"_5-参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-参考"}},[t._v("#")]),t._v(" 5，参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qzcsu/article/details/72861891",target:"_blank",rel:"noopener noreferrer"}},[t._v("两张动图 - 彻底明白 TCP 的三次握手与四次挥手"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/jawil/blog/issues/14",target:"_blank",rel:"noopener noreferrer"}},[t._v("通俗大白话来理解 TCP 协议的三次握手和四次分手"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/a62ed1bb5b20",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊 tcpdump 与 Wireshark 抓包分析"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=_.exports}}]);