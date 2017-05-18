var gulp = require('gulp')
var config = require('../gulp.config')

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});


/** For iamges **/
gulp.task('images', function() {
    return gulp.src([
      //config.bowerDir + '/bootstrap-formhelpers/dist/img/*.*',
      './assets/images/*.*'
    ])
        .pipe(gulp.dest('./public/images'));
});
