## vue 项目搭建 （二） axios 封装篇

## 项目布局

> `vue-cli`构建初始项目后，在`src`中进行增删修改

```
// 此处是模仿github上  bailicangdu  的
├── src
|   ├── apis
|   |   ├── api.js                              // 接口详情配置
│   ├── components                              // 组件
|   |   ├── common                              // 公共组件
│   ├── config                                  // 基本配置
│   │   ├── fetch.js                            // 获取数据
│   ├── service                                 // 数据交互统一调配
│   │   ├── getData.js                          // 获取数据的统一调配文件，对接
```

<img src="./../../imgs/axios修改版.png">
+ **`fetch.js`**

```
import axios from 'axios'
import qs from 'qs'
import { baseUrl, isFrom } from './../apis/api.js'
const baseURL = baseUrl
// 假设 api里定义了一个请求头类型
const isFrom = isFrom
const headers = isFrom ? {'Content-Type': 'application/x-www-form-urlencoded'} : {'Content-Type': 'application/json', 'Accept': 'application/json'}
// axios实例
const instance = axios.create({
    baseURL,
    headers,
    timeout: 10000,
})
/**
 * get 请求数据进行修改  默认以对象形式传参
 */
function getDataConfig(data = {}) {
  if (typeof data !== 'object') return data
  const arr = []
  for (let key in data) {
      let res = `${key}=${data[key]}`
      arr.push(res)
  }
  const str = arr.join('&')
  return str
}
/**
 * 请求数据拦截
 */
instance.interceptors.request.use( config => {
    if (isForm && config.method === 'post') config.data = qs.stringify(config.data)
    // 此处应该行不通
    // if (config.method === 'get') config.data = getDataConfig(config.data)
    return config
}, error => {
    return Promise.reject(error)
})
/**
 * 响应数据拦截
 */
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})
const fetch = {
  post(url, request, status = '0000') {
      return new Promise((resolve, reject) => {
          instance({
              method: 'post',
              url,
              request,
          }).then( response => {
              const res = response.data
              // 正确
              if (res && response.status === status) {
                  resolve(res)
              }
              //错误
              reject(res)
          }).catch(error => {
              //错误
              reject(error)
          })
      })
  },
  get(url, request, status = '0000') {
      const data = getDataConfig(request)
      return new Promise((resolve, reject) => {
          instance({
              method: 'get',
              url: url + '?' + data
          }).then(response => {
              const res = response.data
              if (res && response.status === status) {
                  response(res)
              }
              resject(res)
          }).catch(error => {
              reject(error)
          })
      })
  }
}
export default fetchs
```

- **`service`**
  - `getData.js`

```
// apis getTableList
import fetch from './../config/fetch.js'
import { apis } from './../apis/api.js'
export const  getTableList = data => fetch.post(apis.getTableList, data)
```

- **component**
  - table.vue (某个组件)
  - _注意 单个请求多个请求_

```
// js
import {getTableList, getList} from './../service/getData.js'
export default {
    created() {
      this.sendPost()
    },
    methods: {
        async sendPost() {
            // 请求单个数据
            const res = await getTableList(data)
            // 多个数据同时请求
            cosnt [r, list] = await Promise.all([getTableList(data), getList(data)])
            console.log(r, list)
        }
    }
}
```

> 至此，封装 axios 差不多完结，这算是花费自己几周的时间，来想的吧

- 有的人人为在请求时排除接口相同的请求，但是我碰到过，统一接口，通过传入不同参数，可以拿到不同数据，因而不太建议排除，若是排除还需更加细致为好
- **并发**目前是我人为比较好的处理方式，之前考虑`axios.all`感觉封装很麻烦，突然看到有人使用 `await Promise.all()` 甚是喜欢
- 若是有问题之处，依旧希望大家多多指正
