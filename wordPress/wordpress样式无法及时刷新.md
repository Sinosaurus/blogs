# wordpress 样式无法及时刷新
wordpress编写`style`样式时，无法及时刷新页面，因此特意记录一番如何处理较好，网友的建议[清除Chrome缓存](https://blog.csdn.net/dreamstone_xiaoqw/article/details/78122581)，[实时修改style携带的参数](https://www.breakyizhan.com/wpress/4333.html)

## 折腾之旅开启
+ 缓存

  由于缓存问题，会导致浏览器不再去请求css，而是直接拿缓存里的，因而只需要让浏览器一直以为是新的文件即可，添加后缀**时间戳**无疑是最好的
  ```
  // wordpress version 5.04
  **functions.php**
  wp_enqueue_style( 'twentynineteen-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ));
  <!-- 修改为 -->
  /**
   * strtotime('2019-04-15') 可以改为 time() 但是那样每次请求都会重新更新，若是到了正式环境，其实只要第一次请求最新，后期都用缓存就好，因而建议使用 strtotime
   */
  wp_enqueue_style( 'twentynineteen-style', get_stylesheet_uri(), array(), strtotime('2019-04-15'));
  ```
+  `WP Super Cache` 缓存插件

  有时候安装了该插件，导致大部分都缓存了，因而需要**删除缓存**就可以了

  ![缓存](./wordpress_css.png)

+ 清除浏览器缓存

  ![缓存](./css.png)
  
> 使用上述问题都没有解决我的问题，才发现我的更本不是这类问题

## `issue` **less**
由于使用的是拿官方文档进行修改的，因而很多都是自己写的样式，由于`style.css`是唯一的，只有一个`css`,都是把其他样式进行合并在一起，这样可以减少请求，因而在使用`less`进行编写时就出了一个很意外的问题

> code

style.less
```
// normalize
@import './less/normalize.less';

// reset
@import './less/reset.less';

// globel
@import './less/globel.less';

// index
@import './less/index.less';
....
```
大致就是这样的，而我修改的是期中一个文件`globel.less`，每次更新都没有，及时在页面中显示想要的样式，才发现原来是用了`less`的缘故.`在使用less时，由于又引入其他less文件，导致在style.less无法监听其他less文件是否修改`，因而现在思考如何在`less`文件进行修改时，`style.less`也进行修改就可以了

+ 参考的资料
  - [watch api](https://stackoverflow.com/questions/13117647/refresh-less-css-which-has-other-imported-less-files-without-page-load/13118202#13118202)
  - [gulp](https://blog.csdn.net/weixin_36706903/article/details/80995954)
  - [问题与我相同](https://segmentfault.com/q/1010000007626956)
  - [gulp的使用](https://github.com/onface/gulp-book/blob/master/chapter7.md)
  - [gulp 报错处理](https://www.cnblogs.com/chris-oil/p/5387904.html)
  - [@import](http://kunkun12.com/2015/01/11/less-features/)
  - [less import](http://lesscss.cn/features/#import-directives-feature)
  - [less-watch-compiler](https://stackoverflow.com/questions/9421375/how-to-use-less-js-with-node-js-to-watch-less-files-in-a-folder)

## 探索之旅
前前后后整理了多种思路，坚持许久终于有了结果，虽然不是心中最好的，但好歹这条路通了，还是可以的

> 实现的大致三种方式
+ `nodemon` 来监听文件执行系统命令
+ `gulp` 利用对应的插件进行操作
+ `less-watch-compiler` less的一个插件（这个真是无心插柳柳成荫，却成了解决当前 问题的关键）

### [nodemon code](https://gitee.com/private_sheet/blogs/tree/master/code/2019-learning-plan/less/node)
利用 node 的 `child_process` 来执行系统命令，同时利用 `nodemon` 来监听文件变化

> code 

index.js
```
// 
const exec = require('child_process').exec
const path = require('path')

// const cmd = 'node_modules/less/bin/lessc less/style.less style.css'
// const cmd = `${path.join(__dirname + 'node_modules\//less\/bin\/lessc')} ${path.join(__dirname + 'less\/style.less')} style.css`
const cmd = 'start.sh'
exec(cmd, (err, stdout, stderr) => {
  console.log(err)
})
```
nodemon.json

```
...
"watch": ["less", "index.js"], // 需要监听的文件
...
```

start.sh
```
node_modules/less/bin/lessc less/style.less style.css
```
> 总是哪里缺点，因为相当于监听多个了。`index.js` 和 `less`变化，各自行动，无法在 `less`变化，同时执行`index.js` ，[改配置](https://www.bbsmax.com/A/gAJG2rwgzZ/)
```
nodemon.json
...
 "events": {
    "start": "start.sh",
    "restart": "start.sh"
  },
```
依旧无法生效，总是无法进行关联，先放弃了

+ 注意 
  - window无法直接通过运行命令，需要周转一下 [说明](http://nodejs.cn/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows)

### [gulp](https://gitee.com/private_sheet/blogs/tree/master/code/2019-learning-plan/less/gulp_test)
本来是想利用`gulp-less-changed`这个插件来进行处理，可花费最长的时间，却并没有什么用

code
```gulpfile.js
const gulp = require('gulp');

const lessChanged = require('gulp-less-changed');
const less = require('gulp-less');

const autoprefixer = require('gulp-autoprefixer')
const watchPath = require('gulp-watch-path')
const gutil = require('gulp-util')
// 避免错误时停止
const combiner = require('stream-combiner2')

const handleError = function (err) {
  const colors = gutil.colors;
  console.log('\n')
  gutil.log(colors.red('Error!'))
  gutil.log('fileName: ' + colors.red(err.fileName))
  gutil.log('lineNumber: ' + colors.red(err.lineNumber))
  gutil.log('message: ' + err.message)
  gutil.log('plugin: ' + colors.yellow(err.plugin))
}

gulp.task('lesscss', () => {
  const combined = combiner.obj([
    gulp.src('less/*.less'),
    lessChanged(),
    autoprefixer({
      browsers: 'last 2 versions'
    }),
    less(),
    gulp.dest('less/')
  ])
  combined.on('error', handleError)
})

gulp.task('wathcless', () => {
  const watcher = gulp.watch('less/*.less', event => {
    const paths = watchPath(event, 'less/', 'less/')
    gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
    gutil.log('Dist' + paths.distPath)
    const combined = combiner.obj([
      gulp.src(paths.srcPath),
      lessChanged(),
      autoprefixer({
        browsers: 'last 2 versions'
      }),
      less(),
      gulp.dest(paths.distDir)
    ])
    combined.on('error', handleError)
  })
  watcher.on('change', event => {
    console.log('file' + event.path + 'was' + event.type)
    if (event.type === 'changed') {
      gulp.src(['less/style.less'])
      .pipe(lessChanged())
      .pipe(less())
      .pipe(gulp.dest('dist/style.css'))
    }
  })
})
// 执行多个任务
gulp.task('default', ['lesscss', 'wathcless'])
```
less某个文件变了，却并没有引起其他引入文件的变化，又得放弃，无奈的狠啊

### [less-watch-compiler](https://gitee.com/private_sheet/blogs/tree/master/code/2019-learning-plan/less/less-compiler-watch)
这个使用起来相当简单，有点类似`nodemon`，只是别人已经用不同的解决了上述的问题

package.json
```
"scripts": {
    "dev": "less-watch-compiler src dist style.less"
  },
```

执行命令
```
npm run dev // 可以一直监听改变
```

同时利用 `vscode autoprefixer` 就可以解决兼容问题，以及文件变化，重新进行编译，而我也在wordpress中测试成功了，算是暂时解决了吧

## 总结
+ 耗费好长时间才算解决，还是要多了解挺好的
+ window的命令执行确实有弊端，有点hold不住了
+ gulp虽然有点日薄西山，但是确实有其独到之处，学起来比webpack快多了，想想webpack一脸...
+ 后期还得想想 gulp这个解决方案，避免有人做出来了，只是没有找到了而已