var gulp = require('gulp')
var connect = require('gulp-connect')
var config = require('../gulp.config')
var browserify = require('browserify')
var streamify = require('gulp-streamify')
var source = require('vinyl-source-stream')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

/**
 * Building the application file
 * =============================================================================
 * This is applicable only for the custom created components
 *
 * @param  {[type]} 'browserify' [description]
 * @param  {[type]} function(    [description]
 * @return {[type]}              [description]
 */
gulp.task('browserify', function() {
  // Grabs the app.js file
  return browserify(config.app)
  // bundles it and creates a file called main.js
  .bundle()
  // create the source file
  .pipe(source(config.appFileName))
  .pipe(jshint())
  .pipe(jshint.reporter('fail'))
  // minify the main.js file
  //.pipe(streamify(uglify()))
  // saves it in the public/js/ directory
  .pipe(gulp.dest(config.targetScriptsDir));
});

/**
 * Task to group and minify the js files from vendor libraries
 * =============================================================================
 * This is applicable only to those vendor libraries
 *
 * @param  {[type]} 'js-vendor' [description]
 * @param  {[type]} function(   [description]
 * @return {[type]}             [description]
 */
gulp.task('js-vendor', function() {
  // Grabs the all js files listed
  gulp.src([
    config.bowerDir + '/jquery/dist/jquery.js',
    config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.js',
    config.bowerDir + '/underscore/underscore.js',
    config.bowerDir + '/moment/moment.js',
    /** timezones **/
    config.bowerDir + '/moment-timezone/builds/moment-timezone-with-data.js',
    //Custom styles
    './assets/js/app.js',
    // Add all vendor js libraries here
  ])
  // bundles it and creates a file called vendor.min.js
  .pipe(concat('vendor.min.js'))
  // minify the vendor.min.js file
  //.pipe(uglify())
  // saves it in the public/js/ directory
  .pipe(gulp.dest(config.targetScriptsDir))
});
