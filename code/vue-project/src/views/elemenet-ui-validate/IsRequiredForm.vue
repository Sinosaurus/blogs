<template>
  <div class="el-validate">
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
      <el-form-item label="活动名称" prop="name" verify>
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region" verify>
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option
            v-for="(item, index) in areaList"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox v-for="(item, index) in typeList" :key="index" :label="item.id">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource" verify>
        <el-radio-group v-model="ruleForm.resource">
          <el-radio :label="1">线上品牌商赞助</el-radio>
          <el-radio :label="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc" verify>
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import mix from './mixins/init-common'
export default {
  mixins: [mix],
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    setFormData () {
      setTimeout(() => {
        this.ruleForm = {
          name: '测试项目',
          region: 2,
          type: [1, 2],
          resource: 1,
          desc: '测试数据回显时校验颜色变化问题 '
        }
      }, 1500)
    }
  },
  mounted () {
    this.setFormData()
  }
}
</script>

<style lang="less">
@import url('~@/less/el-validate.less');
</style>
