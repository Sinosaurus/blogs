## `vue-router`防跳墙控制

> 因为在实际开发中，从自己的角度来看，发现可以通过地址栏输入地址，便可以进入本没有权限的网页。而我们一般只是操作登录页面，其他页面很少考虑，此刻特来尝试解决一下

- 基于`vue-router`使用

> 思路

<img src="./../../imgs/vue防跳墙.png">

- 页面初始结构

```
<el-row class="tac">
  <el-col :span="6">
    <h5>默认颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>

        <el-menu-item-group>
          <router-link to="/nav_menu/nav_menu_one">
            <el-menu-item index="1-1">选项1</el-menu-item>
          </router-link>
          <router-link to="/nav_menu/nav_menu_two">
            <el-menu-item index="1-2">选项2</el-menu-item>
          </router-link>
          <router-link to="/nav_menu/nav_menu_three">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
  <el-col :span="6">
    <router-view />
  </el-col>
</el-row>
```

- 效果图
  <img src="./../../imgs/vue_route (2).gif">

- 通过请求后，获取用户可显示的菜单栏 (假设指定**选项 2**无法显示)

> js

```
data() {
    return {
        user: {}
    }
},
created() {
    this.getUserInfo()
},
methods: {
    /**
    * 用户信息
    */
    getUserInfo() {
        // 假设用户信息
        const USER_INFO = ['one', 'three']
        //开始进行添加
        for (let item of USER_INFO) {
            this.user[item] = true
        }
    },
}
```

> html 对每个链接添加 `v-if="user.**"` 可以进行指定显示

```
<el-menu-item-group>
    <router-link to="/nav_menu/nav_menu_one" v-if="user.one">
    <el-menu-item index="1-1">选项1</el-menu-item>
    </router-link>
    <router-link to="/nav_menu/nav_menu_two" v-if="user.two">
    <el-menu-item index="1-2">选项2</el-menu-item>
    </router-link>
    <router-link to="/nav_menu/nav_menu_three" v-if="user.three">
    <el-menu-item index="1-3">选项3</el-menu-item>
    </router-link>
</el-menu-item-group>
```

- 效果图
  <img src="./../../imgs/vue_route (3).gif">

> 但是这样并不能防止跳墙，假设在地址栏中输入指定的地址
> <img src="./../../imgs/vue_route (4).gif">

> 可以看到，本不应该显示**选项 2**的，结果依旧可以显示

- 再对路由进行加工处理
  > 利用 `meta` 进行处理 `meta: { flag: ** }`

```
{
    path: '/nav_menu',
    name: 'NavMenu',
    component: () => import('./../components/NavMenu.vue'),
    children: [
    { path: 'nav_menu_one',   meta: {flag: 'one'},  component: () => import('./../components/NavMenuOne.vue') },
    { path: 'nav_menu_two',   meta: {flag: 'two'},  component: () => import('./../components/NavMenuTwo.vue') },
    { path: 'nav_menu_three', meta: {flag: 'three'},  component: () => import('./../components/NavMenuThree.vue')},
    ]
},
```

> 业务逻辑处理

```
router.beforeEach((to, from, next) => {
  // 假设显示的数据
  const USER_MENU = ['one', 'three']
  // ---------------------------------------
  if (USER_MENU.includes(to.meta.flag)) {
    next()
  } else {
    if (to.path === '/error') {
      next()
    } else {
      next('/error')
    }
  }
})
```

- 效果图
  <img src="./../../imgs/vue_route (1).gif">

> 至此，我们的要求就暂时完成了

### 总结

- 在测试过程中，会有相应的一些问题。特别是考虑到，如何拿到数据，这个可能会有点麻烦，需要仔细再仔细
- 个人觉得待优化的地方是，每个链接都需要添加`v-if`，目前没有想到更好的替代
- 由于需要指定 **字段** 因而需要与后台沟通好

> 最后希望能抛砖引玉，能有更优的解决方案
