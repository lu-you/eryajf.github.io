(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{586:function(t,s,a){"use strict";a.r(s);var r=a(11),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"第一个坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个坑"}},[t._v("#")]),t._v(" 第一个坑")]),t._v(" "),a("p",[t._v("总是提示一个错误，大概就是磁盘空间不够，其实选择了C盘，还有一百多个G，但是在安装的时候就是最后会进到boot manager一个界面，然后报出一个错误。")]),t._v(" "),a("p",[t._v("啥情况嘞，超级蛋疼，网上一搜一大堆方法，等于没有方法，最后是通过修改了一下分区格式，搞定的。具体操作就是，进到PE里边，然后把分区转换成MBR的分区，然后再进行系统的选择，安装，就ok了。")]),t._v(" "),a("h2",{attrs:{id:"第二个坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二个坑"}},[t._v("#")]),t._v(" 第二个坑")]),t._v(" "),a("p",[t._v("是在安装的过程中，大概是第三步了吧，要把系统安装在磁盘上，提示了一个windows安装程序无法将windows配置为此计算机的硬件上运行。如果你关掉，然后就会接着进入到PE，接着进入到系统安装，就这样进入到一个死循环。")]),t._v(" "),a("p",[t._v("解决的方法好像也是很多，我是通过这样一个方法解决掉的。当出现这个提示界面的时候，按Fn+F10，会进入到DOS命令符界面，然后cd 到oobe目录下，执行msoobe命令回车，就能够正常安装了。")]),t._v(" "),a("h2",{attrs:{id:"第三个坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三个坑"}},[t._v("#")]),t._v(" 第三个坑")]),t._v(" "),a("p",[t._v("那就是安装完成之后，没有驱动的问题了，我一看，USB，网卡都不行了，怎么办。这个什么驱动都没有的解决办法也很简单。")]),t._v(" "),a("p",[t._v("手下在一个能够上网的电脑上下载驱动精灵，然后把无线网卡的驱动下载下来，拷到带有PE系统的U盘当中，将系统重启进入PE，把刚才的驱动文件拷到系统里边，然后重启，双击驱动进行安装，就ok了。")]),t._v(" "),a("h2",{attrs:{id:"第四个坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四个坑"}},[t._v("#")]),t._v(" 第四个坑")]),t._v(" "),a("p",[t._v("是比较奇葩了，那便是拔掉U盘之后系统无法启动，总是提示一个oemsf is missing 我以为应该是启动顺序的问题咯，于是进到了BIOS里边不停地设置启动的顺序，都无济于事")]),t._v(" "),a("p",[t._v("最后解决的方法是，插上U盘，进到PE里边，然后进入分区管理工具，将系统分区右键，有一个激活当前分区的选项，激活之后，再重启系统，拔掉优盘，就正常了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);