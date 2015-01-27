/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('../config').prefix;

gulp.task('prefix', function () {
    return gulp.src(config.src)
        .pipe(autoprefixer({
            browsers: config.versions
        }))
        .pipe(gulp.dest(config.dest));
});