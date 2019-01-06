
<template>
  <div id="app">
    <el-scrollbar ref="scrollbar" class="sc-scrollbar" wrapClass="sc-warp" viewClass="sc-view">
      <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
          <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>element表单校验
              </template>
              <MenuItem
                v-for="item in validateMenuList"
                :key="item.name"
                :name="item.name"
                :to="{name: item.router}">{{item.title}}</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
          <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
            <h1>element-ui表单校验系列</h1>
          </Header>
          <Content :style="{padding: '0 16px 16px'}">
            <Breadcrumb :style="{margin: '16px 0'}">
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem>{{titleName}}</BreadcrumbItem>
            </Breadcrumb>
            <Card>
              <div class="sc-container">
                <router-view></router-view>
              </div>
            </Card>
          </Content>
        </Layout>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      validateMenuList: state => state.validateMenuList
    }),
    titleName () {
      return this.$route.matched.length === 1 ? this.$route.matched[0].meta.title : ''
    }
  },
  mounted() {
    /* 窗口变化修改滚动条高度 */
    window.onresize = () => {
      this.$refs.scrollbar.update()
    }
  }
}
</script>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.sc-scrollbar {
  height: 100%;
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .sc-warp {
    // 父盒子
    // background-color: red;
  }
  .sc-view {
    // 子盒子
    // background-color: blue;
  }
  // is-vertical 垂直滚动条 可以设置宽度以及背景色
  .el-scrollbar__bar.is-vertical  {
    width: 8px;
    .el-scrollbar__thumb {
      background-color: #E57300;
    }
  }
}
.layout {
  // border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.sc-container {
  margin: 0 auto;
  min-height: 600px;
}
</style>
