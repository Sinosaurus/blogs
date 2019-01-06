/**
 * 存放 公共的数据
 */
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      areaList: state => state.formInitData.areaList,
      typeList: state => state.formInitData.typeList
    })
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
