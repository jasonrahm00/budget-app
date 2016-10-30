var cssnano = require('gulp-cssnano'), 
    del = require('del'),
    gulp = require('gulp'),
    gulpIf = require('gulp-if'),
    ngAnnotate = require('gulp-ng-annotate'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify');

gulp.task('useref', function() {
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('templateChange', function() {
  return gulp.src('budget/templates/*.html')
    .pipe(gulp.dest('dist/budget/templates'));
});

gulp.task('viewChange', function() {
  return gulp.src('budget/views/*.html')
    .pipe(gulp.dest('dist/budget/views'));
});

gulp.task('dataFileChange', function() {
  return gulp.src('budget/data/*.json')
    .pipe(gulp.dest('dist/budget/data'));
});

gulp.task('uglifyApp', function() {
  gulp.src('dist/budget/js/app.min.js')
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/budget/js'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('watch', function() {
  gulp.watch('budget/css/*.css', ['useref'])
  gulp.watch('budget/data/*.json', ['dataFileChange'])
  gulp.watch('budget/js/**/*.js', ['useref'])
  gulp.watch('budget/js/app.js', ['useref'])
  gulp.watch('budget/templates/*.html', ['templateChange'])
  gulp.watch('budget/views/*.html', ['viewChange'])
});

gulp.task('createAppFile', function() {
  gulp.src('dist/index.html')
    .pipe(rename('budget-app.html'))
    .pipe(gulp.dest('dist'))
});

gulp.task('build-app', function(callback) {
  runSequence('clean:dist',
    ['useref','templateChange','viewChange','dataFileChange'],
    'uglifyApp',
    'createAppFile',
    callback
  )
});