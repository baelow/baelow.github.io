(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(t,n,a){"use strict";a.r(n);var r=a(14),o=Object(r.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"python-代码版本说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python-代码版本说明"}},[t._v("#")]),t._v(" Python 代码版本说明")]),t._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("p",[t._v("python版本分为Linux和Windows两种，主要是编译方式不同（已将核心代码做编译为二进制动态链）。")]),t._v(" "),n("h2",{attrs:{id:"linux代码版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux代码版本"}},[t._v("#")]),t._v(" Linux代码版本")]),t._v(" "),n("h3",{attrs:{id:"使用说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),n("ol",[n("li",[t._v("安装python3.8")]),t._v(" "),n("li",[t._v("安装nodejs (自行百度)")]),t._v(" "),n("li",[t._v("安装python第三方库 "),n("code",[t._v("pip install -r requirements.txt")])]),t._v(" "),n("li",[t._v("在index.py中输入必要信息")]),t._v(" "),n("li",[t._v("定时任务启动 "),n("code",[t._v("crond")]),t._v(" 并部署任务。"),n("a",{attrs:{href:"https://linuxhandbook.com/start-stop-restart-cron/",target:"_blank",rel:"noopener noreferrer"}},[t._v("crond帮助文件"),n("OutboundLink")],1),t._v("   以下仅供参考")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("29 7 * * 2,3 cd /home/ubuntu/obj/badminton;python index*.py>>/home/ubuntu/obj/badminton/vpn_book.log 2>&1\n# 分钟 小时 每周的周二周三 （执行index.py程序）运行日志在/home/ubuntu/obj/badminton/vpn_book.log中\n\n# 详细步骤如下：\n# 计划程序建立方法\n# 启动crontab计划任务\n# service crond start\n# 建立计划任务\n# crontab -e\n# 编辑计划任务（根据下面的自行修改）\n# 29 7 * * 2,3 cd /home/ubuntu/obj/badminton;python index*.py>>/home/ubuntu/obj/badminton/vpn_book.log 2>&1\n# 查看当前计划任务列表\n# crontab -l\n")])])]),n("h2",{attrs:{id:"windows代码版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows代码版本"}},[t._v("#")]),t._v(" Windows代码版本")]),t._v(" "),n("h3",{attrs:{id:"使用说明-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用说明-2"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),n("ol",[n("li",[t._v("安装python3.9")]),t._v(" "),n("li",[t._v("安装nodejs (自行百度)")]),t._v(" "),n("li",[t._v("安装python第三方库 "),n("code",[t._v("pip install -r requirements.txt")])]),t._v(" "),n("li",[t._v("在index.py中输入必要信息")]),t._v(" "),n("li",[t._v("使用windows定时任务。 "),n("a",{attrs:{href:"https://blog.csdn.net/David_jiahuan/article/details/99960427",target:"_blank",rel:"noopener noreferrer"}},[t._v("windows定时任务设定参考文档"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"下载链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载链接"}},[t._v("#")]),t._v(" 下载链接")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://wwak.lanzouo.com/ibBtW0p44x3a",target:"_blank",rel:"noopener noreferrer"}},[t._v("PYTHON 代码版下载地址"),n("OutboundLink")],1),t._v("\n密码:code")])])}),[],!1,null,null,null);n.default=o.exports}}]);