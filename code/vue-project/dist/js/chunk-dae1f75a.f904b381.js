;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-dae1f75a'],
  {
    '422a': function (t, n, e) {},
    '4a79': function (t, n, e) {
      'use strict'
      var s = e('c671'),
        l = e.n(s)
      l.a
    },
    '61de': function (t, n, e) {},
    6330: function (t, n, e) {
      'use strict'
      var s = e('61de'),
        l = e.n(s)
      l.a
    },
    '6a27': function (t, n, e) {
      'use strict'
      var s = e('422a'),
        l = e.n(s)
      l.a
    },
    '74c0': function (t, n, e) {},
    7940: function (t, n, e) {},
    c671: function (t, n, e) {},
    cce2: function (t, n, e) {
      'use strict'
      var s = e('74c0'),
        l = e.n(s)
      l.a
    },
    dc97: function (t, n, e) {
      'use strict'
      e.r(n)
      var s = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'slot-v' },
            [
              e('h1', [t._v('vue-slot')]),
              e(
                'el-row',
                { attrs: { gutter: 20 } },
                [
                  e(
                    'el-col',
                    { attrs: { span: 12 } },
                    [e('p', [t._v('slot1')]), e('slot1')],
                    1
                  ),
                  e(
                    'el-col',
                    { attrs: { span: 12 } },
                    [e('p', [t._v('slot2')]), e('slot2')],
                    1
                  ),
                ],
                1
              ),
              e('br'),
              e('br'),
              e('TestSlot'),
            ],
            1
          )
        },
        l = [],
        o = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'slot-1' },
            [
              e('h3', [t._v('slot1')]),
              e(
                'slotCom',
                [
                  e('h5', { attrs: { slot: 'title' }, slot: 'title' }, [
                    t._v('title'),
                  ]),
                  e('span', { attrs: { slot: 'text' }, slot: 'text' }, [
                    t._v('text'),
                  ]),
                  e('el-button', { on: { click: t.handleTestSlot } }, [
                    t._v('slot-button'),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        a = [],
        r = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'slot-common' },
            [
              e('h1', { staticClass: 'title' }, [t._v('slot common')]),
              t._t('default'),
              t._t('title'),
              t._t('text'),
            ],
            2
          )
        },
        u = [],
        c = {
          data: function () {
            return { test: '' }
          },
        },
        i = c,
        f = (e('6a27'), e('2877')),
        _ = Object(f['a'])(i, r, u, !1, null, null, null),
        v = _.exports,
        d = {
          components: { slotCom: v },
          methods: {
            handleTestSlot: function () {
              this.$message.success('教室里打开房间里就是风大')
            },
          },
        },
        p = d,
        m = (e('cce2'), Object(f['a'])(p, o, a, !1, null, null, null)),
        h = m.exports,
        b = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'slot-2' },
            [
              e('h3', [t._v('slot2')]),
              e('slotCom', [
                e(
                  'ul',
                  { staticClass: 'ul' },
                  t._l(t.ulList, function (n) {
                    return e('li', { key: n.id }, [t._v(t._s(n.name))])
                  }),
                  0
                ),
              ]),
            ],
            1
          )
        },
        x = [],
        C = {
          components: { slotCom: v },
          data: function () {
            return {
              test: '1234567890-',
              ulList: [
                { id: 0, name: 'Sinosaurus' },
                { id: 1, name: 'zhen' },
                { id: 2, name: 'jim' },
              ],
            }
          },
        },
        j = C,
        k = (e('4a79'), Object(f['a'])(j, b, x, !1, null, null, null)),
        w = k.exports,
        $ = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            { staticClass: 'other-slot' },
            [
              e('h1', [t._v('vue 2.6.6  v-slot 使用 ')]),
              e(
                'el-row',
                { attrs: { gutter: 4 } },
                [
                  e(
                    'el-col',
                    { attrs: { span: 8 } },
                    [
                      e(
                        'slot1',
                        {
                          scopedSlots: t._u([
                            {
                              key: 'default',
                              fn: function (n) {
                                var s = n.slot1
                                return [
                                  t._v(
                                    '\n          slot1 传递的参数 === ' +
                                      t._s(s) +
                                      ' '
                                  ),
                                  e('br'),
                                  t._v(
                                    '\n          当前组件 === ' +
                                      t._s(t.parent) +
                                      '\n        '
                                  ),
                                ]
                              },
                            },
                          ]),
                        },
                        [e('h2', [t._v('slot1')])]
                      ),
                    ],
                    1
                  ),
                  e(
                    'el-col',
                    { attrs: { span: 8 } },
                    [
                      e('h2', [t._v('slot2 具名插槽')]),
                      e('slot2', {
                        scopedSlots: t._u([
                          {
                            key: 'header',
                            fn: function () {
                              return [
                                t._v('\n          落花有意随流水\n          '),
                                e('br'),
                              ]
                            },
                            proxy: !0,
                          },
                          {
                            key: 'footer',
                            fn: function (n) {
                              var e = n.foot
                              return [
                                t._v('\n          ' + t._s(e) + '\n        '),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                  e('el-col', { attrs: { span: 8 } }),
                ],
                1
              ),
            ],
            1
          )
        },
        E = [],
        O = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e('div', [t._t('default', null, { slot1: t.slot1 })], 2)
        },
        S = [],
        y = {
          data: function () {
            return { slot1: '我是 slot1 测试' }
          },
        },
        T = y,
        g = Object(f['a'])(T, O, S, !1, null, '0e3199c1', null),
        J = g.exports,
        L = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            [t._t('header'), t._t('footer', null, { foot: t.footer })],
            2
          )
        },
        z = [],
        q = {
          data: function () {
            return { footer: '我是底部数据' }
          },
        },
        A = q,
        B = Object(f['a'])(A, L, z, !1, null, '3a9050da', null),
        D = B.exports,
        F = {
          components: { slot1: J, slot2: D },
          data: function () {
            return { parent: '我是套用 slot 的数据' }
          },
        },
        G = F,
        H = (e('e73d'), Object(f['a'])(G, $, E, !1, null, null, null)),
        I = H.exports,
        K = {
          name: 'slot-test',
          components: { slot1: h, slot2: w, TestSlot: I },
          data: function () {
            return {}
          },
        },
        M = K,
        N = (e('6330'), Object(f['a'])(M, s, l, !1, null, null, null))
      n['default'] = N.exports
    },
    e73d: function (t, n, e) {
      'use strict'
      var s = e('7940'),
        l = e.n(s)
      l.a
    },
  },
])
//# sourceMappingURL=chunk-dae1f75a.f904b381.js.map
