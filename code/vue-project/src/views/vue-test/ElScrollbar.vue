<template>
  <div>
    <p>
      主要用来测试 `el-scrollbar`
      组件是否无法在数据回来后，页面加长而无法自动修改高度，导致无法及时进行显示，给人感觉滚动条消失一样的感觉
    </p>
    <ol>
      <li>
        <h6>测试自动增加数据，改变高度</h6>
        <ul>
          <li>
            测试结果：随着内容增加，高度到达底部时，会自动出现滚动条
          </li>
        </ul>
      </li>
      <li>
        <h6>测试数据一次性到位，高度改变</h6>
        <ul>
          <li>
            测试结果：数据一次性返回，滚动条还是会出现，因而我的问题出现在
            是否破坏了原有的设计结构，这个好好考虑了
          </li>
        </ul>
      </li>
    </ol>
    <p>测试一</p>
    <!-- <ul>
            <transition-group name="el-fade-in">
                <li v-for="item in num" :key="item">
                    <span>第{{item}}个</span>
                </li>
            </transition-group>
        </ul> -->
    <p>测试二</p>
    <ul>
      <transition-group name="el-fade-in">
        <li v-for="item in backNum" :key="item">
          <span>第{{ item }}个</span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'vue-test-el-scrollbar',
  data () {
    return {
      num: 1,
      backNum: 1,
      timerId: null
    }
  },
  created () {
    setTimeout(() => {
      this.backNum = 100
    }, 1000)
  },
  mounted () {
    this.timerId = setInterval(() => {
      if (this.num >= 100) {
        clearInterval(this.timerId)
        return
      }
      this.num++
    }, 500)
  },
  beforeDestory () {
    clearInterval(this.timerId)
  }
}
</script>
