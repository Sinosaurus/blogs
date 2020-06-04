<template>
  <div class="el-validate">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
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
          <el-checkbox
            v-for="(item, index) in typeList"
            :key="index"
            :label="item.id"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource" verify>
        <el-radio-group v-model="ruleForm.resource">
          <el-radio :label="1">线上品牌商赞助</el-radio>
          <el-radio :label="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div v-for="(item, i) in students" :key="i">
      {{ item.id }}
      {{ item.name }}
      <img :src="item.src" />
    </div>
  </div>
</template>

<script>
import mix from './mixins/init-common'
import el from './mixins/el/el-new'
export default {
  mixins: [mix, el],
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        type: [],
        resource: '',
        desc: '',
      },
      timerId: null,
    }
  },
  methods: {
    setFormData() {
      setTimeout(() => {
        this.ruleForm = {
          name: '测试项目',
          region: 2,
          type: [1, 2],
          resource: 1,
          desc: '测试数据回显时校验颜色变化问题',
        }

        this.$nextTick(() => {
          // 为了回显时，不只是el-select 校验被触发
          this.$refs.ruleForm.validate()
        })
      }, 1500)
    },
  },
  mounted() {
    this.setFormData()
  },
}
</script>

<style lang="less">
@import url('~@/less/el-validate.less');
</style>
