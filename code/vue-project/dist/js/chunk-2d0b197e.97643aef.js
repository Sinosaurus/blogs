;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2d0b197e'],
  {
    2109: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            [
              n('h1', [e._v('parent')]),
              n('button', { on: { click: e.goChild } }, [e._v('fdsafsaf')]),
              n('router-link', { attrs: { to: '/child/one' } }, [
                e._v('fdsasasasasasasa'),
              ]),
              n('router-view'),
            ],
            1
          )
        },
        s = [],
        o = {
          methods: {
            goChild: function () {
              this.$router.push({ name: 'one' })
            },
          },
          created: function () {
            alert('created--p')
          },
        },
        r = o,
        u = n('2877'),
        c = Object(u['a'])(r, a, s, !1, null, null, null)
      t['default'] = c.exports
    },
  },
])
//# sourceMappingURL=chunk-2d0b197e.97643aef.js.map
