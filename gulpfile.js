var gulp = require('gulp'),
    cdnizer = require("gulp-cdnizer");

gulp.task('default', function () {
    gulp.src("./index.html")
        .pipe(cdnizer([
            {
                file: 'bower_components/reveal.js/js/reveal.js',
                package: 'reveal.js',
                cdn: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/${version}/js/reveal.min.js'
            }
            //'cdnjs:reveal.js:js/reveal.js',
        ]))
        .pipe(gulp.dest("./dist/"));
});