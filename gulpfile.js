
// Dependencies
var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var changed   = require('gulp-changed');
var watch     = require('gulp-watch');

///////////////
// - SCSS/CSS
///////////////

const SCSS_SRC  = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';

gulp.task('sass', function () {
    return gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(SCSS_DEST))
});

gulp.task('default', function () {
    gulp.watch(SCSS_SRC, ['sass']);
});
