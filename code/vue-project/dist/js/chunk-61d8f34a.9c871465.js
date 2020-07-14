;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-61d8f34a'],
  {
    '0bf6': function (e, r, t) {
      'use strict'
      var o = t('7ccd'),
        n = t.n(o)
      n.a
    },
    '0cd2': function (e, r, t) {
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
                  attrs: {
                    model: e.ruleForm,
                    rules: e.rules,
                    'label-width': '100px',
                  },
                },
                [
                  t(
                    'el-form-item',
                    { attrs: { label: '活动名称', prop: 'name' } },
                    [
                      t('el-input', {
                        model: {
                          value: e.ruleForm.name,
                          callback: function (r) {
                            e.$set(e.ruleForm, 'name', r)
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
                        verify: '',
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
                    [
                      t(
                        'el-button',
                        {
                          attrs: { type: 'primary' },
                          on: {
                            click: function (r) {
                              return e.submitForm('ruleForm')
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
              e._l(e.students, function (r, o) {
                return t('div', { key: o }, [
                  e._v(
                    '\n    ' + e._s(r.id) + '\n    ' + e._s(r.name) + '\n    '
                  ),
                  t('img', { attrs: { src: r.src } }),
                ])
              }),
            ],
            2
          )
        },
        n = [],
        s = t('236b'),
        a = t('ecf9'),
        l = {
          mixins: [s['a'], a['a']],
          data: function () {
            return {
              ruleForm: {
                name: '',
                region: '',
                type: [],
                resource: '',
                desc: '',
              },
              timerId: null,
            }
          },
          methods: {
            setFormData: function () {
              var e = this
              setTimeout(function () {
                ;(e.ruleForm = {
                  name: '测试项目',
                  region: 2,
                  type: [1, 2],
                  resource: 1,
                  desc: '测试数据回显时校验颜色变化问题',
                }),
                  e.$nextTick(function () {
                    e.$refs.ruleForm.validate()
                  })
              }, 1500)
            },
          },
          mounted: function () {
            this.setFormData()
          },
        },
        i = l,
        u = (t('0bf6'), t('2877')),
        c = Object(u['a'])(i, o, n, !1, null, null, null)
      r['default'] = c.exports
    },
    '236b': function (e, r, t) {
      'use strict'
      t('8e6e'), t('ac6a'), t('456d')
      var o = t('bd86'),
        n = t('2f62')
      function s(e, r) {
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
            ? s(t, !0).forEach(function (r) {
                Object(o['a'])(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(t).forEach(function (r) {
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
    '7ccd': function (e, r, t) {},
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
//# sourceMappingURL=chunk-61d8f34a.9c871465.js.map
