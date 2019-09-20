/*
 * 1. 丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止
 * 2. 第一个非空字符为正或者负号时 
 * 3. 后面尽可能多的连续数字组合起来
 * 4. 第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时
 * @LastEditors: Sinosaurus
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  // 去空
  str = str.trim()
  // 符号
  const isHasSymbol = /[-+]/.test(str.charAt(0)) 
  const symbol = isHasSymbol ? str.charAt(0) : ''
  // 去除符号限制
  str = isHasSymbol ? str.slice(1) : str
  str = str.split('')
  const isNumReg = /[0-9]/
  const strLength = str.length
  let newStr = ''
  for (let i = 0, length = str.length; i < length; i ++) {
    const item1 = str[i]
    const item2 = str[i+1]
    if (isNumReg.test(item1) && isNumReg.test(item2)) {
      newStr += item1
    } else if (isNumReg.test(item1) && !isNumReg.test(item2)) {
      newStr += item1
    } else {
      break
    }
  }
  // to nunber
  newStr = Number(symbol+newStr)
  if (newStr <= -(Math.pow(2, 31))) {
    return - (Math.pow(2, 31))
  } else if (newStr >= Math.pow(2, 31) -1) {
    return Math.pow(2, 31) -1
  } else {
    return Number.isNaN(newStr) ? 0 : newStr
  }
};
console.log(myAtoi('42 '))

/**
 * parseInt 可以解决大部分问题
 */
