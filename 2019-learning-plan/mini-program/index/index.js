const app = getApp()
const log = require('../log.js')
Page({
  data: {

  },
  onLoad: function () {
    log.info('打一些日志测试一下')
    log.setFilterMsg('filterkeyword')
  },
  gotoPage2() {
    wx.navigateTo({
      url: '../page2',
    })
  },
  onHide: function () {
    log.info('在onHide打一些日志测试一下')
  },
})
