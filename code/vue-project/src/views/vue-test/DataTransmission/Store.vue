<template>
  <div class="store-test">
    <span style="color: red; font-weight: bold; font-size: 20px;">{{
      count
    }}</span>
    <pre>
      <el-row :gutter="20">
        <el-col :span="12">
          <p class="code-style">
            一般获取vuex里的值
           {{code1}}
          </p>
        </el-col>
        <el-col :span="12">
          <p class="code-style">
            若是名字相同，可以简化
           {{code2}}
          </p>
        </el-col>
      </el-row>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      code1: `import { mapState } from 'vuex'
        ...
        computed: mapState('module', {
          value: state => state.value
        })
      `,
      code2: `
      import { mapState } from 'vuex'
      ...
      computed: mapState('module', [
        count
      ]) 
      `,
    }
  },
  computed: {
    ...mapState('test', ['count']),
  },
}
</script>
<style lang="less">
.store-test {
  .code-style {
    padding: 10px;
    display: inline-block;
    font-family: Menlo, Monaco, Consolas;
    background-color: #95de64;
  }
}
</style>
