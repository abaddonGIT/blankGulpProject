/**
 * Created by abaddon on 18.12.2014.
 */

(function (require) {
    "use strict";
    const gulp = require('gulp');
    const requireDir = require('require-dir');
    const browserSync = require('browser-sync');
    const reload = browserSync.reload;
    requireDir('./gulp/tasks', {recurse: true});

    gulp.task('browser-sync', function () {
        browserSync({
            server: {
                baseDir: "./src/",
                index: "index.html"
            },
            browser: ["chrome"]
        });
    });

    gulp.task('watch', ['browser-sync'], function () {
        gulp.watch('src/css/*.less', ['less', browserSync.reload]);
        gulp.watch('src/*.pug', ['pug', browserSync.reload]);
        gulp.watch(['src/js/**/**/*.js', '!src/js/app.compile.js'], ['browserify', browserSync.reload]);
        gulp.watch("src/*.html").on("change", browserSync.reload);
    });

    gulp.task('production', ['less', 'pug', 'svg', 'sprites', 'imagemin', 'mincss', 'uglifyJs', 'html']);
}(require));