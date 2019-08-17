// https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js
// // https://segmentfault.com/q/1010000008896919
// // https://segmentfault.com/a/1190000016160493
const DefaultTransition = 'margin-top .5s;'
// // import { addClass, removeClass } from 'element-ui/src/utils/dom'

const Transition = {
  beforeEnter (el) {
    // console.log()
    el.style.transition = DefaultTransition
    el.style.display = 'block'
  },

  enter (el, done) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
      })
    })
    el.style.marginTop = 0
    el.style.overflow = 'hidden'

    // done()
  },

  afterEnter (el) {
    el.style.transition = ''
    el.style.marginTop = 0
  },

  beforeLeave (el) {
    el.style.marginTop = 0
  },
  leave (el, done) {
    el.style.transition = DefaultTransition
    el.style.marginTop = `-${el.offsetHeight}px`
    // done()
  },
  afterLeave (el) {
    el.style.transition = ''
  }
}

export default {
  name: 'AccordionAnimate',
  functional: true,
  render (h, { children }) {
    const data = {
      on: {
        ...Transition
      }
    }
    return h('transition', data, children)
  }
}

// import { addClass, removeClass } from 'element-ui/src/utils/dom'
// class Transition {
//   beforeEnter (el) {
//     addClass(el, 'collapse-transition')
//     if (!el.dataset) el.dataset = {}

//     el.dataset.oldPaddingTop = el.style.paddingTop
//     el.dataset.oldPaddingBottom = el.style.paddingBottom

//     el.style.height = '0'
//     el.style.paddingTop = 0
//     el.style.paddingBottom = 0
//   }

//   enter (el) {
//     el.dataset.oldOverflow = el.style.overflow
//     if (el.scrollHeight !== 0) {
//       el.style.height = el.scrollHeight + 'px'
//       el.style.paddingTop = el.dataset.oldPaddingTop
//       el.style.paddingBottom = el.dataset.oldPaddingBottom
//     } else {
//       el.style.height = ''
//       el.style.paddingTop = el.dataset.oldPaddingTop
//       el.style.paddingBottom = el.dataset.oldPaddingBottom
//     }

//     el.style.overflow = 'hidden'
//   }

//   afterEnter (el) {
//     // for safari: remove class then reset height is necessary
//     removeClass(el, 'collapse-transition')
//     el.style.height = ''
//     el.style.overflow = el.dataset.oldOverflow
//   }

//   beforeLeave (el) {
//     if (!el.dataset) el.dataset = {}
//     el.dataset.oldPaddingTop = el.style.paddingTop
//     el.dataset.oldPaddingBottom = el.style.paddingBottom
//     el.dataset.oldOverflow = el.style.overflow

//     el.style.height = el.scrollHeight + 'px'
//     el.style.overflow = 'hidden'
//   }

//   leave (el) {
//     if (el.scrollHeight !== 0) {
//       // for safari: add class after set height, or it will jump to zero height suddenly, weired
//       addClass(el, 'collapse-transition')
//       el.style.height = 0
//       el.style.paddingTop = 0
//       el.style.paddingBottom = 0
//     }
//   }

//   afterLeave (el) {
//     removeClass(el, 'collapse-transition')
//     el.style.height = ''
//     el.style.overflow = el.dataset.oldOverflow
//     el.style.paddingTop = el.dataset.oldPaddingTop
//     el.style.paddingBottom = el.dataset.oldPaddingBottom
//   }
// }

// export default {
//   name: 'ElCollapseTransition',
//   functional: true,
//   render (h, { children }) {
//     console.log(new Transition(), 234567891234567890)
//     const data = {
//       on: new Transition()
//     }

//     return h('transition', data, children)
//   }
// }

// const elTransition =
//   '0.3s height ease-in-out'
// const Transition = {
//   'before-enter' (el) {
//     el.style.transition = elTransition
//     if (!el.dataset) el.dataset = {}

//     // el.dataset.oldPaddingTop = el.style.paddingTop
//     // el.dataset.oldPaddingBottom = el.style.paddingBottom

//     el.style.height = 0
//     // el.style.paddingTop = 0
//     // el.style.paddingBottom = 0
//   },

//   enter (el) {
//     // el.dataset.oldOverflow = el.style.overflow
//     if (el.scrollHeight !== 0) {
//       el.style.height = el.scrollHeight + 'px'
//       // el.style.paddingTop = el.dataset.oldPaddingTop
//       // el.style.paddingBottom = el.dataset.oldPaddingBottom
//     } else {
//       el.style.height = ''
//       // el.style.paddingTop = el.dataset.oldPaddingTop
//       // el.style.paddingBottom = el.dataset.oldPaddingBottom
//     }

//     el.style.overflow = 'hidden'
//   },

//   'after-enter' (el) {
//     el.style.transition = ''
//     el.style.height = ''
//     // el.style.overflow = el.dataset.oldOverflow
//   },

//   'before-leave' (el) {
//     if (!el.dataset) el.dataset = {}
//     // el.dataset.oldPaddingTop = el.style.paddingTop
//     // el.dataset.oldPaddingBottom = el.style.paddingBottom
//     // el.dataset.oldOverflow = el.style.overflow

//     el.style.height = el.scrollHeight + 'px'
//     // el.style.overflow = 'hidden'
//   },

//   leave (el) {
//     if (el.scrollHeight !== 0) {
//       el.style.transition = elTransition
//       el.style.height = 0
//       // el.style.paddingTop = 0
//       // el.style.paddingBottom = 0
//     }
//   },

//   'after-leave' (el) {
//     el.style.transition = ''
//     el.style.height = ''
//     // el.style.overflow = el.dataset.oldOverflow
//     // el.style.paddingTop = el.dataset.oldPaddingTop
//     // el.style.paddingBottom = el.dataset.oldPaddingBottom
//   }
// }

// export default {
//   name: 'collapseTransition',
//   functional: true,
//   render (h, { children }) {
//     const data = {
//       on: Transition
//     }
//     return h('transition', data, children)
//   }
// }
