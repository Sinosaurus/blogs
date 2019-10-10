const arr = [
  {
    a: 1,
    b: 'aaaa'
  },
  {
    a: 2,
    b: 'aaaa'

  },
  {
    a: 1,
    b: 'aaaa'

  },
  {
    a: 4,
    b: 'aaaa'

  },
  {
    a: 1,
    b: 'aaaa'

  }
]

console.time('time')
const m = {}
for (let i = 0; i < arr.length; i ++) {
  const { a } = arr[i]
  const objS = JSON.stringify({a})
  if (m[objS]) {
    m[objS].children.push(arr[i])
  } else {
    m[objS] = arr[i]
    m[objS].children = []
  }
}
let newData = []
Object.values(m).forEach(item => {
  if (item.children.length) {
    const n = JSON.parse(JSON.stringify(item))
    n.children = []
    item.children.push(n)
    newData.push(item)
  } else {
    newData.push(item)
  }
})
console.timeEnd('time')