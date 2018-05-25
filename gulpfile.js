var gulp = require('gulp');
var tiny = require('gulp-tinypng-nokey')

// 图片压缩处理
gulp.task('tiny', function (cb) {
  var stream = gulp.src('./static/**/*.@(png|jpeg|gif|jpg)')
        .pipe(tiny())
        .pipe(gulp.dest('./src/assets/images/'));

  console.log('图片压缩成功！');
  return stream;

});
