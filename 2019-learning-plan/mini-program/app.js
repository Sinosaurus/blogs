const log = require('./log.js')

App({
  onLaunch: function () {
    log.info('app.js里面的日志会到打到首页')
  },
  onShow: function() {
    log.info('onShow的日志会打到当前页面')
  }
})
