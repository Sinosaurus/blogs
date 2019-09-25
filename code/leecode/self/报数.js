// https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/39/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  /**
   * 1. 输入的值，报数是多少
   * 2. 重点在于如何统计相邻相同数的个数及值
   */
  // 报数需要拿到上一个值的报数，才能计算出下一个值具体是多少
  // 需要写一套算法
  const position = n - 1
  let s = ''
  for (let i = 0; i < position; i ++) {

  }
  
  function getNumTotal (num) {
    const arr = []
    const  = (num).toString().split('')
    numArr.forEach((item, index) => {
      const obj = {}
      if (item === numArr[index+1]) {
        obj.index = index
        obj.id = item
        obj.num = obj.num ? obj.num + 1 : 1
      } else {
        obj.index = index
        obj.id = item
        obj.num = 1
      }
      arr.for
    })
  }

};