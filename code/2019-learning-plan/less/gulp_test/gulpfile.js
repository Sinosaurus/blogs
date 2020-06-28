const gulp = require('gulp')

const lessChanged = require('gulp-less-changed')
const less = require('gulp-less')

const autoprefixer = require('gulp-autoprefixer')
const watchPath = require('gulp-watch-path')
const gutil = require('gulp-util')
// 避免错误时停止
const combiner = require('stream-combiner2')

const handleError = function (err) {
  const colors = gutil.colors
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
      browsers: 'last 2 versions',
    }),
    less(),
    gulp.dest('less/'),
  ])
  combined.on('error', handleError)
})

gulp.task('wathcless', () => {
  const watcher = gulp.watch('less/*.less', (event) => {
    const paths = watchPath(event, 'less/', 'less/')
    gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
    gutil.log('Dist' + paths.distPath)
    const combined = combiner.obj([
      gulp.src(paths.srcPath),
      lessChanged(),
      autoprefixer({
        browsers: 'last 2 versions',
      }),
      less(),
      gulp.dest(paths.distDir),
    ])
    combined.on('error', handleError)
  })
  watcher.on('change', (event) => {
    console.log('file' + event.path + 'was' + event.type)
    if (event.type === 'changed') {
      console.log(1111111111111111)
      gulp
        .src(['less/style.less'])
        .pipe(lessChanged())
        .pipe(less())
        .pipe(gulp.dest('dist/style.css'))
    }
  })
})

// 执行多个任务
gulp.task('default', ['lesscss', 'wathcless'])
