class Zhen {
    constructor(...params) {
        for (let i = params.length - 1; i >= 0; i --) {
            let item = params[i]
            this[item] = item
        }
    }

    play() {
        this.aa()
        console.log('父元素')
    }
}

const a1 = new Zhen('hua')

console.log(a1)

a1.aa = () => {
    console.log(22)
}

a1.play()



function Zhenone (...params) {
  for (let i = params.length -1; i >= 0; i--) {
      let item = params[i]
      this[item] = item
  }
}

Zhenone.prototype.play = function() {
    console.log(this)
    this.aa()
    console.log('父元素')
}

const z = new Zhenone('hua')

console.log(z)
z.aa = function() {
    console.log(this, '子类型')
}

console.log(z, 'aa')
z.play()