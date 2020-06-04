;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-5a481066'],
  {
    '02f4': function (t, e, n) {
      var a = n('4588'),
        r = n('be13')
      t.exports = function (t) {
        return function (e, n) {
          var s,
            i,
            o = String(r(e)),
            c = a(n),
            u = o.length
          return c < 0 || c >= u
            ? t
              ? ''
              : void 0
            : ((s = o.charCodeAt(c)),
              s < 55296 ||
              s > 56319 ||
              c + 1 === u ||
              (i = o.charCodeAt(c + 1)) < 56320 ||
              i > 57343
                ? t
                  ? o.charAt(c)
                  : s
                : t
                ? o.slice(c, c + 2)
                : i - 56320 + ((s - 55296) << 10) + 65536)
        }
      }
    },
    1038: function (t, e, n) {
      'use strict'
      var a = n('7f37'),
        r = n.n(a)
      r.a
    },
    '198f': function (t, e, n) {
      'use strict'
      var a = n('1dc0'),
        r = n.n(a)
      r.a
    },
    '1be4': function (t, e, n) {},
    '1c4c': function (t, e, n) {
      'use strict'
      var a = n('9b43'),
        r = n('5ca1'),
        s = n('4bf8'),
        i = n('1fa8'),
        o = n('33a4'),
        c = n('9def'),
        u = n('f1ae'),
        l = n('27ee')
      r(
        r.S +
          r.F *
            !n('5cc5')(function (t) {
              Array.from(t)
            }),
        'Array',
        {
          from: function (t) {
            var e,
              n,
              r,
              p,
              f = s(t),
              v = 'function' == typeof this ? this : Array,
              d = arguments.length,
              _ = d > 1 ? arguments[1] : void 0,
              m = void 0 !== _,
              h = 0,
              b = l(f)
            if (
              (m && (_ = a(_, d > 2 ? arguments[2] : void 0, 2)),
              void 0 == b || (v == Array && o(b)))
            )
              for (e = c(f.length), n = new v(e); e > h; h++)
                u(n, h, m ? _(f[h], h) : f[h])
            else
              for (p = b.call(f), n = new v(); !(r = p.next()).done; h++)
                u(n, h, m ? i(p, _, [r.value, h], !0) : r.value)
            return (n.length = h), n
          },
        }
      )
    },
    '1dc0': function (t, e, n) {},
    '416f': function (t, e, n) {
      'use strict'
      var a = n('1be4'),
        r = n.n(a)
      r.a
    },
    5394: function (t, e, n) {
      'use strict'
      var a = n('c9dc'),
        r = n.n(a)
      r.a
    },
    '5dbc': function (t, e, n) {
      var a = n('d3f4'),
        r = n('8b97').set
      t.exports = function (t, e, n) {
        var s,
          i = e.constructor
        return (
          i !== n &&
            'function' == typeof i &&
            (s = i.prototype) !== n.prototype &&
            a(s) &&
            r &&
            r(t, s),
          t
        )
      }
    },
    '5df3': function (t, e, n) {
      'use strict'
      var a = n('02f4')(!0)
      n('01f9')(
        String,
        'String',
        function (t) {
          ;(this._t = String(t)), (this._i = 0)
        },
        function () {
          var t,
            e = this._t,
            n = this._i
          return n >= e.length
            ? { value: void 0, done: !0 }
            : ((t = a(e, n)), (this._i += t.length), { value: t, done: !1 })
        }
      )
    },
    '614f': function (t, e, n) {},
    '65ee': function (t, e, n) {
      'use strict'
      var a = n('614f'),
        r = n.n(a)
      r.a
    },
    '7f37': function (t, e, n) {},
    '8b97': function (t, e, n) {
      var a = n('d3f4'),
        r = n('cb7c'),
        s = function (t, e) {
          if ((r(t), !a(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!")
        }
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function (t, e, a) {
                try {
                  ;(a = n('9b43')(
                    Function.call,
                    n('11e9').f(Object.prototype, '__proto__').set,
                    2
                  )),
                    a(t, []),
                    (e = !(t instanceof Array))
                } catch (r) {
                  e = !0
                }
                return function (t, n) {
                  return s(t, n), e ? (t.__proto__ = n) : a(t, n), t
                }
              })({}, !1)
            : void 0),
        check: s,
      }
    },
    aa77: function (t, e, n) {
      var a = n('5ca1'),
        r = n('be13'),
        s = n('79e5'),
        i = n('fdef'),
        o = '[' + i + ']',
        c = '​',
        u = RegExp('^' + o + o + '*'),
        l = RegExp(o + o + '*$'),
        p = function (t, e, n) {
          var r = {},
            o = s(function () {
              return !!i[t]() || c[t]() != c
            }),
            u = (r[t] = o ? e(f) : i[t])
          n && (r[n] = u), a(a.P + a.F * o, 'String', r)
        },
        f = (p.trim = function (t, e) {
          return (
            (t = String(r(t))),
            1 & e && (t = t.replace(u, '')),
            2 & e && (t = t.replace(l, '')),
            t
          )
        })
      t.exports = p
    },
    c5f6: function (t, e, n) {
      'use strict'
      var a = n('7726'),
        r = n('69a8'),
        s = n('2d95'),
        i = n('5dbc'),
        o = n('6a99'),
        c = n('79e5'),
        u = n('9093').f,
        l = n('11e9').f,
        p = n('86cc').f,
        f = n('aa77').trim,
        v = 'Number',
        d = a[v],
        _ = d,
        m = d.prototype,
        h = s(n('2aeb')(m)) == v,
        b = 'trim' in String.prototype,
        g = function (t) {
          var e = o(t, !1)
          if ('string' == typeof e && e.length > 2) {
            e = b ? e.trim() : f(e, 3)
            var n,
              a,
              r,
              s = e.charCodeAt(0)
            if (43 === s || 45 === s) {
              if (((n = e.charCodeAt(2)), 88 === n || 120 === n)) return NaN
            } else if (48 === s) {
              switch (e.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(a = 2), (r = 49)
                  break
                case 79:
                case 111:
                  ;(a = 8), (r = 55)
                  break
                default:
                  return +e
              }
              for (var i, c = e.slice(2), u = 0, l = c.length; u < l; u++)
                if (((i = c.charCodeAt(u)), i < 48 || i > r)) return NaN
              return parseInt(c, a)
            }
          }
          return +e
        }
      if (!d(' 0o1') || !d('0b1') || d('+0x1')) {
        d = function (t) {
          var e = arguments.length < 1 ? 0 : t,
            n = this
          return n instanceof d &&
            (h
              ? c(function () {
                  m.valueOf.call(n)
                })
              : s(n) != v)
            ? i(new _(g(e)), n, d)
            : g(e)
        }
        for (
          var y,
            x = n('9e1e')
              ? u(_)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ','
                ),
            C = 0;
          x.length > C;
          C++
        )
          r(_, (y = x[C])) && !r(d, y) && p(d, y, l(_, y))
        ;(d.prototype = m), (m.constructor = d), n('2aba')(a, v, d)
      }
    },
    c9dc: function (t, e, n) {},
    e337: function (t, e, n) {
      'use strict'
      n.r(e)
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'data-vue' }, [
            n('h1', [t._v('vue 数据传递测试')]),
            n('div', { staticClass: 'item' }, [n('PropTest')], 1),
            n(
              'div',
              { staticClass: 'item' },
              [
                n(
                  'el-row',
                  { attrs: { gutter: 20 } },
                  [
                    n(
                      'el-col',
                      { attrs: { span: 12 } },
                      [
                        n('SInput', {
                          model: {
                            value: t.input,
                            callback: function (e) {
                              t.input = e
                            },
                            expression: 'input',
                          },
                        }),
                        n('p', [t._v(t._s(t.input))]),
                      ],
                      1
                    ),
                    n(
                      'el-col',
                      { attrs: { span: 12 } },
                      [
                        n('STextarea', {
                          model: {
                            value: t.textarea,
                            callback: function (e) {
                              t.textarea = e
                            },
                            expression: 'textarea',
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            n('div', { staticClass: 'item' }, [n('Store')], 1),
            n(
              'div',
              { staticClass: 'item' },
              [
                n('h1', [t._v('测试 provide/inject')]),
                n('h3', [t._v(t._s(t.inject_data))]),
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: t.inject_data,
                      expression: 'inject_data',
                    },
                  ],
                  attrs: { type: 'text' },
                  domProps: { value: t.inject_data },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.inject_data = e.target.value)
                    },
                  },
                }),
                n('DataTest'),
              ],
              1
            ),
          ])
        },
        r = [],
        s =
          (n('ac6a'),
          n('5df3'),
          n('1c4c'),
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              [
                n('h3', [t._v('指定prop传递参数')]),
                n('pre', [
                  t._v(
                    '    https://cn.vuejs.org/v2/guide/components-props.html\n    ' +
                      t._s(t.vue_code_example) +
                      '\n  '
                  ),
                ]),
                n('div', { staticClass: 's-input' }, [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: t.p_prop,
                        expression: 'p_prop',
                      },
                    ],
                    attrs: { type: 'text' },
                    domProps: { value: t.p_prop },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.p_prop = e.target.value)
                      },
                    },
                  }),
                ]),
                n('Child', { attrs: { child: t.p_prop } }),
              ],
              1
            )
          }),
        i = [],
        o = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'vue-prop-child' }, [
            t._m(0),
            t._m(1),
            n('div', { staticClass: 'prop-child', class: t.child }, [
              t._v('\n    传递的参数 '),
              n('span', { staticClass: 'params' }, [t._v(t._s(t.child))]),
              n(
                'span',
                { staticClass: 'p-red', class: { 'p-green': t.isTrue } },
                [t._v(t._s(t.isTrue ? '传参正确' : '传参不对'))]
              ),
              t.isTrue
                ? t._e()
                : n('pre', [t._v('      ' + t._s(t.error) + '\n    ')]),
            ]),
          ])
        },
        c = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('p', [
              t._v('prop 只能选择 '),
              n('span', { staticClass: 'code-red' }, [
                t._v("['small', 'middle', 'large', 'default']"),
              ]),
              t._v(' 这里的值进行传递'),
            ])
          },
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('ul', { staticClass: 'box-content' }, [
              n('li', { staticClass: 'small' }, [t._v('small')]),
              n('li', { staticClass: 'middle' }, [t._v('middle')]),
              n('li', { staticClass: 'large' }, [t._v('large')]),
              n('li', { staticClass: 'default' }, [t._v('default')]),
            ])
          },
        ]
      n('6762'), n('2fdb')
      function u(t) {
        return ['small', 'middle', 'large', 'default'].includes(t)
      }
      var l = {
          props: {
            child: {
              validator: function (t) {
                return u(t)
              },
              default: 'default',
            },
          },
          data: function () {
            return {
              error:
                '\n        <Child> at src/views/vue-test/DataTransmission/PropTestChild.vue\n            <PropTest> at src/views/vue-test/DataTransmission/PropTest.vue\n              <Data> at src/views/vue-test/Data.vue\n                <Card>\n                  <Content>\n                    <Layout>\n                      <ElScrollbar>\n                        <App> at src/App.vue\n                          <Root>\n      ',
            }
          },
          computed: {
            isTrue: function () {
              return u(this.child)
            },
          },
        },
        p = l,
        f = (n('5394'), n('2877')),
        v = Object(f['a'])(p, o, c, !1, null, null, null),
        d = v.exports,
        _ = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', [
            t._v('\n  low的一种方式\n  '),
            n('input', {
              attrs: { type: 'text' },
              domProps: { value: t.currentValue },
              on: { input: t.handleInput },
            }),
          ])
        },
        m = [],
        h =
          (n('c5f6'),
          {
            props: { value: { type: [String, Number], default: '' } },
            data: function () {
              return { currentValue: this.value }
            },
            methods: {
              handleInput: function (t) {
                this.$emit('input', t.target.value)
              },
            },
          }),
        b = h,
        g = Object(f['a'])(b, _, m, !1, null, '65a318fe', null),
        y = g.exports,
        x = {
          components: { Child: d, SInput: y },
          data: function () {
            return {
              p_prop: 'small',
              vue_code_example:
                "\n        Vue.component('my-component', {\n          props: {\n            // 基础的类型检查 ('null' 匹配任何类型)\n            propA: Number,\n            // 多个可能的类型\n            propB: [String, Number],\n            // 必填的字符串\n            propC: {\n              type: String,\n              required: true\n            },\n            // 带有默认值的数字\n            propD: {\n              type: Number,\n              default: 100\n            },\n            // 带有默认值的对象\n            propE: {\n              type: Object,\n              // 对象或数组默认值必须从一个工厂函数获取\n              default: function () {\n                return { message: 'hello' }\n              }\n            },\n            // 自定义验证函数\n            propF: {\n              validator: function (value) {\n                // 这个值必须匹配下列字符串中的一个\n                return ['success', 'warning', 'danger'].indexOf(value) !== -1\n              }\n            }\n          }\n        })",
            }
          },
        },
        C = x,
        j = (n('416f'), Object(f['a'])(C, s, i, !1, null, null, null)),
        O = j.exports,
        S = function () {
          var t = this,
            e = t.$createElement
          t._self._c
          return t._m(0)
        },
        E = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', [
              t._v('\n  此处不会了，iview 和 element 不太了解\n  '),
              n('textarea'),
            ])
          },
        ],
        w = {},
        N = w,
        A = Object(f['a'])(N, S, E, !1, null, '3175a66e', null),
        I = A.exports,
        T = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'store-test' }, [
            n(
              'span',
              {
                staticStyle: {
                  color: 'red',
                  'font-weight': 'bold',
                  'font-size': '20px',
                },
              },
              [t._v(t._s(t.count))]
            ),
            n(
              'pre',
              [
                t._v('    '),
                n(
                  'el-row',
                  { attrs: { gutter: 20 } },
                  [
                    t._v('\n      '),
                    n('el-col', { attrs: { span: 12 } }, [
                      t._v('\n        '),
                      n('p', { staticClass: 'code-style' }, [
                        t._v(
                          '\n          一般获取vuex里的值\n         ' +
                            t._s(t.code1) +
                            '\n        '
                        ),
                      ]),
                      t._v('\n      '),
                    ]),
                    t._v('\n      '),
                    n('el-col', { attrs: { span: 12 } }, [
                      t._v('\n        '),
                      n('p', { staticClass: 'code-style' }, [
                        t._v(
                          '\n          若是名字相同，可以简化\n         ' +
                            t._s(t.code2) +
                            '\n        '
                        ),
                      ]),
                      t._v('\n      '),
                    ]),
                    t._v('\n    '),
                  ],
                  1
                ),
                t._v('\n  '),
              ],
              1
            ),
          ])
        },
        P = [],
        $ = (n('8e6e'), n('456d'), n('bd86')),
        D = n('2f62')
      function F(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t)
          e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? F(n, !0).forEach(function (e) {
                Object($['a'])(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : F(n).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                )
              })
        }
        return t
      }
      var V = {
          data: function () {
            return {
              code1:
                "import { mapState } from 'vuex'\n        ...\n        computed: mapState('module', {\n          value: state => state.value\n        })\n      ",
              code2:
                "\n      import { mapState } from 'vuex'\n      ...\n      computed: mapState('module', [\n        count\n      ]) \n      ",
            }
          },
          computed: k({}, Object(D['c'])('test', ['count'])),
        },
        L = V,
        R = (n('1038'), Object(f['a'])(L, T, P, !1, null, null, null)),
        M = R.exports,
        G = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'data-test' }, [
            n('h3', [t._v('测试数据是否是动态修改')]),
            n('p', { staticClass: 'title' }, [
              t._v('返回的数据是 Object -- 响应式的'),
            ]),
            n('p', { staticClass: 'data' }, [
              t._v(t._s(t.data._data.inject_data)),
            ]),
            n('p', { staticClass: 'title' }, [
              t._v('返回的数据不是对象 -- 不是响应式的'),
            ]),
            n('p', { staticClass: 'data' }, [t._v(t._s(t.aa))]),
            n('div', { staticClass: 'data-item' }, [
              n('p', { staticClass: 'title' }, [
                t._v(
                  '测试子组件修改参数会不会直接影响父元素数据，还是要通过 $emit 进行修改 '
                ),
              ]),
              n('input', {
                directives: [
                  {
                    name: 'model',
                    rawName: 'v-model',
                    value: t.aa,
                    expression: 'aa',
                  },
                ],
                attrs: { type: 'text' },
                domProps: { value: t.aa },
                on: {
                  input: function (e) {
                    e.target.composing || (t.aa = e.target.value)
                  },
                },
              }),
              n('br'),
              t._v(
                '\n    /* 测试结果 可以修改当前组件显示的数据 ----- |不是响应式的| ----- ， 但是会报错 */\n  '
              ),
            ]),
          ])
        },
        q = [],
        J = {
          inject: ['data', 'aa'],
          created: function () {
            console.log(this.data)
          },
        },
        U = J,
        X = (n('65ee'), Object(f['a'])(U, G, q, !1, null, null, null)),
        Y = X.exports,
        z = {
          components: {
            PropTest: O,
            STextarea: I,
            SInput: y,
            Store: M,
            DataTest: Y,
          },
          data: function () {
            return {
              input: '',
              textarea: '',
              inject_data: '我是通过 provide / inject 的方式进行传递参数的',
            }
          },
          provide: function () {
            return { data: this, aa: this.inject_data }
          },
          mounted: function () {
            var t = Array.from(document.querySelectorAll('.item'))
            t.forEach(function (t) {
              ;(t.onmouseenter = function () {
                t.classList.add('hover')
              }),
                (t.onmouseleave = function () {
                  t.classList.remove('hover')
                })
            })
          },
        },
        B = z,
        H = (n('198f'), Object(f['a'])(B, a, r, !1, null, null, null))
      e['default'] = H.exports
    },
    fdef: function (t, e) {
      t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff'
    },
  },
])
//# sourceMappingURL=chunk-5a481066.9bd204ec.js.map
