var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var sourcemaps = require('gulp-sourcemaps');


var jsFiles = 'compiled/*.js',
    jsDest = 'prod',
    bundleName = 'redux-accordion.min.js'
    filesToMove = []

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(concat(bundleName))
        .pipe(gulp.dest(jsDest));
});

gulp.task('bundle', function() {
  return gulp.src(jsFiles)
      .pipe(concat(bundleName))
      .pipe(uglify())
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write(jsDest + '\\maps'))
      .pipe(gulp.dest(jsDest))
});

gulp.task('minify', function() {
  return gulp.src(jsFiles)
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
})
