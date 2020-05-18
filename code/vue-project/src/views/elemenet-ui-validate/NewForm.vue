<template>
  <div class="el-validate">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item
        label="活动名称"
        prop="name"
        :rules="[
          { required: true, message: '必须填写', trigger: 'blur'}
        ]"
      >
        <el-input v-model.trim="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item
        label="活动区域"
        prop="region"
      >
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择活动区域"
        >
          <el-option
            v-for="(item, index) in areaList"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="活动性质"
        prop="type"
      >
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox
            v-for="(item, index) in typeList"
            :key="index"
            :label="item.id"
          >{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="特殊资源"
        prop="resource"
        :rules="[
          { required: true, message: '必须填写', trigger: 'blur'}
        ]"
      >
        <el-radio-group v-model="ruleForm.resource">
          <el-radio :label="1">线上品牌商赞助</el-radio>
          <el-radio :label="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
      >
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="数据"
        :rules="[
          {required: true, message: '数据', trigger: ['change', 'blur']},
          {validator: isNum, trigger: ['change', 'blur']}
        ]"
        prop="num"
      >
        <el-input
          v-model.number="ruleForm.num"
          maxlength="20"
        ></el-input>
        <!-- <pre>
          1. v-model.number="ruleForm.num"
          2. maxlength="20"
          原因：
          1. num 最大数据不可能超过 −9007199254740992  --- 9007199254740992 （即正负2的53次方）最长16位
          2. 超过16位就自动补 0
        </pre> -->
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm1('ruleForm')"
        >立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <h2>测试 下拉框三角形 无法点击问题</h2>
    <el-form>
      <el-form-item label="下拉框">
        <el-select
          v-model="selectform.select"
          filterable
        >
          <el-option
            v-for="(item, index) in selectlist"
            :key="index"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <form
      action=""
      method="post"
    >
      <fieldset>
        <legend>Title</legend>
        <input
          type="radio"
          name="radio"
          id="radio"
        >
        <label for="radio">Click me</label>
      </fieldset>
    </form>
    <h1>总结</h1>
    <p>使用mac时，无法有效监听到toggle的触发情况，目前而言：</p>
    <code>
      <pre> 无模拟的select 下，可以使用input和change进行处理</pre>
      <pre> 有模拟的select 下，需要结合 mousedown mouseup click 等进行结合处理，可以同时配合 节流函数进行处理，以提升性能</pre>
    </code>
  </div>
</template>

<script>
import mix from './mixins/init-common'
import el from './mixins/el/el-new'
import scrollTop from './../../utils/scrollTop'
export default {
  mixins: [mix, el],
  data () {
    const isNum = (rule, value, callback) => {
      let reg = /^[0-9]{5,20}$/
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('不是数据'))
      }
    }
    return {
      ruleForm: {
        name: '',
        region: '',
        type: [],
        resource: '',
        desc: '',
        num: ''
      },
      isNum,
      area: 'A',
      selectform: {
        select: ''
      },
      selectlist: []
    }
  },
  methods: {
    /**
     * 1. 数据输入时，便进行存储
     * 2. 不适用定时器进行填写
     *
     * TODO:
     * 当前问题，如何监听到 select框的事件，之前在window下可以通过toggle进行监听，但是现在却实现不了
     *
     * mac下 chrome 、 safari 都无法监听
     */
    addEventToSaveFormData (node = {}) {
      const Events = [
        'input',
        'toggle',
        'close',
        'select',
        'change',
        'focus',
        'blur',
        'click',
        'compositionstart',
        'mouseup',
        'mousedown',
        'formchange',
        'forminput'
      ]
      Events.forEach(item => {
        node.addEventListener(item, e => {
          // console.log(e.target, item)
        }, false)
        // window.addEventListener(item, e => {
        //   console.log(e.target, item, 'window')
        // }, false)
      })
    },
    remvoeEvent () {
      window.removeEventListener('input')
      window.removeEventListener('toggle')
    },
    /**
      * 获取错误信息，并滚动到指定位置
      * chrome 在 mac下可以同过 performance 下的task查看scroll，通过定位到那个节点在滚动，
      * 但是在window下却无法显示，很奇怪
      */
    scrollToTop (node) {
      //  const scrollNode = document.querySelectorAll('div.sc-warp.el-scrollbar__wrap')[0]
      //  const scrollNode = document.body || document.documentElement
      const ChildHasError = Array.from(node.querySelectorAll('.is-error'))
      if (!ChildHasError.length) throw new Error('有错误，但是找不到错误位置')
      const FirstErrorNode = ChildHasError[0]

      const Top = FirstErrorNode.getBoundingClientRect().top
      const scrollToTop = Top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0) - 40
      //  const scrollToTop = Math.abs(FirstErrorNode.offsetTop) - 40
      // console.dir(FirstErrorNode)
      //  while ()
      // 计算的数据有问题
      scrollTop(2, scrollToTop, {})
      //  https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%E5%B9%B3%E6%BB%91%E6%BB%9A%E5%8A%A8/
      //  FirstErrorNode.scrollIntoView()
    },
    submitForm1 () {
      this.$refs['ruleForm'].validate(valid => {
        // console.log(valid)
        if (valid) {

        } else {
          // 需要延迟一下
          this.$nextTick(() => {
            this.scrollToTop(this.$refs['ruleForm'].$el)
          })
        }
      })
    },
    listenFormValueChange () {
      console.dir(HTMLInputElement, 999)
      // HTMLInputElement.addEventListener('input', function (evt) {
      //   console.log(this.value)
      // })
    }

  },
  mounted () {
    this.$nextTick(() => {
      const Note = this.$refs.ruleForm.$el
      this.addEventToSaveFormData(Note)
    })
    this.listenFormValueChange()
    // console.log(this.$refs.ruleForm.$el, 9999)
    // this.addEventToSaveFormData()
  },
  beforeDestory () {
    // this.removeEvent()
  }
}
</script>

<style lang="less">
@import url("~@/less/el-validate.less");
.el-validate {
  margin-bottom: 20vh;
}
</style>
