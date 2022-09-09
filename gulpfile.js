// Initialize modules
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//const gulp = require('gulp');
// const sass = require('gulp-sass'); 
var sass = require('gulp-sass')(require('sass'));//sass-css
// const sass 
//'use strict';   
 //  const sass = require('gulp-sass')(require('sass'));

// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function(){
    return gulp.src('app/style.scss')
        .pipe(sass()) // compile SCSS to CSS
        .pipe(cssnano()) // minify CSS
        .pipe(gulp.dest('dist/css')); // put final CSS in dist folder
});

//gulp.task('js', function(){
  //  const pass = require('gulp-sass')(require('sass'));
//});

// JS task: concatenates and uglifies JS files to script.js
gulp.task('js', function(){
    return gulp.src(['app/js/plugins/*.js', 'app/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch task: watch SCSS and JS files for changes
gulp.task('watch', function(){
    gulp.watch('app/*.scss', gulp.series('sass'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));    
});

// Watch task: watch CSS and JS files for changes
gulp.task('css', function(){
    gulp.watch('app/*.css', gulp.series('css'));
    gulp.watch('app/js/**/*.js', gulp.series('js')); 
});

// Default task
gulp.task('default', gulp.series('sass', 'js', 'watch','css'));
