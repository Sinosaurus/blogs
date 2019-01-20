<template>
  <div class="css-zxx">
    <img
      src="@/assets/css-test/css-quiz-1.jpg"
      alt=""
      class="zxx-img"
    >
    <div class="css-code-views">
      <dl>
        <template v-for="item in infoList">
          <dt>{{item.title}}</dt>
          <dd>{{item.info}}</dd>
        </template>
      </dl>
    </div>
    <a href="https://www.zhangxinxu.com/wordpress/2019/01/css-quiz-1/">https://www.zhangxinxu.com/wordpress/2019/01/css-quiz-1/</a>
    <pre>
      <div v-for="(item, index) in codeList" :key="index" v-text="item"></div>
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infoList: [
        {
          title: '手机系统',
          info: 'Android'
        },
        {
          title: '登录方式',
          info: ''
        },
        {
          title: '绑定事件',
          info: new Date().toLocaleTimeString()
        },
        {
          title: '绑定状态',
          info: ''
        }
      ],
      codeList: [
        `
        dl {
          border: 1px solid #000;
          position: relative;
        }
        dd {
          position: absolute;
          right: 0;
          margin: -1.2em 0 0 0;
          // 文字多时自动换行
          word-break: break-all;
          white-space: wrap;
        }`,
        `
        // ----- 没有值时进行占位 ----
        &:empty::before { 
          content: "------";
          color: #999;
          background-color: red;
        }`
      ]
    }
  }
}
</script>

<style lang="less">
.css-zxx {
  .zxx-img {
    height: 400px;
  }
  pre {
    padding: 10px;
    border: 1px dotted #785;
    background: #f5f5f5;
    line-height: 1.4;
    font-family: Consolas;
  }
  .css-code-views {
    margin: 20px 0;
    min-height: 300px;
    border-radius: 6px;
    background-color: #d9f7be;
    dl {
      max-width: 300px;
      border: 1px solid #000;
      position: relative;
    }
    // dd {
    //   position: absolute;
    //   right: 0;
    //   margin: -1.2em 0 0 0;
    //   margin-left: 5em;
    //   word-break: break-all;
    //   white-space: wrap;

    dd {
      margin: -1.5em 0 0 5em;
      text-align: right;
      &:empty::before { // 没有值时进行占位
        content: "------";
        color: #999;
        background-color: red;
      }
    }
    // }
  }
}
</style>
