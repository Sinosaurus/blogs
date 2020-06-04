<template>
  <div class="vue-prop-child">
    <p>
      prop 只能选择
      <span class="code-red">['small', 'middle', 'large', 'default']</span>
      这里的值进行传递
    </p>
    <ul class="box-content">
      <li class="small">small</li>
      <li class="middle">middle</li>
      <li class="large">large</li>
      <li class="default">default</li>
    </ul>
    <div :class="child" class="prop-child">
      传递的参数 <span class="params">{{ child }}</span>
      <span class="p-red" :class="{ 'p-green': isTrue }">{{
        !isTrue ? '传参不对' : '传参正确'
      }}</span>
      <pre v-if="!isTrue">
        {{ error }}
      </pre>
    </div>
  </div>
</template>

<script>
function isOne(value) {
  return ['small', 'middle', 'large', 'default'].includes(value)
}
export default {
  props: {
    child: {
      validator(value) {
        return isOne(value)
      },
      default: 'default',
    },
  },
  data() {
    return {
      error: `
        <Child> at src/views/vue-test/DataTransmission/PropTestChild.vue
            <PropTest> at src/views/vue-test/DataTransmission/PropTest.vue
              <Data> at src/views/vue-test/Data.vue
                <Card>
                  <Content>
                    <Layout>
                      <ElScrollbar>
                        <App> at src/App.vue
                          <Root>
      `,
    }
  },
  computed: {
    isTrue() {
      return isOne(this.child)
    },
  },
}
</script>

<style lang="less">
.vue-prop-child {
  margin-top: 20px;
  .code-red {
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    background-color: #fff;
    color: #d14;
  }
  .box-content {
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    li {
      padding: 15px;
      border-radius: 10px;
      width: 24%;
      height: 200px;
    }
  }
  .prop-child {
    padding: 15px;
    margin-top: 50px;
    margin-bottom: 50px;
    min-height: 200px;
  }
  .small {
    background-color: #ff7875;
  }
  .middle {
    background-color: #ffa940;
  }
  .large {
    background-color: #bae637;
  }
  .default {
    background-color: #40a9ff;
  }
  .p-red {
    color: #f5222d;
  }
  .p-green {
    color: #52c41a;
  }
  .params {
    padding: 0 20px;
    font-size: 20px;
    font-weight: bold;
    font-family: Menlo, Monaco, Consolas;
  }
}
</style>
