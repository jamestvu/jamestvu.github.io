var gulp = require('gulp');

var minify = require('gulp-minify');

gulp.task('compress', function () {
    gulp.src('lib/*.js')
      .pipe(minify({
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('dist'))
});

//gulp.task('default', function () {
//    return console.info(gulp.src('*.html').pipe(minifyHTML()).pipe(gulp.dest('dest')));
//});

//gulp.task('potato', function () {
//    console.info('running potato');
//});

//gulp.task('run-both', ['default', 'potato'], function() {
//    console.info('inside run both');
//});

