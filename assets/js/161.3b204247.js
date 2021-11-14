(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{724:function(s,a,n){"use strict";n.r(a);var e=n(11),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("order by 用于对查询出来的数据进行排序操作，用两个例子可以很容易理解这个参数。")]),s._v(" "),n("h3",{attrs:{id:"_1-普通查询。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-普通查询。"}},[s._v("#")]),s._v(" 1，普通查询。")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from groups;\n+----+---------------------+---------------------+---------------------+----------+------------+\n| id | created_at          | updated_at          | deleted_at          | group_id | group_name |\n+----+---------------------+---------------------+---------------------+----------+------------+\n|  1 | NULL                | 2020-06-16 22:07:02 | 2020-06-16 22:14:40 |        1 | 开发组     |\n|  2 | 2020-06-15 23:37:25 | 2020-06-15 23:37:25 | NULL                |        2 | 测试组     |\n|  3 | 2020-06-16 22:17:07 | 2020-06-16 22:17:07 | NULL                |        3 | 运营组     |\n|  4 | 2020-06-16 22:17:15 | 2020-06-16 22:17:15 | NULL                |        4 | 客服组     |\n|  5 | 2020-06-16 22:17:26 | 2020-06-16 22:17:26 | NULL                |        5 | OPS        |\n+----+---------------------+---------------------+---------------------+----------+------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("默认情况下，查出来的数据是按照主键 ID 正序排列的。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/d0085bf4755a2464.jpg",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_2-基于-id-进行排序。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-基于-id-进行排序。"}},[s._v("#")]),s._v(" 2，基于 ID 进行排序。")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from groups order by id desc;\n+----+---------------------+---------------------+---------------------+----------+------------+\n| id | created_at          | updated_at          | deleted_at          | group_id | group_name |\n+----+---------------------+---------------------+---------------------+----------+------------+\n|  5 | 2020-06-16 22:17:26 | 2020-06-16 22:17:26 | NULL                |        5 | OPS        |\n|  4 | 2020-06-16 22:17:15 | 2020-06-16 22:17:15 | NULL                |        4 | 客服组     |\n|  3 | 2020-06-16 22:17:07 | 2020-06-16 22:17:07 | NULL                |        3 | 运营组     |\n|  2 | 2020-06-15 23:37:25 | 2020-06-15 23:37:25 | NULL                |        2 | 测试组     |\n|  1 | NULL                | 2020-06-16 22:07:02 | 2020-06-16 22:14:40 |        1 | 开发组     |\n+----+---------------------+---------------------+---------------------+----------+------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("注意其中的 "),n("code",[s._v("desc")]),s._v("表示用倒序排列。")]),s._v(" "),n("p",[s._v("如果想要正序排列，则使用"),n("code",[s._v("asc")]),s._v(":")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from groups order by id asc;\n+----+---------------------+---------------------+---------------------+----------+------------+\n| id | created_at          | updated_at          | deleted_at          | group_id | group_name |\n+----+---------------------+---------------------+---------------------+----------+------------+\n|  1 | NULL                | 2020-06-16 22:07:02 | 2020-06-16 22:14:40 |        1 | 开发组     |\n|  2 | 2020-06-15 23:37:25 | 2020-06-15 23:37:25 | NULL                |        2 | 测试组     |\n|  3 | 2020-06-16 22:17:07 | 2020-06-16 22:17:07 | NULL                |        3 | 运营组     |\n|  4 | 2020-06-16 22:17:15 | 2020-06-16 22:17:15 | NULL                |        4 | 客服组     |\n|  5 | 2020-06-16 22:17:26 | 2020-06-16 22:17:26 | NULL                |        5 | OPS        |\n+----+---------------------+---------------------+---------------------+----------+------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);