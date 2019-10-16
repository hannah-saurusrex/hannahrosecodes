const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

function watchFiles() {
    browserSync.init({
        server:{
            baseDir: "app"
        }
    });
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/assets/styles/**/*.css').on('change', browserSync.reload);
        gulp.start('cssInject');
    });

    gulp.watch('./app/assets/scripts/**/*.js').on('change', browserSync.reload);
        gulp.start('scriptsRefresh');
    });

}

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
}

exports.watchFiles = watchFiles;
