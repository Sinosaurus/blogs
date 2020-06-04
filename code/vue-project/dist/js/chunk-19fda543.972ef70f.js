;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-19fda543'],
  {
    '02f4': function (e, r, t) {
      var o = t('4588'),
        n = t('be13')
      e.exports = function (e) {
        return function (r, t) {
          var l,
            a,
            s = String(n(r)),
            i = o(t),
            c = s.length
          return i < 0 || i >= c
            ? e
              ? ''
              : void 0
            : ((l = s.charCodeAt(i)),
              l < 55296 ||
              l > 56319 ||
              i + 1 === c ||
              (a = s.charCodeAt(i + 1)) < 56320 ||
              a > 57343
                ? e
                  ? s.charAt(i)
                  : l
                : e
                ? s.slice(i, i + 2)
                : a - 56320 + ((l - 55296) << 10) + 65536)
        }
      }
    },
    '1c4c': function (e, r, t) {
      'use strict'
      var o = t('9b43'),
        n = t('5ca1'),
        l = t('4bf8'),
        a = t('1fa8'),
        s = t('33a4'),
        i = t('9def'),
        c = t('f1ae'),
        u = t('27ee')
      n(
        n.S +
          n.F *
            !t('5cc5')(function (e) {
              Array.from(e)
            }),
        'Array',
        {
          from: function (e) {
            var r,
              t,
              n,
              m,
              f = l(e),
              d = 'function' == typeof this ? this : Array,
              p = arguments.length,
              g = p > 1 ? arguments[1] : void 0,
              v = void 0 !== g,
              b = 0,
              h = u(f)
            if (
              (v && (g = o(g, p > 2 ? arguments[2] : void 0, 2)),
              void 0 == h || (d == Array && s(h)))
            )
              for (r = i(f.length), t = new d(r); r > b; b++)
                c(t, b, v ? g(f[b], b) : f[b])
            else
              for (m = h.call(f), t = new d(); !(n = m.next()).done; b++)
                c(t, b, v ? a(m, g, [n.value, b], !0) : n.value)
            return (t.length = b), t
          },
        }
      )
    },
    2034: function (e, r, t) {},
    '236b': function (e, r, t) {
      'use strict'
      t('8e6e'), t('ac6a'), t('456d')
      var o = t('bd86'),
        n = t('2f62')
      function l(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? l(t, !0).forEach(function (r) {
                Object(o['a'])(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(t).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      r['a'] = {
        computed: a(
          {},
          Object(n['c'])('formData', {
            areaList: function (e) {
              return e.formInitData.areaList
            },
            typeList: function (e) {
              return e.formInitData.typeList
            },
          })
        ),
        methods: {
          submitForm: function (e) {
            var r = this
            this.$refs[e].validate(function (e) {
              e ? r.$Message.success('success') : r.$Message.error('error')
            })
          },
          resetForm: function (e) {
            this.$refs[e].resetFields()
          },
        },
      }
    },
    '5df3': function (e, r, t) {
      'use strict'
      var o = t('02f4')(!0)
      t('01f9')(
        String,
        'String',
        function (e) {
          ;(this._t = String(e)), (this._i = 0)
        },
        function () {
          var e,
            r = this._t,
            t = this._i
          return t >= r.length
            ? { value: void 0, done: !0 }
            : ((e = o(r, t)), (this._i += e.length), { value: e, done: !1 })
        }
      )
    },
    '96ba': function (e, r, t) {
      'use strict'
      t.r(r)
      var o = function () {
          var e = this,
            r = e.$createElement,
            t = e._self._c || r
          return t(
            'div',
            { staticClass: 'el-validate' },
            [
              t(
                'el-form',
                {
                  ref: 'ruleForm',
                  attrs: { model: e.ruleForm, 'label-width': '100px' },
                },
                [
                  t(
                    'el-form-item',
                    {
                      attrs: {
                        label: '活动名称',
                        prop: 'name',
                        rules: [
                          {
                            required: !0,
                            message: '必须填写',
                            trigger: 'blur',
                          },
                        ],
                      },
                    },
                    [
                      t('el-input', {
                        model: {
                          value: e.ruleForm.name,
                          callback: function (r) {
                            e.$set(
                              e.ruleForm,
                              'name',
                              'string' === typeof r ? r.trim() : r
                            )
                          },
                          expression: 'ruleForm.name',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    { attrs: { label: '活动区域', prop: 'region' } },
                    [
                      t(
                        'el-select',
                        {
                          attrs: { placeholder: '请选择活动区域' },
                          model: {
                            value: e.ruleForm.region,
                            callback: function (r) {
                              e.$set(e.ruleForm, 'region', r)
                            },
                            expression: 'ruleForm.region',
                          },
                        },
                        e._l(e.areaList, function (e, r) {
                          return t('el-option', {
                            key: r,
                            attrs: { label: e.name, value: e.id },
                          })
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    { attrs: { label: '活动性质', prop: 'type' } },
                    [
                      t(
                        'el-checkbox-group',
                        {
                          model: {
                            value: e.ruleForm.type,
                            callback: function (r) {
                              e.$set(e.ruleForm, 'type', r)
                            },
                            expression: 'ruleForm.type',
                          },
                        },
                        e._l(e.typeList, function (r, o) {
                          return t(
                            'el-checkbox',
                            { key: o, attrs: { label: r.id } },
                            [e._v(e._s(r.name))]
                          )
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    {
                      attrs: {
                        label: '特殊资源',
                        prop: 'resource',
                        rules: [
                          {
                            required: !0,
                            message: '必须填写',
                            trigger: 'blur',
                          },
                        ],
                      },
                    },
                    [
                      t(
                        'el-radio-group',
                        {
                          model: {
                            value: e.ruleForm.resource,
                            callback: function (r) {
                              e.$set(e.ruleForm, 'resource', r)
                            },
                            expression: 'ruleForm.resource',
                          },
                        },
                        [
                          t('el-radio', { attrs: { label: 1 } }, [
                            e._v('线上品牌商赞助'),
                          ]),
                          t('el-radio', { attrs: { label: 2 } }, [
                            e._v('线下场地免费'),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    { attrs: { label: '活动形式', prop: 'desc' } },
                    [
                      t('el-input', {
                        attrs: { type: 'textarea' },
                        model: {
                          value: e.ruleForm.desc,
                          callback: function (r) {
                            e.$set(e.ruleForm, 'desc', r)
                          },
                          expression: 'ruleForm.desc',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    { attrs: { label: '活动形式', prop: 'desc' } },
                    [
                      t('el-input', {
                        attrs: { type: 'textarea' },
                        model: {
                          value: e.ruleForm.desc,
                          callback: function (r) {
                            e.$set(e.ruleForm, 'desc', r)
                          },
                          expression: 'ruleForm.desc',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    { attrs: { label: '活动形式', prop: 'desc' } },
                    [
                      t('el-input', {
                        attrs: { type: 'textarea' },
                        model: {
                          value: e.ruleForm.desc,
                          callback: function (r) {
                            e.$set(e.ruleForm, 'desc', r)
                          },
                          expression: 'ruleForm.desc',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    { attrs: { label: '活动形式', prop: 'desc' } },
                    [
                      t('el-input', {
                        attrs: { type: 'textarea' },
                        model: {
                          value: e.ruleForm.desc,
                          callback: function (r) {
                            e.$set(e.ruleForm, 'desc', r)
                          },
                          expression: 'ruleForm.desc',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    { attrs: { label: '活动形式', prop: 'desc' } },
                    [
                      t('el-input', {
                        attrs: { type: 'textarea' },
                        model: {
                          value: e.ruleForm.desc,
                          callback: function (r) {
                            e.$set(e.ruleForm, 'desc', r)
                          },
                          expression: 'ruleForm.desc',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    {
                      attrs: {
                        label: '数据',
                        rules: [
                          {
                            required: !0,
                            message: '数据',
                            trigger: ['change', 'blur'],
                          },
                          { validator: e.isNum, trigger: ['change', 'blur'] },
                        ],
                        prop: 'num',
                      },
                    },
                    [
                      t('el-input', {
                        attrs: { maxlength: '20' },
                        model: {
                          value: e.ruleForm.num,
                          callback: function (r) {
                            e.$set(e.ruleForm, 'num', e._n(r))
                          },
                          expression: 'ruleForm.num',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-form-item',
                    [
                      t(
                        'el-button',
                        {
                          attrs: { type: 'primary' },
                          on: {
                            click: function (r) {
                              return e.submitForm1('ruleForm')
                            },
                          },
                        },
                        [e._v('立即创建')]
                      ),
                      t(
                        'el-button',
                        {
                          on: {
                            click: function (r) {
                              return e.resetForm('ruleForm')
                            },
                          },
                        },
                        [e._v('重置')]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              t('h2', [e._v('测试 下拉框三角形 无法点击问题')]),
              t(
                'el-form',
                [
                  t(
                    'el-form-item',
                    { attrs: { label: '下拉框' } },
                    [
                      t(
                        'el-select',
                        {
                          attrs: { filterable: '' },
                          model: {
                            value: e.selectform.select,
                            callback: function (r) {
                              e.$set(e.selectform, 'select', r)
                            },
                            expression: 'selectform.select',
                          },
                        },
                        e._l(e.selectlist, function (e, r) {
                          return t('el-option', {
                            key: r,
                            attrs: { label: e.name, value: e.name },
                          })
                        }),
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              e._m(0),
              t('h1', [e._v('总结')]),
              t('p', [
                e._v('使用mac时，无法有效监听到toggle的触发情况，目前而言：'),
              ]),
              e._m(1),
            ],
            1
          )
        },
        n = [
          function () {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r
            return t('form', { attrs: { action: '', method: 'post' } }, [
              t('fieldset', [
                t('legend', [e._v('Title')]),
                t('input', {
                  attrs: { type: 'radio', name: 'radio', id: 'radio' },
                }),
                t('label', { attrs: { for: 'radio' } }, [e._v('Click me')]),
              ]),
            ])
          },
          function () {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r
            return t('code', [
              t('pre', [
                e._v(' 无模拟的select 下，可以使用input和change进行处理'),
              ]),
              t('pre', [
                e._v(
                  ' 有模拟的select 下，需要结合 mousedown mouseup click 等进行结合处理，可以同时配合 节流函数进行处理，以提升性能'
                ),
              ]),
            ])
          },
        ],
        l = (t('5df3'), t('1c4c'), t('236b')),
        a = t('ecf9'),
        s = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 2,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            t =
              (arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : document.body,
              document.body.scrollTop
                ? document.body
                : document.documentElement),
            o = t.scrollTop,
            n = function n() {
              ;(o += (r - o) / (e || 2)),
                o < r + 1
                  ? (t.scrollTop = r)
                  : ((t.scrollTop = o), requestAnimationFrame(n))
            }
          n()
        },
        i = s,
        c = {
          mixins: [l['a'], a['a']],
          data: function () {
            var e = function (e, r, t) {
              var o = /^[0-9]{5,20}$/
              o.test(r) ? t() : t(new Error('不是数据'))
            }
            return {
              ruleForm: {
                name: '',
                region: '',
                type: [],
                resource: '',
                desc: '',
                num: '',
              },
              isNum: e,
              area: 'A',
              selectform: { select: '' },
              selectlist: [],
            }
          },
          methods: {
            addEventToSaveFormData: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = [
                  'input',
                  'toggle',
                  'close',
                  'select',
                  'change',
                  'focus',
                  'blur',
                  'click',
                  'compositionstart',
                  'mouseup',
                  'mousedown',
                  'formchange',
                  'forminput',
                ]
              r.forEach(function (r) {
                e.addEventListener(
                  r,
                  function (e) {
                    console.log(e.target, r)
                  },
                  !1
                )
              })
            },
            remvoeEvent: function () {
              window.removeEventListener('input'),
                window.removeEventListener('toggle')
            },
            scrollToTop: function (e) {
              var r = Array.from(e.querySelectorAll('.is-error'))
              if (!r.length) throw new Error('有错误，但是找不到错误位置')
              var t = r[0],
                o = t.getBoundingClientRect().top,
                n =
                  o +
                  (window.pageYOffset || document.documentElement.scrollTop) -
                  (document.documentElement.clientTop || 0) -
                  40
              i(2, n, {})
            },
            submitForm1: function () {
              var e = this
              this.$refs['ruleForm'].validate(function (r) {
                console.log(r),
                  r ||
                    e.$nextTick(function () {
                      e.scrollToTop(e.$refs['ruleForm'].$el)
                    })
              })
            },
            listenFormValueChange: function () {
              console.dir(HTMLInputElement, 999)
            },
          },
          mounted: function () {
            var e = this
            this.$nextTick(function () {
              var r = e.$refs.ruleForm.$el
              e.addEventToSaveFormData(r)
            }),
              this.listenFormValueChange()
          },
          beforeDestory: function () {},
        },
        u = c,
        m = (t('a35b'), t('2877')),
        f = Object(m['a'])(u, o, n, !1, null, null, null)
      r['default'] = f.exports
    },
    a35b: function (e, r, t) {
      'use strict'
      var o = t('2034'),
        n = t.n(o)
      n.a
    },
    ecf9: function (e, r, t) {
      'use strict'
      r['a'] = {
        data: function () {
          return {
            rules: {
              name: [
                { required: !0, message: '请输入活动名称', trigger: 'blur' },
                {
                  min: 3,
                  max: 5,
                  message: '长度在 3 到 5 个字符',
                  trigger: 'blur',
                },
              ],
              region: [
                { required: !0, message: '请选择活动区域', trigger: 'change' },
              ],
              type: [
                {
                  type: 'array',
                  required: !0,
                  message: '请至少选择一个活动性质',
                  trigger: 'change',
                },
              ],
              resource: [
                { required: !0, message: '请选择活动资源', trigger: 'change' },
              ],
              desc: [
                { required: !0, message: '请填写活动形式', trigger: 'blur' },
              ],
            },
          }
        },
      }
    },
  },
])
//# sourceMappingURL=chunk-19fda543.972ef70f.js.map
