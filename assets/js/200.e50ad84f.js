(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{763:function(s,n,a){"use strict";a.r(n);var e=a(11),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[s._v("软件官网：https://transfer.sh/")])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/8bacd89c87327dac.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_1-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署"}},[s._v("#")]),s._v(" 1，部署")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d --publish 8001:8080 -v /data/upload/:/data/upload dutchcoders/transfer.sh:latest --provider local --basedir /data/upload --log /data/upload/transfer.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-域名"}},[s._v("#")]),s._v(" 2，域名")]),s._v(" "),a("p",[s._v("可以用NGINX简单配置一个域名代理。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server {\n    listen       80;\n    server_name  file.test.com;\n    root /data/upload;\n\t\t\n\t\t# 配置内网访问\n    allow 0.0.0.0/0\n    deny all;\n\n    client_header_timeout 256s;\n    client_body_timeout 256s;\n    client_max_body_size 5g;\n    client_body_buffer_size 256k;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_pass http://127.0.0.1:8001;\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"_3-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[s._v("#")]),s._v(" 3，使用")]),s._v(" "),a("h3",{attrs:{id:"upload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload"}},[s._v("#")]),s._v(" Upload:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ curl --upload-file ./hello.txt https://file.test.com/hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"encrypt-upload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#encrypt-upload"}},[s._v("#")]),s._v(" Encrypt & upload:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ cat /tmp/hello.txt|gpg -ac -o-|curl -X PUT --upload-file "-" https://file.test.com/test.txt\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"download-decrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-decrypt"}},[s._v("#")]),s._v(" Download & decrypt:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ curl https://file.test.com/1lDau/test.txt|gpg -o- > /tmp/hello.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"upload-to-virustotal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-to-virustotal"}},[s._v("#")]),s._v(" Upload to virustotal:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ curl -X PUT --upload-file nhgbhhj https://file.test.com/test.txt/virustotal\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"deleting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deleting"}},[s._v("#")]),s._v(" Deleting")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ curl -X DELETE <X-Url-Delete Response Header URL>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-优化"}},[s._v("#")]),s._v(" 4，优化")]),s._v(" "),a("h3",{attrs:{id:"_1-优化脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-优化脚本"}},[s._v("#")]),s._v(" 1，优化脚本")]),s._v(" "),a("p",[s._v("这种可能不太方便，可以创建一个命令，通过命令直接进行上传：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$ cat /usr/local/bin/transfer\n#!/bin/bash\n\nget_base_url() {\n   ip=`hostname -I 2>&1`\n   if [[ $ip =~ "10" ]]\n   then\n      base_url=\'http://file1.test.com\'\n   else\n      base_url=\'http://file.test.com\'\n   fi\n\n   echo ${base_url}\n}\n\nget_system() {\n    uname_str=`uname -a`\n    if [[ ${uname_str} =~ "Darwin" ]]\n    then\n        system_str=\'osx\'\n    elif [[ ${uname_str} =~ "Linux" ]]\n    then\n        system_str=\'linux\'\n    fi\n\n    echo ${system_str}\n}\n\nprint() {\n    msg=$1\n    color=$2\n\n    # 按系统指定颜色\n    system_str=`get_system`\n    case "${system_str}" in\n        "linux")\n            echo_with_color=\'echo -e\'\n            ;;\n        "osx")\n            echo_with_color=\'echo -e\'\n            ;;\n    esac\n\n    case "${color}" in\n        "black")\n            ${echo_with_color} "\\033[30m${msg}\\033[0m"\n            ;;\n        "red")\n            ${echo_with_color} "\\033[31m${msg}\\033[0m"\n            ;;\n        "green")\n            ${echo_with_color} "\\033[32m${msg}\\033[0m"\n            ;;\n        "yellow")\n            ${echo_with_color} "\\033[33m${msg}\\033[0m"\n            ;;\n        "blue")\n            ${echo_with_color} "\\033[34m${msg}\\033[0m"\n            ;;\n        "purple")\n            ${echo_with_color} "\\033[35m${msg}\\033[0m"\n            ;;\n        "sky-blue")\n            ${echo_with_color} "\\033[36m${msg}\\033[0m"\n            ;;\n        "white")\n            ${echo_with_color} "\\033[37m${msg}\\033[0m"\n            ;;\n        *)\n            ${echo_with_color} ${msg}\n    esac\n}\n\n# print out help for the forgetful\nfunction check_help {\n    if [ ! -n "$1" ] || [ "$1" = "-h" ] || [ "$1" = "-help" ] || [ "$1" = "--help" ] ; then\n        print \'[使用说明]:\' green\n        print \'\\ttransfer 文件名 [最大下载次数(默认: 25)] [最大保留时间(单位: 天, 默认: 1)]\'\n        print \'[示例]:\' green\n        print \'\\ttransfer a.log\'\n        print \'\\ttransfer a.log 5\'\n        print \'\\ttransfer a.log 5 0.1\'\n        kill -SIGINT $$\n    fi\n}\n\ntransfer() {\n    # 检测帮助文档\n    check_help $1\n\n    # 获取base_url\n    base_url=`get_base_url`\n    file=$1\n    max_download_num=$2\n    max_download_days=$3\n    # check file\n    if [ ! -f "${file}" ]; then\n        print "[error]: 您上传的文件${file}不存在或不是文件" red\n        exit 0\n    fi\n    # download_num\n    if [ ! -n "${max_download_num}" ]; then\n        max_download_num=25\n    fi\n    # download_days\n    if [ ! -n "${max_download_days}" ]; then\n        max_download_days=1\n    fi\n\n    # prompt\n    print "[info]: 你输入的文件是${file} \\n[info]: 正在上传, 请稍后..." sky-blue\n    # 上传\n    result_url=`curl -H "Max-Downloads: ${max_download_num}" -H "Max-Days: ${max_download_days}" --progress-bar --upload-file "${file}" ${base_url}/$(basename $1)`;\n\n    # 替换 获取外网、内网地址\n    external_url=`echo ${result_url} | sed \'s/file2.wpt.la/file.wpt.la/\'`\n    inner_url=`echo ${result_url} | sed \'s/file.wpt.la/file2.wpt.la/\'`\n\n    print "[info]: 恭喜你上传成功" sky-blue\n    print "[info]: 相关信息: \\n\\t下载次数: ${max_download_num} \\n\\t保留天数: ${max_download_days} \\n\\t外网: ${external_url} \\n\\t内网: ${inner_url}" sky-blue\n    exit\n}\n\ntransfer $*\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br")])]),a("p",[s._v("用法如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ transfer\n[使用说明]:\n\ttransfer 文件名 [最大下载次数(默认: 25)] [最大保留时间(单位: 天, 默认: 1)]\n[示例]:\n\ttransfer a.log\n\ttransfer a.log 5\n\ttransfer a.log 5 0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("过期之后将会自动清理。")]),s._v(" "),a("h3",{attrs:{id:"_2-定时清理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定时清理"}},[s._v("#")]),s._v(" 2，定时清理")]),s._v(" "),a("p",[s._v("因为程序强调的是文件临时中转，因此最好添加一个定时清理存储目录的任务：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("03 03 * * *  rsync --delete-before -d /empty/ /data/upload/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("首先创建一个 "),a("code",[s._v("/empty")]),s._v("目录，然后每晚清空上传目录。")])])}),[],!1,null,null,null);n.default=t.exports}}]);