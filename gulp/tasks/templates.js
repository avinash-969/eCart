var gulp = require('gulp')
var plumber = require('gulp-plumber')
var config = require('../gulp.config')
var templateCache = require('gulp-angular-templatecache')

// Caching angular templates
gulp.task('templates', function() {
  // Grab all the html files
  gulp.src(config.sourceScriptsDir + '/**/**/*.html')
  // convert them into cached tempaltes
  .pipe(templateCache("templatescache.js",
        { standalone: true, module: 'templatescache', root: './app/' }))
  // saves it in the app/js directory
  .pipe(gulp.dest(config.sourceScriptsDir + '/'));
});
