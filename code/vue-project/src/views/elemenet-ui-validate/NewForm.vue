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
        <el-input v-model="ruleForm.name"></el-input>
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
      // areaList: [
      //   {
      //     data_id: 'A',
      //     value: 'Aa'
      //   },
      //   {
      //     data_id: 'B',
      //     value: 'Bb'
      //   }
      // ]
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
         'mousedown'
       ]
       Events.forEach(item => {
         node.addEventListener(item, e => {
           console.log(e.target, item)
         }, false)
         window.addEventListener(item, e => {
           console.log(e.target, item, 'window')
         }, false)
         
       })
      //  node.addEventListener('input', (e) => {
      //    console.log(e.target, 'input')
      //  }, false)
      //  node.addEventListener('toggle', (e) => {
      //    console.log(e.target, 'toggle')
      //  }, false)
      //  window.addEventListener('toggle', (e) => {
      //    console.log(e.target, 'toggle')
      //  }, false)
      //  node.addEventListener('close', e => {
      //    console.log(e, 'close')
      //  }, false)
      //  node.addEventListener('compositionstart', e => {
      //    console.log(e, 'compositionstart')
      //  }, false)

      //  node.addEventListener('select', (e) => {
      //    console.log(e.target, 'select')
      //  }, false)
      //  node.addEventListener('change', (e) => {
      //    console.log(e.target, 'changex')
      //  }, false)
      //  node.addEventListener('focus', e => {
      //    console.log(e.target, 'focus')
      //  }, false)
      //  node.addEventListener('blur', e => {
      //    console.log(e.target, 'blur')
      //  }, false)
      //  node.addEventListener('click', e => {
      //    console.log(e.target, 'click')
      //  })
      //  node.addEventListener('touch', e => {
      //    console.log(e.target, 'touch')
      //  }, false)
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
       const scrollNode = document.querySelectorAll('div.sc-warp.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default')
       const ChildHasError = Array.from(node.querySelectorAll('.is-error'))
       if (!ChildHasError.length) throw new Error('有错误，但是找不到错误位置')
       const FirstErrorNode = ChildHasError[0]
       const scrollToTop = Math.abs(FirstErrorNode.offsetTop) - 40
       console.log(FirstErrorNode.getBoundingClientRect())
       // 计算的数据有问题

       scrollTop(2, scrollToTop, scrollNode[0])
      //  https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%E5%B9%B3%E6%BB%91%E6%BB%9A%E5%8A%A8/
      //  FirstErrorNode.scrollIntoView()
     },
    submitForm1 () {
      this.$refs['ruleForm'].validate(valid => {
        console.log(valid)
        if (valid) {

        } else {
          // 需要延迟一下
          this.$nextTick(() => {
            this.scrollToTop(this.$refs['ruleForm'].$el)
          })
        }
      })
    }

  },
  mounted () {
    this.$nextTick(() => {
      const Note = this.$refs.ruleForm.$el
      // this.addEventToSaveFormData(Note)
    })
    // console.log(this.$refs.ruleForm.$el, 9999)
    // this.addEventToSaveFormData()
  },
  beforeDestory () {
    //this.removeEvent()
  }
}
</script>

<style lang="less">
@import url("~@/less/el-validate.less");
</style>
