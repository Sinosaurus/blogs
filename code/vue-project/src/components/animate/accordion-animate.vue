<template>
  <div class="overflow">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      enter-active-class="enter-active"
      leave-active-class="leave-active"
    >
      <!-- <div v-height v-show="">
        <slot></slot>
      </div> -->
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AccordionAnimate',
  directives: {
    height: {
      inserted (el, binding, vnode) {
        el.children[0].style.display = 'block'
        el.children[0].style.marginTop = `-${el.offsetHeight}px`
        el.children[0].style.display = 'none'
      }
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.display = 'block'
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    enter: function (el, done) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.marginTop = 0
        })
      })
    },
    beforeLeave: function (el) {
      el.style.marginTop = 0
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function (el, done) {
      el.style.marginTop = `-${el.offsetHeight}px`
    }
  }
}
</script>

<style>
.enter-active,
.leave-active {
  transition: margin-top .5s;
}
.overflow {
  overflow: hidden;
}
</style>
