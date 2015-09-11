var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('compress', function () {
    gulp.src('*/*.js')
      .pipe(concat('jamesvu-website.js'))
      .pipe(minify({
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js', 'gulpfile.js']
      }))
      .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function () {
    return gulp.src(['./*.js', '!gulpfile.js', 'modules/**/*.js',])
      .pipe(concat('jamesvu-website.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(''));
});
// Default Task
gulp.task('default', ['scripts']);

//gulp.task('default', function () {
//    return console.info(gulp.src('*.html').pipe(minifyHTML()).pipe(gulp.dest('dest')));
//});

//gulp.task('potato', function () {
//    console.info('running potato');
//});

//gulp.task('run-both', ['default', 'potato'], function() {
//    console.info('inside run both');
//});

