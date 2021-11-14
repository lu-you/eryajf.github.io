(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{705:function(t,e,a){"use strict";a.r(e);var n=a(11),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("git log命令可以提供给我们很多代码提交的信息，通过一些格式化，我们能够更加优雅的得到对应的信息：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('git log --pretty=format:"%h"')])])]),t._v(" "),a("p",[t._v("git 用各种 placeholder 来决定各种显示内容：")]),t._v(" "),a("ul",[a("li",[t._v("%H: commit hash")]),t._v(" "),a("li",[t._v("%h: 缩短的 commit hash")]),t._v(" "),a("li",[t._v("%T: tree hash")]),t._v(" "),a("li",[t._v("%t: 缩短的 tree hash")]),t._v(" "),a("li",[t._v("%P: parent hashes")]),t._v(" "),a("li",[t._v("%p: 缩短的 parent hashes")]),t._v(" "),a("li",[t._v("%an: 作者名字")]),t._v(" "),a("li",[t._v("%aN: mailmap 的作者名字 (.mailmap 对应，详情参照"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-shortlog",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-shortlog(1)"),a("OutboundLink")],1),t._v("或者"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-blame",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-blame(1)"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("%ae: 作者邮箱")]),t._v(" "),a("li",[t._v("%aE: 作者邮箱 (.mailmap 对应，详情参照"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-shortlog",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-shortlog(1)"),a("OutboundLink")],1),t._v("或者"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-blame",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-blame(1)"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("%ad: 日期 (–date= 制定的格式)")]),t._v(" "),a("li",[t._v("%aD: 日期, RFC2822 格式")]),t._v(" "),a("li",[t._v("%ar: 日期, 相对格式 (1 day ago)")]),t._v(" "),a("li",[t._v("%at: 日期, UNIX timestamp")]),t._v(" "),a("li",[t._v("%ai: 日期, ISO 8601 格式")]),t._v(" "),a("li",[t._v("%cn: 提交者名字")]),t._v(" "),a("li",[t._v("%cN: 提交者名字 (.mailmap 对应，详情参照"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-shortlog",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-shortlog(1)"),a("OutboundLink")],1),t._v("或者"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-blame",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-blame(1)"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("%ce: 提交者 email")]),t._v(" "),a("li",[t._v("%cE: 提交者 email (.mailmap 对应，详情参照"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-shortlog",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-shortlog(1)"),a("OutboundLink")],1),t._v("或者"),a("a",{attrs:{href:"http://linux.die.net/man/1/git-blame",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-blame(1)"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("%cd: 提交日期 (–date= 制定的格式)")]),t._v(" "),a("li",[t._v("%cD: 提交日期, RFC2822 格式")]),t._v(" "),a("li",[t._v("%cr: 提交日期, 相对格式 (1 day ago)")]),t._v(" "),a("li",[t._v("%ct: 提交日期, UNIX timestamp")]),t._v(" "),a("li",[t._v("%ci: 提交日期, ISO 8601 格式")]),t._v(" "),a("li",[t._v("%d: ref 名称")]),t._v(" "),a("li",[t._v("%e: encoding")]),t._v(" "),a("li",[t._v("%s: commit 信息标题")]),t._v(" "),a("li",[t._v("%f: sanitized subject line, suitable for a filename")]),t._v(" "),a("li",[t._v("%b: commit 信息内容")]),t._v(" "),a("li",[t._v("%N: commit notes")]),t._v(" "),a("li",[t._v("%gD: reflog selector, e.g., refs/stash@{1}")]),t._v(" "),a("li",[t._v("%gd: shortened reflog selector, e.g., stash@{1}")]),t._v(" "),a("li",[t._v("%gs: reflog subject")]),t._v(" "),a("li",[t._v("%Cred: 切换到红色")]),t._v(" "),a("li",[t._v("%Cgreen: 切换到绿色")]),t._v(" "),a("li",[t._v("%Cblue: 切换到蓝色")]),t._v(" "),a("li",[t._v("%Creset: 重设颜色")]),t._v(" "),a("li",[t._v("%C(…): 制定颜色, as described in color.branch.* config option")]),t._v(" "),a("li",[t._v("%m: left, right or boundary mark")]),t._v(" "),a("li",[t._v("%n: 换行")]),t._v(" "),a("li",[t._v("%%: a raw %")]),t._v(" "),a("li",[t._v("%x00: print a byte from a hex code")]),t._v(" "),a("li",[t._v("%w([[,[,]]]): switch line wrapping, like the -w option of git-shortlog(1).")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/82c826a045256b3e.jpg",alt:"img"}})]),t._v(" "),a("p",[t._v("当前在Jenkins的应用中，通过如下方式，在项目拉完代码之后对一些信息进行了提取：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("// 提交ID\nenv.COMMIT_ID   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git log --pretty=format:%h'")]),t._v(",  returnStdout: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".trim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// 提交者\nenv.COMMIT_USER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git log --pretty=format:%an'")]),t._v(", returnStdout: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".trim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// 提交时间\nenv.COMMIT_TIME "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git log --pretty=format:%ai'")]),t._v(", returnStdout: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".trim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n// 提交信息\nenv.COMMIT_INFO "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git log --pretty=format:%s'")]),t._v(",  returnStdout: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".trim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("这个信息可以在通知，以及更改构建信息都可以用到，便于运维开发测试一起核对。")])])}),[],!1,null,null,null);e.default=r.exports}}]);