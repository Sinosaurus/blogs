// https://github.com/ElemeFE/element/blob/dev/src/transitions/collapse-transition.js
// const DefaultTransition = 'margin-top .5s;'

class Transition {
  beforeEnter (el) {
    el.style.display = 'block'
  }

  enter (el) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.style.marginTop = 0
      })
    })
  }

  afterEnter (el) {
    el.style.marginTop = 0
  }

  leave (el) {
    el.style.marginTop = `-${el.offsetHeight}px`
  }
}

export default {
  name: 'AccordionAnimate',
  functional: true,
  render (h, { children }) {
    const data = {
      on: new Transition(),
      attrs: {
        'enter-active-class': 'enter-active',
        'leave-active-class': 'leave-active'
      }
    }

    return h('transition', data, children)
  }
}
