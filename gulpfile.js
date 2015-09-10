var gulp = require('gulp');

var minifyHTML = require('gulp-minify-html');

gulp.task('minify-html', function () {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src('./static/html/*.html')
      .pipe(minifyHTML(opts))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function () {
    
    return console.info(gulp.src('*.html').pipe(minifyHTML()).pipe(gulp.dest('dest')));
});

//gulp.task('potato', function () {
//    console.info('running potato');
//});

//gulp.task('run-both', ['default', 'potato'], function() {
//    console.info('inside run both');
//});

