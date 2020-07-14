;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-2d0a512d'],
  {
    '08c2': function (e, a, t) {
      'use strict'
      t.r(a)
      var l = function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a
          return t(
            'div',
            [
              t('h3', [e._v('测试keep-alive')]),
              t(
                'el-row',
                { attrs: { gutter: 10 } },
                [
                  t(
                    'el-col',
                    { attrs: { span: 8 } },
                    [
                      t('el-input', {
                        attrs: { placeholder: 'value1' },
                        model: {
                          value: e.form.value1,
                          callback: function (a) {
                            e.$set(e.form, 'value1', a)
                          },
                          expression: 'form.value1',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-col',
                    { attrs: { span: 8 } },
                    [
                      t('el-input', {
                        attrs: { placeholder: 'value2' },
                        model: {
                          value: e.form.value2,
                          callback: function (a) {
                            e.$set(e.form, 'value2', a)
                          },
                          expression: 'form.value2',
                        },
                      }),
                    ],
                    1
                  ),
                  t(
                    'el-col',
                    { attrs: { span: 8 } },
                    [
                      t('el-input', {
                        attrs: { placeholder: 'value3' },
                        model: {
                          value: e.form.value3,
                          callback: function (a) {
                            e.$set(e.form, 'value3', a)
                          },
                          expression: 'form.value3',
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
          )
        },
        o = [],
        n =
          (t('7f7f'),
          t('6762'),
          t('2fdb'),
          {
            name: 'Keep',
            data: function () {
              return { form: { value1: '', value2: '', value3: '' } }
            },
            created: function () {
              this.$store.state.cache.cachedViews.includes(this.$options.name),
                this.$store.commit('cache/addCacheViews', this.$options.name)
            },
            activated: function () {},
            beforeRouteLeave: function (e, a, t) {
              var l = e.name,
                o = ['jsonp'],
                n = o.includes(l)
              n ||
                (this.$store.commit('keep/deleteParams'),
                this.$store.commit('cache/deleteViews', this.$options.name)),
                t()
            },
          }),
        s = n,
        c = t('2877'),
        r = Object(c['a'])(s, l, o, !1, null, null, null)
      a['default'] = r.exports
    },
  },
])
//# sourceMappingURL=chunk-2d0a512d.b6de2ef8.js.map
