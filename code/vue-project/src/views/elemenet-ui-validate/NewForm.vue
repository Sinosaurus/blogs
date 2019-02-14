<template>
  <div class="el-validate">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="100px"
      :rules="rules"
    >
      <el-form-item
        label="活动名称"
        prop="name"
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
          @click="submitForm('ruleForm')"
        >立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mix from './mixins/init-common'
import el from './mixins/el/el-new'
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
      isNum
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
@import url("~@/less/el-validate.less");
</style>
