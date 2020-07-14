
module.exports = {
  // 减少对一些浏览器的支持
  evergreen: true,
  // github 仓库
  repo: '',
  plugins: ['@vuepress/nprogress', '@vuepress/back-to-top'],
  // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  title: 'sinnet-cloud',
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: '光环云赋能平台',
  // 指定 vuepress build 的输出目录
  dest: './docs/.vuepress/dist',
  // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它
  base: '/sinnet-cloud/',
  // repo: 'https://qishaoxuan.github.io/js_tricks/',
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签
  head: [
    // ['link', { rel: 'icon', href: `/images/favicon.png` }],
    ['meta', { name: 'theme-color', content: '#00adb5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#00adb5' }],
    [
      'meta',
      {
        name: 'description',
        itemprop: 'description',
        content: '常用的js方法，js_tricks',
      },
    ],
    ['meta', { itemprop: 'name', content: 'js_trick' }],
    // ['meta', { itemprop: 'image', content: '/js_tricks/images/favicon.png' }],
  ],
  // markdown: {
  //   anchor: { permalink: false },
  //   toc: { includeLevel: [1, 2] },
  //   config: md => {
  //     md.use(require('markdown-it-include'), './')
  //   }
  // },
  // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
  themeConfig: {
    // 导航栏链接
    /**
     * 可以单个也可以多个
     * 
     * 1. 含有下列列表
     * {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
     * 1.1 下拉列表设置分组
     {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [] },
          { text: 'Group2', items: [] }
        ]
      }
     * 2. 使用 a 链接
     * 外部链接 <a> 标签的特性将默认包含target="_blank" rel="noopener noreferrer"，你可以提供 target 与 rel，它们将被作为特性被增加到 <a> 标签上：
     */

    nav: [
      { text: 'blog', link: 'https://qishaoxuan.github.io/blog/' },
      { text: 'GitHub', link: 'https://github.com/QiShaoXuan/js_tricks' },
    ],
    // 禁用导航栏
    // navbar: false，

    /**
     * 侧边栏
     * */
    // 你可以省略 .md 拓展名，同时以 / 结尾的路径将会被视为 */README.md
    /**
     * 如果你想要显示地指定链接的文字，使用一个格式为 [link, text] 的数组
     * 会覆盖  displayAllHeaders: true 该设定的值
     *
     */

    /**
     * 侧边栏分组
     * sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
     * 
     *  */

    sidebar: [
      '/sinnet/',
      ['/cloud/', '秀儿是你吗'],
      {
        title: '我也不知道为甚了',
        path: '/aaa/',
        collapsable: false,
        // sidebarDepath: 1,
        /** 此处时不时会出现bug https://github.com/vuejs/vuepress/issues?utf8=%E2%9C%93&q=Unknown+Custom+Element+
         * 此处不太好弄，children时常出错，需要修改下
         * 1. 命名不要重了，
         *   sinnet
         *   sinnet-cloud
         * 2. children 需要写全路径
         * 2.1 若是文件夹 /file/
         * 2.2 若是文件  /file
         */
        children: [
          ['/aaa/one', 'one'],
          ['/bbb/', 'bbb'],
        ],
      },
    ],
    // 自动生成 动态变化，用的几率不大
    // 显示所有页面的标题链接
<<<<<<< HEAD
    displayAllHeaders: true,
    smoothScroll: true
  }
=======
    // displayAllHeaders: true
  },
>>>>>>> 631ba472ca8cffc97f1cba016fcba68a6f7fe656
}
