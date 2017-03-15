var gulp = require('gulp')
var html2js = require('../index')
    
gulp.task('html2js', function(){
    return gulp.src('temp/**/*.html')
        .pipe(html2js())
})

gulp.task('watch', ['html2js'], function(){
    gulp.watch('temp/**/*.html', ['html2js'])
})
