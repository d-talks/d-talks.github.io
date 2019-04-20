let gulp = require('gulp')
let render = require('gulp-nunjucks-render')

gulp.task('default', function () {
  return gulp.src('src/pages/**/*.+(html|nunjucks)')
    .pipe(render({
      path: ['src/templates']
    }))
    .pipe(gulp.dest('.'))
})
