var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });

});

gulp.task('deleteDistFolder', ['icons'],  function () {
  return del('./docs');
});


gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!.app/index.html',
    '!./app/assets/images/**',
    '!.app/assets/styles/**',
    '!.app/assets/scripts/**',
    '!.app/temp',
    '!.app/temp/**'
  ]
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages',['deleteDistFolder'], function() {
  return gulp.src(['./app/assets/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*']) //select files
    .pipe(imagemin({                      //comprewss images using npm install imagemin --save-dev
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images")); //copy to dist folder
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
  gulp.start('usemin');
});

//gulp.task('usemin', [ 'styles', 'scripts'],  function() {
gulp.task('usemin', [ 'styles'],  function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}], //revision and compress
      // js: [function() {return rev()}, function() {return uglify()}]
      js: [function() {return rev()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build',['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger'])
