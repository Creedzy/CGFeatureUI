/**
 * Created by nas on 12/12/2016.
 */
gulp.task('js', function () {
    gulp.src(['app/**/*.module.js', 'src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('.'))
})