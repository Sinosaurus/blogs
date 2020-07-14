<template>
  <div class="webpack">
    <nav>
      <ul class="wb-title">
        <li class="wb-development">开发环境</li>
        <li class="wb-production">生产环境</li>
        <li class="wb-test">测试环境</li>
      </ul>
    </nav>
    <main class="wb-main">
      <p class="wb-main-title">用来读取环境变量，颜色相同，代表对应的环境</p>
      <section :class="`wb-${envInfo.VUE_APP_CURRENTMODE}`">
        <p v-for="(item, index) in envInfo" :key="index">
          {{ index }} : {{ item }}
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      envInfo: process.env,
    }
  },
}
</script>

<style lang="less">
.webpack {
  .wb-development {
    background-color: #adc6ff;
  }
  .wb-production {
    background-color: #d3adf7;
  }
  .wb-test {
    background-color: #ffadd2;
  }
  .wb-title {
    display: flex;
    li {
      color: #fff;
      padding: 0 20px;
      font-size: 16px;
      border-radius: 4px;
      & + li {
        margin-left: 20px;
      }
    }
  }
  .wb-main {
    margin-top: 20px;
    .wb-main-title {
      margin-bottom: 10px;
    }
    section {
      padding: 20px;
      border-radius: 4px;
    }
  }
}
</style>
