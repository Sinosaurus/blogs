var isPalindrome = function(s) {
    const isEngAndNum = /^[0-9a-zA-Z]*$/g
    // const length = s.length
    // let ns = []
    // for (let i = 0; i < length; i ++) {
    //   const item = s.charAt(i)

    //   if (isEngAndNum.test(item)) {
    //     console.log(item, i)
    //     ns.push(item)
    //   }
    // }
    // console.log(ns)

    const ns = s.split('').filter (item => {
      // 此处使用时 会导致 A man, a plan, 的 man中的 a无法拿到
      if (/[0-9a-zA-Z]/g.test(item)) return item
      // 而这个取非却可以
      if (!/[^a-zA-Z0-9]/g.test(item)) return item
    })
};

isPalindrome("A man, a plan, a canal: Panama")