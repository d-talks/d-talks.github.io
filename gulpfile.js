let gulp = require('gulp')
let render = require('gulp-nunjucks-render')

gulp.task('nunjucks', function () {
  return gulp.src('src/pages/**/*.+(nj)')
    .pipe(render({
      path: ['src/templates']
    }))
    .pipe(gulp.dest('public'))
})
