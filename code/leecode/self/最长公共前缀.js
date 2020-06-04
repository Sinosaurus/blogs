/**
 * @URL https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/40/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 假设第一个相同
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  const length = strs.length
  const firstItem = strs[0].split('')
  let res = {}
  firstItem.forEach((item, index) => {
    let count = 1
    for (let i = 1; i < length; i++) {
      const val = strs[i]
      // 这个位置默认找到第一个，如何避开已经找到的位置
      if (val.indexOf(item, index) === index) {
        res[index] = item + '_' + count
        count++
      } else {
        count = 1
      }
    }
  })
  let val = ''
  Object.entries(res).forEach((item, index) => {
    // 保证顺序同步
    if (item[0] == index && item[1].split('_')[1] == length - 1)
      val += item[1].split('_')[0]
  })
  return val
}
