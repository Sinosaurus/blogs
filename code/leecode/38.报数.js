/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return '1'
  } else {
    var str = countAndSay(n - 1)
    var count = 1
    var res = ''
    for (var i = 0; i < str.length; i++) {
      // 相邻的是否相同
      if (str[i] === str[i + 1]) {
        count++
      } else {
        // count + str[i] 几个几
        res = res + count + str[i]
        count = 1
      }
    }
    return res
  }
}
