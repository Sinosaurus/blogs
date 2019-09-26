const data = `
AWS Technical Essentials,AWS培训，标准课时1天,1,"￥ 2,100.00 "
AWS Business Essentials,AWS培训，标准课时1天,1,"￥ 2,100.00"
Architecting on AWS,AWS培训，标准课时3天,1,"￥ 6,300.00 "
Advanced Architecting on AWS,AWS培训，标准课时3天,1,"￥ 6,300.00 "
Developing on AWS,AWS培训，标准课时3天,1,"￥ 6,300.00 "
DevOps Engineering on AWS ,AWS培训，标准课时3天,1,"￥ 6,300.00 "
Systems Operations on AWS,AWS培训，标准课时3天,1,"￥ 6,300.00 "
Big Data on AWS-Speciality,AWS培训，标准课时3天,1,"￥ 6,300.00 "
Security Operations AWS-Speciality,AWS培训，标准课时3天,1,"￥ 6,300.00"
Migrating to AWS-Speciality,AWS培训，标准课时2天,1,"￥ 4,200.00 "
Deep Learning on AWS-Speciality,AWS培训，标准课时1天,1,"￥ 2,100.00 "

`
const res = []
data.split('\n').forEach(item => {
  const arr = item.split(',')
  const obj = {}
  obj.area = arr[0]
  obj.id = arr[1]
  obj.city = arr[2]
  obj.resourceAddress = arr[3]
  res.push(obj)
})
console.log(res)
const fs = require('fs')

fs.writeFile('table.js', JSON.stringify(res), () => {

})