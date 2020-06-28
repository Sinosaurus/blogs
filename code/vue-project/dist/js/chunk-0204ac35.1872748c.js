;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-0204ac35'],
  {
    '146b': function (t, n, s) {},
    5255: function (t, n, s) {
      'use strict'
      var c = s('146b'),
        i = s.n(c)
      i.a
    },
    fb9c: function (t, n, s) {
      'use strict'
      s.r(n)
      var c = function () {
          var t = this,
            n = t.$createElement,
            s = t._self._c || n
          return s('div', { staticClass: 'webpack' }, [
            t._m(0),
            s('main', { staticClass: 'wb-main' }, [
              s('p', { staticClass: 'wb-main-title' }, [
                t._v('用来读取环境变量，颜色相同，代表对应的环境'),
              ]),
              s(
                'section',
                { class: 'wb-' + t.envInfo.VUE_APP_CURRENTMODE },
                t._l(t.envInfo, function (n, c) {
                  return s('p', { key: c }, [
                    t._v('\n        ' + t._s(c) + ' : ' + t._s(n) + '\n      '),
                  ])
                }),
                0
              ),
            ]),
          ])
        },
        i = [
          function () {
            var t = this,
              n = t.$createElement,
              s = t._self._c || n
            return s('nav', [
              s('ul', { staticClass: 'wb-title' }, [
                s('li', { staticClass: 'wb-development' }, [t._v('开发环境')]),
                s('li', { staticClass: 'wb-production' }, [t._v('生产环境')]),
                s('li', { staticClass: 'wb-test' }, [t._v('测试环境')]),
              ]),
            ])
          },
        ],
        a = {
          data: function () {
            return {
              envInfo: Object({
                VUE_APP_CURRENTMODE: 'production',
                VUE_APP_ENV: 'production环境',
                VUE_APP_LOGOUT_URL: 'http://l72.16.0.95/logout_production',
                NODE_ENV: 'production',
                BASE_URL: '',
              }),
            }
          },
        },
        e = a,
        l = (s('5255'), s('2877')),
        o = Object(l['a'])(e, c, i, !1, null, null, null)
      n['default'] = o.exports
    },
  },
])
//# sourceMappingURL=chunk-0204ac35.1872748c.js.map
