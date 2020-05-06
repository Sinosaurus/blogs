<template>
  <div id="app">
    <el-scrollbar
      ref="scrollbar"
      class="sc-scrollbar"
      wrapClass="sc-warp"
      viewClass="sc-view"
    >
      <div class="layout">
        <Sider
          :style="{
            position: 'fixed',
            height: '100vh',
            left: 0,
            overflow: 'auto',
          }"
        >
          <Menu theme="dark" width="auto">
            <template v-for="item in routes">
              <template v-if="item.children">
                <Submenu :key="item.path" :name="item.path">
                  <template slot="title">
                    <Icon :type="item.meta.icon"></Icon>{{ item.meta.title }}
                  </template>
                  <template v-if="item.children">
                    <MenuItem
                      v-for="val in item.children"
                      :key="val.path"
                      :name="val.path"
                      :to="{ name: val.name }"
                      >{{ val.meta.title }}</MenuItem
                    >
                  </template>
                </Submenu>
              </template>
              <template v-else>
                <MenuItem
                  :key="item.path"
                  :name="item.path"
                  :to="{ name: item.name }"
                >
                  <Icon :type="item.meta.icon"></Icon>{{ item.meta.title }}
                </MenuItem>
              </template>
            </template>
          </Menu>
        </Sider>
        <Layout :style="{ marginLeft: '200px' }">
          <Header
            :style="{
              background: '#fff',
              boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
            }"
          >
            <h1>{{ handleTilte() }}</h1>
          </Header>
          <Content :style="{ padding: '0 16px 16px' }">
            <Breadcrumb :style="{ margin: '16px 0' }">
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem>{{ titleName }}</BreadcrumbItem>
            </Breadcrumb>
            <Card>
              <div class="sc-container">
                <keep-alive :include="cachedViews">
                  <router-view></router-view>
                </keep-alive>
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
import { routes } from '@/router'
export default {
  name: 'App',
  data() {
    return {
      routes,
    }
  },
  computed: {
    ...mapState({
      validateMenuList: (state) => state.validateMenuList,
      cssMunuList: (state) => state.cssMunuList,
      titleType: (state) => state.titleType,
      webpackList: (state) => state.webpackList,
      vueSlotList: (state) => state.vueSlotList,
      vueTest: (state) => state.vueTest,
      cachedViews: (state) => state.cache.cachedViews,
    }),

    titleName() {
      // return this.$route.matched.length === 1
      //   ? this.$route.matched[0].title
      //   : ''
      return this.$route.meta && this.$route.meta.title
    },
    actived() {
      let activeRouter = ''
      const MENU_LIST = [
        ...this.validateMenuList,
        ...this.cssMunuList,
        ...this.webpackList,
        ...this.vueSlotList,
        ...this.vueTest,
      ]
      MENU_LIST.map((item) => {
        if (this.$route.name === item.router) {
          activeRouter = item.name
        }
      })
      return activeRouter
    },
  },
  mounted() {
    /* 窗口变化修改滚动条高度 */
    window.onresize = () => {
      this.$refs.scrollbar.update()
    }
    this.setInitActiveViews()
  },
  methods: {
    /**
     * @description: 计算title显示
     * @return: string title
     */
    handleTilte() {
      if (!this.actived) return ''
      const N = this.actived.slice(0, 1)
      return this.titleType.filter((item) => {
        return item.type === N
      })[0].title
    },
    getInitActiveViews(routes) {
      let views = []
      routes.forEach((route) => {
        if (route.meta && route.meta.alive) {
          views.push(route.name)
        }
        if (route.children) {
          const childViews = this.getInitActiveViews(route.children)
          if (childViews.length) {
            views = [...views, ...childViews]
          }
        }
      })
      return views
    },
    setInitActiveViews() {
      const alives = this.getInitActiveViews(this.$router.options.routes)

      alives.forEach((item) => {
        this.$store.commit('cache/addCacheViews', item)
      })
    },
  },
}
</script>

<style lang="less">
@import url('~@/less/base.less');
html,
body {
  // height: 100%;
  // width: 100%;
  // overflow: hidden;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.sc-scrollbar {
  height: 100%;
  .el-scrollbar__wrap {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  .sc-warp {
    scroll-behavior: smooth;
    // 父盒子
    // background-color: red;
  }
  // is-vertical 垂直滚动条 可以设置宽度以及背景色
  .el-scrollbar__bar.is-vertical {
    width: 8px;
    .el-scrollbar__thumb {
      background-color: #e57300;
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
  min-height: 200px;
}
</style>
