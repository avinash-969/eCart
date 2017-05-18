var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var plumber = require('gulp-plumber')
var notify = require("gulp-notify")
var csso = require('gulp-csso')
var config = require('../gulp.config')
var concat = require('gulp-concat');

/**
 * Task to compile the scss files to css
 * =============================================================================
 * This is applicable only to sass files that are created manually as well as
 * the vendor libraries that support sass file formats.
 *
 * @param  {[type]} 'scss'   [description]
 * @param  {[type]} function (             [description]
 * @return {[type]}          [description]
 */
gulp.task('scss', function () {
  // Grabs the style.scss file
  return sass(config.sourceStylesDir + '/layout.scss', {
    style: 'compressed',
    // Grabs the dependencies for the file
    loadPath: [
      config.sourceStylesDir,
      config.bowerDir + '/bootstrap-sass/assets/stylesheets',
      config.bowerDir + '/font-awesome/scss',
      config.bowerDir + '/awesome-bootstrap-checkbox',

      // Add extra vendor libraries pulled by bower here
    ]
  })
  // saves it in the public/css/ directory
  .pipe(gulp.dest('./public/css'));
});


/**
 * Task to group and minify the css files from vendor libraries
 * =============================================================================
 * This is applicable only to those vendor libraries that dont have support
 * for scss.
 *
 * @param  {[type]} 'css'    [description]
 * @param  {[type]} function (             [description]
 * @return {[type]}          [description]
 */
gulp.task('css', function () {
  // Grabs all the css files listed
  return gulp.src([
    config.bowerDir + '/animate.css/animate.css',
    config.nodeDir + '/angular-toastr/dist/angular-toastr.css'

    // Add all vendor css libraries here
  ])
  .pipe(plumber())
  // Concat them into a single file
  .pipe(concat('vendor.min.css'))
  // minify them
  .pipe(csso())
  // saves it in the public/css/ directory
  .pipe(gulp.dest('./public/css'));
});
