const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile Sass files
function buildStyles() {
    return gulp.src('./public/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
}

// Watch Sass files for changes
function watchSass() {
    gulp.watch('./public/scss/**/*.scss', buildStyles);
}

exports.default = buildStyles;
exports.watch = watchSass;