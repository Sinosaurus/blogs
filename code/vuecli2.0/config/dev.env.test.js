'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"testing"',
  VUE_APP_CURRENTMODE: '"testing"',
  VUE_APP_ENV: '"testing环境"',
  VUE_APP_LOGOUT_URL: '"http://l72.16.0.95/logout_testing"',
})
