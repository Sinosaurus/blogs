# puppeteer 学习

随着各大发文平台增多，有时就不得不每个平台都需要注册一个账号，进行文章发布，这样才能扩大影响力。而每次进行这种操作，可想而知是否就有些痛苦了。而这次为大家推荐一个node包[`puppeteer`](https://pptr.dev/)

puppeteer可以做很多时，基本可以阐述为，我们在浏览器上做什么，改工具便可以作为，因为其可以模拟人在页面上任何操作。这就给了爬虫，登录等一系列操作了。

## 技能
+ 截屏
+ 爬虫
+ ...

今天主要讲到爬虫，没有想到有朝一日，我们可以单纯利用js来进行获取自己想要的数据，而不是常说的 python， 我知道不能单纯依赖于某一个语言，但js确实给了我们接触其他领域的技能。

简单来说，puppeteer 主要是通过 api 来对页面进行我们想要的操作，比如输入文字，获取想要的信息等，这样只要自己熟悉 api 基本都可以进行操作。而这里与我而言最难的是，如何让程序按照自己的设想一步步执行，每一小点都需要考虑周全。因为此时的代码就是将自己在页面上操作步骤进行分解，每一小点都必须到位。



## 示例

> 下面是爬取某网站的信息，需要登录后才能获取更多内容

+ 写入cookie（这样可以免登陆，可以跳过很多的坑）
+ 找到对应的元素
+ 获取内容，生成需要的数据

```ts
/*
 * 爬虫
 * @LastEditors: Sinosaurus
 */
const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

interface result {
  question: String,
  options: Array<String>,
  answer: String,
  analysis: String
}

function getTitleAndItems (page) {
  return new Promise(async resolve => {
    // 这个才是内容显示的
    const realTitleSelector = '#sub_detail > b'
    await page.waitForSelector(realTitleSelector)
    // question
    const titleSelector = '#sub_detail'
    await page.waitForSelector(titleSelector)
    const question = await page.$eval(titleSelector, el => el.innerText)

    const realItemSelector = '#sub_choices .form-check-input'
    await page.waitForSelector(realItemSelector)

    // options
    const subItemSelectors = '#sub_choices .alert-secondary'
    await page.waitForSelector(subItemSelectors)
    const options = await page.$$eval(subItemSelectors, items => {
      const textList = items.map(item => {
        return item.innerText
      })
      return textList
    })

    // analysis （解析）
    const btn_select = '#container > div:nth-child(2) > button.btn.btn-primary'
    await page.waitForSelector(btn_select)
    await page.click(btn_select, {
      delay: 100
    })

    const dialog_select = '#explanation'
    await page.waitForSelector(dialog_select)
    const analysis = await page.$eval(dialog_select, el => {
      const text = el.innerText
      const str = 'TODO:'
      return {
        analysis: text,
        answer: str
      }
    })
    
    const close_dialog_select = '#exampleModal > div > div > div.modal-footer > button'
    await page.waitForSelector(close_dialog_select)
    await page.click(close_dialog_select)
    const result = {question,options, ...analysis}
    resolve(result)
  })
}

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // 忽略 https 的错误
    ignoreHTTPSErrors: true,
    slowMo: 50,
    defaultViewport: {
      width: 1440,
      height: 1366
    }
  });

  const page = await browser.newPage()
  // setcookie
  // https://github.com/puppeteer/puppeteer/issues/2994#issuecomment-412740938
  const cookie = [{
        "domain": "**mytodo.vip**",
        "hostOnly": true,
        "httpOnly": true,
        "name": "session",
        "path": "/",
        "sameSite": "unspecified",
        "secure": false,
        "session": true,
        "storeId": "0",
        "value": "**",
        "id": 1
    }]
  page.setCookie(...cookie)
  console.log(await '准备前往目的地')
  await page.goto("URL")
  
  // 收集题目的列表
  let questionList = []
  const clickSelects = '#work_area button'
  await page.waitForSelector(clickSelects)
  const btnLength = await page.$$eval(clickSelects, el => el.length)
  console.log(`总共有${btnLength}题目`)
  for (let i = 1; i <= btnLength; i++) {
    const select = `#work_area > button:nth-child(${i})`
    /**
     * 1. 移到可视区域
     * 2. 点击
     */
    // await page.focus(select)
    await page.click(select, {
      delay: 150
    })
    console.log(`第${i}题开始`)
    // 此处需要判断页面内容发生了变化，不然一直重复
    // await page.waitFor(1500)
    if (i > 99) break
    const result = await getTitleAndItems(page) as result
    if (questionList.some(item => item.question === result.question)) {
      console.log('equeal')
      continue
    }
    questionList.push(result)
    console.log(`第${i}题结束`)
  }
  // 写入文件中
  const file = path.join(__dirname, 'aws.json')
  await fs.writeFileSync(file, JSON.stringify(questionList, null, 2), err => {
    if (err) {
      throw new Error(err)
    }
    console.log('ok')
  })
  await page.close()
  await browser.close()
})()
```

上面是一段执行代码，不做过多阐述，在这个过程中，并不是 puppeteer 有多难，而是自己如何梳理出想要的逻辑，还便于扩展，这个倒是有些难搞。而且对基本功要求很高，避免这个在不引入其他 库时，更多地是如何写出一个可以考虑周全的方案有些难。因为在爬取的过程中，你无法知道到底有哪些情况，只能一步步尝试，而在这个过程中，才是花费时间的大头。


下面是我前段时间学习的一些历程
----------

## API

### page

```js
const puppeteer = require('puppeteer')
puppeteer.launch().then(async browser => {
  // page
  const page = await browser.newPage()
})
```

#### 事件
可以调用 node原生事件[`EventEmitter`](https://nodejs.org/api/events.html#events_class_eventemitter)

+ `on`
  ```js
    page.on('request', fn)
  ```
  > 事件列表
    `close, console, dialog, domcontentloaded, error, frameattached, framedetached, framenavigated, load, metrics, pageerror, request, requestfailed, requestfinished, response, workercreated, workerdestroyed`

+ `once`
  ```js
    page.once('load', () => console.log('page loaded'))
  ```
  > 在使用`await`时，会导致`load`无法触发，`await page.goto(url)`，因为await已经有了load的效果
    
+ `removeListener` 注销事件
  ```js
    page.removeListener('request', fn)
  ```    

#### 命名空间
+ coverage
+ keyboard
+ mouse
+ touchsreen
+ tracing
+ goto
+ waitForSelector
+ waitForNavigation({
    // 跳转页面，等待加载完
    waitUntil: 'load'
  })
+ content
+ evaluate
+ evaluate 相当于进入了dom上下文，可以在内部直接进行正常的 dom属性操作
+ click 点击
+ type 输入

##### `$、$$、$evel、$$evel`

```js
  $ => querySelector
  $$ => qyuerSelectorAll
  $evel => selector.$evel(select, node => console.log('拿到当前元素'))
  $$evel => selector.$$evel(select, nodes => console.log('拿到当前元素,这是一个数组'))
```

## 参考链接
+ [puppeteer初探](https://juejin.im/post/5b58a1a051882519790c9295?utm_source=gold_browser_extension)
+ [网友1](http://csbun.github.io/blog/2017/09/puppeteer/)
+ [网友2](https://juejin.im/entry/5a3aa0e86fb9a045076fd385)
+ [Chrome Puppeteer](https://developers.google.com/web/tools/puppeteer)
+ [api](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)
+ [github1](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
+ [看云](https://www.kancloud.cn/luponu/puppeteer/870136)
+ [齐客谷](https://www.qikegu.com/docs/4539)
+ [cookie](https://juejin.im/post/5b5b15e9e51d4519202e3714)
+ [cookie写入](https://github.com/GoogleChrome/puppeteer/issues/717)
+ [冰山工作室](http://www.bingshangroup.com/blog2/action2/iamor%EF%BC%9A%E5%BC%A0%E8%B6%8A/puppeteer.html#%E5%92%8Ccheerio%E7%9A%84%E5%8C%BA%E5%88%AB)

## 如何使用当前浏览器的文件
> 鉴于目前各大网页都设置了防爬虫处理
  + 滑块（有一定逻辑，简单滑动还不生效） == csdn
  + 图片滑块（无法知道滑到哪个位置） == 百度
  + 类名不固定（同一个元素，刷新后，id可能会变化）== csdn
  + 滑块千奇百怪
    - 百度 颠倒图片
    - 知乎 找出颠倒的文字
  + 验证码（这种应该可以结合命令行进行处理）
若是想简单使用，最好是使用手机号登录，再结合命令行，或许是最直接的。奈何目前登录方式各样，有的使用 单点登录（包括第三方），导致页面无法一直锁定

> 不得已，转战思路，能否通过本地提前登录，然后在开启自动化时，便已经登录，这样便可以跳过前面一大堆各种验证问题，现在只需要判断是否登录（可以通过上面是否有对应的用户即可）

+ [查找 user_data_dir](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md)

使用 userDataDir 时，会跟 {headless: false}相冲突，导致程序卡死，只能去掉，方可正常流转
> 依旧不行，看选择的路径吧，原来是我的路径使用错误，利用 `chrome://version`可以查看到

+ [登录信息不能马上反映到data数据中](http://imhxl.com/post/puppeteer.html)
+ [看起来可以](https://guozh.net/puppeteer-cookie-login/)
+ [博客园](https://www.cnblogs.com/tianfang/p/9027187.html)

## args (浏览器)
+ [1](https://kapeli.com/cheat_sheets/Chromium_Command_Line_Switches.docset/Contents/Resources/Documents/index)
+ [2](https://peter.sh/experiments/chromium-command-line-switches/#load-extension)

## project
+ [图灵书](https://github.com/laispace/puppeteer-explore/blob/master/demo/download-ituring-books.js)
+ [typescript 编写](https://zhuanlan.zhihu.com/p/35758104)
+ [ts1](https://github.com/bWhirring/puppeteer-examples/blob/master/examples/cas.ts)
+ [autologin-facebook](https://github.com/aofdev/autologin-facebook)

## 谷歌插件 [puppeteer recorder](https://chrome.google.com/webstore/search/puppeteer?utm_source=chrome-ntp-icon)
> 可以快速生成选择的元素以及操作步骤
