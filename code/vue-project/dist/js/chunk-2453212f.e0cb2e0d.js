;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2453212f'],
  {
    '714b': function (e, t, n) {},
    a31a: function (e, t, n) {},
    a7cd: function (e, t, n) {
      'use strict'
      var i = n('714b'),
        o = n.n(i)
      o.a
    },
    c3d3: function (e, t, n) {
      'use strict'
      var i = n('a31a'),
        o = n.n(i)
      o.a
    },
    fb32: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', [
            n('h1', [e._v('vue animate')]),
            e._m(0),
            n(
              'section',
              { staticClass: 'item' },
              [
                n('div', [
                  n(
                    'button',
                    {
                      on: {
                        click: function (t) {
                          e.show = !e.show
                        },
                      },
                    },
                    [e._v('toggle')]
                  ),
                ]),
                n('transition', { attrs: { name: 'show' } }, [
                  n(
                    'p',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: e.show,
                          expression: 'show',
                        },
                      ],
                      staticClass: 'item-1',
                    },
                    [e._v('hello word')]
                  ),
                ]),
              ],
              1
            ),
            n('section', { staticClass: 'item' }, [
              n('p', [e._v('使用动画 @keyframes')]),
              n(
                'div',
                [
                  n('div', [
                    n(
                      'button',
                      {
                        on: {
                          click: function (t) {
                            e.isShow = !e.isShow
                          },
                        },
                      },
                      [e._v('show')]
                    ),
                  ]),
                  n('transition', { attrs: { name: 'show1' } }, [
                    n(
                      'p',
                      {
                        directives: [
                          {
                            name: 'show',
                            rawName: 'v-show',
                            value: e.isShow,
                            expression: 'isShow',
                          },
                        ],
                        staticClass: 'item-2',
                      },
                      [e._v('show1ma')]
                    ),
                  ]),
                ],
                1
              ),
            ]),
            n('section', { staticClass: 'item' }, [
              n(
                'button',
                {
                  on: {
                    click: function (t) {
                      e.isItemShow = !e.isItemShow
                    },
                  },
                },
                [e._v('isItemShow')]
              ),
              n(
                'div',
                { staticClass: 'overflow' },
                [
                  n(
                    'transition',
                    {
                      attrs: {
                        'enter-active-class': 'enter-active',
                        'leave-active-class': 'leave-active',
                      },
                      on: {
                        'before-enter': e.beforeEnter,
                        enter: e.enter,
                        leave: e.leave,
                      },
                    },
                    [
                      n(
                        'div',
                        {
                          directives: [
                            { name: 'height', rawName: 'v-height' },
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: e.isItemShow,
                              expression: 'isItemShow',
                            },
                          ],
                        },
                        [e._v('当时明月在，'), n('br'), e._v(' 曾照彩云归')]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
            n(
              'section',
              { staticClass: 'item' },
              [
                n(
                  'button',
                  {
                    on: {
                      click: function (t) {
                        e.isItemOther = !e.isItemOther
                      },
                    },
                  },
                  [e._v('isItemShow')]
                ),
                n('animateAcco', [
                  n(
                    'div',
                    {
                      directives: [
                        { name: 'height', rawName: 'v-height' },
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: e.isItemOther,
                          expression: 'isItemOther',
                        },
                      ],
                    },
                    [e._v('当时明月在，'), n('br'), e._v(' 曾照彩云归')]
                  ),
                ]),
              ],
              1
            ),
            n(
              'section',
              { staticClass: 'item' },
              [
                n(
                  'button',
                  {
                    on: {
                      click: function (t) {
                        e.isItemOther2 = !e.isItemOther2
                      },
                    },
                  },
                  [e._v('isItemOther2')]
                ),
                n('AccordionAnimate', [
                  n(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: e.isItemOther2,
                          expression: 'isItemOther2',
                        },
                      ],
                    },
                    [e._v('当时明月在，'), n('br'), e._v(' 曾照彩云归')]
                  ),
                ]),
              ],
              1
            ),
          ])
        },
        o = [
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('section', { staticClass: 'item' }, [
              n('ol', [
                n('li', [
                  n('h3', [
                    e._v(
                      '需要注意，若是 v-enter / v-leave-to 所涉及到样式跟初始样式一致（或者部分一致），会导致动画不会完整地执行'
                    ),
                  ]),
                ]),
                n('li', [
                  n('pre', [
                    e._v('          '),
                    n('code', [e._v('v-enter')]),
                    e._v('\n        '),
                  ]),
                  e._v('\n        开始状态，初始化动画开始的状态\n      '),
                ]),
                n('li', [
                  n('pre', [
                    e._v('          '),
                    n('code', [e._v('v-enter-active')]),
                    e._v('\n        '),
                  ]),
                  e._v(
                    '\n        v-enter 删除\n        过渡效果，动画完成前\n      '
                  ),
                ]),
                n('li', [
                  n('pre', [
                    e._v('          '),
                    n('code', [e._v('v-enter-to')]),
                    e._v('\n        '),
                  ]),
                  e._v('\n        动画完成\n        '),
                  n('h5', [
                    e._v(
                      '完成后，恢复为最初定义的状态，之前的动画状态都已消失'
                    ),
                  ]),
                ]),
                n('li', [
                  n('pre', [
                    e._v('          '),
                    n('code', [e._v('v-leave')]),
                    e._v('\n        '),
                  ]),
                  e._v('\n        动画离开的初始状态\n      '),
                ]),
                n('li', [
                  n('pre', [
                    e._v('          '),
                    n('code', [e._v('v-enter')]),
                    e._v('\n        '),
                  ]),
                  e._v('\n        开始状态，初始化动画开始的状态\n      '),
                ]),
                n('li', [
                  n('pre', [
                    e._v('          '),
                    n('code', [e._v('v-leave-active')]),
                    e._v('\n        '),
                  ]),
                  e._v('\n        动画离开的过渡\n      '),
                ]),
                n('li', [
                  n('pre', [
                    e._v('          '),
                    n('code', [e._v('v-leave-to')]),
                    e._v('\n        '),
                  ]),
                  e._v('\n        动画离开完成\n        '),
                  n('h5', [e._v('相当于离开的情况')]),
                ]),
              ]),
            ])
          },
        ],
        r = (n('8e6e'), n('ac6a'), n('456d'), n('bd86'))
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(n, !0).forEach(function (t) {
                Object(r['a'])(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      var c = 'margin-top .5s;',
        v = {
          beforeEnter: function (e) {
            ;(e.style.transition = c), (e.style.display = 'block')
          },
          enter: function (e, t) {
            window.requestAnimationFrame(function () {
              window.requestAnimationFrame(function () {})
            }),
              (e.style.marginTop = 0),
              (e.style.overflow = 'hidden')
          },
          afterEnter: function (e) {
            ;(e.style.transition = ''), (e.style.marginTop = 0)
          },
          beforeLeave: function (e) {
            e.style.marginTop = 0
          },
          leave: function (e, t) {
            ;(e.style.transition = c),
              (e.style.marginTop = '-'.concat(e.offsetHeight, 'px'))
          },
          afterLeave: function (e) {
            e.style.transition = ''
          },
        },
        l = {
          name: 'AccordionAnimate',
          functional: !0,
          render: function (e, t) {
            var n = t.children,
              i = { on: a({}, v) }
            return e('transition', i, n)
          },
        },
        m = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            { staticClass: 'overflow' },
            [
              n(
                'transition',
                {
                  attrs: {
                    'enter-active-class': 'enter-active',
                    'leave-active-class': 'leave-active',
                  },
                  on: {
                    'before-enter': e.beforeEnter,
                    enter: e.enter,
                    leave: e.leave,
                  },
                },
                [e._t('default')],
                2
              ),
            ],
            1
          )
        },
        u = [],
        f = {
          name: 'AccordionAnimate',
          directives: {
            height: {
              inserted: function (e, t, n) {
                ;(e.children[0].style.display = 'block'),
                  (e.children[0].style.marginTop = '-'.concat(
                    e.offsetHeight,
                    'px'
                  )),
                  (e.children[0].style.display = 'none')
              },
            },
          },
          methods: {
            beforeEnter: function (e) {
              e.style.display = 'block'
            },
            enter: function (e, t) {
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  e.style.marginTop = 0
                })
              })
            },
            beforeLeave: function (e) {
              e.style.marginTop = 0
            },
            leave: function (e, t) {
              e.style.marginTop = '-'.concat(e.offsetHeight, 'px')
            },
          },
        },
        h = f,
        d = (n('a7cd'), n('2877')),
        p = Object(d['a'])(h, m, u, !1, null, null, null),
        w = p.exports,
        _ = {
          name: 'vue-animate',
          components: { AccordionAnimate: l, animateAcco: w },
          data: function () {
            return {
              show: !1,
              isShow: !0,
              isItemShow: !1,
              isItemOther: !1,
              isItemOther2: !1,
            }
          },
          directives: {
            height: {
              inserted: function (e, t, n) {
                ;(e.style.display = 'block'),
                  (e.style.marginTop = '-'.concat(e.offsetHeight, 'px')),
                  (e.style.display = 'none')
              },
            },
          },
          methods: {
            getHeight: function (e) {
              console.log(e, 222222)
            },
            tran: function (e) {
              console.log(e, 0xa1b01d4b1c7)
            },
            beforeEnter: function (e) {
              e.style.display = 'block'
            },
            enter: function (e, t) {
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  e.style.marginTop = 0
                })
              })
            },
            beforeLeave: function (e) {
              e.style.marginTop = 0
            },
            leave: function (e, t) {
              e.style.marginTop = '-'.concat(e.offsetHeight, 'px')
            },
          },
        },
        b = _,
        y = (n('c3d3'), Object(d['a'])(b, i, o, !1, null, '3346aead', null))
      t['default'] = y.exports
    },
  },
])
//# sourceMappingURL=chunk-2453212f.e0cb2e0d.js.map
