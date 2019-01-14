<template>
  <div class="el-validate">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="80px"
    >
      <el-form-item
        label="活动名称"
        prop="name"
        verify
      >
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item
        label="活动区域"
        prop="region"
        verify
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
        verify
      >
        <el-radio-group v-model="ruleForm.resource">
          <el-radio :label="1">线上品牌商赞助</el-radio>
          <el-radio :label="2">线下场地免费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
        verify
      >
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
        ></el-input>
      </el-form-item>
      <!-- 动态生成 form 表单项 -->
      <el-row
        class="sc-row"
        :gutter="20"
        v-for="(t, i) in ruleForm.contactList"
        :key="t.id">
        <!-- ：key="i" 没问题； :key="t.id" 时，不会变亮  ==== 没必要在第一次赋值时给id，新增时再给即可-->
        <el-col :span="8">
          <el-form-item
            label="姓氏"
            :prop="'contactList.' + i +'.family_name'"
            :rules="[
                  { required: true, message: '不能为空', trigger: ['blur', 'change']}
                ]"
          >
            <el-input v-model="t.family_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item
            label="名字"
            :prop="'contactList.' + i +'.contact_name'"
            :rules="[
                  {required: true, message: '不能为空', trigger: ['blur', 'change']}
                ]"
            >
            <el-input v-model="t.contact_name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-button @click.prevent="deleteConcats(t)">删除</el-button>
        </el-col>
      </el-row>
      <el-row class="add-concats">
        <el-button type="primary" @click="addConcats">添加</el-button>
      </el-row>
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
export default {
  mixins: [mix],
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        type: [],
        resource: "",
        desc: "",
        contactList: [
          {
            family_name: '',
            contact_name: ''
          }
        ]
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      timerId: null
    }
  },
  methods: {
    setFormData() {
      this.timerId = setTimeout(() => {
        this.ruleForm = {
          name: "测试项目",
          region: 2,
          type: [1, 2],
          resource: 1,
          desc: "测试数据回显时校验颜色变化问题 ",
          contactList: [
            {
              family_name: '111',
              contact_name: '222',
              // id: Date.now() // 第一次不用绑定吗？
            }
          ]
        }
      }, 1500)
    },
    addConcats () {
      this.ruleForm.contactList.push({
        family_name: '',
        contact_name: '',
        id: Date.now() //  还是需要使用，这样可以 避免校验触发时，删除后却没有变化
      })
    },
    deleteConcats (item) {
      const List = this.ruleForm.contactList
      const index = List.findIndex((val) => {
        return item === val
      })
      List.splice(index, 1)
    }
  },
  beforeDestroy() {
    clearTimeout(this.timerId)
  },
  mounted() {
    this.setFormData()
  }
}
</script>

<style lang="less">
@import url("~@/less/el-validate.less");
.sc-row {
  max-width: 700px;
}
.add-concats {
  margin-left: 80px;
  margin-bottom: 10px;
  .el-button {
    width: 140px;
    height: 34px;
    line-height: 0;
    background-color: #91d5ff;
  }
}
</style>
