;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-30a9458e'],
  {
    3948: function (n, t, i) {
      'use strict'
      var e = i('52a8'),
        s = i.n(e)
      s.a
    },
    '52a8': function (n, t, i) {},
    '9a73': function (n, t, i) {
      n.exports = i.p + 'img/css-quiz-1.1970086a.jpg'
    },
    c588: function (n, t, i) {
      'use strict'
      i.r(t)
      var e = function () {
          var n = this,
            t = n.$createElement,
            e = n._self._c || t
          return e('div', { staticClass: 'css-zxx' }, [
            e('img', {
              staticClass: 'zxx-img',
              attrs: { src: i('9a73'), alt: '' },
            }),
            e('div', { staticClass: 'css-code-views' }, [
              e(
                'dl',
                [
                  n._l(n.infoList, function (t, i) {
                    return [
                      e('dt', { key: i }, [n._v(n._s(t.title))]),
                      e('dd', { key: i }, [n._v(n._s(t.info))]),
                    ]
                  }),
                ],
                2
              ),
            ]),
            e(
              'a',
              {
                attrs: {
                  href:
                    'https://www.zhangxinxu.com/wordpress/2019/01/css-quiz-1/',
                },
              },
              [n._v('https://www.zhangxinxu.com/wordpress/2019/01/css-quiz-1/')]
            ),
            e(
              'pre',
              [
                n._v('    '),
                n._l(n.codeList, function (t, i) {
                  return e('div', {
                    key: i,
                    domProps: { textContent: n._s(t) },
                  })
                }),
                n._v('\n  '),
              ],
              2
            ),
          ])
        },
        s = [],
        o = {
          data: function () {
            return {
              infoList: [
                { title: '手机系统', info: 'Android' },
                { title: '登录方式', info: '' },
                { title: '绑定事件', info: new Date().toLocaleTimeString() },
                { title: '绑定状态', info: '' },
              ],
              codeList: [
                '\n        dl {\n          border: 1px solid #000;\n          position: relative;\n        }\n        dd {\n          position: absolute;\n          right: 0;\n          margin: -1.2em 0 0 0;\n          // 文字多时自动换行\n          word-break: break-all;\n          white-space: wrap;\n        }',
                '\n        // ----- 没有值时进行占位 ----\n        &:empty::before { \n          content: "------";\n          color: #999;\n          background-color: red;\n        }',
              ],
            }
          },
        },
        r = o,
        a = (i('3948'), i('2877')),
        c = Object(a['a'])(r, e, s, !1, null, null, null)
      t['default'] = c.exports
    },
  },
])
//# sourceMappingURL=chunk-30a9458e.486e092c.js.map
