var gulp = require('gulp')
  concat = require('gulp-concat'),
  babel = require('gulp-babel')
  
gulp.task('jsx', function () {
  return gulp.src(['*.jsx'])
    .pipe(babel({presets:['react'],minified:false}))
    .pipe(gulp.dest(''))
});  
gulp.task('js', function () {
  return gulp.src(['libs/*', 'node_modules/react-router/umd/ReactRouter.min.js'])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(''))
});
gulp.task('build', ['js', 'jsx']);
