(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{999:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("密码破解，这包含了攻防两端考量以及操作，就像你有导弹，我就有反导弹系统，你有反导弹系统，我就有反反导弹系统。彼此追赶，互相博弈当中，都在提升自己的能力。当然了，我们反对研制武器用于战争，就像反对掌握技术用于破解一样。")]),s._v(" "),t("p",[s._v("昨天还在与一个朋友讨论关于验证码破解的问题，他兴奋的与我说，发现小米账号的验证码只有四位数，也就是说你随便输入一个手机号，比如雷军的手机号（当然需要你先知道雷军的手机号），然后直接去或许验证码进行登陆，四位数的数字组合就是 10"),t("em",[s._v("10")]),s._v("10*10，也就是一万种可能而已，通过通过脚本把这一万种可能全部走一遍，理论上就应该可以登陆你的账号了的。")]),s._v(" "),t("p",[s._v("当然这种漏洞都是非常低级而且人家也不可能不做限制的。说起限制也是非常简单，可以对同一 ip 请求次数的阈值设置进行相关策略制定，可以对同一账号登陆总是失败（据此判断可能是在进行破解）的次数设置阈值然后设置多长时间内不许再登陆。这些都是值得了解的，而我之前对这方面了解着实不多。")]),s._v(" "),t("p",[s._v("比如如下表述就是引自一篇所谓破解的文章内容：")]),s._v(" "),t("p",[s._v("首先要说一下，一个正常点的网站，你用暴力破解登录的话，都是几乎无法实现的，举个例子。")]),s._v(" "),t("p",[s._v("举个暴力破解 QQ 的例子：")]),s._v(" "),t("ul",[t("li",[s._v("\\1. 你暴力破解 QQ 密码，输入错误几次之后验证码也出来了。验证码出来了就无法使用暴力破解了，")]),s._v(" "),t("li",[s._v("\\2. 验证码的问题比较好搞，找个识图的代码，识别图片中的二维码，即可。继续破解。")]),s._v(" "),t("li",[s._v("\\3. 是的 二维码可以搞定，但是你输入错误次数超过 30 次之后，该账号 24 小时内再提交密码都无效了。")])]),s._v(" "),t("p",[s._v("举个我自己亲测暴力破解 wordpress 站点管理员密码的例子：")]),s._v(" "),t("p",[s._v("我穷举 wordpress 的账户密码，post 到 xxx.com/wp-login.php 上，结果：没几下我就发现网站打不开了。然后，用同事们的机器，也是打不开，我以为网站挂了，结果不是，我发现用 3G 网可以打开。看样 wordpress 直接屏蔽了我们的 ip 段，一个小时后又可以访问了。 所以我放弃了，对 wp-login.php 的破解。")]),s._v(" "),t("p",[s._v("从上边的话里，可以看出网络安全问题如果我们自己不关注，那么可有很多人都是密切关注着呢。")]),s._v(" "),t("p",[s._v("使用 wordpress 部署博客，平常就会遇到不少的攻击爆破等问题。")]),s._v(" "),t("p",[s._v("我就经常碰到，每当遇到之后我就心想，爆破吧，攻击吧，反正就是这么一个内容性的站点，并没有特别富裕价值的东西，或许攻击一会儿也就不再执着了罢。事实上之前也都是这样的，有一些破解大概就那么几次，十几次，最多几十次不得了了，然而面对那种无休无止，成百上千次的对后台密码进行破解的，就有些烦了。")]),s._v(" "),t("p",[s._v("终于，在我看到邮箱收到三四百封邮件之后，不能忍了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/07cb7c5b4112101d.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("一看到这种堆积式的错误登陆，不用多想，肯定是在被爆破了。")]),s._v(" "),t("p",[s._v("随便点击一个进去看看，尝试的用户名密码时间以及来源 ip 都非常清楚。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8ba27355b90f2637.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("看一眼这个 ip。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/14c47b1c43f4ff72.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("总之很讨厌，这次我也不想忍受这种攻击了，准备着手来对这些爆破的同学采取一些小政策了。")]),s._v(" "),t("p",[s._v("首先当然是百度一波先看看有没有特别给力的插件之类的，转了一圈发现没有什么好用的，策略上大概也就那么几种：")]),s._v(" "),t("ul",[t("li",[s._v("1，通过检测对可疑 ip 进行封禁。")]),s._v(" "),t("li",[s._v("2，通过对一些后台以及登陆的 url 进行重定向。")]),s._v(" "),t("li",[s._v("3，插件控制。")])]),s._v(" "),t("p",[s._v("因为插件基本上都是英文的，也就没有尝试这个。我通过一篇文章尝试了第二种的办法，https://www.waitalone.cn/wordpress-adminpage-deny-brute-force.html。")]),s._v(" "),t("h2",{attrs:{id:"_1-网上的一种办法。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-网上的一种办法。"}},[s._v("#")]),s._v(" 1，网上的一种办法。")]),s._v(" "),t("p",[s._v("办法就是在主题的 functions.php 中加入如下代码：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("add_action"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'login_enqueue_scripts'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cracker'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("cracker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'access'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1111'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Location:http://blog.eryajf.net/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("请自行更改 1111 为自己的密码，然后把后面的 eryajf.net 的 URL 更改为你的博客域名。")]),s._v(" "),t("p",[s._v("如此一来，当你访问后台 admin 的时候会跳转到首页，真正访问登陆页面的时候则需要访问 "),t("a",{attrs:{href:"http://blog.eryajf.net/wp-login.php?access=%E6%82%A8%E7%9A%84%E5%AF%86%E7%A0%81",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://blog.eryajf.net/wp-login.php?access = 您的密码"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("这样或许不无不可，但是经过我的体验感觉有时候会影响一些正常的访问，因此也放弃了这种办法，决定自己来搞一搞。")]),s._v(" "),t("h2",{attrs:{id:"_2-自己用的办法。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-自己用的办法。"}},[s._v("#")]),s._v(" 2，自己用的办法。")]),s._v(" "),t("p",[s._v("对于那些爆破我们的，就应该毫不留情直接关小黑屋里。")]),s._v(" "),t("p",[s._v("因此我在 nginx 下边做了"),t("code",[s._v("拒绝访问")]),s._v("的策略，一旦你触及我的底线，不好意思，小黑屋有请。")]),s._v(" "),t("p",[s._v("我想大家应该都知道在配置 nginx 的虚拟主机的时候，一般把配置文件一个一个单独放在一个目录下，然后在 nginx 的"),t("code",[s._v("默认配置文件")]),s._v("当中进行"),t("code",[s._v("include")]),s._v("调用。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("include vhost/*.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意这条调用指令写在"),t("code",[s._v("server区域之外http区域之内")]),s._v("。")]),s._v(" "),t("p",[s._v("接着我就在"),t("code",[s._v("vhost")]),s._v("目录下创建了一个"),t("code",[s._v("hei.conf")]),s._v("的文件。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@long vhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cat")]),s._v(" hei.conf\ndeny "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("91.210")]),s._v(".145.28 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndeny "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51.38")]),s._v(".224.237 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("书写格式也就这样，把做坏事儿的 ip 扔进配置文件里边，然后让 nginx 加载一下，对方再想来攻击你，那就还它一个 403 看看。")]),s._v(" "),t("p",[s._v("注意这个地方我在写规则的时候 ip 与后边的分号有一个空格的，这样并不影响使用，也是为了方便后边脚本的使用。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/3f29c1e68d795f8c.jpg",alt:"image"}})]),s._v(" "),t("p",[s._v("上边两个 ip 就是因为不老实然后就被关进小黑屋了的。")]),s._v(" "),t("p",[s._v("既然已经确立使用这种方案了，那么接下来就通过对日志的分支，利用脚本，把这些事情自动给他完成了。")]),s._v(" "),t("p",[s._v("脚本如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n \n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Log")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/nginx/error.log\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("File")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/conf/vhost/hei.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fip")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" wp-login.php $Log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/error/{ip[$36]++;}END{for (i in ip){if (ip[i]>20){print i}}}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fip")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$2==i{print}'")]),s._v(" $File "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v('"')]),s._v(" -ne "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"服务器安全"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deny '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(' ;"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$File")]),s._v("\n        /usr/local/nginx/sbin/nginx -s reload\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[t("code",[s._v("简单说明一下脚本")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("第六行：在错误日志当中取出登陆次数超过 20 次的失败者的 ip。")]),s._v(" "),t("li",[s._v("第十行：逐个判断此 ip 是否已经在小黑屋里关着。如果已经有了，那么服务器是安全的，如果没在，那么将之请进小黑屋当中，然后让 nginx 重新加载一下配置。")])]),s._v(" "),t("p",[s._v("写完之后，如果在你的系统中已经有类似的 ip 了，可以执行一波进行测试，看看是否已将其送往小黑屋成功。\n这个地方，如果日志逐渐变大，那么可以利用脚本进行一下切割，还是很有必要的。")]),s._v(" "),t("p",[s._v("随后把这个脚本放进定时任务当中，自己随便定义多久执行一次就好了。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("*/5 * * * * /bin/bash /opt/hei.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("最后，还是想说一下，所有进行暴力破解的，无不是从一些非常基础简单的密码开始的，如果我们被爆破没几下就守不住了，那只能说，该换密码了。事实上，我所使用的密码，是一个我自己也记不住的，一个由工具自动生成的密码，总之，密码复杂一点，总是没有错的。")])])}),[],!1,null,null,null);a.default=e.exports}}]);