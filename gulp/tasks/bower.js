var gulp = require('gulp')
var bower = require('gulp-bower')
var config = require('../gulp.config')

/**
 * Task will pull down the latest bower dependencies
 *
 * @param  {[type]} 'bower'   [description]
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir));
});
