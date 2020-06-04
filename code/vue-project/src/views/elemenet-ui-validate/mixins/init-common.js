/**
 * 存放 公共的数据
 */
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('formData', {
      areaList: (state) => state.formInitData.areaList,
      typeList: (state) => state.formInitData.typeList,
    }),
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$Loading.start()
          // const timerId = setTimeout(() => {
          //   this.$Loading.finish()
          //   clearTimeout(timerId)
          // }, 3000)
          this.$Message.success('success')
        } else {
          this.$Message.error('error')
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
