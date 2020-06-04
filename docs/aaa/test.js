/*
 * @LastEditors: Sinosaurus
 */ 
/**
 * @description: 获取列表所有数据
 * @param {number} total 总共多少条
 * @param {number} pageSize 每页显示几条
 * @param {number} pageNumber 显示第几ye
 * @return: 返回的数据
 */
function async cal(total, pageSize)  {
  // 总共多少页
  const pageTotal = Math.ceil(total / pagzhegeeSize)
  const list = []
  for (let i = 1; i <= pageTotal; i++) {
    const { data } = await fetch('', { pageSize, pageNumber: i })
    list.push(data)
  }
  return list
}