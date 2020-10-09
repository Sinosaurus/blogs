<template>
  <div>
    <h1>vue animate</h1>
    <section class="item">
      <ol>
        <li>
          <h3>
            需要注意，若是 v-enter / v-leave-to
            所涉及到样式跟初始样式一致（或者部分一致），会导致动画不会完整地执行
          </h3>
        </li>
        <li>
          <pre>
            <code>v-enter</code>
          </pre>
          开始状态，初始化动画开始的状态
        </li>
        <li>
          <pre>
            <code>v-enter-active</code>
          </pre>
          v-enter 删除 过渡效果，动画完成前
        </li>
        <li>
          <pre>
            <code>v-enter-to</code>
          </pre>
          动画完成
          <h5>完成后，恢复为最初定义的状态，之前的动画状态都已消失</h5>
        </li>

        <li>
          <pre>
            <code>v-leave</code>
          </pre>
          动画离开的初始状态
        </li>
        <li>
          <pre>
            <code>v-enter</code>
          </pre>
          开始状态，初始化动画开始的状态
        </li>
        <li>
          <pre>
            <code>v-leave-active</code>
          </pre>
          动画离开的过渡
        </li>
        <li>
          <pre>
            <code>v-leave-to</code>
          </pre>
          动画离开完成
          <h5>相当于离开的情况</h5>
        </li>
      </ol>
    </section>
    <section class="item">
      <div><button @click="show = !show">toggle</button></div>
      <transition name="show">
        <p v-show="show" class="item-1">hello word</p>
      </transition>
    </section>
    <section class="item">
      <p>使用动画 @keyframes</p>
      <div>
        <div>
          <button @click="isShow = !isShow">show</button>
        </div>
        <transition name="show1">
          <p class="item-2" v-show="isShow">show1ma</p>
        </transition>
      </div>
    </section>
    <section class="item">
      <button @click="isItemShow = !isItemShow">isItemShow</button>
      <div class="overflow">
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          enter-active-class="enter-active"
          leave-active-class="leave-active"
        >
          <div v-height v-show="isItemShow">
            当时明月在，<br />
            曾照彩云归
          </div>
        </transition>
      </div>
    </section>
    <section class="item">
      <button @click="isItemOther = !isItemOther">isItemShow</button>
      <animateAcco>
        <div v-height v-show="isItemOther">
          当时明月在，<br />
          曾照彩云归
        </div>
      </animateAcco>
    </section>
    <section class="item">
      <button @click="isItemOther2 = !isItemOther2">isItemOther2</button>
      <AccordionAnimate>
        <div v-show="isItemOther2">
          当时明月在，<br />
          曾照彩云归
        </div>
      </AccordionAnimate>
    </section>
  </div>
</template>

<script>
// 模拟 https://support.google.com/chrome/?p=help&ctx=keyboard#topic=7438008
// https://stackoverflow.com/questions/52020624/smooth-vue-collapse-transition-on-v-if
// https://stackoverflow.com/questions/1473584/need-to-find-height-of-hidden-div-on-page-set-to-displaynone/12463110
import AccordionAnimate from '@/functional/accordion-animate.js'
import animateAcco from '@/components/animate/accordion-animate.vue'
export default {
  name: 'vue-animate',
  components: {
    AccordionAnimate,
    animateAcco
  },
  data () {
    return {
      show: false,
      isShow: true,
      isItemShow: false,
      isItemOther: false,
      isItemOther2: false
    }
  },
  directives: {
    height: {
      inserted (el, binding, vnode) {
        el.style.display = 'block'
        el.style.marginTop = `-${el.offsetHeight}px`
        el.style.display = 'none'
      }
    }
  },
  methods: {
    getHeight (e) {
      // console.log(e, 222222)
    },
    tran (el) {
      // console.log(el, 11111111111111)
    },
    // --------
    // 进入中
    // --------

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
<style lang="less" scoped>
.item {
  padding: 20px;
  min-height: 100px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  & + & {
    margin-top: 20px;
  }
}
.item-1 {
  font-size: 30px;
  color: #666;
}
.show-enter {
  font-size: 40px;
  color: red;
}
.show-enter-active {
  transition: all 10s;
}
.show-enter-to {
  font-size: 12px;
  color: black;
}
.show-leave {
  font-size: 80px;
  color: sandybrown;
}
.show-leave-active {
  transition: all 10s;
}
.show-leave-to {
  font-size: 30px;
  color: green;
}

// .show1-enter, .show1-leave-to {

// }
.item-2 {
  text-align: center;
}
.show1-enter-active {
  animation: show1 12s;
}
.show1-leave-active {
  animation: show1 12s reverse;
}
@keyframes show1 {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.enter-active,
.leave-active {
  transition: margin-top 0.5s;
}
.overflow {
  overflow: hidden;
}
</style>
