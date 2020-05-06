const href1 = '1/2/3/4'
const href2 = '1/2/4'

const href1Arr = href1.split('/')
const href2Arr = href2.split('/')
console.log(undefined === undefined)
let r = 0
for (let i = 0; i < href1Arr.length; i++) {
  if (href1Arr[i] === href2Arr[i]) {
    r = i
  } else {
    break
  }
}
console.log(r, 99999999999999999)
