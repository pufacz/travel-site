var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');				 

gulp.task('default', function() {
	console.log("Huraa ...");
	
});

gulp.task('html', function() {
	console.log("HTML ...");
	
});

gulp.task('styles', function() {
	console.log("CSS ...");
	
});


gulp.task('watch', function() {
	
watch ('./app/index.html', function() {
    gulp.start('html');
});
              
watch('./app/assets/styles/**/*.css', function() {
	gulp.start('styles');
});
	
});

