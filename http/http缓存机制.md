# [http 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)

有时候为了页面加载快，我们需要让一部分资源默认缓存在本地，这样不用每次都进行请求。但若是发布也被缓存下来，这样就很尴尬了，本来已经更新了，却依旧显示上一次的，这样就不合理了

#### 各种类型的缓存

- 私有缓存 [`local (private) cache`]
  - 只能用于单独用户 (eg: 浏览器设置中的“缓存”选项。浏览器缓存拥有用户通过 HTTP 下载的所有文档。)
- 共享缓存 [`shared cache`]
  - 共享缓存可以被多个用户使用 (eg: ISP 或你所在的公司可能会架设一个 web 代理来作为本地网络基础的一部分提供给用户。这样热门的资源就会被重复使用，减少网络拥堵与延迟。)

#### 缓存操作的目标

常见的 HTTP 缓存只能存储`GET`响应，对于其他类型的响应无能为力

### 缓存控制

- `Cache-control 头`
  > HTTP/1.1 定义的 Cache-Control 头用来区分对缓存机制的支持情况， 请求头和响应头都支持这个属性。通过它提供的不同的值来定义缓存策略
  - 缓存请求指令 [客户端]
    ```
      Cache-Control: max-age=<seconds>
      Cache-Control: max-stale[=<seconds>]
      Cache-Control: min-fresh=<seconds>
      Cache-control: no-cache
      Cache-control: no-store
      Cache-control: no-transform
      Cache-control: only-if-cached
    ```
  - 缓存响应指令 [服务端]
    ```
      Cache-control: must-revalidate
      Cache-control: no-cache
      Cache-control: no-store
      Cache-control: no-transform
      Cache-control: public
      Cache-control: private
      Cache-control: proxy-revalidate
      Cache-Control: max-age=<seconds>
      Cache-control: s-maxage=<seconds>
    ```
  - 指令解读
    - 可缓存性
      - `public` 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存
      - `private` 表明响应只能被**单个用户缓存**，不能作为共享缓存（即代理服务器不能缓存它）,可以缓存响应内容
      - `no-cache` 在发布缓存副本之前，强制高速缓存将请求提交给原始服务器进行验证
      - `only-if-cached` 表明客户端只接受已缓存的响应，并且不要向原始服务器检查是否有更新的拷贝
    - 到期
      - `max-age=<seconds>` 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与 Expires 相反，时间是相对于请求的时间
      - `s-maxage=<seconds>` 覆盖 max-age 或者 Expires 头，但是仅适用于**共享缓存**(比如各个代理)，并且私有缓存中它被忽略
      - `max-stale[=<seconds>]` 表明客户端愿意接收一个已经过期的资源。 可选的设置一个时间(单位秒)，表示响应不能超过的过时时间
      - `min-fresh=<seconds>` 表示客户端希望在指定的时间内获取最新的响应
    - 重新验证和重新加载
      - `must-revalidate` 缓存必须在使用之前验证旧资源的状态，并且不可使用过期资源
      - `proxy-revalidate` 与 must-revalidate 作用相同，但它仅适用于**共享缓存**（例如代理），并被私有缓存忽略
    - 其他
      - `no-store` 缓存不应存储有关客户端请求或服务器响应的任何内容
      - `no-transform` 不得对资源进行转换或转变 (Content-Encoding, Content-Range, Content-Type 等 HTTP 头不能由代理修改)
    - 示例
      - 禁止缓存
        ```
          Cache-Control: no-cache, no-store, must-revalidate
        ```
      - 缓存静态资源
        ```
          // 图像，CSS文件和JavaScript文件
          Cache-Control:public, max-age=31536000
        ```
- `禁止进行缓存`
  ```
    Cache-Control: no-store
  ```
- `强制确认缓存`
  每次有请求发出时,该请求应该会带有与本地缓存相关的验证字段发到服务器，服务器端会验证请求中所描述的缓存是否过期，若为过期（返回 `304`），则缓存才使用本地缓存副本。
  ```
    Cache-Control: no-cache
  ```
- `私有缓存和公共缓存`
  - `private` 一般应用于浏览器私有缓存
  - `public` 可以被任何中间人（eg: 中间代理， cdn 等）缓存
- `缓存过期机制`
  - `max-age=<seconds>` 资源能够被缓存的最大时间, 是距离请求发起的时间的秒数
  - `Expires` 响应头包含日期/时间， 即在此时候之后，响应过期。 _现在基本不使用了_
    > 如果在 Cache-Control 响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。
    ```
      // http-date: 一个 HTTP-日期 时间戳 (eg: Wed, 21 Oct 2015 07:28:00 GMT)
      Expires: <http-date>
    ```
- `缓存验证确认` `must-revalidate`
  > 那就意味着缓存在考虑使用一个陈旧的资源时，必须先验证它的状态，已过期的缓存将不被使用
- `Pragma 头` 是 HTTP/1.0 标准中定义的一个 header 属性 (等同于 `Cache-Control: no-cache`),但是 HTTP 的响应头不支持这个属性

## 解决方案

> 实现方案

- [新鲜度](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ#%E6%96%B0%E9%B2%9C%E5%BA%A6)
- [加速资源](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ#%E5%8A%A0%E9%80%9F%E8%B5%84%E6%BA%90)
- [实现方案](https://www.cnblogs.com/chenqf/p/6386163.html)

* 前端设置

  - 添加时间戳 [get 请求] (eg: index.css?v=Date.now())
  - 请求头设置

* 服务端设置【基于 `Apache/2.4.39`】 [参考](https://zhuanlan.zhihu.com/p/35590575)

  1. 找到 httpd.conf
  2. 搜索到下面两个，同时去掉`#`

  ```
  LoadModule expires_module modules/mod_expires.so
  LoadModule headers_module modules/mod_headers.so
  ```

  3. 文本后添加

  - `expire` 开启

  ```
  <IfModule expires_module>

    #打开缓存
    ExpiresActive on
    #css文件缓存7200000/3600/24=83天
    ExpiresByType text/css A7200000

    #js文件缓存83天
    ExpiresByType application/x-javascript A7200000
    ExpiresByType application/javascript A7200000

    #html文件缓存83天
    ExpiresByType text/html A7200000

    #图片文件缓存83天
    ExpiresByType image/jpeg A7200000
    ExpiresByType image/gif A7200000
    ExpiresByType image/png A7200000
    ExpiresByType image/x-icon A7200000

  </IfModule>
  ```

  - `Cache-Control`

  ```
  <FilesMatch "\.(flv|gif|jpg|jpeg|png|ico|swf)$">
  Header set Cache-Control "max-age=604800, public"
  </FilesMatch>

  <FilesMatch "\.(css|js)$">
  　Header set Cache-Control "max-age=604800, public"
  </FilesMatch>
  ```

  4. 重启 apache

  > 注意：若是报`\xe3\x80\x80`（空格的问题）在对应行清除空格即可

## 总结

- 这个依旧没有我想象的那般随意，也以为着，需要前后一起整，而不是单纯依靠前端即可
- 上述找了大量资料，若有不当不处还请谅解
