\*\*## vue 中页面跳墙处理

> 页面跳墙中使用 `vue-router`中的 `beforeEach`的死循环问题

- 问题展现

```
import Router from 'vue-router'

const router = new Router({
    {path: '/', component: index },
    {path: '/login', component: login},
    {path: '/error', component: error},
    {path: '*', component: error}
})

router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.getItem('loginData')
    if (isLogin) {
        next()
    } else {
        next('/error')
    }
})
```

> 最近在使用时，一直陷入死循环，当时的想法是如何将路由提取出来，脱离`beforeEach`的控制，之后发现不可行。上面问题再现，会出现死循环，因为 `/error` 会在进入前 又要进入`beforeEach`中 ，这样就会一直循环下去
> 所以就是想如何跳出这个循环即可

```
router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.getItem('loginData')
    if (isLogin) {
        next()
    } else {
        //next('/error')
        if (to.path === '/error') { //这就是跳出循环的关键
           next()
        } else {
            next('/error')
        }
    }
})
```

> 这样写，其实这个会执行两次，第二次进来是以`/error`的路由进来的\*\*
