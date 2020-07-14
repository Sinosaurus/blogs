;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-3491bc06'],
  {
    b4dc: function (t, n, s) {
      'use strict'
      var e = s('ee32'),
        i = s.n(e)
      i.a
    },
    ee32: function (t, n, s) {},
    f3f3: function (t, n, s) {
      'use strict'
      s.r(n)
      var e = function () {
          var t = this,
            n = t.$createElement,
            s = t._self._c || n
          return s('div', [
            s('h1', [t._v('文字底部横线')]),
            t._m(0),
            s('section', { staticClass: 'item' }, [
              s('pre', { staticClass: 'prettyprint' }, [
                t._v('      '),
                s('code', { staticClass: 'lang-html' }, [t._v(t._s(t.item1))]),
                t._v('\n      '),
                s('code', { staticClass: 'lang-html' }, [t._v(t._s(t.css1))]),
                t._v('\n    '),
              ]),
              t._m(1),
            ]),
            s('section', { staticClass: 'item' }),
          ])
        },
        i = [
          function () {
            var t = this,
              n = t.$createElement,
              s = t._self._c || n
            return s('section', { staticClass: 'item' }, [
              s('pre', { staticClass: 'prettyprint lang-css' }, [
                t._v(
                  '     .link {\n        text-decoration: underline;\n      }\n    '
                ),
              ]),
              s('a', { staticClass: 'link', attrs: { href: '#/' } }, [
                t._v('我是横线'),
              ]),
            ])
          },
          function () {
            var t = this,
              n = t.$createElement,
              s = t._self._c || n
            return s('div', { staticClass: 'item-1' }, [
              s('a', { staticClass: 'link1', attrs: { href: '#/' } }, [
                t._v(
                  '我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线'
                ),
              ]),
            ])
          },
        ],
        a = {
          data: function () {
            return {
              item1:
                '\n        <div class="item-1">\n          <a\n            class="link1"\n            href="#/"\n          >我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线我是横线</a>\n        </div>\n      ',
              css1:
                '\n        .item-1 {\n          max-width: 150px;\n        }\n        .link1 {\n          border-bottom: 2px solid #ccc;\n        }\n      ',
            }
          },
          mounted: function () {
            var t = this
            this.$nextTick(function () {
              t.$prettyPrint.prettyPrint()
            })
          },
        },
        c = a,
        r = (s('b4dc'), s('2877')),
        l = Object(r['a'])(c, e, i, !1, null, '5be813b2', null)
      n['default'] = l.exports
    },
  },
])
//# sourceMappingURL=chunk-3491bc06.230bb534.js.map
